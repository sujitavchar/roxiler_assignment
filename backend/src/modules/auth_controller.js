import {db} from "../db.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

const registerUser = async (req, res) => {
  const { name, email, address, password } = req.body;

  const hash = await bcrypt.hash(password, 10);

  await db.query(
    `INSERT INTO users (name,email,address,password_hash,role)
     VALUES ($1,$2,$3,$4,'USER')`,
    [name, email, address, hash]
  ); 

  res.status(201).json({ message: "User registered" });
};


const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const result = await db.query(
    "SELECT id,password_hash,role FROM users WHERE email=$1",
    [email]
  );

  if (result.rows.length === 0)
    return res.status(401).json({ message: "Invalid credentials" });

  const user = result.rows[0];
  const valid = await bcrypt.compare(password, user.password_hash);

  if (!valid)
    return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign(
    { userId: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );
  console.log(token);

  res.json({ token, role: user.role });
};

const changePassword = async (req, res) => {
    const { newPassword } = req.body;
    const hash = await bcrypt.hash(newPassword, 10);

    await db.query(
      "UPDATE users SET password_hash=$1 WHERE id=$2",
      [hash, req.user.userId]
    );

    res.json({ message: "Password updated" });
  };

export {registerUser, loginUser, changePassword};


import {db} from "../db.js";


const dashboard = async (req, res) => {
    const users = await db.query("SELECT COUNT(*) FROM users");
    const stores = await db.query("SELECT COUNT(*) FROM stores");
    const ratings = await db.query("SELECT COUNT(*) FROM ratings");

    res.json({
      users: users.rows[0].count,
      stores: stores.rows[0].count,
      ratings: ratings.rows[0].count
    });
  }

const adduser =   async (req, res) => {
    const { name, email, address, password, role } = req.body;
    const hash = await bcrypt.hash(password, 10);

    await db.query(
      `INSERT INTO users (name,email,address,password_hash,role)
       VALUES ($1,$2,$3,$4,$5)`,
      [name, email, address, hash, role]
    );

    res.status(201).json({ message: "User added" });
  };

const getStores =   async (req, res) => {
    const result = await db.query(`
      SELECT s.id, s.name, s.address,
      ROUND(AVG(r.rating),2) AS rating
      FROM stores s
      LEFT JOIN ratings r ON s.id = r.store_id
      GROUP BY s.id
    `);

    res.json(result.rows);
  }

export {dashboard, adduser, getStores};
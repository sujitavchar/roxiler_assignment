import {db} from "../db.js";


const getOwnerDashboard = async (req, res) => {
    const store = await db.query(
      "SELECT id FROM stores WHERE owner_id=$1",
      [req.user.userId]
    );

    const ratings = await db.query(
      `SELECT u.name, r.rating
       FROM ratings r
       JOIN users u ON r.user_id = u.id
       WHERE r.store_id=$1`,
      [store.rows[0].id]
    );

    res.json(ratings.rows);
  }

export {getOwnerDashboard};
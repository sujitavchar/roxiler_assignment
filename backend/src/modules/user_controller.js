import {db} from "../db.js";

const updateRating =   async (req, res) => {
    const { rating } = req.body;
    const { storeId } = req.params;

    await db.query(
      `INSERT INTO ratings (user_id, store_id, rating)
       VALUES ($1,$2,$3)
       ON CONFLICT (user_id, store_id)
       DO UPDATE SET rating = EXCLUDED.rating`,
      [req.user.userId, storeId, rating]
    );

    res.json({ message: "Rating submitted" });
  }

export {updateRating};
import { useEffect, useState } from "react";
import { api } from "../../api";

export default function OwnerDashboard() {
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    api("/owner/dashboard").then(setRatings);
  }, []);

  return (
    <div>
      <h2>Store Owner Dashboard</h2>
      {ratings.map((r, i) => (
        <div key={i}>
          {r.name} rated {r.rating}
        </div>
      ))}
    </div>
  );
}

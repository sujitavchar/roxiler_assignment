import { useEffect, useState } from "react";
import { api } from "../../api";

export default function AdminDashboard() {
  const [stats, setStats] = useState({});

  useEffect(() => {
    api("/admin/dashboard").then(setStats);
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <p>Total Users: {stats.users}</p>
      <p>Total Stores: {stats.stores}</p>
      <p>Total Ratings: {stats.ratings}</p>
    </div>
  );
}

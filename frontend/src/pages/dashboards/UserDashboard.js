import { useEffect, useState } from "react";
import { api } from "../../api";

export default function UserDashboard() {
  const [stores, setStores] = useState([]);
  const [search, setSearch] = useState("");

  async function load() {
    const data = await api(`/stores?name=${search}`);
    setStores(data);
  }

  async function rate(id, rating) {
    await api(`/ratings/${id}`, "POST", { rating });
    load();
  }

  useEffect(() => { load(); }, []);

  return (
    <div>
      <h2>User Dashboard</h2>

      <input placeholder="Search store"
        onChange={e => setSearch(e.target.value)} />
      <button onClick={load}>Search</button>

      {stores.map(s => (
        <div key={s.id}>
          <b>{s.name}</b> ({s.address}) – Rating: {s.rating || "N/A"}
          <div>
            {[1,2,3,4,5].map(r =>
              <button key={r} onClick={() => rate(s.id, r)}>{r}</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

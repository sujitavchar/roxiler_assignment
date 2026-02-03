import { useState } from "react";
import { api } from "../api";

export default function Register({ onDone }) {
  const [form, setForm] = useState({});

  async function submit() {
    await api("/auth/register", "POST", form);
    alert("Registered successfully");
    onDone();
  }

  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Name"
        onChange={e => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Email"
        onChange={e => setForm({ ...form, email: e.target.value })} />
      <input placeholder="Address"
        onChange={e => setForm({ ...form, address: e.target.value })} />
      <input type="password" placeholder="Password"
        onChange={e => setForm({ ...form, password: e.target.value })} />
      <button onClick={submit}>Register</button>
    </div>
  );
}

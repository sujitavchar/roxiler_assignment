const BASE = "http://localhost:4000";

export async function api(path, method = "GET", body) {
  const res = await fetch(BASE + path, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`
    },
    body: body ? JSON.stringify(body) : null
  });
  return res.json();
}
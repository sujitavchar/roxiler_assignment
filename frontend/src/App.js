import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/dashboards/AdminDashboard";
import UserDashboard from "./pages/dashboards/UserDashboard";
import OwnerDashboard from "./pages/dashboards/OwnerDashboard";

function App() {
  const [role, setRole] = useState(localStorage.getItem("role"));
  const [page, setPage] = useState("login");

  function logout() {
    localStorage.clear();
    setRole(null);
  }

  if (!role) {
    return page === "register" ? (
      <>
        <Register onDone={() => setPage("login")} />
        <button onClick={() => setPage("login")}>Login</button>
      </>
    ) : (
      <>
        <Login onLogin={setRole} />
        <button onClick={() => setPage("register")}>Register</button>
      </>
    );
  }

  return (
    <>
      <button onClick={logout}>Logout</button>

      {role === "ADMIN" && <AdminDashboard />}
      {role === "USER" && <UserDashboard />}
      {role === "STORE_OWNER" && <OwnerDashboard />}
    </>
  );
}

export default App;

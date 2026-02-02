import dotenv from "dotenv";
import {db} from "./src/db.js";
import app from "./app.js";
import { loginUser, registerUser, changePassword } from "./src/modules/auth_controller.js";
import { authenticate } from "./src/middlewares/auth_middleware.js";
import { authorize } from "./src/middlewares/role_middleware.js";
import { dashboard, getStores, adduser } from "./src/modules/admin_controller.js";
import { updateRating } from "./src/modules/user_controller.js";
import { getOwnerDashboard } from "./src/modules/owner_controller.js";

dotenv.config({
    path: "./.env"
});

app.post("/auth/register",registerUser );

app.post("/auth/login", loginUser);

app.patch("/auth/changepassword",authenticate, changePassword);


app.get( "/admin/dashboard", authenticate,authorize("ADMIN"), dashboard);

app.post("/admin/adduser", authenticate, authorize("ADMIN"), adduser);

app.get("/stores", authenticate, authorize("USER", "ADMIN"), getStores);

app.post( "/ratings/:storeId", authenticate, authorize("USER"), updateRating);

app.get("/owner/dashboard",authenticate,authorize("STORE_OWNER"), getOwnerDashboard);




app.listen(process.env.PORT, ()=>{
    console.log(`Server listening at port ${process.env.PORT}`);
})
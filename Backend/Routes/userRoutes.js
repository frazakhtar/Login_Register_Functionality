import express from 'express';

import { create, deleteUser } from '../Controller/userController.js';
import { getAllUsers } from '../Controller/userController.js';
import { update } from '../Controller/userController.js';

const route = express.Router()

route.post("/user", create)
route.get("/users", getAllUsers)
route.put("/update/:id",update)
route.delete("/delete/:id", deleteUser)

export default route;
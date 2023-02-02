import express from "express";
import handleErrorMiddleware from "./middlewares/handleError.middleware";
import userRoutes from "./routers/user.routes";

const app = express();

app.use(express.json());

app.use("/users", userRoutes);

app.use(handleErrorMiddleware);

export default app
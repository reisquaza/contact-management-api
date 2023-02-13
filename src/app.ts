import express from "express";
import "reflect-metadata";
import "express-async-errors";
import handleAppErrorMiddleware from "./middlewares/handleAppError.middleware";
import userRouter from "./routes/user.routes";
import loginRouter from "./routes/login.routes";
import contactRouter from "./routes/contacts.routes";

const app = express();

app.use(express.json());

app.use("/users", userRouter);

app.use("/login", loginRouter);

app.use("/contacts", contactRouter);

app.use(handleAppErrorMiddleware);

export default app;

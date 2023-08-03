import express, { Request, Response, NextFunction, Express } from "express";
import routerUser from "./route/routeUser";
const app: Express = express();

app.use("/api/v1/users", routerUser);

const port: Number = 3000;
app.listen(port, () => {
  console.log(`server listion on port :${port}`);
});

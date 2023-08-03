import express, { NextFunction, Request, Response } from "express";
import { User } from "../../types";

const router = express.Router();

router.delete(
  "/:id",
  (req: Request<{ id: String }, {}, {}>, res: Response, next: NextFunction) => {
    const id = req.params.id;
    res.json({ id });
  }
);

router.get(
  "/",
  (
    req: Request<Partial<User>, {}, User>,
    res: Response,
    next: NextFunction
  ) => {
    const getUser = req.body;
    res.json({ getUser });
  }
);

export default router;

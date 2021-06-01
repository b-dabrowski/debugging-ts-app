import { bookController } from "./book-controller";
import * as express from "express";

const BOOKS_ROUTE_PATH = "/books"
const bookRoutes = express.Router();

bookRoutes.post("/", bookController.create);
bookRoutes.get("/", bookController.list);
bookRoutes.put("/:id", bookController.update);
bookRoutes.get("/:id", bookController.details);
bookRoutes.delete("/:id", bookController.deleteOne);

export { bookRoutes, BOOKS_ROUTE_PATH };

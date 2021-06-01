import { bookService } from "./book-service";
import { Request, Response } from "express";

const bookController = {
  async create(req: Request, res: Response) {
    const { title, authors, isbn, description } = req.body;

    const newBook = await bookService.create({
      title,
      authors,
      isbn,
      description,
    });

    res.json(newBook);
  },

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { title, authors, isbn, description } = req.body;

    const updatedBook = await bookService.update({
      id,
      title,
      authors,
      isbn,
      description,
    });

    res.json(updatedBook);
  },

  async deleteOne(req: Request, res: Response) {
    const { id } = req.params;

    await bookService.delete(id);

    res.status(204).end();
  },

  async list(req: Request, res: Response) {
    const books = await bookService.findAll();

    res.json(books);
  },

  async details(req: Request, res: Response) {
    const { id } = req.params;

    const book = await bookService.findOne(id);

    res.json(book);
  },
};

export { bookController };

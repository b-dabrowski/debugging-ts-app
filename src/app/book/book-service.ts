import { getConnection } from "typeorm";
import { Book } from "../../db/entity/book";

const bookService = {
  async create(book: CreateBookRequest) {    
    const bookToSave = new Book();
    bookToSave.authors = book.authors;
    bookToSave.description = book.description;
    bookToSave.isbn = book.isbn;
    bookToSave.title = book.title;

    return getConnection().getRepository(Book).save(bookToSave);    
  },

  async update(book: UpdateBookRequest) {
    const { id, ...propsToUpdate } = book;
    return getConnection().getRepository(Book).update(id, propsToUpdate);
  },

  async findOne(id: string) {
    return getConnection().getRepository(Book).findOne({ where: { id } });
  },

  async findAll() {
    return getConnection().getRepository(Book).findOne();    
  },

  async delete(id: string) {
    return getConnection().getRepository(Book).delete(id)
  },
};

export { bookService };

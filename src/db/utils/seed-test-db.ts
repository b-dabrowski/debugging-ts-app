import { getConnection } from "typeorm";
import { Book } from "../entity/book";

const testBooks = [
  {
    authors: "authors1",
    description: "description1",
    isbn: "isbn1",
    title: "title1",
  },
  {
    authors: "authors2",
    description: "description2",
    isbn: "isbn2",
    title: "title2",
  },
  {
    authors: "authors3",
    description: "description3",
    isbn: "isbn3",
    title: "title3",
  },
];

const seedTestDb = async () => getConnection().getRepository(Book).save(testBooks);

export { seedTestDb };

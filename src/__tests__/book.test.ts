import request from "supertest";
import { createApp } from "../app";
import { closeConnection, setupConnection } from "../db/utils/db-connection";
import { seedTestDb } from "../db/utils/seed-test-db";

let app;

beforeAll(async () => {  
  await setupConnection();
  await seedTestDb();
  app = await createApp();
});

afterAll(async () => {
  await closeConnection();
});

describe("Books", () => {
  test("It should returns an array of books", async () => {
    const { body } = await request(app).get("/books");

    expect(body).toMatchObject([
      {
        title: "title1",
        authors: "authors1",
        isbn: "isbn1",
        description: "description1",
      },
      {
        title: "title2",
        authors: "authors2",
        isbn: "isbn2",
        description: "description2",
      },
      {
        title: "title3",
        authors: "authors3",
        isbn: "isbn3",
        description: "description3",
      },
    ]);
  });
});

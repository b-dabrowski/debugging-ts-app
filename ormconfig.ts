import { ConnectionOptions } from 'typeorm';

const DATABASE_TYPE = 'postgres';

const connectionOptions: ConnectionOptions[] = [
  {
    name: 'default',
    type: DATABASE_TYPE,
    database: "books",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "password",
    entities: ["build/db/entity/*.js"],
    synchronize: true,    
    logging: true
  },
  {
    name: 'test',
    type: DATABASE_TYPE,
    database: "test-books",
    host: "localhost",
    port: 5433,
    username: "postgres",
    password: "password",
    entities: ["src/db/entity/*.ts"],
    synchronize: true,
    dropSchema: true,
    logging: false
  }
];

export = connectionOptions;
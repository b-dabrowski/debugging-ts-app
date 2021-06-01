import { createConnection, getConnectionOptions, getConnection } from "typeorm";

const setupConnection = async function () {
  const connectionOptions = await getConnectionOptions(
    process.env.NODE_ENV || "default"
  );
  await createConnection({ ...connectionOptions, name: "default" });
};

const closeConnection = async function () {
  const connection = await getConnection();
  await connection.close();
};

export { setupConnection, closeConnection };

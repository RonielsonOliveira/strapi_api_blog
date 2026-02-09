import pkg from "pg";
const { Client } = pkg;

const client = new Client({
  host: "127.0.0.1",
  port: 5432,
  user: "postgres",
  password: "senha",
  database: "blog-strapi",
});

client
  .connect()
  .then(() => console.log("Conectou no Postgres ✅"))
  .catch((err) => console.error("Erro de conexão ❌", err))
  .finally(() => client.end());

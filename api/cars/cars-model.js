const db = require("../../data/db-config");

const getAll = () => {
  return db("cars");
};

const getById = async (id) => {
  return await db("cars").where("id", id).first();
};

const create = async (changes) => {
  const [id] = await db("cars").insert(changes);
  return getById(id);
};

module.exports = {
  create,
  getAll,
  getById,
};

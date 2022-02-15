exports.up = function (knex) {
  return knex.schema.createTable("cars", (tbl) => {
    tbl.increments().primary();

    tbl.string("vin", 17).notNullable().unique();
    tbl.string("make", 128).notNullable();
    tbl.string("model").notNullable();
    tbl.integer("mileage").notNullable();
    tbl.string("title");
    tbl.string("transmission");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableifExist("car");
};

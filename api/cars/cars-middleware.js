const Cars = require("./cars-model");
const db = require("../../data/db-config");

const checkCarId = async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const exists = await Cars.getById(req.params.id);

    if (!exists) {
      next({
        status: 404,
        message: `car with id ${req.params.id} is not found`,
      });
    } else {
      req.car = exists;
      next();
    }
  } catch (err) {
    next({ message: err.message });
  }
};

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
  if (!req.body.vin)
    return next({
      status: 400,
      message: "vin is missing",
    });
  if (!req.body.make)
    return next({
      status: 400,
      message: "make is missing",
    });
  if (!req.body.model)
    return next({
      status: 400,
      message: "model is missing",
    });
  if (!req.body.mileage)
    return next({
      status: 400,
      message: "mileage is missing",
    });
  next();
};

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
  const { vin } = req.body;
  if (vin.length != 17) {
    next({ status: 400, message: `vin ${vin} is invalid` });
  } else {
    next();
  }
};

const checkVinNumberUnique = async (req, res, next) => {
  // DO YOUR MAGIC
  const [vin] = await db("cars").where("vin", req.body.vin);
  if (vin === undefined) {
    next();
  } else {
    next({ status: 400, message: `vin ${req.body.vin} already exists` });
  }
};

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
};

const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const getAllDocs = async (req, res, next) => {
  const result = await mongodb
    .getDb()
    .db("CSE341")
    .collection("contacts")
    .find();
  result.toArray().then((lists) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(lists);
  });
};

const getOneDoc = async (req, res, next) => {
  const queryid = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db("CSE341")
    .collection("contacts")
    .find({ _id: queryid });
  result.toArray().then((lists) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(lists[0]);
  });
};

const makeNewContact = async (req, res, next) => {
  const newContact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
  };

  const result = await mongodb
    .getDb()
    .db("CSE341")
    .collection("contacts")
    .insertOne(newContact);

  if (result.acknowledged) {
    res.status(201).json(result);
  } else {
    res
      .status(500)
      .json(result.error || "Some error occured while creating the contact.");
  }
};

const updateContact = async (req, res, next) => {
  const queryid = new ObjectId(req.params.id);
  const newValue = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
  };
  const result = await mongodb
    .getDb()
    .db("CSE341")
    .collection("contacts")
    .replaceOne({ _id: queryid }, newValue);

  if (result.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(result.error || "Some error occured while updating the contact.");
  }
};

const deleteContact = async (req, res, next) => {
  const queryid = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db("CSE341")
    .collection("contacts")
    .deleteOne({ _id: queryid }, true);
  if (result.deletedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(result.error || "Some error occured while deleting the contact.");
  }
};

module.exports = {
  getAllDocs,
  getOneDoc,
  makeNewContact,
  updateContact,
  deleteContact,
};

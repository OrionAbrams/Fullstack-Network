const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.User
      .findAll({
        include: [
            db.Class
        ],
        order: [
          ["id", "ASC"]
        ]
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findOne: function(req, res) {
    db.User
      .findOne({ where: { id: req.params.id } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log(req.body);
    db.User
      .update(
        {
          needMentor: req.body.needMentor
        },
        {
          where: {
            id: req.body.id
          }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateAdmin: function(req, res) {
    console.log(req.body);
    db.User
      .update(
        {
          isAdmin: req.body.isAdmin
        },
        {
          where: {
            id: req.body.id
          }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateStudent: function(req, res) {
    console.log(req.body);
    db.User
      .update(
        {
          isAdmin: req.body.isAdmin
        },
        {
          where: {
            id: req.body.id
          }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  delete: function(req, res) {
    db.User
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

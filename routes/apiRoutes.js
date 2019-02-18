// *** Include Modules: npm (express), /controllers
const router = require("express").Router();
const lessonsController = require("../controllers/lessonsController");
const classesController = require("../controllers/classesController");
const usersController = require("../controllers/usersController");

router.route("/lessons")
  .get(lessonsController.findAll)
  .post(lessonsController.create);

router.route("/lesson/react/:id")
  .get(lessonsController.findOneLesson);

router.route("/lesson/jquery/:id")
.get(lessonsController.findOneLesson);

router.route("/lessons/:id")
  .get(lessonsController.findOneId)
  .put(lessonsController.update)
  .delete(lessonsController.delete);

router.route("/thisUserLessons/:id")
  .get(lessonsController.loadUser) 

router.route("/classes")
  .get(classesController.findAll)
  .post(classesController.create);

router.route("/classes/:id")
  .get(classesController.findOne)
  .put(classesController.update)
  .delete(classesController.delete);

router.route("/users")
  .get(usersController.findAll)
  .post(usersController.create);

router.route("/users/:id")
  .get(usersController.findOne)
  .put(usersController.update)
  .delete(usersController.delete);

  router.route("/users/updateadmin/:id")
  .put(usersController.updateAdmin)

  router.route("/users/updatestudent/:id")
  .put(usersController.updateStudent)

module.exports = router;

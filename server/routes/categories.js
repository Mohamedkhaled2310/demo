const express = require("express");

const router = express.Router();
const categoriesController = require("../controllers/category.js");
const base = "/categories";

//destination
router.get(base, categoriesController.indexController);

router.route(`${base}/create`)
.get(categoriesController.createController)
.post(
  categoriesController.uploadPhoto,
  categoriesController.postController
);

router.get(`${base}/:id/view`, categoriesController.viewSingleCategory);

router.route(`${base}/:id/update`)
.get(categoriesController.renderUpdatePage)
.post(
  categoriesController.uploadPhoto,
  categoriesController.updateCategory
);

router.get(`${base}/:id/delete`, categoriesController.deletePage);


module.exports = router;

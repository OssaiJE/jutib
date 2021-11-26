import express from "express";
import multer from "multer";
const router = express.Router();
import {
  getProducts,
  products2csv,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
} from "../controllers/product.controllers.js";
import { protect, admin } from "../middleware/auth.middleware.js";

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb("Images only!");
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

router.route("/").get(getProducts);

router.route("/csv").get(products2csv);

router
  .route("/add")
  .post(protect, admin, upload.single("image"), createProduct);

router.route("/:id/reviews").post(protect, createProductReview);

router.get("/top", getTopProducts);

router
  .route("/:id")
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);

export default router;

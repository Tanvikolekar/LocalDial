const express = require('express');
const {
  getAllBusinesses,
  getBusinessById,
  createBusiness,
  updateBusiness,
  deleteBusiness,
   getBusinessesByCategory
} = require('../controllers/businessController');

const router = express.Router();

// Routes for Business
router.get('/', getAllBusinesses);
router.get("/category/:category", getBusinessesByCategory); // Get businesses by category
router.get('/:id', getBusinessById);
router.post('/', createBusiness);
router.put('/:id', updateBusiness);
router.delete('/:id', deleteBusiness);
router.get("/category/:category", getBusinessesByCategory); // Get businesses by category

module.exports = router;

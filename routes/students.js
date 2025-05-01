const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
const auth = require('../middleware/auth');
const adminAuth = require('../middleware/adminAuth');

// Admin routes (protected)
router.get('/', adminAuth, studentController.getAllStudents);
router.get('/:id', adminAuth, studentController.getStudentById);
router.put('/:id/verify', adminAuth, studentController.verifyStudent);
router.delete('/:id', adminAuth, studentController.deleteStudent);

// Public routes
router.post('/register', studentController.registerStudent);
router.post('/login', studentController.loginStudent);

// Student routes (protected)
router.get('/profile/me', auth, studentController.getProfile);
router.put('/profile/update', auth, studentController.updateProfile);

module.exports = router; 
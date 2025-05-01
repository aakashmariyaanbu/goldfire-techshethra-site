const Student = require('../models/Student');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Get all students (admin only)
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find().select('-password');
    res.json(students);
  } catch (error) {
    console.error('Error fetching students:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get student by ID (admin only)
exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id).select('-password');
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json(student);
  } catch (error) {
    console.error('Error fetching student:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Verify a student (admin only)
exports.verifyStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    
    student.verified = true;
    await student.save();
    
    res.json({ message: 'Student verified successfully' });
  } catch (error) {
    console.error('Error verifying student:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a student (admin only)
exports.deleteStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: 'Student deleted successfully' });
  } catch (error) {
    console.error('Error deleting student:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Student registration (public)
exports.registerStudent = async (req, res) => {
  try {
    const { name, email, phone, password, college, department, year } = req.body;
    
    // Check if student already exists
    let student = await Student.findOne({ email });
    if (student) {
      return res.status(400).json({ message: 'Student already exists with this email' });
    }
    
    // Create new student
    student = new Student({
      name,
      email,
      phone,
      password,
      college,
      department,
      year,
      verified: false,
      registeredEvents: []
    });
    
    // Hash password
    const salt = await bcrypt.genSalt(10);
    student.password = await bcrypt.hash(password, salt);
    
    await student.save();
    
    res.status(201).json({ message: 'Registration successful! Please wait for verification.' });
  } catch (error) {
    console.error('Error registering student:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Student login (public)
exports.loginStudent = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Check if student exists
    const student = await Student.findOne({ email });
    if (!student) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    
    // Check if password is correct
    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    
    // Check if verified
    if (!student.verified) {
      return res.status(403).json({ message: 'Your account is pending verification' });
    }
    
    // Create and send token
    const payload = {
      student: {
        id: student.id
      }
    };
    
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '24h' },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (error) {
    console.error('Error logging in student:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get current student profile (student only)
exports.getProfile = async (req, res) => {
  try {
    const student = await Student.findById(req.student.id).select('-password');
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json(student);
  } catch (error) {
    console.error('Error fetching profile:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update student profile (student only)
exports.updateProfile = async (req, res) => {
  try {
    const { name, phone, college, department, year } = req.body;
    
    // Find and update student
    const student = await Student.findById(req.student.id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    
    if (name) student.name = name;
    if (phone) student.phone = phone;
    if (college) student.college = college;
    if (department) student.department = department;
    if (year) student.year = year;
    
    await student.save();
    
    res.json({ message: 'Profile updated successfully' });
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ message: 'Server error' });
  }
}; 
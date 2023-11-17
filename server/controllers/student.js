const Student = require('../models/student');

exports.signup = async (req, res) => {
  try {
    console.log('Received signup request:', req.body);

    const { username, password, email } = req.body;

    // rest of the code
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

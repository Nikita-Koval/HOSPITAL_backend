const bcrypts = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../db_models/Users');


module.exports.login = async (req, res) => {
  const candidate = await User.findOne({email: req.body.email});

  if (candidate) {
    const passwordResult = bcrypts.compareSync(req.body.password, candidate.password);
    if (passwordResult) {
      const token = jwt.sign({
        email: candidate.email,
        userId: candidate._id
      }, 'dev-jwt', {expiresIn: 60 * 60})

      res.status(200).json({
        token: `Bearer ${token}`,
        email: candidate.email
      }) //if success
    } else {
      res.status(401).json({
        message: 'Пароли не совпадают. Попробуйте снова'
      })
    }
  } else {
    res.status(404).json({
      message: 'Пользователь с таким логином не найден'
    })
  }
}

module.exports.register = async (req, res) => {
  const candidate = await User.findOne({email: req.body.email})

  if(candidate) {
    res.status(409).json({
      message: 'Такой email уже занят, попробуйте другой.'
    })
  } else {
    const salt = bcrypts.genSaltSync(10);
    const password = req.body.password;
    const user = new User({
      email: req.body.email,
      password: bcrypts.hashSync(password, salt)
    })
    try {
      await user.save().then(result => {
          const token = jwt.sign({
              email: req.body.email,
              userId: result._id
          }, 'dev-jwt', { expiresIn: 60 * 60 })
          res.status(201).json({
              email: req.body.email,
              token: `Bearer ${token}`
          })
      })
  } catch (e) {
      errorHandler(res, error);
  }
  }
}
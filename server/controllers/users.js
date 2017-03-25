var user = require('../models/users')
var passwordHash = require('password-hash')
var jwt = require('jsonwebtoken')

var users = {}

users.getUsers = function (req,res,next) {
  user.find({}).then(function(err, data) {
    if (err) {
      res.json(err)
    } else {
      res.json(data)
    }
  })
}

users.createUser = function (req,res,next) {
  user.create({
    username: req.body.username,
    email: req.body.email,
    password: passwordHash.generate(req.body.password)
  }).then (function (data) {
    res.json(data)
  })
}

users.updateUser = function (req,res,next) {
  user.findOne({
    _id: req.params.id
  }).then(function(data) {
    data.update(req.body)
  }).then(function (err,data) {
    if (err) {
      res.json(err)
    } else {
      res.json(data)
    }
  })
}

users.deleteUser = function (req,res,next) {
  user.findOne({
    _id: req.params.id
  }).then(function(user) {
    data.remove(user)
  }).then(function (err,data) {
    if (err) {
      res.json(err)
    } else {
      res.json(data)
    }
  })
}

users.login = function (req,res,next) {
  user.findOne({
    email: req.body.email
  }).then(function (data) {
    if (!data) {
      res.json('user not found')
    } else {
      var verify = passwordHash.verify(req.body.password, data.password)

      if (verify) {
        var token = jwt.sign({
                        email: data.email
                      }, 'rahasia');
        res.json(token)
      } else {
        res.json('wrong email or password')
      }
    }
  })
}

users.verifyToken = function (req,res,next) {
  var token = req.params.token
  jwt.verify(token,'rahasia', function (err, decode) {
    if (err) {
      res.json(err)
    }

    if (!decode) {
      res.json({email: false})
    } else {
      res.json({email: true})
    }
  })
}

module.exports = users

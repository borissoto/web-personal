const bcrypt = require("bcrypt-nodejs");
// const jwt = require('')
const User = require("../models/users");

function signUp(req, res) {
  const user = new User();
  //   console.log("Endpoint de signUp ejecutado");
  //   console.log(req.body);
  const { name, lastname, email, password, repeatPassword } = req.body;
  user.name = name;
  user.lastname = lastname;
  user.email = email.toLowerCase();
  user.role = "admin";
  user.active = false;

  if (!password || !repeatPassword) {
    res.status(404).send({ message: "Las constraseñas son obligatorias" });
  } else {
    if (password !== repeatPassword) {
      res.status(404).send({ message: "Las constraseñas no son iguales" });
    } else {
      //res.status(200).send({ message: "Usuario creado" });
      bcrypt.hash(password, null, null, function (err, hash) {
        if (err) {
          res.status(500).send({ message: "Error al encriptar la contraseña" });
        } else {
          //   res.status(200).send({ message: hash });
          user.password = hash;
          user.save((err, userStored) => {
            if (err) {
              res.status(500).send({ message: "Error, el usuario ya existe" });
            } else {
              if (!userStored) {
                res.status(404).send({ message: "Error la crear usuario" });
              } else {
                res.status(200).send({ user: userStored });
              }
            }
          });
        }
      });
    }
    // console.log("Continuar...");
  }
}

module.exports = {
  signUp,
};


const { db } = require("../models/user");
const Usuaries = require("../models/user");

const createUsuary = async (req, res) => {
  try {
    const usu = new Usuaries(req.body)
  await usu.save()
  res.status(201).json({mensaje: "usuario creado exitosament"})
  }
  catch(e) {
    console.log(e)
  }
};
const deleteUsuary = async (req, res) => {
  await Usuaries.findByIdAndDelete(req.params.id)
  res.status(201).json({mensaje:"Usuario eliminado satifactoriamente"})
};
const UpdateUsuary = async (req, res) => {
  await Usuaries.findByIdAndUpdate(req.params.id, req.body)
  res.status(201).json({mensaje: "Usuario actualizado"})
};
const getUsuary = async (req, res) => {
  const usu = await Usuaries.find()
  res.status(201).json({usu})
  
};
const loginUsuary = async (req, res) => {
  try {
    const tal = await Usuaries.find({}).sort({"name": 1});
    res.status(200).send(tal)
    }
  
  catch (e) {
    console.log(e)
  }
};

module.exports = {
  createUsuary,
  deleteUsuary,
  UpdateUsuary,
  getUsuary,
  loginUsuary,
};

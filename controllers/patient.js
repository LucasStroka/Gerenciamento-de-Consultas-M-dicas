// Atributos do Paciente
// id
// nome
// dataNascimento

//   {
//    "nome" : "NomeExemplo",
//    "dataNascimento" : "03/06/2005"
//   }

let { paciente, idPaciente } = require("../data/data");
let { dateConverter } = require("./dateController");

const createPaciente = (req, res) => {
  const { nome, dataNascimento } = req.body;

  if (!nome || !dataNascimento)
    res.status(404).json({ "Missing Body": "Missing Body" });

  const newPacient = {
    id: idPaciente++,
    nome,
    dataNascimento: dateConverter(dataNascimento),
  };
  paciente.push(newPacient);
  res.status(201).json({ Created: newPacient });
};

const getPaciente = (req, res) => {
  res.status(200).json(paciente);
};

const updatePaciente = (req, res) => {
  const { id } = req.params;
  const { nome, dataNascimento } = req.body;

  if (!nome || !dataNascimento) return res.status(404).json("Not Found");

  let idIndex = paciente.findIndex((p) => p.id == id);
  if (idIndex === -1) return res.status(404).json("Id Not Found");

  const newPacient = {
    id: parseInt(id),
    nome,
    dataNascimento: dateConverter(dataNascimento),
  };

  paciente[idIndex] = newPacient;
  res.status(200).json(newPacient);
};

const deletePaciente = (req, res) => {
  const { id } = req.params;

  const idIndex = paciente.findIndex((p) => p.id == id);
  if (idIndex == -1) return res.status(404).json("ID Not Found");

  paciente.splice(idIndex, 1);
  res.status(202).json({ "Id Deleted": id });
};
module.exports = {
  createPaciente,
  getPaciente,
  updatePaciente,
  deletePaciente,
};

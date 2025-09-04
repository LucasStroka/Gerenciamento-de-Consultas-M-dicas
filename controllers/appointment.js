// Atributos da Consulta
// id
// data
// idMedico
// idPaciente
// descricao

let {
  idConsulta,
  idMedico,
  idPaciente,
  consulta,
  paciente,
  medico,
} = require("../data/data");
let { dateConverter } = require("./dateController");

// {
//     "idPacientes" : 1,
//     "idMedicos" : 1,
//     "descricao" : "Pediatrica",
//     "data" : "26/06/2025"
// }

const createConsulta = (req, res) => {
  const { idPacientes, idMedicos, descricao, data } = req.body;
  try {
    if (!idPacientes || !idMedicos || !descricao || !data)
      return res.status(404).json("Missing Body");

    let indexPaciente = paciente.findIndex((p) => p.id == idPaciente);
    let indexMedico = medico.findIndex((p) => p.id == idMedico);
    if (indexMedico === -1 || indexPaciente === -1)
      return res.status(404).json("ID Not Found");

    const newConsulta = {
      id: parseInt(idConsulta++),
      data: dateConverter(data),
      idMedico: idMedicos,
      idPacientes: idPacientes,
      descricao,
    };

    consulta.push(newConsulta);
    res.status(201).json({ "Consulta Criada": newConsulta });
  } catch (e) {
    console.log(e);
  }
};

const getConsulta = (req, res) => {
  res.status(200).json(consulta);
};

const updateConsulta = (req, res) => {
  const { id } = req.params;
  const { idPacientes, idMedicos, descricao, data } = req.body;
  if (!idPacientes || !idMedicos || !descricao || !data)
    return res.status(404).json("Missing Body");

  let idIndex = consulta.findIndex((p) => p.id == id);
  let indexPaciente = paciente.findIndex((p) => p.id == idPaciente);
  let indexMedico = medico.findIndex((p) => p.id == idMedico);
  if (indexMedico === -1 || indexPaciente === -1 || idIndex === -1)
    return res.status(404).json("ID Not Found");

  const newConsulta = {
    id: parseInt(id),
    data: dateConverter(data),
    idMedico: idMedicos,
    idPacientes: idPacientes,
    descricao,
  };

  consulta[idIndex] = newConsulta;
  res.status(200).json({ Updated: newConsulta });
};

const deleteConsulta = (req, res) => {
    const { id } = req.params
    let idIndex = consulta.findIndex(p => p.id == id)
    if (idIndex === -1) return res.status(404).json("ID Not Found")

    consulta.splice(idIndex, 1)
    res.status(200).json(`Deleted Consulta ${idIndex+1}`)
}
module.exports = {
  createConsulta,
  getConsulta,
  updateConsulta,
  deleteConsulta,
};

// Atributos do Médico
// id
// nome
// especialidade

// {
//     "nomeMedico": "MedicoExemplo",
//     "especialidade": "NeuroCirurgião"
// } 

let { medico, idMedico } = require("../data/data");

const createMedic = (req, res) => {
  const { nomeMedico, especialidade } = req.body;

  if (!nomeMedico || !especialidade) {
    return res.status(404).json({ error: "missing error" });
  }

  const newMedic = {
    id: idMedico++,
    nomeMedico,
    especialidade
  };

  medico.push(newMedic);
  res.status(201).json({ "New Medic": newMedic });
};

const updateMedic = (req, res) => {
  const { id } = req.params;
  const { nomeMedico, especialidade } = req.body;

  if (!nomeMedico || !especialidade)
    return res.status(404).json({ error: "missing body" });

  let idIndex = medico.findIndex(p => p.id == id);
  if (idIndex == -1) return res.status(404).json({ "ID Not Found": "ID Not Found" });
    
  const updateMedic = {
    id: parseInt(id),
    nomeMedico,
    especialidade,
  };

  medico[idIndex] = updateMedic;
  res.status(200).json({ "Updated Medic": updateMedic });
};

const getMedic = (req, res) => {
  res.json(medico);
};

const deleteMedic = (req, res) => {
  const { id } = req.params;

  let idIndex = medico.findIndex(p => p.id == id);
  if (idIndex === -1) return res.status(404).json({ "ID Not Found": "ID Not Found" });
  
  medico.splice(idIndex, 1)
  res.status(200).json({"Deleted ID": id})
};

module.exports = {
  createMedic,
  updateMedic,
  getMedic,
  deleteMedic
};

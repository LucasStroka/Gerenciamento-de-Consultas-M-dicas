const express = require('express')
const router = express.Router();
const patient = require('../controllers/patient')
const appointment = require('../controllers/appointment')
const doctor = require('../controllers/doctor')

// ### Endpoints Principais
// • POST /medico - Adicionar médico
// • POST /paciente - Adicionar paciente
// • POST /consulta - Adicionar consulta

router.post('/doctor/', doctor.createMedic)
router.post('/paciente/', patient.createPaciente)
router.post('/consulta/', appointment.createConsulta)


// • GET /medicos - Listar médicos
// • GET /pacientes - Listar pacientes
// • GET /consultas - Listar consultas

router.get('/doctor/', doctor.getMedic)
router.get('/paciente/', patient.getPaciente)
router.get('/consulta/', appointment.getConsulta)



// • PUT /medico/:id - Atualizar médico
// • PUT /paciente/:id - Atualizar paciente
// • PUT /consulta/:id - Atualizar consulta

router.put('/doctor/:id', doctor.updateMedic)
router.put('/paciente/:id', patient.updatePaciente)
router.put('/consulta/:id', appointment.updateConsulta)




// • DELETE /medico/:id - Remover médico
// • DELETE /paciente/:id - Remover paciente
// • DELETE /consulta/:id - Remover consulta

router.delete('/doctor/:id', doctor.deleteMedic)
router.delete('/paciente/:id', patient.deletePaciente)
router.delete('/consulta/:id', appointment.deleteConsulta)


// • GET /medicos?nome=João - Buscar médico por nome
// • GET /medicos?especialidade=Cardiologia - Buscar médico por especialidade

// • GET /pacientes?nome=Maria - Buscar paciente por nome
// • GET /pacientes?dataNascimento=1990-01-01 - Buscar paciente por data de nascimento

// • GET /consultas?data=2024-08-10 - Buscar consulta por data
// • GET /consultas?idMedico=1 - Buscar consultas por médico
// • GET /consultas?idPaciente=1 - Buscar consultas por paciente
// • GET /consultas?descricao=rotina - Buscar consultas por descrição

// • GET /relatorios/consultas/medico/:idMedico - Consultas de um médico
// • GET /relatorios/pacientes/medico/:idMedico - Pacientes atendidos por médico
// • GET /relatorios/medicos/paciente/:idPaciente - Médicos que atenderam paciente
// • GET /relatorios/consultas/mes/:mes - Consultas em um mês específico


module.exports = router;
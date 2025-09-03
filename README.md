# Gerenciamento-de-Consultas-M-dicas

Requisitos do Sistema
• Criação de Médicos, Pacientes e Consultas

• Leitura (Listagem) de Médicos, Pacientes e Consultas
• Atualização de Médicos, Pacientes e Consultas
• Deleção de Médicos, Pacientes e Consultas
• Busca e Relatórios de Médicos, Pacientes e Consultas


### Endpoints Principais
• POST /medico - Adicionar médico
• POST /paciente - Adicionar paciente
• POST /consulta - Adicionar consulta


• GET /medicos - Listar médicos
• GET /pacientes - Listar pacientes
• GET /consultas - Listar consultas


• PUT /medico/:id - Atualizar médico
• PUT /paciente/:id - Atualizar paciente
• PUT /consulta/:id - Atualizar consulta


• DELETE /medico/:id - Remover médico
• DELETE /paciente/:id - Remover paciente
• DELETE /consulta/:id - Remover consulta



• GET /medicos?nome=João - Buscar médico por nome
• GET /medicos?especialidade=Cardiologia - Buscar médico por especialidade
• GET /pacientes?nome=Maria - Buscar paciente por nome
• GET /pacientes?dataNascimento=1990-01-01 - Buscar paciente por data de nascimento
• GET /consultas?data=2024-08-10 - Buscar consulta por data
• GET /consultas?idMedico=1 - Buscar consultas por médico
• GET /consultas?idPaciente=1 - Buscar consultas por paciente
• GET /consultas?descricao=rotina - Buscar consultas por descrição
• GET /relatorios/consultas/medico/:idMedico - Consultas de um médico
• GET /relatorios/pacientes/medico/:idMedico - Pacientes atendidos por médico
• GET /relatorios/medicos/paciente/:idPaciente - Médicos que atenderam paciente
• GET /relatorios/consultas/mes/:mes - Consultas em um mês específico
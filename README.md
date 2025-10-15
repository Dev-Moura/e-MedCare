# e‑MedCare

> Projeto de consultório médico utilizando **Node.js**, **Express**, **Next.js** e **MongoDB**

---

## 🏥 Visão geral

O **e‑MedCare** é uma aplicação para gerenciar um consultório médico, incluindo funcionalidades de agendamento, cadastro de pacientes, controle de consultas, médicos, entre outros recursos. O foco é oferecer uma base sólida para sistemas de saúde leves e modulares.

---

## 🧰 Tecnologias utilizadas

- **jwt**
- **cors**
- **jest**
- **pdfkit**
- **multer**
- **react**
- **Node.js**
- **Next.js**
- **Express**
- **MongoDB**
- **tailwind**
- **TypeScript**

---

## 🚀 Funcionalidades

- Cadastro e autenticação de usuários (médicos, secretárias, administradores etc.)
- Cadastro de pacientes
- Agendamento de consultas
- Histórico médico / prontuários
- Gerenciamento de especialidades médicas
- Visualização de consultas por datas, médicos

---

## 📦 Estrutura do projeto

```
/
├── emedcare-app/            # Pasta principal da aplicação (frontend)
│   ├── src/                  # Pasta principal da aplicação (backend)
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middlewares/
│   │   └── utils/
│   ├── .env.example
│   ├── package.json
│   └── ...
├── .gitignore
└── README.md
```

---

## 🛠️ Instalação e execução local

1. **Clone o repositório**

   ```bash
   git clone https://github.com/Dev‑Moura/e‑MedCare.git
   cd e‑MedCare/emedcare-app
   ```

2. **Instale as dependências**

   ```bash
   de um npm install em src e na pasta e-medcare
   ```

3. **Configure as variáveis de ambiente**

   Crie um arquivo com configurações como db:

   ```
   PORT=3001
   MONGODB_URI=mongodb://localhost:27017/emedcare
   JWT_SECRET=seu_segredo
   ```

4. **Execute a aplicação lado fronte-end**

   ```bash
   npm run dev
   ```

5. Acesse no navegador: `http://localhost:3000` front-end

6. Acesse no navegador: `http://localhost:3001` back-end

---

## 🔧 Configurações / variáveis de ambiente

| Variável      | Descrição                             | Exemplo                              |
| ------------- | ------------------------------------- | ------------------------------------ |
| `PORT`        | Porta em que o servidor vai rodar     | `3000`                               |
| `MONGODB_URI` | URI de conexão com MongoDB            | `mongodb://localhost:27017/emedcare` |
| `JWT_SECRET`  | Segredo para assinatura de tokens JWT | `algumSegredoMuitoSecreto`           |
| `EMAIL_USER`  | Usuário do e-mail                     | `usuario@exemplo.com`                |
| `EMAIL_PASS`  | Senha do e-mail                       | `senha-do-email`                     |

---

## ✅ Testes

```bash
npm test
```

---

## 📌 Rotas (endpoints)

| Método | Rota                | Descrição                     |
| ------ | ------------------- | ----------------------------- |
| POST   | `/auth/login`       | Login de usuário              |
| POST   | `/auth/register`    | Cadastro de usuário           |
| GET    | `/patients`         | Listar pacientes              |
| POST   | `/patients`         | Criar paciente                |
| GET    | `/appointments`     | Listar consultas/agendamentos |
| POST   | `/appointments`     | Agendar consulta              |
| PUT    | `/appointments/:id` | Atualizar consulta            |
| DELETE | `/appointments/:id` | Cancelar / remover consulta   |

---

## 📈 Futuras melhorias

- Interface frontend mais completa (painéis, dashboards)
- Autorização baseada em papéis (roles)
- Sistema de relatórios (por médico, mensal, anual)
- Integração com serviços externos (e-mail, SMS, push)
- Upload de arquivos (exames, laudos)
- Validação e sanitização de dados
- Deploy em produção (Heroku, Vercel, AWS, DigitalOcean etc.)
- Testes automatizados mais robustos
- Tratamento de erros e logs

---

## 🔗 Recursos / links úteis

- Repositório: https://github.com/Dev‑Moura/e‑MedCare
- Documentação de [Express](https://expressjs.com)
- Documentação de [MongoDB](https://www.mongodb.com)

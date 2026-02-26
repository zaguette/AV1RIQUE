import express from "express";

const app = express();
const PORTA = 3000;

app.use(express.json());

// Array em memória
const livros = [
  { id: 1, titulo: "A marca de Atena", autor: "Rick Riordan" },
  { id: 2, titulo: "Psicologia investigativa", autor: "Dennis Lino" }
];

// 🔹 ROTA GET - listar livros
app.get("/livros", (req, res) => {
  res.status(200).json(livros);
});

// 🔹 ROTA POST - criar novo livro
app.post("/livros", (req, res) => {
  const { titulo, autor } = req.body;

  // Validação
  if (!titulo || titulo.trim() === "") {
    return res.status(400).json({
      erro: "Título é obrigatório."
    });
  }

  if (!autor || autor.trim() === "") {
    return res.status(400).json({
      erro: "Autor é obrigatório."
    });
  }

  const novoLivro = {
    id: livros.length + 1,
    titulo,
    autor
  };

  livros.push(novoLivro);

  res.status(201).json(novoLivro);
});

// Iniciar servidor
app.listen(PORTA, () => {
  console.log(`Servidor rodando em http://localhost:${PORTA}`);
});
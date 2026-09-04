import express from "express";

const USERS = [
	{ id: 1, name: "Mateus Santos", age: 22 },
	{ id: 2, name: "Alice Santos", age: 20 },
	{ id: 3, name: "Jão Santos", age: 21 },
];

const app = express();
const PORTA = process.env.PORT || 3000;

app.get("/", (req, res) => {
	return res.send("Seja bem-vindo!");
});

app.get("/canal", (req, res) => {
	return res.json({ canal: "CFB Cursos" });
});

app.get("/users", (req, res) => {
	return res.json(USERS);
});

app.use((req, res) => {
	return res.status(404).json({
		erro: "Not Found",
		mensagem: `A rota ${req.url} não foi encontrada no servidor.`,
	});
});

app.listen(PORTA, () => {
	console.log(`Servidor rodando na porta ${PORTA}`);
});

import http from "node:http";

const PORTA = process.env.PORT || 3000;
const HOST = "127.0.0.1";

const servidor = http.createServer((req, res) => {
	res.setHeader("Content-Type", "text/html; charset=utf-8");

	switch (req.url) {
		case "/":
			res.writeHead(200);
			res.end("<h1>Seja bem-vindo!</h1>");
			break;

		case "/canal":
			res.writeHead(200);
			res.end("<h1>CFB Cursos</h1>");
			break;

		case "/curso":
			res.writeHead(200);
			res.end("<h1>Curso de Node</h1>");
			break;

		default:
			res.writeHead(404);
			res.end("<h1>404 - Página não encontrada</h1>");
			break;
	}
});

servidor.listen(PORTA, HOST, () => {
	console.log(`Servidor rodando na porta ${PORTA}.`);
});

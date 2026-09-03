import http from "node:http";
import url from "node:url";

const PORTA = process.env.PORT || 3000;
const HOST = "127.0.0.1";

const servidor = http.createServer((req, res) => {
	res.setHeader("Content-Type", "text/html; charset=utf-8");

	const urlCompleta = new URL(req.url, `http://${req.headers.host}`);
	const params = urlCompleta.searchParams;

	const nome = params.get("nome") || "Não informado";
	const curso = params.get("curso") || "Não informado";

	res.writeHead(200);
	res.write(`<p><strong>URL acessada:</strong> ${req.url}</p>`);
	res.write(`<p><strong>Nome:</strong> ${nome}</p>`);
	res.write(`<p><strong>Curso:</strong> ${curso}</p>`);
	return res.end();
});

servidor.listen(PORTA, HOST, () => {
	console.log(`Servidor rodando na porta ${PORTA}`);
});

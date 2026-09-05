import http from "node:http";
import fs from "node:fs/promises";

const PORTA = process.env.PORT || 3000;

const servidor = http.createServer(async (req, res) => {
	try {
		const arquivo = await fs.readFile("site.html");

		res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
		return res.end(arquivo);
	} catch (error) {
		console.error(`Erro ao ler o arquivo HTML: ${error.message}`);

		res.writeHead(500, { "content-type": "text/plain; charset=utf-8" });
		return res.end("Erro interno do servidor ao carregar a página");
	}
});

servidor.listen(PORTA, () => {
	console.log("Servidor rodando!");
});

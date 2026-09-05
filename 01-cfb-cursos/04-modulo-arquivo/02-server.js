import http from "node:http";
import fs from "node:fs/promises";

const PORTA = process.env.PORT || 3000;

const servidor = http.createServer(async (req, res) => {
	res.setHeader("Content-Type", "application/json; charset=utf-8");

	try {
		await fs.appendFile("teste.txt", "Esse é o conteúdo do arquivo 2\n");

		console.log("Arquivo atualizado com sucesso!");
		res.writeHead(201);
		return res.end(JSON.stringify({ message: "Conteúdo adicionado ao arquivo!" }));
	} catch (erro) {
		console.error("Erro ao escrever no arquivo: ", erro.message);
		res.writeHead(500);
		return res.end(JSON.stringify({ erro: "Falha ao gravar os arquivos" }));
	}
});

servidor.listen(PORTA, () => {
	console.log("Servidor rodando!");
});

import http from "node:http";

http
	.createServer((req, res) => {
		res.writeHead(200, {
			"content-type": "text/plain",
		});

		res.write("Hello, World!\nMeu primeiro servidor.");
		res.end();
	})
	.listen(3000);

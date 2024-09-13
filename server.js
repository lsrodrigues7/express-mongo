import http from "http";

const PORTA = 3000;

const rotas = {
    "/" : "Curso de Express api",
    "/clientes" : "Lista de clientes",
    "/itens" : "Lista de itens",
};

const server = http.createServer((req,res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end(rotas[req.url]);
});

server.listen(PORTA,()=>{
    console.log('servidor escutando');
    
})
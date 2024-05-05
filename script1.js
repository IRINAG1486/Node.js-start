const http = require ('http');

let counter = {
    '/home': 0,
    '/about': 0
}

const server = http.createServer((req, res) => { //создаем сервер, принимает функцию, которая будет отрабатывать кажды раз как только прилитит запрос
    console.log("Запрос получен");

    if (req.url === '/home') {
        res.writeHead(
            200,
           {'Content-Type' : 'text/html; charset=UTF-8'},
        );
        counter['/home']++;
        res.end(`<h1>Добро пожаловать на главную страницу</h1> 
                <a href="/about">Перейти на страницу обо мне</a>
                <p>Количество посещений страницы: ${counter['/home']}`); // заканчивает обработку запроса и передает контент
    }
    else if (req.url === '/about') {
        res.writeHead(
            200,
           {'Content-Type' : 'text/html; charset=UTF-8'},
        );
        counter['/about']++;
        res.end(`<h1>Добро пожаловать на страницу обо мне</h1>
                 <a href="/home">Перейти на главную страницу</a>
                 <p>Количество посещений страницы: ${counter['/about']}`); 
    }
    else {
        res.writeHead(
            404,
           {'Content-Type' : 'text/html; charset=UTF-8'},
        );
        res.end('<h1>Страница не найдена</h1>'); 
    }
    
});

const port  = 3000;

server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});



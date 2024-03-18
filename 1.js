const http = require('http')

let countHome = 0
let countAbout = 0

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        ++countHome
        res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" })
        res.end(`<h1>Вы на главной странице</h1><br><h3>Вы посещаете ее ${countHome} раз</h3><br><a href = "/about" >Перейти на about</а>`)
    } else if (req.url === "/about") {
        ++countAbout
        res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" })
        res.end(`<h1>Вы на странице about</h1><br><h3>Вы посещаете ее ${countAbout} раз</h3><br><a href = "/" >Перейти на Главную</а>`)
    } else {
        res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" })
        res.end('<h1>Страница не существует или находится в разработке</h1><a href = "/" >Перейти на Главную</а >')
    }

})

server.listen(3000)
import http from "http"
import {app} from "./app"

const port: number = 4200

const server = http.createServer(app)

server.listen(port , () =>{
    console.log('server is starting at port ' + port);
})
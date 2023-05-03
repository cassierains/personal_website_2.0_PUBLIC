import { io } from "socket.io-client"

let socketUrl = "http://localhost:8080"
const socket = io(socketUrl)

export default socket
/** @jsxImportSource @emotion/react */
import { Button, Grid, TextField, Container } from "@mui/material"
import { useState, useEffect } from "react"
import { Event } from "../types"
import socket from "./socket"

//this gernerates the random conversation id
/*i am not implimenting any type of log-in functionality
so this creates a new conversation when the page is first loaded*/
const generateConverseId = () => {
    let converseId = Math.random().toString(36).substring(2,9)
    return(converseId)
}
const converseId = generateConverseId()

const Conversation = () => {
    const[formInput, setFormInput] = useState<string>("")
    const[messStatus, setMessStatus] = useState<string>()

    interface FormData {
        message: string
        conversationId: string
    }

    // handleSubmit posts a new message to the database
    const handleSubmit = async (e: any, converseId:string) => {
        e.preventDefault()
        const data: FormData = {
            message: formInput,
            conversationId: converseId
        }
        
        socket.emit('chat message', data)
        setMessStatus("Sent")
            /*if (response === "success") {
                setMessStatus("Delivered")
            } else {
                setMessStatus("Delivery Failed")
            }*/
        
        //update ui elements
        setFormInput("")
    }
    
    return(
        <Container>
            <Grid container>
                <>{messStatus}</>
            </Grid>
                <form 
                    onSubmit={handleSubmit}
                    css={{
                        position: "fixed",
                        bottom: "0",
                        width: "80%",
                        marginBottom: "4%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        verticalAlign: "center",
                    }}
                >
                    <Button 
                        type="submit"
                        sx={{
                            color: 'white'
                        }}
                    >Send</Button>
                    <TextField 
                        sx={{
                            backgroundColor: "white",
                            borderRadius: "10px",
                            width: "80%",
                        }}
                        value={formInput} 
                        onChange={(e: Event) => setFormInput(e.target.value)}
                    />
                </form>
        </Container>
    )
}

export default Conversation
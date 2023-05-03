/** @jsxImportSource @emotion/react */
import { Chat, Close, GitHub, Message } from "@mui/icons-material"
import { Button, Container, SpeedDial, SpeedDialAction, Box } from "@mui/material"
import { useState, useEffect } from "react";
import Conversation from "./conversation";
import Link from "next/link";
import { chatbotStyles, closeStyles } from "./styles/main_styles"

const ChatBotMenu = () => {
    const[bot, setBot] = useState<React.ReactElement>(<></>)

    function CloseChatbot(e:any) {
        e.preventDefault()
        setBot(<></>)
    }

    const CloseButton = () => {
        return(
            <Button                 
                onClick={CloseChatbot}
                css={closeStyles}  
            >
                <Close />
            </Button>
        )
    }

    const ChatBot = () => {
        return(
            <Box css={chatbotStyles}>
                <CloseButton />
                <Conversation />
            </Box>
        )
    }

    function LauchChatbot(e:any) {
        e.preventDefault()
        setBot(<ChatBot />)
    }

    return(
        <Container>
            <SpeedDial
                ariaLabel="Chatbot Menu"
                sx={{
                    position:"fixed",
                    bottom: 25,
                    right: 25,
                }}
                icon={<Chat />}
            >
                <SpeedDialAction 
                    icon={<Link href="/components/redirecting/bot_docs"><GitHub /></Link>}
                    tooltipTitle="Bot Documentation"
                />
                <SpeedDialAction 
                    icon={<Message />} 
                    tooltipTitle="Launch Chatbot" 
                    onClick={LauchChatbot}
                />
            </SpeedDial>
            {bot}
        </Container>
    )
}

export default ChatBotMenu
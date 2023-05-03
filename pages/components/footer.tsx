/** @jsxImportSource @emotion/react */
import { ArrowCircleRight } from "@mui/icons-material"
import { Grid } from "@mui/material"
import Link from "next/link"
import ChatBotMenu from "./chatbot/chatbot"

const styledLink = {
    textDecoration: 'none',
    color: 'white',
    display: 'flex',
    }

export const Footer = () => {
    return(
        <>
            <ChatBotMenu />
            <Grid 
                container
                justifyContent="center"
                direction="row"
                alignItems="center"
                sx={{
                    padding: "40px",
                }}
            >
                <Grid item>
                    <Link css={styledLink} href="/components/redirecting/linkedin">
                        Find me on LinkedIn!
                        <ArrowCircleRight sx={{paddingLeft: "5px", color: "white"}} />
                    </Link>
                </Grid>
            </Grid>
        </>
    )
}
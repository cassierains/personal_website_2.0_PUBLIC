import NavBar from "./navbar"
import { Box, Container } from "@mui/material"

const Header = () => {
    return(
        <Container
            maxWidth="sm"
            sx={{
                textAlign: 'center',
                top: 0,
            }}
        >
            <Box
                alignItems="center"
                padding="5%">
                Cassandra Sibley
            </Box>
            <NavBar />
        </Container>
    )
}

export default Header
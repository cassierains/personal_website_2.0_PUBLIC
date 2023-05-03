/** @jsxImportSource @emotion/react */
import Link from "next/link"
import { Grid } from "@mui/material"

const NavBar = () => {
    const styledLink = {
        textDecoration: 'none',
        color: 'white'
    }

    return(
        <Grid 
            container 
            spacing={2}
            justifyContent="center"
            direction="row"
            alignItems="center"
        >
            <Grid item xs={4}>
                <Link css={styledLink} href="/">About</Link>
            </Grid>
            <Grid item xs={4}>
                <Link css={styledLink} href="/resume">Resume</Link>
            </Grid>
            <Grid item xs={4}>
                <Link css={styledLink} href="/projects">Projects</Link>
            </Grid>
        </Grid>
    )
}

export default NavBar
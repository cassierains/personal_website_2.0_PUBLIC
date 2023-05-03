import { Grid } from "@mui/material"

const AboutBody = () => {
    return(
        <Grid 
            container
            spacing={2}
            justifyContent="center"
            direction="column"
            sx={{paddingTop: "5%"}}
        >
            <Grid item>
                About Me
            </Grid>
            <Grid item>
                Hey! My name is Cassandra. I'm finishing up my BS in neuroscience. 
                During my undergrad, I was a research assistant in a 
                psycholinguistics lab focusing on natural language processing. 
                I'm interested in working with large data sets to extrapolate ways
                to imporove user experience, and building user-friendly applications. 
                I excel at writing concise, readable, reusable code.
            </Grid>
            <Grid item>
                What's New?
            </Grid>
            <Grid item>
                latest project goes here
            </Grid>
        </Grid>
    )
}

export default AboutBody
import { Grid } from "@mui/material"

const ResumeBody = () => {
    return(
        <Grid 
            container
            spacing={2}
            justifyContent="center"
            direction="column"
            sx={{paddingTop: "5%"}}
        >
            <Grid item>
                Resume
            </Grid>
            <Grid item>
                Work Experience
            </Grid>
            <Grid item>
                HopeLab (imi app) - April 2022-May 2022(short contract) <br/>
                Extensively tested the "imi" app <br/>
                Found 78 UI/UX bugs <br/>
                Presented findings in a spreadsheet with an accompanying video<br/>
            </Grid>
            <Grid item>
                
            </Grid>
        </Grid>
    )
}

export default ResumeBody
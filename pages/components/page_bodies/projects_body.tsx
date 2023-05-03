/** @jsxImportSource @emotion/react */
import { Grid } from "@mui/material"
import Image from "next/image"
import BiochemCalc from "../biochemistry_calculator/biochemcalc"
import { projectTitle,
    sectionTitle, 
    subsectionTitle,
    paragraph, 
    code,
    imageStyles,
} from './styles/project_styles'
import Database_flowchart from '../images/RTC_database.svg'

const ProjectsBody = () => {
    return(
        <Grid 
            container
            spacing={2}
            justifyContent="center"
            direction="column"
            sx={{paddingTop: "5%"}}
        >
            <Grid item>
                <h1>Projects</h1>
            </Grid>
            <Grid item>
                <h2 css={projectTitle}>Chat Application with Conversational Chatbot</h2>

                <h3 css={sectionTitle}>Project Outline</h3>
                {/*<Image 
                    src={}
                    alt="flow chart describing the realtime chat app"
                    width={600}
                    height={400}
                    css={imageStyles}
                />*/}
                <p css={paragraph}>

                </p>

                {/*Front-end Documentation */}
                <h3 css={sectionTitle}>Web App</h3>
                <p css={paragraph}>

                </p>

                {/*Back-end Documentation */}
                <h3 css={sectionTitle}>Back-End</h3>
                <h4 css={subsectionTitle}>Back-End APIs</h4>
                <p css={paragraph}>
                    
                </p>
                <h4 css={subsectionTitle}>Back-End Security</h4>
                <p css={paragraph}>

                </p>

                {/*Database Documentation */}
                <h3 css={sectionTitle}>Database</h3>
                <h4 css={subsectionTitle}>Database Structure</h4>
                <Image 
                    src={Database_flowchart}
                    alt="flow chart describing the realtime chat app"
                    width={600}
                    height={400}
                    css={imageStyles}
                />
                <p css={paragraph}>

                </p>
                <h4 css={subsectionTitle}>Database Security</h4>
                <p css={paragraph}>
                
                </p>
            </Grid>
            <Grid item>
                <h2 css={projectTitle}>Biochemistry Calculator</h2>
                <BiochemCalc />

                <h3 css={sectionTitle}>Henderson–Hasselbalch Equation</h3>
                <p css={paragraph}>

                </p>

                <h3 css={sectionTitle}>Convert Between pKa and Ka</h3>
                <p css={paragraph}>

                </p>
                <h3 css={sectionTitle}>Gibbs Free Energy</h3>
                <p css={paragraph}>
                    
                </p>

                <h4 css={subsectionTitle}>References</h4>
                <p css={paragraph}>

                </p>
            </Grid>
        </Grid>
    )
}

export default ProjectsBody
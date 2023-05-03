/** @jsxImportSource @emotion/react */
import { Container} from '@mui/material'
import { Footer } from './components/footer'
import Header from './components/header'
import ProjectsBody from './components/page_bodies/projects_body'
import { pageStyles } from './components/page_bodies/styles/styles'
const Projects = () => {
    return(
        <Container css={pageStyles} maxWidth={false}>
            <Header />
            <ProjectsBody />
            <Footer />
        </Container>
    )
}

export default Projects
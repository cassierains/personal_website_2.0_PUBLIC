/** @jsxImportSource @emotion/react */
import { Container} from '@mui/material'
import { Footer } from './components/footer'
import Header from './components/header'
import ResumeBody from './components/page_bodies/resume_body'
import { pageStyles } from './components/page_bodies/styles/styles'

const Resume = () => {
    return(
        <Container css={pageStyles} maxWidth={false}>
            <Header />
            <ResumeBody />
            <Footer />
        </Container>
    )
}

export default Resume
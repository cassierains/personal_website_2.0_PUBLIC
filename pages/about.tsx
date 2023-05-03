/** @jsxImportSource @emotion/react */
import { Container} from '@mui/material'
import AboutBody from './components/page_bodies/about_body'
import { Footer } from './components/footer'
import Header from './components/header'
import { pageStyles } from './components/page_bodies/styles/styles'


const About = () => {
    return(
        <Container css={pageStyles} maxWidth={false}>
            <Header />
            <AboutBody />
            <Footer />
        </Container>
    )
}

export default About
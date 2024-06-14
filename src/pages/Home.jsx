import styled from 'styled-components'
import colors from '../utils/style/colors'
import homeIllustration from '../assets/home-illustration.png'

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    background-color: ${colors.backgroundLight};
`

const Title = styled.h1`
    color: ${colors.primary};
    font-size: 36px;
    margin-bottom: 20px;
`

const Subtitle = styled.h2`
    color: ${colors.secondary};
    font-size: 24px;
    margin-bottom: 40px;
`

const Illustration = styled.img`
    width: 100%;
    max-width: 600px;
`

function Home() {
    return (
        <HomeContainer>
            <Title>Bienvenue sur notre plateforme</Title>
            <Subtitle>Rejoignez les meilleurs freelances du marché</Subtitle>
            <Illustration src={homeIllustration} alt="Accueil Illustration" />
        </HomeContainer>
    )
}

export default Home

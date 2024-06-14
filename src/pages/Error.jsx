import styled from 'styled-components'
import colors from '../utils/style/colors'
import{Link} from 'react-router-dom'
const ErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    background-color: ${colors.backgroundLight};
    height: 100vh;
    justify-content: center;
`

const ErrorMessage = styled.h1`
    color: ${colors.primary};
    font-size: 48px;
    margin-bottom: 20px;
`

const ErrorDescription = styled.p`
    color: ${colors.secondary};
    font-size: 24px;
    margin-bottom: 40px;
`

const HomeLink = styled(Link)`
    color: ${colors.primary};
    font-size: 18px;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`

function Error() {
    return (
        <ErrorContainer>
            <ErrorMessage>404</ErrorMessage>
            <ErrorDescription>Page non trouvée</ErrorDescription>
            <HomeLink to="/">Retour à l'accueil</HomeLink>
        </ErrorContainer>
    )
}

export default Error

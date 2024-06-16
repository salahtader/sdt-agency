import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import logo from '../../assets/logo.png'

const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: ${colors.backgroundLight};
`

const Logo = styled.img`
    height: 40px;
`

const NavLinks = styled.div`
    display: flex;
    gap: 20px;
`

const StyledLink = styled(Link)`
    color: ${colors.primary};
    text-decoration: none;
    font-size: 18px;
    &:hover {
        color: ${colors.secondary};
    }
`

function Header() {
    return (
        <NavBar>
            <Logo src={logo} alt="Logo" />
            <NavLinks>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/survey/1">Questionnaire</StyledLink>
                <StyledLink to="/freelances">Profils</StyledLink>
            </NavLinks>
        </NavBar>
    )
}

export default Header

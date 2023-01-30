import logo from '../../imagens/logo.svg'
import styled from 'styled-components'

export default function Logo() {
    const LogoStyled = styled.div`
        display: flex;
        font-size: 30px;
    
    .logo-img {
        margin-right: 10px;
    }
`
    return (
        <LogoStyled>
            <img
                src={logo}
                alt='logo da alura books'
                className='logo-img'
            />

            <p>
                <strong>Alura</strong> Books
            </p>
        </LogoStyled>
    )
}

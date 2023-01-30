import styled from "styled-components"

export default function OpcoesHeader() {

    const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']
    const StyledOpcoes = styled.ul`

    display: flex;
    
    .opcao {
        font-size: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        height: 100%;
        padding: 0 5px;
        cursor: pointer;
        min-width: 120px;
    }
`

    return (
        <StyledOpcoes>
            {textoOpcoes.map((texto) => (
                <li className='opcao'><p>{texto}</p></li>
            ))}
        </StyledOpcoes>
    )
}

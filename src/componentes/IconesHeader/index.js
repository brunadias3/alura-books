import React from 'react'
import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'

const IconesStyle = styled.ul`
    display: flex;
    align-items: center;


.icone {
    margin-right: 40px;
    width: 25px;
}
`
export default function IconesHeader() {
    const icones = [perfil, sacola]
    return (
        <IconesStyle>
            {icones.map((icone, index) => (
                <li key={index} className='icone'><img src={icone}></img></li>
            ))}
        </IconesStyle>
    )
}

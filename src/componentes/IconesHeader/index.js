import React from 'react'
import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import './estilo.css'

export default function IconesHeader() {
    const icones = [perfil, sacola]
    return (
        <ul className='icones'>
            {icones.map((icone) => (
                <li className='icone'><img src={icone}></img></li>
            ))}
        </ul>
    )
}

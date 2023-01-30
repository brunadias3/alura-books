import './estilo.css'
import logo from '../../imagens/logo.svg'

export default function Logo() {
    return (
        <div className='logo'>
            <img src={logo} alt='logo da alura books' />
            <p><strong>Alura</strong> Books</p>
        </div>
    )
}

import './estilo.css'
import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader'
import IconesHeader from '../IconesHeader'

export default function Header() {
    return (
        <header className="App-header">
            <Logo />
            <OpcoesHeader />
            <IconesHeader />
        </header>
    )
}

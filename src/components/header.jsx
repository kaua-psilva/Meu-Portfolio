import {motion} from 'framer-motion'

function MeuHeader() {
    return (
        <header>
            <img data-aos="fade-down" data-aos-duration ="1000"
                src="src\assets\k-high-resolution-logo-removebg-preview.png"
                alt="LogoMark"
            />
            <nav>
                <a href="#SobreMim" data-aos="fade-down" data-aos-duration ="1000">Sobre mim</a>
                <a href="#Habilidades" data-aos="fade-down" data-aos-duration ="1500">Habilidades</a>
                <a href="#Projetos" data-aos="fade-down" data-aos-duration ="2000">Projetos</a>
                <a href="#Contato" data-aos="fade-down" data-aos-duration ="2500">Contato</a>
            </nav>
            <button id="resumeButton" data-aos="fade-down" data-aos-duration ="3000">
            <p>Resumo</p>
            <span>
                <img src="src\assets\Icon.png" alt="iconeDownload"></img>
            </span>
            </button>

        </header>
    )
}

export default MeuHeader;
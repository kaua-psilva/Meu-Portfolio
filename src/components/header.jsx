function MeuHeader() {
    return (
        <header>
            <img
                src="src\assets\k-high-resolution-logo-removebg-preview.png"
                alt="LogoMark"
            />
            <nav>
                <a href="#SobreMim">Sobre mim</a>
                <a href="#Habilidades">Habilidades</a>
                <a href="#Projetos">Projetos</a>
                <a href="#Contato">Contato</a>
            </nav>
            <button id="resumeButton">
            <p>Resumo</p>
            <span>
                <img src="src\assets\Icon.png" alt="iconeDownload"></img>
            </span>
            </button>

        </header>
    )
}

export default MeuHeader;
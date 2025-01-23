import SocialMidias from "./socialMidias";

function HeroContent() {
    return (
        <div id="heroContent" data-aos="fade-down" data-aos-duration="2500">
            <div id="heroText">
                <h1> Olá, eu sou<br /> <strong>Kauã<br /> </strong>
                    <span id="noFillText">Desenvolvedor</span><br />
                    <strong>Frontend.</strong></h1>
                <p>
                    Olá! Sou Kauã, desenvolvedor front-end focado em<br />criarinterfaces modernas e funcionais. Sempre em busca de<br /> aprendizado, adoro transformar ideias
                    em soluções digitais.
                </p>
                <SocialMidias/>
            </div>
            <div>
                <img data-aos="fade-left" data-aos-duration="3000"
                    src="src\assets\hero.png"
                    alt="heroImage"
                />
                
            </div>
        </div>
    )
}
export default HeroContent;
import heroAboutMe from '../assets/hero-about.png'

function AboutMe() {
    return (
        <>

            <div id="AboutMeSection" >
                <div id="imageAbout" data-aos="fade-right" data-aos-duration ="2500">
                    <img src={heroAboutMe} alt="iconAbout me" />
                </div>
                <div  id='aboutMeText' data-aos="fade-left" data-aos-duration ="2000">
                    <h1  style={{textAlign: 'left', fontSize:'48px', marginBottom:'80px'}}>
                       <span style={{fontWeight:'400'}}>Sobre</span> mim 
                    </h1>
                    <p data-aos="fade-left" data-aos-duration ="3000" style={{color:'#71717A'}}>
                        Sou Kauã, um desenvolvedor front-end dedicado a transformar ideias em soluções digitais modernas,
                        intuitivas e funcionais. Minha paixão por tecnologia e inovação me impulsiona a explorar novas
                        ferramentas, metodologias e tendências, buscando sempre entregar projetos que encantem visualmente e
                        sejam tecnicamente impecáveis. Valorizo o trabalho em equipe, a troca de conhecimento e a atenção
                        aos detalhes, elementos que considero essenciais para criar experiências impactantes e duradouras.<br />
                        <br />
                        <p data-aos="fade-left" data-aos-duration ="3500">
                            Além da minha dedicação à carreira, busco constantemente evoluir em outras áreas da vida. Pratico
                            musculação regularmente, o que me ajuda a manter o equilíbrio físico e mental, além de ser uma
                            grande fonte de disciplina e motivação. Sou também um ávido leitor de livros sobre psicologia,
                            neurociência e desenvolvimento pessoal, temas que expandem minha visão de mundo e me ajudam a
                            compreender melhor as pessoas e o ambiente ao meu redor.
                        </p>
                        <p> Nas horas livres, mergulho em video games, um hobby que me permite explorar narrativas imersivas e
                            universos criativos, além de me inspirar em como a tecnologia pode criar experiências emocionantes.
                            Gosto de planejar e organizar minha rotina com foco em produtividade, utilizando ferramentas como
                            agendas para conciliar trabalho, estudos e momentos de lazer.</p>
                    </p>
                </div>
            </div>
        </>
    )
}

export default AboutMe;
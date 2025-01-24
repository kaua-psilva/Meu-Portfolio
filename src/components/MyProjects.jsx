import gorjetaScreenShot from '../assets/projetoGorjetaPrint.png'
import iconOpenProject from '../assets/readMore.png'
import loginPagePrint from '../assets/loginPagePrint.jpg'
function MeuProjetos() {
    return (
        <>
            <section id="projectContent">
                <h1 style={{ fontSize: '48px', textAlign: 'center', fontFamily: 'Sora', color: 'white', paddingTop: '50px' }}>
                    <span style={{ fontWeight: '100', color: 'white', }}>Meus</span> Projetos
                </h1>
                <section>
                    <div className="containerProject">
                        <div className="imagemProjeto">
                            <img className='imageProject' src={gorjetaScreenShot} alt="Foto projeto Gorjeta" />
                        </div>
                        <div id="textProjeto">
                            <h1 style={{ fontSize: '48px' }}>
                                01
                            </h1>
                            <h2 style={{ fontSize: '40px' }}>
                                Calculadora de gorjetas
                            </h2>
                            <p style={{ color: '#71717A' }}>
                                Este projeto é uma calculadora de gorjetas que permite dividir a conta de forma justa entre várias pessoas, levando em consideração o valor total, a porcentagem de gorjeta e o número de pessoas. Foi desenvolvido como parte do desafio Tip Calculator App do Frontend Mentor.
                                <br></br>
                                🚀 Funcionalidades * Calcular o valor da gorjeta com base no valor total da conta e na porcentagem escolhida.
                                * Dividir a gorjeta e o valor total igualmente entre várias pessoas.
                                * Interface simples
                                * Botão "Reset" para limpar os valores inseridos e recalcular.
                            </p>
                            <a href="https://github.com/kaua-psilva/Meu-Portfolio" target='blank_'><img className='iconOpenProject' src={iconOpenProject} alt="" /></a>
                        </div>
                    </div>
                    <div className='containerProject' style={{display:'flex', flexDirection:'row-reverse'}}>
                        <div className="imagemProjeto">
                            <img style={{width:'550px'}} className='imageProject' src={loginPagePrint} alt="Foto projeto Gorjeta" />
                        </div>
                        <div id="textProjeto">
                            <h1 style={{ fontSize: '48px' }}>
                                02
                            </h1>
                            <h2 style={{ fontSize: '40px' }}>
                                Pagina de Login
                            </h2>
                            <p style={{ color: '#71717A' }}>
                                Desenvolvi uma interface moderna e responsiva para uma página de login. O layout combina elementos visuais atraentes, como ilustrações criativas e uma tipografia bem definida, com funcionalidades práticas, incluindo campos de entrada para e-mail e senha, opção "Lembre de mim" e recuperação de senha. O design também inclui integração com o login via Google e um botão de cadastro para novos usuários.
                            </p>
                            <a href="https://github.com/kaua-psilva/Meu-Portfolio" target='blank_'><img className='iconOpenProject' src={iconOpenProject} alt="" /></a>
                        </div>
                    </div>
                </section>
                <div></div>
                <div></div>
                <div></div>
            </section>
        </>
    )
}
export default MeuProjetos
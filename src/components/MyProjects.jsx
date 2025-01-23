import gorjetaScreenShot from '../assets/projetoGorjetaPrint.png'

function MeuProjetos() {
    return (
        <>
            <section id="projectContent">
                <h1 style={{ fontSize: '48px', textAlign: 'center', fontFamily: 'Sora', color: 'white' }}>
                    <span style={{ fontWeight: '400', color: 'white' }}>Meus</span> Projetos
                </h1>
                <section>
                    <div className="containerProject">
                        <div className="imagemProjeto">
                            <img src={gorjetaScreenShot} alt="Foto projeto Gorjeta" />
                        </div>
                        <div id="textProjeto">
                            <h1>
                                01
                            </h1>
                            <h2>
                                Calculadora de gorjetas
                            </h2>
                            <p>
                                Este projeto é uma calculadora de gorjetas que permite dividir a conta de forma justa entre várias pessoas, levando em consideração o valor total, a porcentagem de gorjeta e o número de pessoas. Foi desenvolvido como parte do desafio Tip Calculator App do Frontend Mentor.
                                <br></br>
                                🚀 Funcionalidades * Calcular o valor da gorjeta com base no valor total da conta e na porcentagem escolhida.
                                * Dividir a gorjeta e o valor total igualmente entre várias pessoas.
                                * Interface simples
                                * Botão "Reset" para limpar os valores inseridos e recalcular.
                            </p>
                        </div>
                    </div>
                </section>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </section>
        </>
    )
}
export default MeuProjetos
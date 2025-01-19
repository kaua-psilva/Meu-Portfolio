import './App.scss'
import './_var.scss'
import HeroContent from './components/heroContent'
import MeuHeader from './components/header'
import SocialMidias from './components/socialMidias'
function App() {
  return (
    <>
      <div id='headerSite'>
        <MeuHeader />
        <HeroContent/>
      </div>
    </>
  )
}

export default App;

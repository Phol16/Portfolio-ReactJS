import '@/App.css'
import AboutMe from '@/Components/AboutMe/AboutMe'
import Footer from '@/Components/Footer/Footer'
import MainContent from '@/Components/MainContent/MainContent'
import NavBar from '@/Components/NavBar/NavBar'
import Projects from '@/Components/Projects/Projects'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <MainContent/>
      <AboutMe/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App

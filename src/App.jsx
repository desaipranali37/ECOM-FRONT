
import './App.css'
import Lists from './components/Fifth'
import First from './components/First'
import Fourth from './components/Fourth'
import Second from './components/Second'
import Third from './components/Third'
import Six from './components/Six'

function App() {
  

  return (
    <>
    
      <First/>
      <Second/>
      <Third/>
      <Fourth isLoggedin={false}/>
      <Lists/>
       <Six/>
       <Seventh/>
    

    </>
  )
}

export default App


import './App.css'
import CurrentTimer from './components/CurrentTimer'
import ClockHeading from './components/ClockHeading'
import ClockSlogan from './components/ClockSlogan'

function App() {

  return (
    <div>
      <ClockHeading></ClockHeading>
      <ClockSlogan></ClockSlogan>
      <CurrentTimer></CurrentTimer>
      
    </div>
  )
}

export default App

import userData from "./Components/userdata";
import Mappingdata from "./Components/mapfunction";
import Filteringtypes from "./Components/filtertype";
import Filteringj from "./Components/filterj";
import Filterage from "./Components/filterage";
import Filteryears from "./Components/totalyears";
import './App.css'

function App() {

  return (
  <div className="total">
    <h2>Display all items</h2>
    <div className="one">
   <Mappingdata arr={userData} />
   </div>
   <h2>Display based on usertype</h2>
   <div className="two">
   <Filteringtypes arr={userData} />
   </div>
   <h2>Filter all data starting with J</h2>
   <div className="three">
    <Filteringj arr={userData}/>
   </div>
   <h2>Filter all data based on age greater than 28 and less than or equal to 50</h2>
   <div className="four">
    <Filterage arr={userData}/>
   </div>
   <h2>Find the total years of Designers</h2>
   <div className="five">
    <Filteryears arr={userData}/>
   </div>
  </div>
  )
}

export default App

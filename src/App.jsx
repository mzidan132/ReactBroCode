import Header from "./header.jsx" //components
import Student from './student.jsx' //props pass data from parent to child components by kv
import Propsdest from "./Propsdest.jsx"
import Food from './Food.jsx'
import Card from './card.jsx'
import Footer from './footer.jsx'
import Greeting from './greeting.jsx' //conditional rendering
import Lists from './list.jsx' //render list
import Listopt from './listopt.jsx'
import Button from './button.jsx' //event
import Hook from './state.jsx'
import Counter from './counter.jsx'
import StateObj from './stateobj.jsx'
import Update from './updatestate.jsx'
import UpdateObj from './updatstateobj.jsx'
import Todo from './todo.jsx'
import Useffect from './useffect.jsx'
import Windw from './Windw.jsx'
import Clock from './clock.jsx'
import Usecontext from './usecontext.jsx'
import Useref from './useref.jsx'
import Stopwatch from './stopwatch.jsx'

function App() {

  const fruit = [
    { id:1, name: "apple", cal: 99 },
    { id:2, name: "orange", cal: 45 },
    { id:2, name: "banana", cal: 44 }
];
const vege = [
  { id:1, name: "brocoli", cal: 99 },
  { id:2, name: "potato", cal: 45 },
  { id:2, name: "cabbage", cal: 44 }
];
  return (
  <>
    <Header />
    <Food></Food>
    <Card />
    <Student name="Zidan" age={30} isStudent={false}></Student><hr/>
    <Student name="Pulok" age={20} isStudent={true}></Student><hr/>
    <Student/>
    <Propsdest name="Zidan" age={24}/>
    <Greeting isLoggedIn={true} username={'Zidan'}/>
    <Lists/>
    <Footer />
    <Listopt items = {vege} category="Vegetables" />
    <Listopt items = {fruit} category="Fruit" />
    <Button/>
    <Hook/>
    <Counter/>
    <StateObj/>
    <Update/>
    <UpdateObj/>
    <Todo/>
    <Useffect/>
    <Windw/>
    <Clock/>
    <Usecontext/>
    <Useref/>
    <Stopwatch/>
  </>
  );
}

export default App

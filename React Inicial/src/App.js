import logo from './logo.svg';
import './App.css';
import GreetingClass from './components/pure/GreetingClass';
import GreetingFunction from './components/pure/GreetingFunction';
import TaskListComponent from './components/container/task_list';
import ContactComponent from './components/pure/contact';
import ContactListComponent from './components/container/contact_list';
import { Clock, ClockHook } from './components/Exercises-sessions456';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Dentro de App que es el componente que llama al componente "Greeting" tenemos que enviar las props que queramos que se muestren */}
        {/* <GreetingClass name="Antonio" /> */}
        {/* <GreetingFunction name="Antonio"/> */}

        {/* Componente de listado de tareas */}
        <ClockHook/>
      </header>
    </div>
  );
}

export default App;

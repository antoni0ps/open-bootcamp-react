import logo from './logo.svg';
import './App.css';
import GreetingClass from './components/pure/GreetingClass';
import GreetingFunction from './components/pure/GreetingFunction';
import TaskListComponent from './components/container/task_list';
import ContactComponent from './components/pure/contact';
import ContactListComponent from './components/container/contact_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import Ejemplo4 from './hooks/Ejemplo4';
import MiComponenteConContexto from './hooks/Ejemplo3';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Dentro de App que es el componente que llama al componente "Greeting" tenemos que enviar las props que queramos que se muestren */}
        {/* <GreetingClass name="Antonio" /> */}
        {/* <GreetingFunction name="Antonio"/> */}

        {/* Componente de listado de tareas */}
        {/* <ContactListComponent /> */}
        {/* Ejemplos de uso de HOOKS */}
        <Ejemplo4 nombre="Antonio">
          {/* Todo lo que hay aquí dentro se tratará como props.children */}
          <h3>Contenido del props.children</h3>
        </Ejemplo4>
      </header>
    </div>
  );
}

export default App;

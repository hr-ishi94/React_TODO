
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap'
import Logged from './components/conditionals/Logged';
import NotLogged from './components/conditionals/NotLogged.jsx';

function App() {
  const Login=false
  return (
    <Container>
      {Login?<Logged/>:<NotLogged/>}
     

    
    </Container>
    
  );
}

export default App;


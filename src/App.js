import nike from './img/nike.png';
import adidas from './img/adidas.png';
import logoPizza from './img/logoPizza.png';
import Home from './Home';
import Menu from './Menu';
import Contact from './Contact';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';

import data from './data.json';

function App() {
  console.log(data);
  return (
    <div>
    <nav >
      <div className="nav-wrapper blue darken-3">
        <a href="#" className="brand-logo"><img src={adidas} height="70" width="70"  alt="logoPizza" /></a>
          <Router>
          <div>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="./Home">Home</Link>
          </li>
          <li>
            <Link to="./Menu">Menu</Link>
          </li>
          <li>
            <Link to="./Contact">Contact</Link>
          </li>
        </ul>
            <Switch>
              <Route path="./Home.js" component={Home}/>
              <Route path="./Menu.js" component={Menu}/>
              <Route path="./Contact.js" component={Contact}/>
            </Switch>
            </div>
          </Router>
      </div>
    </nav>
    <div>
      <div>
        { data.Pizza.map((elem) => {
          return (
            <div className="grid grid-cols-3 gap-4">
              <CardColumns>
              <Card style={{ width: '18rem' }}> <Card.Img variant="top" src={elem.image} /> 
              <Card.Body>
            <Card.Title>{elem.name}</Card.Title>
            <Card.Text>
            {elem.ingredients}
                  </Card.Text>
            </Card.Body>
          </Card>
          </CardColumns>
       </div>
          )
        } ) }
      </div>
    </div>
    <footer class="page-footer  blue darken-3">
          <div class="container blue darken-3">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Footer</h5>
                <p class="grey-text text-lighten-4">Big Up samuel et Donovan</p>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2021 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
            
    </div>
    
  );
}

export default App;

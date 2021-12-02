import React from 'react';
import logo from './logo.gif';
import './App.css';
import { client } from './client';
import Posts from './components/Posts';
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';

class App extends React.Component {
  state = {
    articles: []
  }
componentDidMount(){
  client.getEntries()
  .then((response) => {
    console.log(response)
    this.setState({
      articles: response.items
    }

    )
  })
  .catch(console.error)
}


  render (){
    return (
      <div className="App">
        <div className='container'>
          <header>
            <div className='wrapper'>
              <Navbar bg="mygrey" variant="light" sticky="top" expand="md" >
              
              <Navbar.Brand>
            <img src={logo} alt="Logo Velo" />
                Velos from Contentful
              </Navbar.Brand>
              <NavbarToggle />
              <NavbarCollapse>
              <Nav>
              
              <NavDropdown title="Menu">
              <NavDropdown.Item href='Velos/Klapprad'>Start</NavDropdown.Item>
              <NavDropdown.Item href='Velos/Klapprad'>Über Uns</NavDropdown.Item>
                <NavDropdown.Item href='Velos/Klapprad'>Klapprad</NavDropdown.Item>
                <NavDropdown.Item href='Velos/Mountain'>Mountainbike</NavDropdown.Item>
                <NavDropdown.Item href='Velos/Klapprad'>Rennrad</NavDropdown.Item>
              </NavDropdown>
              
                
              </Nav>
              </NavbarCollapse>
              </Navbar>
            </div>
          </header>
          <main><div className='wrapper'>
          <Posts posts={this.state.articles} />
          </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;

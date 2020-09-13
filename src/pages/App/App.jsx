import React, {Component} from 'react';
import {
  Switch,
  Route,
  Redirect,
  Link
} from 'react-router-dom';
import './App.css';
import userService from '../../utils/userService';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import IntroPage from '../IntroPage/IntroPage';
import ContactUsPage from '../ContactUsPage/ContactUsPage';
import IcecreamsPage from './../IcecreamsPage/IcecreamsPage';
import ShowIcecreamPage from './../ShowIcecreamPage/ShowIcecreamPage';
import NewIcecreamPage from './../NewIcecreamPage/NewIcecreamPage';
import NavBar  from './../../components/NavBar/NavBar';
import tokenService from '../../utils/tokenService';

class App extends Component {

    constructor() {
      super();
      this.state = {
        icecreams: [],
        icecreamName: "",
        icecreamDescription: "",
        icecreamPrice: 0,
        icecreamImage_url: "",
        icecreamLocation: "", 
        user: null
      }
    }

    onNameChange = (e) => {
      this.setState({
          icecreamName: e.target.value
      })
    }

    onDescriptionChange = (e) => {
        this.setState({
            icecreamDescription: e.target.value
        })
    }

    onPriceChange = (e) => {
        this.setState({
            icecreamPrice: e.target.value
        })
    }

    onImage_urlChange = (e) => {
      this.setState({
          icecreamImage_url: e.target.value
      })
    }

    onLocationChange = (e) => {
      this.setState({
          icecreamLocation: e.target.value
      })
    }

    handleSignup = () => {
      this.setState({user: userService.getUser()});

      let user = userService.getUser();
      this.setState({user});
      fetch("/api/icecreams", {
        headers: new Headers({'Authorization': 'Bearer ' + tokenService.getToken()})
      })
      .then(res => res.json())
      .then(icecreams => this.setState({ icecreams }))
      .catch(err => console.log(err))
    }

    handleLogin = () => {
      this.setState({user: userService.getUser()});

      let user = userService.getUser();
      this.setState({user});
      fetch("/api/icecreams", {
        headers: new Headers({'Authorization': 'Bearer ' + tokenService.getToken()})
      })
      .then(res => res.json())
      .then(icecreams => this.setState({ icecreams }))
      .catch(err => console.log(err))
    }

    handleLogout = () => {
      userService.logout();
      this.setState({user: null});
    }

    componentDidMount() {
      let user = userService.getUser();
      this.setState({user});
      fetch("/api/icecreams", {
        headers: new Headers({'Authorization': 'Bearer ' + tokenService.getToken()})
      })
      .then(res => res.json())
      .then(icecreams => this.setState({ icecreams }))
      .catch(err => console.log(err))
    }


    createIcecream = (e) => {
      e.preventDefault();
      let user = userService.getUser();
      fetch('/api/icecreams', {
          headers: { 
              "Content-Type": "application/json",
              'Authorization': 'Bearer ' + tokenService.getToken()
          },
          method: 'POST', 
          body: JSON.stringify({ 
              name: this.state.icecreamName, 
              description: this.state.icecreamDescription, 
              price: this.state.icecreamPrice,
              image_url: this.state.icecreamImage_url,
              location: this.state.icecreamLocation
          })
      })
      .then(data => data.json())
      .then((icecreams) => { 
          
          this.setState({
              icecreamName: "", 
              icecreamDescription: "", 
              icecreamPrice: 0, 
              icecreamImage_url: "",
              icecreamLocation: "",
              icecreams: icecreams
          })

          this.props.history.push("/icecream");
          
      })
      .catch(err => console.log(err))
  }

    render() {
      return ( 
          <div>
            <NavBar user = {this.state.user} handleLogout={this.handleLogout}/>
            <header><Link className="Home-Link" to="/">Take Me To The Ice Cream Shop</Link></header>
            <Switch>
              <Route exact path='/' render={() => 
              <IntroPage 
                user={this.state.user}
                handleLogout={this.handleLogout}
              />
              }/>
              <Route exact path='/signup' render={(props) => 
              <SignupPage 
                {...props}
                handleSignup={this.handleSignup}
              />
              }/>
              <Route exact path='/login' render={(props) => 
              <LoginPage
                {...props}
                handleLogin={this.handleLogin}
              />
              }/>
              <Route exact path='/aboutus' render={() => 
              <ContactUsPage 
                user={this.state.user}
                handleLogout={this.handleLogout}
              />
                }/>
              <Route exact path="/icecream/:id" render={ (props) => 
              userService.getUser() ?
              <ShowIcecreamPage
                icecreamData={this.state.icecreams[props.match.params.id]} 
                user={this.state.user}
                handleLogout={this.handleLogout}
              /> 
              :
              <Redirect to='/login' />
              }/>
              <Route exact path="/icecream" render={ () => 
                userService.getUser() ?
              <IcecreamsPage
                user={this.state.user}
                handleLogout={this.handleLogout}
                icecreams={this.state.icecreams}
              /> 
              :
              <Redirect to='/login' />
              } />
              <Route path="/icecreams/new" render={() => 
              userService.getUser() ?
              <NewIcecreamPage  
                              onNameChange={this.onNameChange} 
                              onPriceChange={this.onPriceChange} 
                              onDescriptionChange={this.onDescriptionChange} 
                              onImage_urlChange={this.onImage_urlChange}
                              onLocationChange={this.onLocationChange}
                              name={this.state.icecreamName} 
                              description={this.state.icecreamDescription}
                              price={this.state.icecreamPrice} 
                              image_url={this.state.icecreamImage_url}
                              location={this.state.icecreamLocation}
                              createIcecream={this.createIcecream} 
              />
              :
              <Redirect to='/login' />
              } />
            </Switch>
          </div>
      )
  }
}

export default App;
import {Component} from 'react'
import './App.css';
import WelcomePage from '../WelcomePage/WelcomePage.js'
import StoryForm from '../StoryForm/StoryForm.js'
import StoryPage from '../StoryPage/StoryPage.js'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }

  }
  render () {
    return (
      <BrowserRouter>
      <Switch>
      <Route path='/goatGreeting' render={()=>{return <StoryForm />}}/>
      <Route path='/story' render={()=>{return <StoryPage />}}/>
      <Route path='/' render={()=>{return <WelcomePage />}}/>
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

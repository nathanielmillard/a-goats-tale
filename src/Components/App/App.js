import {Component} from 'react'
import './App.scss';
import WelcomePage from '../WelcomePage/WelcomePage.js'
import StoryForm from '../StoryForm/StoryForm.js'
import StoryPage from '../StoryPage/StoryPage.js'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
    name: '',
    words: []
    }

  }
  saveInputs = (name, words) => {
    this.setState({name: name, words: words})
  }
  render () {
    return (
      <BrowserRouter>
      <section className='.App'>
      <Switch>
      <Route path='/goatGreeting' render={()=>{return <StoryForm saveInputs={this.saveInputs}/>}}/>
      <Route path='/story' render={()=>{return <StoryPage name={this.state.name} words={this.state.words}/>}}/>
      <Route path='/' render={()=>{return <WelcomePage />}}/>
      </Switch>
      </section>
      </BrowserRouter>
    );
  }
}

export default App;

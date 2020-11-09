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
    words: [],
    savedStories: []
    }
  }
  saveStory = () => {
    let storyData = this.state.savedStories
    storyData.push([this.state.image, this.state.name, this.state.words])
    this.setState({savedStories: storyData})
  }
  saveInputs = (name, words, image) => {
    this.setState({name: name, words: words, image: image})
  }
  render () {
    return (
      <BrowserRouter>
      <section className='App'>
      <Switch>
      <Route path='/goatGreeting' render={()=>{return <StoryForm saveInputs={this.saveInputs}/>}}/>
      <Route path='/story' render={()=>{return(
        <StoryPage
        name={this.state.name}
        words={this.state.words}
        saveStory={this.saveStory}
        />)}}/>
      <Route path='/' render={()=>{return <WelcomePage />}}/>
      </Switch>
      </section>
      </BrowserRouter>
    );
  }
}

export default App;

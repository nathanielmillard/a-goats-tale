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
    let isPresent = storyData.find(story => {
      return story[0] === this.state.image && story[1] === this.state.name
    })
    if (!isPresent) {
      storyData.push([this.state.image, this.state.name, this.state.words])
      this.setState({savedStories: storyData})
    }
  }
  saveInputs = (name, words, image) => {
    this.setState({name: name, words: words, image: image})
  }
  updateStory = (e) => {
    let id = e.target.id
    let name = this.state.savedStories[id][1]
    let words = this.state.savedStories[id][2]
    this.setState({name: name, words: words})
    alert('Your Story Updated, Scroll Up to See')
  }
  render () {
    return (
      <BrowserRouter>
      <section className='App'>
      <Switch>
      <Route path='/storyForm' render={()=>{return <StoryForm saveInputs={this.saveInputs}/>}}/>
      <Route path='/story' render={()=>{return(
        <StoryPage
        name={this.state.name}
        words={this.state.words}
        saveStory={this.saveStory}
        updateStory={this.updateStory}
        savedStories={this.state.savedStories}
        />)}}/>
      <Route path='/' render={()=>{return <WelcomePage />}}/>
      </Switch>
      </section>
      </BrowserRouter>
    );
  }
}

export default App;

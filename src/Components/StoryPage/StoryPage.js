import './StoryPage.scss'
import {mainStories} from '../../exports/storyArrays.js'
import StoryTile from '../StoryTile/StoryTile.js'
import {Component} from 'react'
class StoryPage extends Component {
  constructor(props) {
    super(props)
    this.state= {

    }
  }
  createStory () {
    let brokenUpStory = mainStories[0].split('*')
    let namedStory = brokenUpStory.join(` ${this.props.name} `)
    brokenUpStory = namedStory.split('_')
    let finalStory = brokenUpStory.reduce((finalStory, currentSentence, index) => {
      if (this.props.words[index]) {
        finalStory = finalStory + currentSentence + this.props.words[index]
      }
      else {
        finalStory = finalStory + currentSentence
      }
      return finalStory
    }, '')
    let sections = finalStory.split('(')
    return sections.map((section, index) => {
      return <p key={index}>{section}</p>
    })
  }
  createStoryCards() {
    let storyCards = []
    let populateCards = () => {

    }
  }
 render() {
   return (
     <section className='StoryPage'>
     {this.createStory()}
     <h2> The End! </h2>
     <section className='Button Pannel'>
     <button onClick={this.props.saveStory}> Save This Story </button>
     <button onClick={this.popularStoryCards}> See Saved Stories </button>
     </section>
     <section className='storyTiles'>
     {this.createStoryTiles}
     </section>
     </section>
   )
 }
}

export default StoryPage

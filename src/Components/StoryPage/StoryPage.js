import './StoryPage.scss'
import {mainStories} from '../../exports/storyArrays.js'
import StoryTile from '../StoryTile/StoryTile.js'
import {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

class StoryPage extends Component {
  constructor(props) {
    super(props)
    this.state= {
      storyTiles: [],
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
  populateTiles = () => {
    let tiles = this.props.savedStories.map((story, index) => {
        return (<StoryTile
          key={index}
          id={index}
          img={story[0]}
          name={story[1]}
          words={story[2]}
          updateStory={this.props.updateStory}
        />)
      })
    this.setState({storyTiles: tiles})
  }

  render() {
   return (
     <section className='StoryPage'>
       {this.createStory()}
       <h2> The End! </h2>
       <footer>
         <section className='buttonPanel'>
           <button onClick={this.props.saveStory}> Save This Story </button>
           <Link to='/StoryForm'><button>Write a new story</button></Link>
           <button onClick={this.populateTiles}> See Saved Stories </button>
         </section>
         <section className='storyTiles'>
           {this.state.storyTiles}
         </section>
        </footer>
     </section>
   )
 }
}

export default StoryPage

StoryPage.propTypes = {
  name: PropTypes.string,
  words: PropTypes.array,
  saveStory: PropTypes.func.isRequired,
  updateStory: PropTypes.func.isRequired,
  savedStories: PropTypes.array
}

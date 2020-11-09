import {Component} from 'react'
import {Link} from 'react-router-dom'
import './StoryForm.scss'
class StoryForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      words: [],
    }
  }
  updateWords = (e) => {
    let id = e.target.id
    let allWords = this.state.words
    allWords[id] = e.target.value
    // console.log(allWords)
    // this.setState({words: e.target.value})
  }
  saveInfo = () => {
    this.props.saveInputs(this.state.name, this.state.words)
  }
  updateName = (e) => {
    this.setState({name: e.target.value})
  }
  render(){
    return (
      <form>
      <section className="goatBio">
        <h1>Here's a Goat</h1>
        <img src='https://placegoat.com/250'/>
        <label>
        It needs a name:
        <input type='text' onChange={this.updateName}/>
        </label>
      </section>
      <section className="wordChoice">
        <label>
          A name for a town:
          <input id='0' type='text' onChange={this.updateWords}/>
        </label>
        <label>
          A crop
          <input id='1' type='text' onChange={this.updateWords}/>
        </label>
        <label>
          Two adjectives
          <input id='2' type='text' onChange={this.updateWords}/>
          <input id='3' type='text' onChange={this.updateWords}/>
        </label>
        <label>
          One number:
          <input id='4' type='text' onChange={this.updateWords}/>
        </label>
        <label>
          One name for a person:
          <input id='5' type='text' onChange={this.updateWords}/>
        </label>
        <label>
          Four adjectives
          <input id='6' type='text' onChange={this.updateWords}/>
          <input id='7' type='text' onChange={this.updateWords}/>
          <input id='8' type='text' onChange={this.updateWords}/>
          <input id='9' type='text' onChange={this.updateWords}/>
        </label>
        <label>
          A fruit:
          <input id='10' type='text' onChange={this.updateWords}/>
        </label>
        <label>
          One noun:
          <input id='11' type='text' onChange={this.updateWords}/>
        </label>
        <Link to='/story' onClick={this.saveInfo}>
        Read Your Story
        </Link>
      </section>
      </form>
    )
  }
}

export default StoryForm

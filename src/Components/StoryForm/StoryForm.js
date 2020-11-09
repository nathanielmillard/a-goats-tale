import {Component} from 'react'
import {Link} from 'react-router-dom'
import {getThatFox, getThatGoat} from '../../exports/apiCalls.js'
import './StoryForm.scss'
class StoryForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      words: [],
      image: '',
      incomplete: true,
    }
  }
  updateWords = (e) => {
    if (this.state.words.length === 12 && this.state.name) {
      this.setState({incomplete: false})
    }
    let id = e.target.id
    let allWords = this.state.words
    allWords[id] = e.target.value
  }
  saveInfo = () => {
    this.props.saveInputs(this.state.name, this.state.words, this.state.image)
  }
  updateName = (e) => {
    this.setState({name: e.target.value})
  }
  async componentDidMount(){
    // let goatPic = await getThatGoat()
    let imageUrl = await getThatFox()
    this.setState({image: imageUrl})
  }
  render(){
    return (
      <form className='StoryForm' autoComplete="off">
      <section className="goatBio">
        <h1>Here's a Goat</h1>
        <img src={this.state.image} alt='A random goat photo'/>
        <label>
        It needs a name:
        <input type='text' onChange={this.updateName}/>
        </label>
        <Link to='/story' onClick={this.saveInfo}>
        <button disabled={this.state.incomplete}> Read Your Story </button>
        </Link>
      </section>
      <section className="wordChoice">
        <label>
          A name for a town:
          <input id='0' type='text' onChange={this.updateWords}/>
        </label>
        <label>
          A crop:
          <input id='1' type='text' onChange={this.updateWords}/>
        </label>
        <label>
          Two adjectives:
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
          Four adjectives:
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
      </section>
      </form>
    )
  }
}

export default StoryForm

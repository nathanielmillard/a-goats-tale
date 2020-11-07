import {Component} from 'react'
import {Link} from 'react-router-dom'
import './StoryForm.scss'
class StoryForm extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
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
          Name three adjectives:
          <input type='text'/>
          <input type='text'/>
          <input type='text'/>
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

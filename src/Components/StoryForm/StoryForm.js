import {Component} from 'react'
import {Link} from 'react-router-dom'
class StoryForm extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render(){
    return (
      <form>
      <section className="goatBio">
        <h1>Here's a Goat</h1>
        <img src='https://placegoat.com/250'/>
        <label>
        It needs a name:
        <input type='text'/>
        </label>
      </section>
      <section className="wordChoice">
        <label>
          Name three adjectives:
          <input type='text'/>
          <input type='text'/>
          <input type='text'/>
        </label>
      </section>
      <Link to='/story'>
      Read Your Story
      </Link>
      </form>
    )
  }
}

export default StoryForm

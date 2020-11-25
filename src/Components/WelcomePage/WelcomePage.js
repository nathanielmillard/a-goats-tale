import './WelcomePage.scss'
import {Link} from "react-router-dom"
import PropTypes from 'prop-types'

const WelcomePage = (props ) => {
  return(
    <section className='WelcomePage'>
      <h1> Welcome to a Fox's Tale </h1>
      <p> A story building experience for you and your sleepy kid </p>
      <Link to='./storyForm'>
      <button>Meet The Fox</button>
      </Link>
    </section>
  )
}

export default WelcomePage

WelcomePage.propTypes = {

}

import './WelcomePage.scss'
import {Link} from "react-router-dom"
const WelcomePage = (props ) => {
  return(
    <section className='WelcomePage'>
      <h1> Welcome to a Goat's Tale </h1>
      <p> A story building experience for you and your sleepy kid </p>
      <Link to='./goatGreeting'>
      <h2>Meet The Goat</h2>
      </Link>
    </section>
  )
}

export default WelcomePage

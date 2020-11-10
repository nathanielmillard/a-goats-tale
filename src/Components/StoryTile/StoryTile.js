import './StoryTile.scss'
import PropTypes from 'prop-types'
const StoryTile = (props) => {
  return (
  <button className='StoryTile' id={props.id} onClick={props.updateStory}>
    <img id={props.id} src={props.img} alt={`A goat named ${props.name}`} />
    <p id={props.id}>{props.name}'s story</p>
  </button>
)
}

export default StoryTile

StoryTile.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  updateStory: PropTypes.func.isRequired

}

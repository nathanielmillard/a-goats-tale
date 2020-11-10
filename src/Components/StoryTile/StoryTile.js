import './StoryTile.scss'
const StoryTile = (props) => {
  return (
  <button className='StoryTile' id={props.id} onClick={props.updateStory}>
    <img id={props.id} src={props.img} alt={`A goat named ${props.name}`} />
    <p id={props.id}>{props.name}'s story</p>
  </button>
)
}

export default StoryTile

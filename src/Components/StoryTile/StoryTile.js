const StoryTile = (props) => {
  <div className='StoryTile' id={props.id}>
    <img src={props.img} alt='Goat Photo' />
    <p>{props.name}'s story</p>
  </div>
}

import StoryTile from './StoryTile.js'
import {render, screen} from '@testing-Library/react'
import userEvent from '@testing-Library/user-event'

describe('Story Tile', () => {
  let mockedFunction = jest.fn()
  beforeEach(()=>{
    render (
      <StoryTile
      id={0}
      img='https://randomfox.ca/images/32.jpg'
      name='Brad'
      updateStory={mockedFunction}
      />
    )
  });
  it('Should render the name and image passed in', () => {
    let name = screen.getByText("Brad's story")
    let image = screen.getByAltText("A goat named Brad")
    expect(name).toBeInTheDocument()
    expect(image).toBeInTheDocument()
  });
  it('Should fire a function when clicked', () => {
    let name = screen.getByText("Brad's story")
    let image = screen.getByAltText("A goat named Brad")
    userEvent.click(name)
    expect(mockedFunction).toHaveBeenCalledTimes(1)
  });
});

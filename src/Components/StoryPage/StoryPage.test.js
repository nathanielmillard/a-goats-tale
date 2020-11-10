import StoryPage from './StoryPage.js'
import {render, screen} from '@testing-Library/react'
import {MemoryRouter} from 'react-router-dom'
import userEvent from '@testing-Library/user-event'

describe('Welcome Page', () => {
  let mockSaveStory = jest.fn()
  let mockUpdateStory = jest.fn()

  beforeEach(()=>{
    render (
      <MemoryRouter>
        <StoryPage
        name='Brad'
        words={['One', 'Two', 'Three', 'Four']}
        saveStory={mockSaveStory}
        updateStory={mockUpdateStory}
        savedStories={[]}
         />
      </MemoryRouter>
    )
  });
  it('Should show a dynamic story', () => {
    let firstLine = screen.getByText("There once was a goat named Brad .")
    let secondLine = screen.getByText("They were in a small goat village called One that could be found far far away, over fields of Two, over the Three mountains, and through a Four forest.")
    expect(firstLine).toBeInTheDocument
    expect(secondLine).toBeInTheDocument
  });
  it('Should have user buttons', () => {
    let button = screen.getAllByRole('button')
    expect(button[0]).toBeInTheDocument()
    expect(button[1]).toBeInTheDocument()
    expect(button[2]).toBeInTheDocument()
  });
  it('Should allow a user to save the story', () => {
    let saveButton = screen.getByText('Save This Story')
    userEvent.click(saveButton)
    expect(mockSaveStory).toHaveBeenCalledTimes(1)
  })
});

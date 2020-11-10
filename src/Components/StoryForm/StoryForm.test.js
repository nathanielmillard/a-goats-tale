import StoryForm from './StoryForm.js'
import {render, screen, waitFor} from '@testing-Library/react'
import {MemoryRouter} from 'react-router-dom'
import userEvent from '@testing-Library/user-event'
import {getThatFox} from '../../exports/apiCalls.js'
jest.mock('../../exports/apiCalls.js')

describe('Story Form', () => {
  it('Should render the story form', () => {
    let mockSaveInputs = jest.fn()
    render (
      <MemoryRouter>
        <StoryForm
        saveInputs={mockSaveInputs}
         />
      </MemoryRouter>
    )
    let title = screen.getByText("Here's a Goat")
    let submitButton = screen.getByText("Read Your Story")
    let aTown = screen.getByLabelText("A name for a town:")
    let aCrop = screen.getByLabelText("A crop:")
    let twoAdj = screen.getByLabelText("Two adjectives:")
    let aNum = screen.getByLabelText("One number:")
    let aName = screen.getByLabelText("One name for a person:")
    let fourAdj = screen.getByLabelText("Four adjectives:")
    let aFruit = screen.getByLabelText("A fruit:")
    let aNoun = screen.getByLabelText("One noun:")
    expect(title).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()
    expect(aTown).toBeInTheDocument()
    expect(aCrop).toBeInTheDocument()
    expect(twoAdj).toBeInTheDocument()
    expect(aNum).toBeInTheDocument()
    expect(aName).toBeInTheDocument()
    expect(fourAdj).toBeInTheDocument()
    expect(aFruit).toBeInTheDocument()
    expect(aNoun).toBeInTheDocument()
  })
  it('Should show a loading message', () => {
    let mockSaveInputs = jest.fn()
    render (
      <MemoryRouter>
        <StoryForm
        saveInputs={mockSaveInputs}
         />
      </MemoryRouter>
    )
    let loading = screen.getByText('Loading...')
    expect(loading).toBeInTheDocument()
  });
  it('Should show a loading message', async () => {
    getThatFox.mockResolvedValue('https://randomfox.ca/images/32.jpg')
    let mockSaveInputs = jest.fn()
    render (
      <MemoryRouter>
        <StoryForm
        saveInputs={mockSaveInputs}
         />
      </MemoryRouter>
    )
    let image = await waitFor(()=>{
      screen.getByAltText('A random goat photo')
    })
    expect(screen.getByAltText('A random goat photo')).toBeInTheDocument()
  });
  it('Should save inputs', async () => {
    getThatFox.mockResolvedValue('https://randomfox.ca/images/32.jpg')
    let mockSaveInputs = jest.fn()
    render (
      <MemoryRouter>
        <StoryForm
        saveInputs={mockSaveInputs}
         />
      </MemoryRouter>
    )
    let image = await waitFor(()=>{
      screen.getByAltText('A random goat photo')
    })
    let submitButton = screen.getByText("Read Your Story")
    let aName = screen.getByLabelText("They need a name:")
    let aTown = screen.getByLabelText("A name for a town:")
    let aNoun = screen.getByLabelText("One noun:")
    userEvent.type(aName, 'Brad')
    userEvent.type(aTown, 'Denver')
    userEvent.type(aNoun, 'shoe')
    userEvent.click(submitButton)
    expect(mockSaveInputs).toHaveBeenCalledTimes(1)
    expect(mockSaveInputs).toHaveBeenCalledWith('Brad', ['Denver', undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, 'shoe'], 'https://randomfox.ca/images/32.jpg')
  });
});

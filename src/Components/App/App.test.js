import App from './App.js'
import {render, screen, waitFor} from '@testing-Library/react'
import {MemoryRouter} from 'react-router-dom'
import userEvent from '@testing-Library/user-event'
import {getThatFox} from '../../exports/apiCalls.js'
jest.mock('../../exports/apiCalls.js')

describe('App', () => {
  let mockSaveStory = jest.fn()
  let mockUpdateStory = jest.fn()
  beforeEach(()=>{
    getThatFox.mockResolvedValue('https://randomfox.ca/images/32.jpg')
    render (
      <MemoryRouter>
        <App
         />
      </MemoryRouter>
    )
  });
  it('Should show welcome page on load', () => {
    let greeting = screen.getByText("Welcome to a Goat's Tale")
    let description = screen.getByText("A story building experience for you and your sleepy kid")
    let button = screen.getByText("Meet The Goat")
    expect(greeting).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  });
  it('Should story form after user clicks Link', () => {
    let button = screen.getByText("Meet The Goat")
    userEvent.click(button)
    let title = screen.getByText("Here's a Goat")
    let submitButton = screen.getByText("Read Your Story")
    expect(title).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()
  });
  it('Should be able to submit the form after filling it out', () => {
    let submitButton = screen.getByText("Read Your Story")
    let aName = screen.getByLabelText("They need a name:")
    let aTown = screen.getByLabelText("A name for a town:")
    let aNoun = screen.getByLabelText("One noun:")
    userEvent.type(aName, 'Brad')
    userEvent.type(aNoun, 'shoe')
    userEvent.click(submitButton)
    let firstLine = screen.getByText("There once was a goat named Brad .")
    expect(firstLine).toBeInTheDocument
  });
  it('Should be able to make another story', () => {
    let newStoryButton = screen.getByText('Write a new story')
    userEvent.click(newStoryButton)
    let title = screen.getByText("Here's a Goat")
    let submitButton = screen.getByText("Read Your Story")
    expect(title).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()
  });
});

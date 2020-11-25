import WelcomePage from './WelcomePage.js'
import {render, screen} from '@testing-library/react'
import {MemoryRouter} from 'react-router-dom'

describe('Welcome Page', () => {
  beforeEach(()=>{
    render (
      <MemoryRouter>
        <WelcomePage />
      </MemoryRouter>
    )
  });
  it('Should render a greeting', () => {
    let greeting = screen.getByText("Welcome to a Goat's Tale")
    let description = screen.getByText("A story building experience for you and your sleepy kid")
    let button = screen.getByText("Meet The Goat")
    expect(greeting).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  });
  it('Should have a navigation button', () => {
    let button = screen.getByRole("button")
    expect(button).toBeInTheDocument()
  });
});

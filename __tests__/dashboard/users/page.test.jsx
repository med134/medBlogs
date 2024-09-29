import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import UsersDashboard from '@/app/components/UsersDashboard'
describe('usersDashboard', () => {
  it('renders a heading', () => {
    render(<UsersDashboard />)
 
    const heading = screen.getByRole("heading", {
      name:"Admin & Users",
    });
 
    expect(heading).toBeInTheDocument();
  })
})
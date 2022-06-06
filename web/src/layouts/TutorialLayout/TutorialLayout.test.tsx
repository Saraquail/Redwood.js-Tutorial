import { render } from '@redwoodjs/testing/web'

import TutorialLayout from './TutorialLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TutorialLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TutorialLayout />)
    }).not.toThrow()
  })
})

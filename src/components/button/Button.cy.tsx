import { Button } from './Button'

describe('<Button />', () => {
  it('Renders default button', () => {
    cy.mount(<Button label="Default" />)
  })
})

describe('<Button />', () => {
  it('Renders primary button', () => {
    cy.mount(<Button label="Primary" isPrimary />).should('have.class', 'storybook-button--primary')
  })
})

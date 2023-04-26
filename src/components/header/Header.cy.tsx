import { Header } from './Header';

describe('<Header />', () => {
  beforeEach(() => {
    cy.mount(<Header onLogin={() => {}} onLogout={() => {}} onCreateAccount={() => {}} />);
  });

  it('Header without user', () => {
    cy.get('button[data-cy="login"]');
    cy.get('button[data-cy="sign-up"]');
  });
});

describe('<Header />', () => {
  beforeEach(() => {
    cy.mount(<Header user={{ name: 'Bob' }} onLogin={() => {}} onLogout={() => {}} onCreateAccount={() => {}} />);
  });

  it('Header with user', () => {
    cy.get('button[data-cy="logout"]');
    cy.contains(`Welcome, Bob!`);
  });
});

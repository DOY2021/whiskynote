import { mount } from '@cypress/react';
// import Slider from '../../../src/Feature/Review/Slider/Slider';
const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
  window.HTMLInputElement.prototype,
  'value',
).set;

const changeRangeInputValue = $range => value => {
  nativeInputValueSetter.call($range[0], value);
  $range[0].dispatchEvent(new Event('change', { value, bubbles: true }));
};

describe('Whisky Review Form', function () {
  it('renders the whisky breadcrumb', function () {
    cy.visit('/');
    cy.get('[data-cy=breadcrumb]').should('exist');
  });

  it('slides for nose, taste, finish', function () {
    cy.visit('/');
    cy.get('[data-cy=slider-nose]').then(input =>
      changeRangeInputValue(input)(30),
    );
    cy.get('[data-cy=slider-taste]').then(input =>
      changeRangeInputValue(input)(30),
    );
    cy.get('[data-cy=slider-finish]').then(input =>
      changeRangeInputValue(input)(30),
    );
  });

  it('renders nose, taste, finish whiskynote', function() {
    cy.visit('/');
    cy.get('[data-cy="whiskynote-nose"]').should('exist');
    cy.get('[data-cy="whiskynote-taste"]').should('exist');
    cy.get('[data-cy="whiskynote-finish"]').should('exist');
  })

  it('writes review', function () {
    cy.visit('/');
    cy.get('textarea')
      .type('Hello world!')
      .should('have.value', 'Hello world!');
  });
});

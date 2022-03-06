import {registrationPage} from '../../support/pages/registrationPage';

const rejestrationPage = registrationPage.rejestrationPage;
const hamburgerMenuButton = registrationPage.hamburgerMenuButton;
const firstNameField = registrationPage.firstNameField;
const lastNameField = registrationPage.lastNameField;
const emailField = registrationPage.emailField;
const passwordField = registrationPage.passwordField;
const passwordConfirmationField = registrationPage.passwordConfirmationField;
const prefixField = registrationPage.prefixField;
const phoneNumberField = registrationPage.phoneNumberField;
const nipField = registrationPage.nipField;
const companyNameField = registrationPage.companyNameField;
const submitRejestractionButton = registrationPage.submitRejestractionButton;
const howItWorksButton = registrationPage.howItWorksButton;
const registerAsCompanyButton = registrationPage.registerAsCompanyButton;
const registerAsPrivateUserButton = registrationPage.registerAsPrivateUserButton;

describe('Rejestracja', () => {
    beforeEach(() => {
        cy.visit(rejestrationPage);
    });

    it('Przejście do strony Jak to działa?', () => {
        cy.get(hamburgerMenuButton).click();
        cy.get(howItWorksButton).click();

        cy.url().should('eq', 'https://shipload.eu/client/init-freight');
        cy.get('#HOW_IT_WORKS').should("exist");
    });

    it('Nieudana rejestracja po podaniu niewłaściwego numeru telefonu z 8 cyframi', () => {
        cy.get(registerAsCompanyButton).click();
        cy.get(phoneNumberField).type('12345678');
        cy.get(submitRejestractionButton).click();

        cy.get('#mat-error-5 > app-error-label > .ng-star-inserted').should('have.text', '*wartość nie jest poprawnym numerem telefonu');

        cy.get('#mat-error-0 > app-error-label > .ng-star-inserted').should('have.text', '*pole jest wymagane');
        cy.get('#mat-error-1 > app-error-label > .ng-star-inserted').should('have.text', '*pole jest wymagane');
        cy.get('#mat-error-2 > app-error-label > .ng-star-inserted').should('have.text', '*pole jest wymagane');
        cy.get('#mat-error-3 > app-error-label > .ng-star-inserted').should('have.text', '*pole jest wymagane');
        cy.get('#mat-error-4 > app-error-label > .ng-star-inserted').should('have.text', '*pole jest wymagane');
        cy.get('#mat-error-6 > app-error-label > .ng-star-inserted').should('have.text', '*pole jest wymagane');
        cy.get('#mat-error-7 > app-error-label > .ng-star-inserted').should('have.text', '*pole jest wymagane');
    });

    it('Zmiana rodzaju formularza na osobę prywatną', () => {
        cy.get(registerAsPrivateUserButton).click();

        cy.get(firstNameField).should('have.text', 'Imię *');
        cy.get(lastNameField).should('have.text', 'Nazwisko *');
        cy.get(emailField).should('have.text', 'Email *');
        cy.get(passwordField).should('have.text', 'Hasło *');
        cy.get(passwordConfirmationField).should('have.text', 'Powtórz hasło *');
        cy.get(prefixField).should('exist')
        cy.get(phoneNumberField).should('have.text', 'Nr telefonu *');

        cy.get(nipField).should('not.exist');
        cy.get(companyNameField).should('not.exist');

    });
})


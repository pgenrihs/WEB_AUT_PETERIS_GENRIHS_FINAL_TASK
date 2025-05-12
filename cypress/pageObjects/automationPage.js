import { BasePage } from "./basePage";

export class AutomationPage extends BasePage{
    static get url() {
        return "automation-practice-form";
    }

    static firstName() {
        return cy.get("#firstName");
    }

    static lastName() {
        return cy.get("#lastName");
    }

    static email() {
        return cy.get("#userEmail");
    }

    static gender() {
        return cy.get('#genterWrapper');
    }

    static phoneNumber() {
        return cy.get("#userNumber");
    }

    static dateOfBirth() {
        return cy.get("#dateOfBirthInput");
    }

    static subjects() {
        return cy.get("#subjectsInput");
    }

    static hobbies() {
        return cy.get("#hobbiesWrapper");
    }

    static address() {
        return cy.get("#currentAddress");
    }

    static state() {
        return cy.get("#state");
    }

    static city() {
        return cy.get("#city");
    }

    static submit() {
        return cy.get("#submit");
    }

    static completeTable() {
        return cy.get("table tbody tr");
    }
}

import { AutomationPage } from "../pageObjects/automationPage";
describe("DEMO QA", () => {
  context("Automation practice form", () => {

      beforeEach(() => {
          AutomationPage.visit();
      });

      it('student reg form', () => {
          AutomationPage.firstName().type("Ģirts");
          AutomationPage.lastName().type("Testeris");
          AutomationPage.email().type("testeris@testpasts.lv");
          AutomationPage.gender().contains("Male").click();
          AutomationPage.phoneNumber().type("1234567891");
          AutomationPage.dateOfBirth().click();
          cy.get(".react-datepicker__month-select").select("February");
          cy.get(".react-datepicker__year-select").select("1930");
          cy.get(".react-datepicker__day--020").click();
          AutomationPage.subjects().type("Economics");
          cy.get(".subjects-auto-complete__menu-list").contains("Economics").click();
          AutomationPage.hobbies().contains("Music").click();
          cy.get('input[type="file"]').selectFile("testimg.jpg");
          AutomationPage.address().type("Test St. 1");
          AutomationPage.state().type("NCR");
          cy.get(".css-26l3qy-menu").contains("NCR").click();
          AutomationPage.city().type("Delhi");
          cy.get(".css-26l3qy-menu").contains("Delhi").click();
          AutomationPage.submit().click();

          //Verification
          cy.get(".modal-content").should("be.visible");
          AutomationPage.completeTable().eq(0).contains("Ģirts Testeris");
          AutomationPage.completeTable().eq(1).contains("testeris@testpasts.lv");
          AutomationPage.completeTable().eq(2).contains("Male");
          AutomationPage.completeTable().eq(3).contains("1234567891");
          AutomationPage.completeTable().eq(4).contains("20 February,1930");
          AutomationPage.completeTable().eq(5).contains("Economics");
          AutomationPage.completeTable().eq(6).contains("Music");
          AutomationPage.completeTable().eq(7).contains("testimg.jpg");
          AutomationPage.completeTable().eq(8).contains("Test St. 1");
          AutomationPage.completeTable().eq(9).contains("NCR Delhi");
      })
      });
});
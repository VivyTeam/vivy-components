/// <reference types="Cypress" />

context("Visual Regression - Vivy", () => {
  beforeEach(() => {
    cy.eyesOpen({
      appName: "Vivy Components",
      testName: "Visual Regression - Vivy",
      browser: [
        {
          name: "chrome",
          width: 1280,
          height: 800
        },
        {
          name: "firefox",
          width: 1280,
          height: 800
        }
      ]
    });
  });

  afterEach(() => {
    cy.eyesClose();
  });

  it("Should be able to click the welcome tab to show the rest of the tabs", () => {
    cy.visit(`http://localhost:3006/?path=/story/welcome`);
    cy.wait(2000);
    cy.get("#explorerwelcome").trigger("mousedown");
  });

  it("Should be able to click the principles tab", () => {
    cy.visit(`http://localhost:3006/?path=/story/welcome--principles`);
    cy.wait(2000);
    cy.get("#explorerwelcome--principles").trigger("mousedown");
  });

  it("Should be able to click the vision-ethos tab", () => {
    cy.wait(2000);
    cy.get("#explorerwelcome--vision-ethos").trigger("mousedown");
    cy.visit(`http://localhost:3006/?path=/story/welcome--vision-ethos`);
  });

  it("Should be able to click the typography tab", () => {
    cy.wait(2000);
    cy.get("#explorerwelcome--typography").trigger("mousedown");
    cy.visit(`http://localhost:3006/?path=/story/welcome--typography`);
  });

  it("Should be able to click the color-palette tab", () => {
    cy.wait(2000);
    cy.get("#explorerwelcome--color-palette").trigger("mousedown");
    cy.visit(`http://localhost:3006/?path=/story/welcome--color-palette`);
  });

  it("Should be able to click the logos tab", () => {
    cy.wait(2000);
    cy.get("#explorerwelcome--logos").trigger("mousedown");
    cy.visit(`http://localhost:3006/?path=/story/welcome--logos`);
  });

  it("Should be able to click the alert tab to show the rest of the tabs", () => {
    cy.visit(`http://localhost:3006/?path=/story/alert`);
    cy.wait(2000);
    cy.get("#exploreralert").trigger("mousedown");
  });

  it("Should be able to click the success tab", () => {
    cy.visit(`http://localhost:3006/?path=/story/alert--success`);
    cy.wait(2000);
    cy.get("#exploreralert--success").trigger("mousedown");
  });

  it("Should be able to click the warning tab", () => {
    cy.wait(2000);
    cy.get("#exploreralert--warning").trigger("mousedown");
    cy.visit(`http://localhost:3006/?path=/story/alert--warning`);
  });

  it("Should be able to click the without-success-icon tab", () => {
    cy.wait(2000);
    cy.get("#exploreralert--without-success-icon").trigger("mousedown");
    cy.visit(`http://localhost:3006/?path=/story/alert--without-success-icon`);
  });

  it("Should be able to click the without-warning-icon tab", () => {
    cy.wait(2000);
    cy.get("#exploreralert--without-warning-icon").trigger("mousedown");
    cy.visit(`http://localhost:3006/?path=/story/alert--without-warning-icon`);
  });
});

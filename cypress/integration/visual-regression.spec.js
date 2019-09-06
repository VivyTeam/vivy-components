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
    cy.get("#explorerwelcome").trigger("mousedown");
  });

  it("Should be able to click the principles tab", () => {
    cy.visit(`http://localhost:3006/?path=/story/welcome--principles`);
    cy.get("#explorerwelcome--principles").trigger("mousedown");
  });

  it("Should be able to click the vision-ethos tab", () => {
    cy.get("#explorerwelcome--vision-ethos").trigger("mousedown");
    cy.visit(`http://localhost:3006/?path=/story/welcome--vision-ethos`);
  });

  it("Should be able to click the typography tab", () => {
    cy.get("#explorerwelcome--typography").trigger("mousedown");
    cy.visit(`http://localhost:3006/?path=/story/welcome--typography`);
  });

  it("Should be able to click the color-palette tab", () => {
    cy.get("#explorerwelcome--color-palette").trigger("mousedown");
    cy.visit(`http://localhost:3006/?path=/story/welcome--color-palette`);
  });

  it("Should be able to click the logos tab", () => {
    cy.get("#explorerwelcome--logos").trigger("mousedown");
    cy.visit(`http://localhost:3006/?path=/story/welcome--logos`);
  });

  it("Should be able to click the alert tab to show the rest of the tabs", () => {
    cy.visit(`http://localhost:3006/?path=/story/alert`);
    cy.get("#exploreralert").trigger("mousedown");
  });

  it("Should be able to click the success tab", () => {
    cy.visit(`http://localhost:3006/?path=/story/alert--success`);
    cy.get("#exploreralert--success").trigger("mousedown");
  });

  it("Should be able to click the warning tab", () => {
    cy.get("#exploreralert--warning").trigger("mousedown");
    cy.visit(`http://localhost:3006/?path=/story/alert--warning`);
  });

  it("Should be able to click the without-success-icon tab", () => {
    cy.get("#exploreralert--without-success-icon").trigger("mousedown");
    cy.visit(`http://localhost:3006/?path=/story/alert--without-success-icon`);
  });

  it("Should be able to click the without-warning-icon tab", () => {
    cy.get("#exploreralert--without-warning-icon").trigger("mousedown");
    cy.visit(`http://localhost:3006/?path=/story/alert--without-warning-icon`);
  });

  it("Should be able to click the alertsmall tab to show the rest of the tabs", () => {
    cy.visit(`http://localhost:3006/?path=/story/alertsmall`);
    cy.get("#exploreralertsmall").trigger("mousedown");
  });

  it("Should be able to click the success tab", () => {
    cy.visit(`http://localhost:3006/?path=/story/alertsmall--success`);
    cy.get("#alertsmall--success").trigger("mousedown");
  });

  it("Should be able to click the warning tab", () => {
    cy.get("#alertsmall--warning").trigger("mousedown");
    cy.visit(`http://localhost:3006/?path=/story/alertsmall--warning`);
  });

  it("Should be able to click the without-success-icon tab", () => {
    cy.get("#alertsmall--without-success-icon").trigger("mousedown");
    cy.visit(
      `http://localhost:3006/?path=/story/alertsmall--without-success-icon`
    );
  });

  it("Should be able to click the without-warning-icon tab", () => {
    cy.get("#alertsmall--without-warning-icon").trigger("mousedown");
    cy.visit(
      `http://localhost:3006/?path=/story/alertsmall--without-warning-icon`
    );
  });

  it("Should be able to click the anchorbutton tab to show the rest of the tabs", () => {
    cy.visit(`http://localhost:3006/?path=/story/anchorbutton`);
    cy.get("#exploreranchorbutton").trigger("mousedown");
  });

  it("Should be able to click the primary tab", () => {
    cy.visit(`http://localhost:3006/?path=/story/anchorbutton--primary`);
    cy.get("#anchorbutton--primary").trigger("mousedown");
  });

  it("Should be able to click the primary-with-height-large tab", () => {
    cy.get("#anchorbutton--primary-with-height-large").trigger("mousedown");
    cy.visit(
      `http://localhost:3006/?path=/story/anchorbutton--primary-with-height-large`
    );
  });

  it("Should be able to click the primary-with-height-small tab", () => {
    cy.get("#anchorbutton--primary-with-height-small").trigger("mousedown");
    cy.visit(
      `http://localhost:3006/?path=/story/anchorbutton--primary-with-height-small`
    );
  });

  it("Should be able to click the primary-with-custom-width tab", () => {
    cy.get("#anchorbutton--primary-with-custom-width").trigger("mousedown");
    cy.visit(
      `http://localhost:3006/?path=/story/anchorbutton--primary-with-custom-width`
    );
  });

  it("Should be able to click the secondary tab", () => {
    cy.get("#anchorbutton--secondary").trigger("mousedown");
    cy.visit(`http://localhost:3006/?path=/story/anchorbutton--secondary`);
  });

  it("Should be able to click the secondary-with-height-large tab", () => {
    cy.get("#anchorbutton--secondary-with-height-large").trigger("mousedown");
    cy.visit(
      `http://localhost:3006/?path=/story/anchorbutton--secondary-with-height-large`
    );
  });

  it("Should be able to click the secondary-with-height-small tab", () => {
    cy.get("#anchorbutton--secondary-with-height-small").trigger("mousedown");
    cy.visit(
      `http://localhost:3006/?path=/story/anchorbutton--secondary-with-height-small`
    );
  });

  it("Should be able to click the secondary-with-custom-width tab", () => {
    cy.get("#anchorbutton--secondary-with-custom-width").trigger("mousedown");
    cy.visit(
      `http://localhost:3006/?path=/story/anchorbutton--secondary-with-custom-width`
    );
  });

  it("Should be able to click the with-an-icon tab", () => {
    cy.get("#anchorbutton--with-an-icon").trigger("mousedown");
    cy.visit(`http://localhost:3006/?path=/story/anchorbutton--with-an-icon`);
  });

  it("Should be able to click the button tab to show the rest of the tabs", () => {
    cy.visit(`http://localhost:3006/?path=/story/button`);
    cy.get("#explorerbutton").trigger("mousedown");
  });

  it("Should be able to click the primary tab", () => {
    cy.visit(`http://localhost:3006/?path=/story/button--primary`);
    cy.get("#button--primary").trigger("mousedown");
  });

  it("Should be able to click the primary-height-large tab", () => {
    cy.get("#button--primary-height-large").trigger("mousedown");
    cy.visit(`http://localhost:3006/?path=/story/button--primary-height-large`);
  });

  it("Should be able to click the primary-with-height-small tab", () => {
    cy.get("#button--primary-with-height-small").trigger("mousedown");
    cy.visit(
      `http://localhost:3006/?path=/story/button--primary-with-height-small`
    );
  });

  it("Should be able to click the primary-with-custom-width tab", () => {
    cy.get("#button--primary-with-custom-width").trigger("mousedown");
    cy.visit(
      `http://localhost:3006/?path=/story/button--primary-with-custom-width`
    );
  });

  it("Should be able to click the primary-disabled tab", () => {
    cy.get("#button--primary-disabled").trigger("mousedown");
    cy.visit(`http://localhost:3006/?path=/story/button--primary-disabled`);
  });

  it("Should be able to click the secondary tab", () => {
    cy.get("#button--secondary").trigger("mousedown");
    cy.visit(`http://localhost:3006/?path=/story/button--secondary`);
  });

  it("Should be able to click the secondary-with-height-large tab", () => {
    cy.get("#button--secondary-with-height-large").trigger("mousedown");
    cy.visit(
      `http://localhost:3006/?path=/story/button--secondary-with-height-large`
    );
  });

  it("Should be able to click the secondary-with-height-small tab", () => {
    cy.get("#button--secondary-with-height-small").trigger("mousedown");
    cy.visit(
      `http://localhost:3006/?path=/story/button--secondary-with-height-small`
    );
  });

  it("Should be able to click the secondary-with-custom-width tab", () => {
    cy.get("#button--secondary-with-custom-width").trigger("mousedown");
    cy.visit(
      `http://localhost:3006/?path=/story/button--secondary-with-custom-width`
    );
  });

  it("Should be able to click the secondary-disabled tab", () => {
    cy.get("#button--secondary-disabled").trigger("mousedown");
    cy.visit(`http://localhost:3006/?path=/story/button--secondary-disabled`);
  });

  it("Should be able to click the with-an-icon tab", () => {
    cy.get("#button--with-an-icon").trigger("mousedown");
    cy.visit(`http://localhost:3006/?path=/story/button--with-an-icon`);
  });

  it("Should be able to click the onclick-handler tab", () => {
    cy.get("#button--onclick-handler").trigger("mousedown");
    cy.visit(`http://localhost:3006/?path=/story/button--onclick-handler`);
  });

  it("Should be able to click the caption tab to show the rest of the tabs", () => {
    cy.visit(`http://localhost:3006/?path=/story/caption`);
    cy.get("#explorercaption").trigger("mousedown");
  });

  it("Should be able to click the basic tab", () => {
    cy.visit(`http://localhost:3006/?path=/story/caption--basic`);
    cy.get("#caption--basic").trigger("mousedown");
  });

  it("Should be able to click the styled tab", () => {
    cy.get("#caption--styled").trigger("mousedown");
    cy.visit(`http://localhost:3006/?path=/story/caption--styled`);
  });

  it("Should be able to click the type-bold tab", () => {
    cy.get("#caption--type-bold").trigger("mousedown");
    cy.visit(`http://localhost:3006/?path=/story/caption--type-bold`);
  });

  it("Should be able to click the checkbox tab to show the rest of the tabs", () => {
    cy.visit(`http://localhost:3006/?path=/story/checkbox`);
    cy.get("#explorercheckbox").trigger("mousedown");
  });

  it("Should be able to click the basic tab", () => {
    cy.visit(`http://localhost:3006/?path=/story/checkbox--basic`);
    cy.get("#checkbox--basic").trigger("mousedown");
  });

  it("Should be able to click the optional tab", () => {
    cy.get("#checkbox--optional").trigger("mousedown");
    cy.visit(`http://localhost:3006/?path=/story/checkbox--optional`);
  });

  it("Should be able to click the datedisplay tab to show the rest of the tabs", () => {
    cy.visit(`http://localhost:3006/?path=/story/datedisplay`);
    cy.get("#explorerdatedisplay").trigger("mousedown");
  });

  it("Should be able to click the basic tab", () => {
    cy.visit(`http://localhost:3006/?path=/story/datedisplay--basic`);
    cy.get("#datedisplay--basic").trigger("mousedown");
  });

  it("Should be able to click the datedisplayminimal tab to show the rest of the tabs", () => {
    cy.visit(`http://localhost:3006/?path=/story/datedisplayminimal`);
    cy.get("#explorerdatedisplayminimal").trigger("mousedown");
  });

  it("Should be able to click the basic tab", () => {
    cy.visit(`http://localhost:3006/?path=/story/datedisplayminimal--basic`);
    cy.get("#datedisplayminimal--basic").trigger("mousedown");
  });

  it("Should be able to click the display tab to show the rest of the tabs", () => {
    cy.visit(`http://localhost:3006/?path=/story/display`);
    cy.get("#explorerdisplay").trigger("mousedown");
  });

  it("Should be able to click the basic tab", () => {
    cy.visit(`http://localhost:3006/?path=/story/display--basic`);
    cy.get("#display--basic").trigger("mousedown");
  });

  it("Should be able to click the styled tab", () => {
    cy.get("#display--styled").trigger("mousedown");
    cy.visit(`http://localhost:3006/?path=/story/display--styled`);
  });

  it("Should be able to click the form tab to show the rest of the tabs", () => {
    cy.visit(`http://localhost:3006/?path=/story/form`);
    cy.get("#explorerform").trigger("mousedown");
  });

  it("Should be able to click the documentation tab", () => {
    cy.visit(`http://localhost:3006/?path=/story/form--documentation`);
    cy.get("#form--documentation").trigger("mousedown");
  });

  it("Should be able to click the without-validation tab", () => {
    cy.get("#form--without-validation").trigger("mousedown");
    cy.visit(`http://localhost:3006/?path=/story/form--without-validation`);
  });

  it("Should be able to click the with-validation tab", () => {
    cy.get("#form--with-validation").trigger("mousedown");
    cy.visit(`http://localhost:3006/?path=/story/form--with-validation`);
  });

  it("Should be able to click the inactive-validation-on-value-change tab", () => {
    cy.get("#form--inactive-validation-on-value-change").trigger("mousedown");
    cy.visit(
      `http://localhost:3006/?path=/story/form--inactive-validation-on-value-change`
    );
  });

  it("Should be able to click the inactive-validation-on-value-change-and-on-blur tab", () => {
    cy.get("#form--inactive-validation-on-value-change-and-on-blur").trigger(
      "mousedown"
    );
    cy.visit(
      `http://localhost:3006/?path=/story/form--inactive-validation-on-value-change-and-on-blur`
    );
  });
});

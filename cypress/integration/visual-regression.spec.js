import { ids, footerIds } from "./data/ids";

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

  ids.forEach(id => {
    it(`Should click on '${id} page'`, () => {
      cy.visit(`/${id}`);
      cy.get(`#explorer${id}`)
        .click()
        .should("be.visible");
    });
  });
});

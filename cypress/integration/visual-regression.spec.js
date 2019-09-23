import { ids } from "./data/ids";

context("Visual Regression - Vivy", () => {
  beforeEach(() => {
    cy.eyesOpen({
      appName: "Vivy Components",
      testName: "Visual Regression - Vivy",
      browser: [
        {
          name: "chrome",
          width: 1500,
          height: 2000
        },
        {
          name: "firefox",
          width: 1500,
          height: 2000
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
        .then(el => {
          el[0].scrollIntoView();
          return el;
        })
        .click({ force: true });
    });
  });
});

const { Given, When, Then } = require("@cucumber/cucumber");
const fs = require('fs')

const email = "s.sierrar2@uniandes.edu.co";
const password = "And3sP@Krak3n2023";

When("I log in", async function () {
  let elementEmail = await this.driver.$("#identification");
  await elementEmail.setValue(email);

  let elementPassword = await this.driver.$("#password");
  await elementPassword.setValue(password);

  let elementBtn = await this.driver.$("#ember5");

  return await elementBtn.click();
});

When(
  "I click a button {string} {string}",
  async function (description, btnSelector) {
    console.log(description);

    let element = await this.driver.$(btnSelector);
    return await element.click();
  }
);

When(
  "I fill with text a field {string} {string} {string}",
  async function (description, reference, value) {
    console.log(description);

    let element = await this.driver.$(reference);
    return await element.setValue(value);
  }
);

When("I fill with text a post desc {string}", async function (value) {
  let element = await this.driver.$(
    'div[class="koenig-editor__editor-wrapper"]'
  );

  await element.click();

  let elementP = await this.driver.$('p[data-koenig-dnd-droppable="true"]');

  await elementP.setValue(value);
});

Then(
  "I click a btn {string} {string}",
  async function (description, reference) {
    console.log(description);
    let element = await this.driver.$(reference);
    return await element.click();
  }
);

Then("I click enter", async function () {
  const event = new KeyboardEvent("keydown", { key: "Enter" });
  document.body.dispatchEvent(event);
});

Then("I change sshots names", async function(){
  console.log(this.testScenarioId)
  let sshots_folder = (`./reports/${this.testScenarioId}/screenshots/`);
  let contador = 1;
  fs.readdirSync(sshots_folder).forEach(file => {
    fs.renameSync(sshots_folder + "/" + file, sshots_folder + "/" + contador + ".png");
    contador ++;
    console.log(file);
  })


});

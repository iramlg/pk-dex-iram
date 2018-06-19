const testRunner = Object.assign(
  {
    'Starting Invoices Opt In End to End tests': function(browser) {
      browser
        .url(browser.launch_url)
        .waitForElementVisible('body', 10000)
        .pause(5000)
        .assert.title('Pokedex | Iram Garcia');
    }
  },
  {
    'Check if list is visible': function(browser) {
      browser
        .assert.visible('div.item-list');
    }
  },
  {
    'Select metapod': function(browser) {
      browser
        .useXpath().click("//span[contains(text(), 'METAPOD')]")
        .pause(3000)
        .assert.containsText('//div[contains(@class, "pokemon-details")]', 'BUG');
    }
  },
  {
    'Select slaking': function(browser) {
      browser
        .useXpath().click("//span[contains(text(), 'SLAKING')]")
        .pause(3000)
        .assert.containsText('//div[contains(@class, "pokemon-details")]', 'NORMAL')
        .useCss()
        .assert.attributeContains('.sprite', 'src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/289.png');;
    }
  },
  {
    'Ending Opt In tests and close browser': function(browser) {
      browser.end();
    }
  }
)
module.exports = testRunner;

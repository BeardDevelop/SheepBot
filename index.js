
const { Builder, By, Key, until } = require('selenium-webdriver');

var driver = new Builder()
    .forBrowser('firefox')
    .build();
var searchStrings = ['black sheep'];
var maximum = 0;
var minimum = 0;
doRandomSearch();
function doRandomSearch() {
    var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    driver.get('http://www.google.com/ncr')
        .then(_ =>
            driver.findElement(By.name('q')).sendKeys(searchStrings[randomnumber], Key.RETURN))
        .then(_ => driver.wait(until.titleIs(searchStrings[randomnumber] + ' - Google Search'), 1000))
    //.then(_ => driver.quit());
};
setInterval(function () {
    doRandomSearch();
}, 100000)

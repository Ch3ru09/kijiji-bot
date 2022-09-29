const playwright = require('playwright');
require('dotenv').config()

async function main() {
    const browser = await playwright.firefox.launch({
        headless: false // setting this to true will not run the UI
    });

    const page = await browser.newPage();
    await page.goto('https://www.kijiji.ca/t-login.html');
    await page.waitForTimeout(rn(3,5)); // wait for 5 seconds
    const i = Math.floor(Math.random()*process.env.USERNAMES.split(" ").length)
    await page.type('input#emailOrNickname', process.env.USERNAMES.split(" ")[i]);
    await page.waitForTimeout(rn(3,5));
    await page.type('input#password', process.env.PASSWORDS.split(" ")[i]);
    await page.waitForTimeout(rn(3,5));
    await page.click('form#LoginForm >> button[type="submit"]');
    // await browser.close();
}

function rn(min, max) {
    // min(s) max(s)
    return (min + Math.floor(Math.random()*(max-min+1)))*1000
}

main();
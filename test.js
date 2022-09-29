const playwright = require('playwright');
require('dotenv').config()

async function main() {
    const browser = await playwright.firefox.launch({
        headless: false // setting this to true will not run the UI
    });

    const page = await browser.newPage();
    await page.goto('https://www.kijiji.ca/t-login.html');
<<<<<<< HEAD
    await page.waitForTimeout(rn(3,5)); // wait for 5 seconds
    const i = Math.floor(Math.random()*process.env.USERNAMES.split(" ").length)
    await page.type('input#emailOrNickname', process.env.USERNAMES.split(" ")[i]);
    await page.waitForTimeout(rn(3,5));
    await page.type('input#password', process.env.PASSWORDS.split(" ")[i]);
    await page.waitForTimeout(rn(3,5));
    await page.click('form#LoginForm >> button[type="submit"]');
    // await browser.close();
=======
    await page.type('input[id="emailOrNickname"]', "runcongliang@gmail.com", {delay: 100});
    await page.waitForTimeout(1000)
    await page.type('input[id="password"]', "terry78925", {delay: 100});
    await page.waitForTimeout(1000)
    await page.click('form#LoginForm >> button[type="submit"]');
>>>>>>> 78f66ac (can enter and log in)
}

function rn(min, max) {
    // min(s) max(s)
    return (min + Math.floor(Math.random()*(max-min+1)))*1000
}

main();
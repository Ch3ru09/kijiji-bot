const playwright = require('playwright');
require('dotenv').config()

async function main() {
    const browser = await playwright.firefox.launch({
        headless: false // setting this to true will not run the UI
    });

    const page = await browser.newPage();
    await page.goto('https://www.kijiji.ca/t-login.html');
<<<<<<< HEAD
    await page.waitForTimeout(rn(3,5));
    const i = Math.floor(Math.random()*(process.env.USERNAMES.split(" ").length));
    await page.type('input#emailOrNickname', process.env.USERNAMES.split(" ")[i]);
    await page.waitForTimeout(rn(1,2));
    await page.type('input#password', process.env.PASSWORDS.split(" ")[i]);
    await page.waitForTimeout(rn(1,2));
    await page.click('form#LoginForm >> button[type="submit"]');

    await page.waitForTimeout(rn(3,5));
    await page.click('button[aria-label="My Account"]');
    await page.waitForTimeout(rn(3,5));
    await page.click('a[href="/m-my-ads/active/1"]');

=======
    await page.waitForTimeout(rn(3,5)); // wait for 5 seconds
    const i = Math.floor(Math.random()*process.env.USERNAMES.split(" ").length)
    // await page.type('input#emailOrNickname', process.env.USERNAMES.split(" ")[i]);
    await page.type('input#emailOrNickname', 'danny78925@gmail.com');
    await page.waitForTimeout(rn(3,5));
    // await page.type('input#password', process.env.PASSWORDS.split(" ")[i]);
    await page.type('input#password', 'Terry78925!');
    await page.waitForTimeout(rn(3,5));
    await page.click('form#LoginForm >> button[type="submit"]');
    // await browser.close();
>>>>>>> f2793d6 (merging)
}

function rn(min, max) {
    // min(s) max(s)
    return (min + Math.floor(Math.random()*(max-min+1)))*1000
}

main();
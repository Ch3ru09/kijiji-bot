const playwright = require('playwright');
async function main() {
    const browser = await playwright.firefox.launch({
        headless: false // setting this to true will not run the UI
    });

    const page = await browser.newPage();
    await page.goto('https://www.kijiji.ca/t-login.html');
    await page.waitForTimeout(rn(3,5)); // wait for 5 seconds
    await page.type("input#emailOrNickname", )
    // await browser.close();
}

function rn(min, max) {
    // min(s) max(s)
    return (min + Math.floor(Math.random()*(max-min+1)))*1000
}

main();
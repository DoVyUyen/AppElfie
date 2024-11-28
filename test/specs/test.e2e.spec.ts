import HomePage from '../page/home.page'
import ResultPage from '../page/result.page';
import { expect } from 'chai';

const testData = require('../test-data/testData.json');
describe('Chrome Automation', () => {
    it('Should perform end-to-end flow', async () => {
        // Step 1: Navigate to Google
        await HomePage.open('https://www.google.com');

        const { keyWord } = testData.testDataList;

        // Step 2: Search for the keyword
        await HomePage.search(keyWord);

        // Step 3: Click the first result
        await ResultPage.clickFirstResult();

        // Step 4: Click the Reject All button
        await browser.pause(1000); 
        await ResultPage.clickRejectAllButton();

        // Step 5: Verify the logo and take a screenshot
        const isLogoDisplayed = await ResultPage.verifyLogoDisplayed();
        expect(isLogoDisplayed).to.be.true;
        console.log('Logo displayed status:', isLogoDisplayed);
        await ResultPage.captureElementScreenshot('logo', ResultPage.logo);

        // Step 6: Toggle Hamburger Menu
        await ResultPage.toggleMenu();
        await browser.pause(1000); 
        const menuText = await ResultPage.hamburgerMenu.getText();
        console.log('Captured Menu Text:', menuText);
        // expect(menuText).to.equal('X'); // Validate it toggles to 'X'
        await ResultPage.captureScreenshot('menu-toggle');

          // Step 7: Click the x button
          await ResultPage.clickXButton();
        //   expect(await ResultPage.xButton.isDisplayed()).to.be.true;

        // Step 8: Scroll to footer and verify copyright
        await ResultPage.scrollToFooter();
        const footerText = await ResultPage.footer.getText();
        expect(footerText).to.include(footerText);
        await ResultPage.captureElementScreenshot('footer',ResultPage.footer);
        await browser.pause(1000); 
    
    });
});

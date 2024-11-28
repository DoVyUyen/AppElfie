import { ChainablePromiseElement } from 'webdriverio';

export default class BasePage {
    async open(url: string) {
        await browser.url(url);
    }

    async captureElementScreenshot(name: string, element: ChainablePromiseElement) {
        // Ensure the element exists
        if (!(await element.isDisplayed())) {
            throw new Error(`The element "${name}" is not visible on the screen.`);
        }

        // Scroll element into view
        await element.scrollIntoView();

        // Pause briefly to ensure layout stabilizes
        await browser.pause(500);

        // Capture the element's screenshot
        await element.saveScreenshot(`./screenshots/${name}.png`);
        console.log(`Element screenshot saved: ./screenshots/${name}.png`);
    }
    async captureScreenshot(name: string) {
        await browser.saveScreenshot(`./screenshots/${name}.png`);
    }

}

import BasePage from './base.page';
class ResultPage extends BasePage {
    get firstResult() {
        return $('div.v7jaNc.ynAwRc.MBeuO.q8U8x.oewGkc.LeUQr.M2szs.htnRc')
    }
        // Getter for the Reject All button
    get rejectAllButton() {
            return $('[data-cky-tag="reject-button"]');
        }

    get logo() {
        return $('.app-icon-holder');
    }

    get hamburgerMenu() {
        return $('div.menu-button.w-nav-button');
    }
    get xButton() {
        return $('.menu-button.w-nav-button.w--open');
    }

    get footer() {
        return $('.footer-content-bottom .text-block');
    }
    async clickRejectAllButton() {
        const button = await this.rejectAllButton;

        // Ensure the button is displayed
        if (!(await button.isDisplayed())) {
            throw new Error('Reject All button is not visible on the screen.');
        }

        // Click the button
        await button.click();
    }
    async clickFirstResult() {
        await this.firstResult.click();
    }

    async verifyLogoDisplayed() {
        return await this.logo.isDisplayed();
    }

    async toggleMenu() {
        await this.hamburgerMenu.click();
    }
    async clickXButton() {
        const xButton = await this.xButton;

        // Ensure the menu button is displayed
        if (!(await xButton.isDisplayed())) {
            throw new Error('Menu button is not visible on the screen.');
        }

        // Scroll to the menu button (optional)
        await xButton.scrollIntoView();

        // Click the menu button
        await xButton.click();
    }

    async scrollToFooter() {
        await browser.execute('window.scrollTo(0, document.body.scrollHeight)');
    }
}

export default new ResultPage();


import BasePage from './base.page';
class HomePage extends BasePage {
    get searchInput() {
        return  $('.gLFyf');
 
    }
    async search(keyword: string) {
        if (!keyword || typeof keyword !== 'string' || keyword.trim().length === 0) {
            throw new Error('Keyword must be a non-empty string.');
        }
    
        console.log('Searching for keyword:', keyword);
    
        await this.searchInput.waitForDisplayed();
        await this.searchInput.setValue(keyword);
        await browser.keys('Enter');
    }
    
}

export default new HomePage();

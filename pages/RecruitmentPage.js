class RecruitmentPage {
    constructor(page) {
        this.page = page;

        this.recruitmentMenu = page.locator('//span[text()="Recruitment"]');

        this.addButton = page.locator('button:has-text("Add")');

        this.firstNameInput = page.locator('input[name="firstName"]');
        this.lastNameInput = page.locator('input[name="lastName"]');

        this.vacancyDropdown = page.locator('.oxd-select-text');

        this.emailInput = page.locator('(//input[@placeholder="Type here..."])[1]');

        this.saveButton = page.locator('button:has-text("Save")');

        this.successToast = page.locator('.oxd-toast');

        // Search fields
        this.candidateSearchInput = page.locator(
            '(//input[@placeholder="Type for hints..."])[1]'
        );

        this.searchButton = page.locator('button:has-text("Search")');

        // Results table
        this.resultsTable = page.locator('.oxd-table-body');
    }

    async navigateToRecruitment() {
        await this.recruitmentMenu.click();
    }

    async clickAddCandidate() {
        await this.addButton.click();
    }

    async addCandidate(firstName, lastName, email) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);

        await this.emailInput.fill(email);

        await this.vacancyDropdown.click();

        await this.page.locator('.oxd-select-dropdown > *').first().click();

        await this.saveButton.click();
    }
    async searchCandidate(candidateName) {
        await this.candidateSearchInput.fill(candidateName);
        await this.searchButton.click();
    }

    async candidateExists(candidateName) {
        await this.resultsTable.waitFor();

        return await this.resultsTable
            .locator(`text=${candidateName}`)
            .isVisible();
    }
}

module.exports = RecruitmentPage;
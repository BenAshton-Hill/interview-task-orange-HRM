class RecruitmentPage {
    constructor(page) {
        this.page = page;

        this.recruitmentMenu = page.locator('//span[text()="Recruitment"]');

        this.addButton = page.getByRole('button', {
            name: 'Add'
        }).first();

        this.firstNameInput = page.locator('input[name="firstName"]');

        this.lastNameInput = page.locator('input[name="lastName"]');

        this.emailInput = page.locator(
            '//label[text()="Email"]/ancestor::div[contains(@class,"oxd-input-group")]//input'
        );

        this.saveButton = page.locator('button:has-text("Save")');

        this.successToast = page.locator('.oxd-toast-content');

        this.candidateSearchInput = page.locator(
            '(//input[@placeholder="Type for hints..."])[1]'
        );

        this.searchButton = page.locator('button:has-text("Search")');

        // Results table
        this.resultsTable = page.locator('.oxd-table-body');

        // Delete candidate button
        this.deleteButton = page.locator(
            'button i.bi-trash'
        );

        // Confirmation modal delete button
        this.confirmDeleteButton = page.locator(
            'button:has-text("Yes, Delete")'
        );
    }

    async navigateToRecruitment() {

        await this.recruitmentMenu.click();

        // Wait for URL to contain recruitment
        await this.page.waitForURL(/recruitment/);
    }

    async clickAddCandidate() {

        // Ensure we are on Recruitment page
        await this.page.waitForURL(/recruitment/);

        // Small stabilisation wait for UI rendering
        await this.page.waitForTimeout(1000);

        await this.addButton.waitFor({
            state: 'visible'
        });

        await this.addButton.click();
    }

    async addCandidate(firstName, lastName, email) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);

        await this.emailInput.fill(email);

        await this.saveButton.click();
    }
    async searchCandidate(candidateName) {

        await this.candidateSearchInput.click();

        await this.candidateSearchInput.fill('');

        await this.candidateSearchInput.fill(candidateName);

        await this.searchButton.click();

        // Wait for results table refresh
        await this.resultsTable.waitFor();
    }

    async candidateExists(candidateName) {
        await this.resultsTable.waitFor();

        const candidate = this.resultsTable.locator(
            `text=${candidateName}`
        );

        return await candidate.count() > 0;
    }
    async deleteCandidate() {
        await this.deleteButton.first().click();
    }

    async confirmDelete() {
        await this.confirmDeleteButton.click();
    }
}

module.exports = RecruitmentPage;
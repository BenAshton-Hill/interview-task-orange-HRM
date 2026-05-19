// pages/DashboardPage.js

class DashboardPage {
    constructor(page) {
        this.page = page;

        // Dashboard header
        this.dashboardHeader = page.locator('h6:has-text("Dashboard")');

        // Main menu items
        this.adminMenu = page.locator('//span[text()="Admin"]');
        this.pimMenu = page.locator('//span[text()="PIM"]');
        this.leaveMenu = page.locator('//span[text()="Leave"]');
        this.timeMenu = page.locator('//span[text()="Time"]');
        this.recruitmentMenu = page.locator('//span[text()="Recruitment"]');

        // User dropdown
        this.userDropdown = page.locator('.oxd-userdropdown-tab');

        // Logout option
        this.logoutButton = page.locator('//a[text()="Logout"]');
    }

    async isDashboardVisible() {
        await this.dashboardHeader.waitFor();
        return await this.dashboardHeader.isVisible();
    }

    async navigateToAdmin() {
        await this.adminMenu.click();
    }

    async navigateToPIM() {
        await this.pimMenu.click();
    }

    async navigateToLeave() {
        await this.leaveMenu.click();
    }

    async navigateToTime() {
        await this.timeMenu.click();
    }

    async navigateToRecruitment() {
        await this.recruitmentMenu.click();
    }

    async logout() {
        await this.userDropdown.click();
        await this.logoutButton.click();
    }
}

module.exports = DashboardPage;
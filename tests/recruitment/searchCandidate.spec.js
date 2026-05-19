const { test, expect } = require('@playwright/test');

const LoginPage = require('../../pages/LoginPage');
const RecruitmentPage = require('../../pages/RecruitmentPage');

test.describe('Recruitment Module - Search Candidate', () => {

    test('should search and display an existing candidate', async ({ page }) => {

        const loginPage = new LoginPage(page);
        const recruitmentPage = new RecruitmentPage(page);

        const firstName = 'John';
        const lastName = 'Smith';
        const fullName = `${firstName} ${lastName}`;

        const uniqueEmail = `john${Date.now()}@test.com`;

        // Login
        await loginPage.goto();

        await loginPage.login('Admin', 'admin123');

        // Navigate to Recruitment
        await recruitmentPage.navigateToRecruitment();

        // Add candidate
        await recruitmentPage.clickAddCandidate();

        await recruitmentPage.addCandidate(
            firstName,
            lastName,
            uniqueEmail
        );

        // Verify success message
        await expect(recruitmentPage.successToast)
            .toContainText('Success');

        // Navigate back to Recruitment list page
        await recruitmentPage.navigateToRecruitment();

        // Search for candidate
        await recruitmentPage.searchCandidate(fullName);

        // Validate candidate appears in results
        const candidateFound =
            await recruitmentPage.candidateExists(fullName);

        expect(candidateFound).toBeTruthy();
    });
});
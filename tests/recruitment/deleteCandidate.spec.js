const { test, expect } = require('@playwright/test');

const LoginPage = require('../../pages/LoginPage');
const RecruitmentPage = require('../../pages/RecruitmentPage');

test.describe('Recruitment Module - Delete Candidate', () => {

    test('should delete an existing candidate successfully', async ({ page }) => {

        const loginPage = new LoginPage(page);
        const recruitmentPage = new RecruitmentPage(page);

        const firstName = 'Delete';
        const lastName = 'Candidate';

        const fullName = `${firstName} ${lastName}`;

        const uniqueEmail = `delete${Date.now()}@test.com`;

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

        // Navigate back to Recruitment list
        await recruitmentPage.navigateToRecruitment();

        // Search for created candidate
        await recruitmentPage.searchCandidate(fullName);

        // Verify candidate exists before deletion
        const candidateFoundBeforeDelete =
            await recruitmentPage.candidateExists(fullName);

        expect(candidateFoundBeforeDelete).toBeTruthy();

        // Delete candidate
        await recruitmentPage.deleteCandidate();

        // Confirm deletion popup
        await recruitmentPage.confirmDelete();

        // Verify success message
        await expect(recruitmentPage.successToast)
            .toContainText('Success');

        // Search again after deletion
        await recruitmentPage.searchCandidate(fullName);

        // Validate candidate no longer exists
        const candidateFoundAfterDelete =
            await recruitmentPage.candidateExists(fullName);

        expect(candidateFoundAfterDelete).toBeFalsy();
    });
});
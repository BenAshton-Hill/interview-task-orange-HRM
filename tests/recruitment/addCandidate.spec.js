const { test, expect } = require('@playwright/test');

const LoginPage = require('../../pages/LoginPage');
const RecruitmentPage = require('../../pages/RecruitmentPage');

const data = require('../../fixtures/candidateData');

test.describe('Recruitment Module', () => {

    test('should add a new candidate successfully', async ({ page }) => {

        const loginPage = new LoginPage(page);
        const recruitmentPage = new RecruitmentPage(page);

        await loginPage.goto();

        await loginPage.login('Admin', 'admin123');

        await recruitmentPage.navigateToRecruitment();

        await recruitmentPage.clickAddCandidate();

        await recruitmentPage.addCandidate(
            data.candidate.firstName,
            data.candidate.lastName,
            data.candidate.email
        );

        await expect(recruitmentPage.successToast).toContainText('Success');
    });
});
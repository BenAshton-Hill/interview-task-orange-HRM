class LoginPage {
    constructor(page) {
        this.page = page;

        this.usernameInput = page.locator('input[name="Username"]');
        this.passwordInput = page.locator('input[name="Password"]');
        this.loginButton = page.locator('button[type="Login"]');
    }

    async goto() {
        await this.page.goto('/web/index.php/auth/login');
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}

module.exports = LoginPage;
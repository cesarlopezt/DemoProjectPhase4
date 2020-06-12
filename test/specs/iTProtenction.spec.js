const HomePage = require("../pages/home.page");
const BasePage = require("../pages/base.page");

describe("iTProtection_doesLoad", () => {
    it("Page must load", () => {
        HomePage.goToITProtection();
        expect(BasePage.title).toHaveText("IT Protection & Support");
    });
});

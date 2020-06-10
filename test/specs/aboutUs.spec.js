const HomePage = require("../pages/home.page");
const BasePage = require("../pages/base.page");

describe("aboutUS_doesLoad", () => {
    it("Page must load", () => {
        HomePage.goToAboutUs();
        expect(BasePage.title).toHaveText("We’re driven by an earnest belief");
    });
});

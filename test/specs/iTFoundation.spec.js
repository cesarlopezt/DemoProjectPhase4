const HomePage = require("../pages/home.page");
const BasePage = require("../pages/base.page");

describe("iTFoundation_doesLoad", () => {
    it("Page must load", () => {
        HomePage.goToITFoundation();
        expect(BasePage.title).toHaveText("IT Support");
    });
});

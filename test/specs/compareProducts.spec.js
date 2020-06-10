const HomePage = require("../pages/home.page");
const BasePage = require("../pages/base.page");

describe("CompareProducts_doesLoad", () => {
    it("Page must load", () => {
        HomePage.goToCompareProducts();
        expect(BasePage.title).toHaveText("IT Support Services");
    });
});

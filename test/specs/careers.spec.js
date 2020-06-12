const HomePage = require("../pages/home.page");
const BasePage = require("../pages/base.page");

describe("careers_doesLoad", () => {
    it("Page must load", () => {
        HomePage.goToCareers();
        expect(BasePage.title).toHaveText("We do meaningful work");
    });
});

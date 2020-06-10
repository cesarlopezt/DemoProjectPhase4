const HomePage = require("../pages/home.page");
const BasePage = require("../pages/base.page");

describe("CustomSoftwareDev_doesLoad", () => {
    it("Page must load", () => {
        HomePage.goToCustomSoftwareDev();
        expect(BasePage.title).toHaveText("Custom Software Development");
    });
});

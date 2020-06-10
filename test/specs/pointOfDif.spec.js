const HomePage = require("../pages/home.page");
const BasePage = require("../pages/base.page");

describe("PointOfDifferentiation_doesLoad", () => {
    it("Page must load", () => {
        HomePage.goToAboutUs();
        expect(BasePage.subTitle).toHaveText("The GBH Difference");
    });
});

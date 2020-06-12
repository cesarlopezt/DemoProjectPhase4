const HomePage = require("../pages/home.page");
const BasePage = require("../pages/base.page");

describe("Blog_doesLoad", () => {
    it("Page must load", () => {
        HomePage.goToBlog();
        expect(BasePage.title).toHaveText(
            "Our latest insights on the strategic use of tech to amplify your impact."
        );
    });
});

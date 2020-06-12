const HomePage = require("../pages/home.page");
const BasePage = require("../pages/base.page");

describe("caseStudies_doesLoad", () => {
    it("Page must load", () => {
        HomePage.goToCaseStudies();
        expect(BasePage.title).toHaveText(
            "We deliver market-ready tech that defines industries."
        );
    });
});

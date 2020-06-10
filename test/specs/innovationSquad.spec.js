const HomePage = require("../pages/home.page");
const BasePage = require("../pages/base.page");

describe("InnovationSquad_doesLoad", () => {
    it("Innovation Squad page must load", () => {
        HomePage.goToInnovation();
        expect(BasePage.title).toHaveText("Tech-enabled Innovation");
    });
});

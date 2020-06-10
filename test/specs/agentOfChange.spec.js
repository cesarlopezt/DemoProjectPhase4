const HomePage = require("../pages/home.page");
const BasePage = require("../pages/base.page");

describe("AgentOfChange_doesLoad", () => {
    it("Page must load", () => {
        HomePage.goToAgentOfChange();
        expect(BasePage.title).toHaveText("Staff Augmentation");
    });
});

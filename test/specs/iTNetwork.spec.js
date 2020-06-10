const HomePage = require("../pages/home.page");
const BasePage = require("../pages/base.page");

describe("ITNetwork_doesLoad", () => {
    it("Page must load", () => {
        HomePage.goToITNetwork();
        expect(BasePage.title).toHaveText(
            "From design to implementation and support.\n" +
                "Full-Service Network Solutions that increase your business’ stability and security."
        );
    });
});

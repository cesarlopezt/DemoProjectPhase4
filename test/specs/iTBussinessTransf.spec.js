const HomePage = require("../pages/home.page");
const BasePage = require("../pages/base.page");

describe("ITBussinessTranf_doesLoad", () => {
    it("ITBussinessTranf page must load", () => {
        HomePage.goToITBussinessTransf();
        expect(BasePage.title).toHaveText(
            "You’re moving fast. We’ve got a board-level vCIO to get you there faster."
        );
    });
});

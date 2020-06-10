const HomePage = require("../pages/home.page.js");

describe("Home_doesLoad", () => {
    it("Home page must load", () => {
        HomePage.open();
        expect(HomePage.title).toHaveText(
            "We transform businesses. \nMeasuring our achievements by their impact."
        );
    });
});

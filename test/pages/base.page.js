const Page = require("./page.js");

class BasePage extends Page {
    get title() {
        return $(".et_pb_text_inner h2");
    }
    get subTitle() {
        return $(".et_pb_text_inner h3");
    }
}
module.exports = new BasePage();

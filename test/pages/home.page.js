const Page = require("./page.js");

class HomePage extends Page {
    // constructor() {
    //     super.constructor();
    //     this.solutionMenu = $("#menu-item-3240");
    // }
    get solutionMenu() {
        return $("#menu-item-3240");
    }
    get whoWeAreMenu() {
        return $("#menu-item-3241");
    }
    get iTDropdown() {
        return $("#menu-item-4115");
    }

    get caseStudies() {
        return $("#menu-item-353");
    }
    get careers() {
        return $("#menu-item-475");
    }

    get innovationSquad() {
        return $("#menu-item-3248");
    }
    get bussinessTransf() {
        return $("#menu-item-3247");
    }

    get title() {
        return $(".et_pb_text_inner h2");
    }

    open() {
        super.open("https://gbh.com.do");
    }

    goToInnovation() {
        this.open();
        this.solutionMenu.click();
        this.innovationSquad.click();
    }

    goToITBussinessTransf() {
        this.open();
        this.solutionMenu.click();
        this.bussinessTransf.click();
    }
}
module.exports = new HomePage();

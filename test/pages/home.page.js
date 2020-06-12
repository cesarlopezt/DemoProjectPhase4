const Page = require("./page.js");

class HomePage extends Page {
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
        return $("#menu-item-475 a");
    }

    get innovationSquad() {
        return $("#menu-item-3248");
    }
    get bussinessTransf() {
        return $("#menu-item-3247");
    }
    get customSoftwareDev() {
        return $("#menu-item-3249");
    }
    get agentOfChangeStaff() {
        return $("#menu-item-3250");
    }
    get iTFoundation() {
        return $("#menu-item-3253");
    }
    get iTProtection() {
        return $("#menu-item-3254");
    }
    get compareProducts() {
        return $("#menu-item-3255");
    }
    get iTNetwork() {
        return $("#menu-item-3252");
    }

    get aboutUs() {
        return $("#menu-item-3243");
    }
    get pointOfDifferentiation() {
        return $("#menu-item-3242");
    }
    get blog() {
        return $("#menu-item-4661");
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

    goToCustomSoftwareDev() {
        this.open();
        this.solutionMenu.click();
        this.customSoftwareDev.click();
    }

    goToITNetwork() {
        this.open();
        this.solutionMenu.click();
        this.iTNetwork.click();
    }

    goToAgentOfChange() {
        this.open();
        this.solutionMenu.click();
        this.agentOfChangeStaff.click();
    }

    goToITFoundation() {
        this.open();
        this.solutionMenu.click();
        this.iTDropdown.click();
        this.iTFoundation.click();
    }

    goToITProtection() {
        this.open();
        this.solutionMenu.click();
        this.iTDropdown.click();
        this.iTProtection.click();
    }

    goToCompareProducts() {
        this.open();
        this.solutionMenu.click();
        this.iTDropdown.click();
        this.compareProducts.click();
    }

    goToAgentOfChange() {
        this.open();
        this.solutionMenu.click();
        this.agentOfChangeStaff.click();
    }

    goToAboutUs() {
        this.open();
        this.whoWeAreMenu.click();
        this.aboutUs.click();
    }

    goToPointOfDifferentiation() {
        this.open();
        this.whoWeAreMenu.click();
        this.pointOfDifferentiation.click();
    }

    goToBlog() {
        this.open();
        this.whoWeAreMenu.click();
        this.blog.click();
    }

    goToCaseStudies() {
        this.open();
        this.caseStudies.click();
    }

    goToCareers() {
        this.open();
        this.careers.click();
    }
}
module.exports = new HomePage();

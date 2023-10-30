const { renderHomePage, renderPartnersPage, renderStudentsPage, renderBenefitsPage } = require("../models/userModel")

module.exports = {

    async getHomePage(req, res) {

        await renderHomePage(req, res)
    },

    async getBenefitsPage(req, res) {

        await renderBenefitsPage(req, res)
    },

    async getStudentsPage(req, res) {

        await renderStudentsPage(req, res)
    },

    async getPartnersPage(req, res) {

        await renderPartnersPage(req, res)
    },
}
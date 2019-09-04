'use strict';
module.exports = function(app) {
    var addressAppController = require('../controllers/addressAppController');
    var memberAppController = require('../controllers/memberAppController');
    var healthConditionAppController = require('../controllers/healthConditionAppController');
    var paymentAppController = require('../controllers/paymentAppController');


    //Member Routes
    app.route('/members/savemember')
        .post(memberAppController.create_a_member);

    app.route('/members/updatemember/:member_id')
        .put(memberAppController.update_a_member);

    app.route('/members/getmember/:member_id')
        .get(memberAppController.get_member_by_id);

    app.route('/members/getallmembers')
        .get(memberAppController.list_all_members);

    app.route('/members/updatemembers/:size')
        .put(memberAppController.update_members);

    app.route('/members/savemembers/:size')
        .post(memberAppController.save_members);

    // Address Routes
    app.route('/addresses/getalladdresses')
        .get(addressAppController.list_all_addresses);

    app.route('/addresses/saveaddress')
        .post(addressAppController.create_a_address);

    app.route('/addresses/getaddress/:address_id')
        .get(addressAppController.read_a_address);

    app.route('/addresses/updateaddress/:address_id')
        .put(addressAppController.update_a_address);

    app.route('/addresses/removeaddress/:address_id')
        .delete(addressAppController.delete_a_address);

    app.route('/addresses/updateaddresses/:size')
        .put(addressAppController.update_addresses);

    app.route('/addresses/saveaddresses/:size')
        .post(addressAppController.save_addresses);

    //Payment Routes
    app.route('/payments/savepayment')
        .post(paymentAppController.createPayment);

    app.route('/payments/getpayment/:id')
        .get(paymentAppController.getPaymentsById);


    app.route('/payments/getpaymentsbymemberid/:member_id')
        .get(paymentAppController.getPaymentsByMemberId);

    app.route('/payments/getallpayments')
        .get(paymentAppController.list_all_payments);

    app.route('/payments/updatepayments/:size')
        .put(paymentAppController.update_payments);

    app.route('/payments/savepayments/:size')
        .post(paymentAppController.save_payments);

    //Health Condition Routes
    app.route('/healthconditions/savehealthcondition')
        .post(healthConditionAppController.create_health_condition);

    app.route('/healthconditions/getyhealthconditionbyid/:health_condition_id')
        .get(healthConditionAppController.getHealthConditionById);

    app.route('/healthconditions/get_all_healthconditions')
        .get(healthConditionAppController.list_all_healthconditions);

    app.route('/healthconditions/updatehealthcondition/:health_condition_id')
        .put(healthConditionAppController.update_healthcondition);

    app.route('/healthconditions/updatehealthconditions/:size')
        .put(healthConditionAppController.update_healthconditions);

    app.route('/healthconditions/savehealthconditions/:size')
        .post(healthConditionAppController.save_healthconditions);

};
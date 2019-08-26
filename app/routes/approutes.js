'use strict';
module.exports = function (app) {
  var todoList = require('../controllers/appController');

  //Member Routes
  app.route('/members/savemember')
    .post(todoList.create_a_member);

  app.route('/members/updatemember/:member_id')
  .put(todoList.update_a_member);  

  app.route('/members/getmember/:member_id')
  .get(todoList.get_member_by_id);

  app.route('/members/getallmembers')
  .get(todoList.list_all_members);

  app.route('/members/updatemembers/:size')
  .put(todoList.update_members);

  // Address Routes
  app.route('/addresses/getalladdresses')
    .get(todoList.list_all_addresses);

  app.route('/addresses/saveaddress')
    .post(todoList.create_a_address);

  app.route('/addresses/getaddress/:address_id')
    .get(todoList.read_a_address);

  app.route('/addresses/updateaddress/:address_id')
    .put(todoList.update_a_address);

  app.route('/addresses/removeaddress/:address_id')
    .delete(todoList.delete_a_address);

  //Payment Routes
  app.route('/payments/savepayment')
    .post(todoList.createPayment);

  app.route('/payments/getpayment/:id')
    .get(todoList.getPaymentsById);


  app.route('/payments/getpaymentbymemberid/:member_id')
    .get(todoList.getPaymentsByMemberId);

    app.route('/payments/getallpayments')
    .get(todoList.list_all_payments);

    app.route('/payments/updatepayments/:size')
    .put(todoList.update_payments);

};
'use strict';

var Address = require('../model/address.js');
var Payment = require('../model/payment.js');
var Member=require('../model/member.js');

function Response(success, response) {
  this.success = success;
  this.object = response;
}

//Member contorllers
exports.create_a_member = function (req, res) {
  var new_member = new Member(req.body);

  Member.createMember(new_member, function (err, result) {

    if (err)
      res.send(err);
    res.json(new Response(true, result));
  });
};

exports.update_a_member = function (req, res) {

  Member.updateById(new Member(req.body), req.params.member_id, function (err, result) {
    if (err)
      res.send(err);
    res.json(new Response(true, result));
  });
};

exports.get_member_by_id=function(req,res){
  Member.getMemberById(req.params.member_id, function (err, result) {
    console.log('Get Member by member id')
    if (err)
      res.send(err);
    console.log('res', result);
    res.json(new Response(true, result));
  })
};


exports.list_all_members = function (req, res) {
  Member.getAllMembers(function (err, member) {

    console.log('controller')
    if (err)
      res.send(err);
    console.log('res', member);
    res.send(member);
  });
};

exports.update_members = function (req, res) {

  Member.update_members(req.body,req.params.size,function (err, result) {
    if (err)
      res.send(err);
    res.json([new Response(true, result)]);
  });
};


//Payment controllers
exports.getPaymentsByMemberId = function (req, res) {
  Payment.getPaymentsByMemberId(req.params.member_id, function (err, result) {
    console.log('Get payments by member id')
    if (err)
      res.send(err);
    console.log('res', result);
    res.json(new Response(true, result));
  })
};

exports.getPaymentsById = function (req, res) {
  Payment.getPaymentsById(req.params.id, function (err, result) {
    console.log('Get payments by payment id')
    if (err)
      res.send(err);
    console.log('res', result);
    res.json(new Response(true, result));
  })
};

exports.createPayment = function (req, res) {

  var new_payment = new Payment(req.body);

  //handles null error 
  if (!new_payment.id && !new_payment.amount && !new_payment.type && !new_payment.member_id && !new_payment.lastPaymentDate && !new_payment.lastPaymentDate) {

    res.status(400).send({ error: true, message: 'Some field is empty.' });

  }
  else {

    Payment.createPayment(new_payment, function (err, result) {

      if (err)
        res.send(err);
      res.json(new Response(true, result));
    });
  }
};

exports.list_all_payments = function (req, res) {
  Payment.getAllPayments(function (err, payment) {

    console.log('Payment controller')
    if (err)
      res.send(err);
    console.log('res', payment);
    res.send(payment);
  });
};

exports.update_payments = function (req, res) {

  Payment.update_payments(req.body,req.params.size,function (err, result) {
    if (err)
      res.send(err);
    res.json([new Response(true, result)]);
  });
};





//Addresses controllers
exports.list_all_addresses = function (req, res) {
  Address.getAllAddress(function (err, address) {

    console.log('controller')
    if (err)
      res.send(err);
    console.log('res', address);
    res.send(address);
  });
};


exports.create_a_address = function (req, res) {
  var new_address = new Address(req.body);

  //handles null error 
  if (!new_address.address_line_1) {

    res.status(400).send({ error: true, message: 'Please addres line 1' });

  }
  else {

    Address.createAddress(new_address, function (err, result) {

      if (err)
        res.send(err);
      res.json(new Response(true, result));
    });
  }
};

exports.read_a_address = function (req, res) {
  Address.getAddressById(req.params.address_id, function (err, result) {
    if (err)
      res.send(err);
    res.json(new Response(true, result));
  });
};

exports.update_a_address = function (req, res) {

  Address.updateById(new Address(req.body), req.params.address_id, function (err, result) {
    if (err)
      res.send(err);
    res.json(new Response(true, result));
  });
};

exports.delete_a_address = function (req, res) {


  Address.remove(req.params.address_id, function (err, address) {
    if (err)
      res.send(err);
    res.json(new Response(true, "Address successfully deleted."));
  });
};




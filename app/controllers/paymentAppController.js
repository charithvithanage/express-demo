'use strict';

var Payment = require('../model/payment.js');

function Response(success, response) {
    this.success = success;
    this.object = response;
}

//Payment controllers
exports.getPaymentsByMemberId = function(req, res) {
    Payment.getPaymentsByMemberId(req.params.member_id, function(err, result) {
        console.log('Get payments by member id')
        if (err)
            res.send(err);
        console.log('res', result);
        res.json(new Response(true, result));
    })
};

exports.getPaymentsById = function(req, res) {
    Payment.getPaymentsById(req.params.payment_id, function(err, result) {
        console.log('Get payments by payment id')
        if (err)
            res.send(err);
        console.log('res', result);
        res.json(new Response(true, result));
    })
};

exports.createPayment = function(req, res) {

    var new_payment = new Payment(req.body);
    Payment.createPayment(new_payment, function(err, result) {
        process.on('uncaughtException', function(error) {
            console.trace(error);
        });

        if (err)
            res.json(new Response(false, err))
        res.json(new Response(true, result));
    });
    //handles null error 
    // if (!new_payment.payment_id) {

    //     res.status(400).send({ error: true, message: 'Some field is empty.' });

    // } else {

    //     Payment.createPayment(new_payment, function(err, result) {
    //         process.on('uncaughtException', function(error) {
    //             console.trace(error);
    //         });

    //         if (err)
    //             res.json(new Response(false, err))
    //         res.json(new Response(true, result));
    //     });
    // }
};

exports.list_all_payments = function(req, res) {
    Payment.getAllPayments(function(err, payment) {

        console.log('Payment controller')
        if (err)
            res.send(err);
        console.log('res', payment);
        res.send(payment);
    });
};

exports.update_payments = function(req, res) {

    Payment.update_payments(req.body, req.params.size, function(err, result) {
        if (err)
            res.send(err);
        res.json([new Response(true, result)]);
    });
};

exports.save_payments = function(req, res) {

    Payment.save_payments(req.body, req.params.size, function(err, result) {
        if (err)
            res.send(err);
        res.json([new Response(true, result)]);
    });
};
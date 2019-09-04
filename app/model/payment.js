'use strict';
var sql = require('./db.js');
var Q = require("q");

//Payment object constructor
var Payment = function (payment) {

    this.payment_id = payment.payment_id;
    this.payment_amount = payment.payment_amount;
    this.membership_type = payment.membership_type;
    this.member_id = payment.member_id;
    this.last_payment_date = payment.last_payment_date;
    this.membership_expiry_date = payment.membership_expiry_date;
    this.created_at = payment.created_at;
    this.modified_at = payment.modified_at;

};

Payment.createPayment = function (newPayment, result) {
    sql.query("INSERT INTO table_payment set ?", newPayment, function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res);
            result(null, newPayment);
        }

    });
};

Payment.getPaymentsByMemberId = function (id, result) {
    sql.query("Select * from table_payment WHERE member_id = ?", [id], function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('payments : ', res);
            result(null, res);
        }
    });
};

Payment.getPaymentsById = function (id, result) {
    sql.query("Select * from table_payment WHERE id = ?", [id], function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('payments : ', res);
            result(null, res);
        }
    });
};

Payment.getAllPayments = function (result) {
    sql.query("Select * from table_payment", function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('payments : ', res);

            result(null, res);
        }
    });
};

Payment.update_payments = function (payments, size, result) {

    var i = 0;

    payments.forEach(element => {


        sql.query("UPDATE table_payment SET ? WHERE id = ? AND member_id = ?", [element, element.id, element.member_id], function (err, res) {

            i++;

            if (err) {
                console.log("error: ", err);

            }
            else {

                console.log("updated: ", res);
                console.log("Lenght ", i)
                console.log("Payment size ", payments)


                if (i == size) {
                    result(null, res);
                }

            }
        });
    });


};

Payment.save_payments = function (payments, size, result) {

    var i = 0;

    payments.forEach(element => {


        sql.query("INSERT INTO table_payment set ?", [element], function (err, res) {

            i++;

            if (err) {
                console.log("error: ", err);

            }
            else {

                console.log("updated: ", res);
                console.log("Lenght ", i)
                console.log("Payment size ", payments)


                if (i == size) {
                    result(null, res);
                }

            }
        });
    });


};


module.exports = Payment;



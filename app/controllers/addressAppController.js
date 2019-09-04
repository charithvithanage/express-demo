'use strict';

var Address = require('../model/address.js');

function Response(success, response) {
    this.success = success;
    this.object = response;
}

//Addresses controllers
exports.list_all_addresses = function(req, res) {
    Address.getAllAddress(function(err, address) {

        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', address);
        res.send(address);
    });
};


exports.create_a_address = function(req, res) {
    var new_address = new Address(req.body);

    //handles null error 
    if (!new_address.address_line_1) {

        res.status(400).send({ error: true, message: 'Please addres line 1' });

    } else {

        Address.createAddress(new_address, function(err, result) {
            process.on('uncaughtException', function(error) {
                console.trace(error);
            });

            if (err)
                res.json(new Response(false, err))
            res.json(new Response(true, result));
        });
    }
};

exports.read_a_address = function(req, res) {
    Address.getAddressById(req.params.address_id, function(err, result) {
        if (err)
            res.send(err);
        res.json(new Response(true, result));
    });
};

exports.update_a_address = function(req, res) {

    Address.updateById(new Address(req.body), req.params.address_id, function(err, result) {
        if (err)
            res.send(err);
        res.json(new Response(true, result));
    });
};

exports.update_addresses = function(req, res) {

    Address.update_addresses(req.body, req.params.size, function(err, result) {
        if (err)
            res.send(err);
        res.json([new Response(true, result)]);
    });
};

exports.save_addresses = function(req, res) {

    Address.save_addresses(req.body, req.params.size, function(err, result) {
        if (err)
            res.send(err);
        res.json([new Response(true, result)]);
    });
};

exports.delete_a_address = function(req, res) {


    Address.remove(req.params.address_id, function(err, address) {
        if (err)
            res.send(err);
        res.json(new Response(true, "Address successfully deleted."));
    });
};
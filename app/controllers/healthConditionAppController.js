'use strict';

var HealthCondition = require('../model/healthcondition.js');

function Response(success, response) {
    this.success = success;
    this.object = response;
}



//Member contorllers
exports.create_health_condition = function(req, res) {
    var new_health_condition = new HealthCondition(req.body);

    HealthCondition.createHealthCondition(new_health_condition, function(err, result) {

        process.on('uncaughtException', function(error) {
            console.trace(error);
        });

        if (err)
            res.json(new Response(false, err))
        res.json(new Response(true, result));
    });
};

exports.getHealthConditionByMemberId = function(req, res) {
    HealthCondition.getHealthConditionById(req.params.member_id, function(err, result) {
        console.log('Get health conditions by member id')
        if (err)
            res.send(err);
        console.log('res', result);
        res.json(new Response(true, result));
    })
};

exports.list_all_healthconditions = function(req, res) {
    HealthCondition.getAllHealthConditions(function(err, address) {

        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', address);
        res.send(address);
    });
};

exports.update_healthcondition = function(req, res) {

    HealthCondition.updateById(req.body, req.params.health_condition_id, function(err, result) {
        if (err)
            res.send(err);
        res.json([new Response(true, result)]);
    });
};

exports.update_healthconditions = function(req, res) {

    HealthCondition.update_haelth_conditions(req.body, req.params.size, function(err, result) {
        if (err)
            res.send(err);
        res.json([new Response(true, result)]);
    });
};

exports.save_healthconditions = function(req, res) {

    HealthCondition.save_haelth_conditions(req.body, req.params.size, function(err, result) {
        if (err)
            res.send(err);
        res.json([new Response(true, result)]);
    });
};
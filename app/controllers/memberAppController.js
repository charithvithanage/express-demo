'use strict';

var Member = require('../model/member.js');

function Response(success, response) {
    this.success = success;
    this.object = response;
}

//Member contorllers
exports.create_a_member = function(req, res) {
    var new_member = new Member(req.body);

    Member.createMember(new_member, function(err, result) {

        if (err)
            res.send(err);
        res.json(new Response(true, result));
    });
};

exports.update_a_member = function(req, res) {

    Member.updateById(new Member(req.body), req.params.member_id, function(err, result) {
        if (err)
            res.send(err);
        res.json(new Response(true, result));
    });
};

exports.get_member_by_id = function(req, res) {
    Member.getMemberById(req.params.member_id, function(err, result) {
        console.log('Get Member by member id')
        if (err)
            res.send(err);
        console.log('res', result);
        res.json(new Response(true, result));
    })
};


exports.list_all_members = function(req, res) {
    Member.getAllMembers(function(err, member) {

        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', member);
        res.send(member);
    });
};

exports.update_members = function(req, res) {

    Member.update_members(req.body, req.params.size, function(err, result) {
        if (err)
            res.send(err);
        res.json([new Response(true, result)]);
    });
};

exports.save_members = function(req, res) {

    Member.save_members(req.body, req.params.size, function(err, result) {
        if (err)
            res.send(err);
        res.json([new Response(true, result)]);
    });
};
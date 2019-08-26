'use strict';
var sql = require('./db.js');

var Member = function (member) {

    this.member_id = member.member_id;
    this.member_membership_no = member.member_membership_no;
    this.member_receipt_no = member.member_receipt_no;
    this.member_address_id = member.member_address_id;
    this.member_first_name = member.member_first_name;
    this.guardian_name = member.guardian_name;
    this.guardian_tel = member.guardian_tel;
    this.guardian_relationship = member.guardian_relationship;

    this.member_surname = member.member_surname;
    this.member_last_name = member.member_last_name;
    this.member_married_status = member.member_married_status;
    this.member_mobile_1 = member.member_mobile_1;
    this.member_mobile_2 = member.member_mobile_2;
    this.member_nic = member.member_nic;
    this.member_dob = member.member_dob;
    this.member_age = member.member_age;
    this.member_gender = member.member_gender;
    this.member_height = member.member_height;
    this.member_weight = member.member_weight;
    this.member_profile_image_url = member.member_profile_image_url;
    this.member_health_condition = member.member_health_condition;
    this.type = member.type;
    this.category = member.category;
    this.membership_expiry_date = member.membership_expiry_date;
    this.member_valid_status = member.member_valid_status;
    this.last_payment_date = member.last_payment_date;
    this.membership_type = member.membership_type;
    this.member_active_status = member.member_active_status;
    this.diabetes = member.diabetes;
    this.cholesterol = member.cholesterol;
    this.high_blood_pressure = member.high_blood_pressure;
    this.low_blood_pressure = member.low_blood_pressure;
    this.heart_problem = member.heart_problem;
    this.chest_pain = member.chest_pain;
    this.heart_attack = member.heart_attack;
    this.asthma = member.asthma;
    this.fainting_spells = member.fainting_spells;
    this.back_pain = member.back_pain;
    this.medication = member.medication;
    this.other_illness = member.other_illness;
    this.swollen = member.swollen;
    this.arthritis = member.arthritis;
    this.hernia = member.hernia;
    this.email = member.email;
    this.created_at = member.created_at;
    this.modified_at = member.modified_at;

}

Member.createMember = function (newMember, result) {
    sql.query("INSERT INTO table_members set ?", newMember, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res);
            result(null, newMember);
        }
    });
};

Member.updateById = function (member, id, result) {
    sql.query("UPDATE table_members SET ? WHERE member_id = ?", [member, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

// Member.updateMultipleMembers = function (members, result) {

//     var queries = '';

//     members.forEach(function (item) {
//         queries += mysql.format("UPDATE table_members SET users = ? WHERE id = ?; ", item);
//     });

//     sql.query("UPDATE table_members SET ? WHERE member_id = ?", [member, id], function (err, res) {
//         if (err) {
//             console.log("error: ", err);
//             result(null, err);
//         }
//         else {
//             result(null, res);
//         }
//     });
// };





Member.getAllMembers = function (result) {
    sql.query("Select * from table_members", function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('members : ', res);

            result(null, res);
        }
    });
};

Member.getMemberById = function (id, result) {
    sql.query("Select * from table_members WHERE member_id = ?", [id], function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('member : ', res);
            result(null, res);
        }
    });
};

Member.update_members = function (members,size,result) {

    let resultMembers = members.map(({selected, ...rest}) => rest);

    var i=0;

    resultMembers.forEach(element => {


        sql.query("UPDATE table_members SET ? WHERE member_id = ?", [element,element.member_id], function (err, res) {
            
            i++;

            if (err) {
                console.log("error: ", err);
    
            }
            else {

                console.log("updated: ", res);
                console.log("Lenght ",i)
                console.log("Members size ",members)


                if(i==size){
                    result(null, res);
                }
    
            }
        });
    });

    
};


module.exports = Member;
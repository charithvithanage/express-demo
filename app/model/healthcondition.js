'use strict';
var sql = require('./db.js');

var HealthCondition = function (healthcondition) {

    this.health_condition_id = healthcondition.health_condition_id;
    this.diabetes = healthcondition.diabetes;
    this.cholesterol = healthcondition.cholesterol;
    this.high_blood_pressure = healthcondition.high_blood_pressure;
    this.low_blood_pressure = healthcondition.low_blood_pressure;
    this.heart_problem = healthcondition.heart_problem;
    this.chest_pain = healthcondition.chest_pain;
    this.heart_attack = healthcondition.heart_attack;
    this.asthma = healthcondition.asthma;
    this.fainting_spells = healthcondition.fainting_spells;
    this.back_pain = healthcondition.back_pain;
    this.medication = healthcondition.medication;
    this.other_illness = healthcondition.other_illness;
    this.swollen = healthcondition.swollen;
    this.arthritis = healthcondition.arthritis;
    this.hernia = healthcondition.hernia;
    this.created_at = healthcondition.created_at;
    this.modified_at = healthcondition.modified_at;

}

HealthCondition.createHealthCondition = function (newHealthCondition, result) {
    sql.query("INSERT INTO table_health_condition set ?", newHealthCondition, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res);
            result(null, newHealthCondition);
        }
    });
};

HealthCondition.updateById = function (healthcondition, id, result) {
    sql.query("UPDATE table_health_condition SET ? WHERE id = ?", [healthcondition, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};


HealthCondition.getAllHealthConditions = function (result) {
    sql.query("Select * from table_health_condition", function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('healthconditions : ', res);

            result(null, res);
        }
    });
};

HealthCondition.getHealthConditionById = function (id, result) {
    sql.query("Select * from table_health_condition WHERE member_id = ?", [id], function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('healthcondition : ', res);
            result(null, res);
        }
    });
};

HealthCondition.update_haelth_conditions = function (healthconditions,size,result) {

    var i=0;

    healthconditions.forEach(element => {


        sql.query("UPDATE table_health_condition SET ? WHERE id = ?", [element,element.id], function (err, res) {
            
            i++;

            if (err) {
                console.log("error: ", err);
    
            }
            else {

                console.log("updated: ", res);

                if(i==size){
                    result(null, res);
                }
    
            }
        });
    });

    
};

HealthCondition.save_haelth_conditions = function (healthconditions,size,result) {

    var i=0;

    healthconditions.forEach(element => {


        sql.query("INSERT INTO table_health_condition set ?", [element], function (err, res) {
            
            i++;

            if (err) {
                console.log("error: ", err);
    
            }
            else {

                console.log("updated: ", res);

                if(i==size){
                    result(null, res);
                }
    
            }
        });
    });

    
};

module.exports = HealthCondition;
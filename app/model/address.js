'use strict';
var sql = require('./db.js');

//Address object constructor
var Address = function(address){
    this.address_id = address.address_id;
    this.address_line_1 = address.address_line_1;
    this.address_line_2 = address.address_line_2;
    this.address_line_3 = address.address_line_3;
    this.address_line_city = address.address_line_city;
    this.created_at = address.created_at;
    this.modified_at=address.modified_at;
};

Address.createAddress = function (newAddress, result) {    
        sql.query("INSERT INTO table_addresses set ?", newAddress, function (err, res) {
                
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res);
                    result(null, res);
                }
            });           
};

Address.getAddressById = function (addressId, result) {
        sql.query("Select * from table_addresses where address_id = ?", addressId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

Address.getAllAddress = function (result) {
        sql.query("Select * from table_addresses", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('addresses : ', res);  

                 result(null, res);
                }
            });   
};

Address.updateById = function(address, id, result){
  sql.query("UPDATE table_addresses SET ? WHERE address_id = ?", [address, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};

Address.update_addresses = function (addresses,size,result) {

    var i=0;

    addresses.forEach(element => {


        sql.query("UPDATE table_addresses SET ? WHERE address_id = ?", [element,element.address_id], function (err, res) {
            
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

Address.save_addresses = function (addresses,size,result) {

    var i=0;

    addresses.forEach(element => {


        sql.query("INSERT INTO table_addresses set ?", [element], function (err, res) {
            
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



Address.remove = function(id, result){
     sql.query("DELETE FROM table_addresses WHERE address_id = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Address;
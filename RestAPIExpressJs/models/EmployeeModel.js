var mongoose=require("mongoose");
var Schema=mongoose.Schema;
var employeeSchema=new Schema({
    empId: String,
    name: String,
    designation: String,
    department: String,
    address: String,
    salary: Number,
    age: Number,
    email: String,
    mobile: String
});
var Employees=mongoose.model("Employees", employeeSchema);
module.exports=Employees;
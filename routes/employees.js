var express = require('express');
var router = express.Router();
var Employees = require('../models/EmployeeModel');

/* GET employees listing. */
router.get('/', function(req, res, next) {
  Employees.find({}, function(err, employees){
      if(err) throw err;
      res.send(employees);
    });
});

/* GET employees listing. */
router.get('/:empId', function(req, res, next) {
  Employees.findOne({empId: req.params.empId}, function(err, employees){
      if(err) throw err;
      res.send(employees);
    });
});

/* PUT employees listing. */
router.put('/', function(req, res, next) {
  if(req.body.empId){
    var employee=Employees(req.body)
    Employees.findOneAndUpdate({empId: req.body.empId}, {name: req.body.name}, function(err, results){
      if(err) throw err;
      var response={
        message: 'Updated',
        empId: results.empId,
        id: results._id
      }
      res.send(response);
    });
  }else{
    var error={
      message: 'Failed'
    }
    res.send(error);
  }
});

/* POST employees listing. */
router.post('/', function(req, res, next) {
  var newEmployee=Employees(req.body);
  newEmployee.save(function(err, results) {
      if (err) throw err;
      var response={
        message: 'Success',
        empId: results.empId,
        id: results._id
      }
      res.send(response);
  });
});

/* POST employees. */
router.delete('/', function(req, res, next){
    Employees.findOneAndRemove({empId: req.body.empId}, function(err, employees){
      if(err) throw err;
      var message={
        message: "Employee deleted",
        empId: employees.empId
      }
      res.send(message);
    });
});

module.exports = router;

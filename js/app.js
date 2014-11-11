/* 
    app.js
    Angular application for the address book challenge

    Add code here to create a new Angular application and controller.
    The array of employee objects is already in a global variable named 'pawneeEmployees'
*/
"use strict";

var AddressBook = angular.module('AddressBook', []);

AddressBook.controller('AddressController', ['$scope', function($scope) {
	//initializes a list of employees
	$scope.employees = pawneeEmployees;
	//sets the default order of employees in scope
	$scope.order = 'lastName';
}]);

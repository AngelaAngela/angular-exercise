"use strict";
{
	angular.module('app')
		.controller('MainController', function(){
			const $ctrl = this;
			$ctrl.family = [
		{name: "Nancy", relation: "Mom", age: "70"},
		{name: "Steve", relation: "Dad", age: "71"},
		{name: "Bonnie", relation: "cousin", age: "56"},
		{name: "JoAnn", relation: "aunt", age: "80"},
		];
	});
	}
			// $ctrl.myName = "Angie";
			
			// $ctrl.band = [
			// {name: "Led Zepplin", song: "dyer maker"},
			
			// {name: "Prince", song: "1999"},
			
			// {name: "Al Green", song: "Tired of being alone"},
			
			// {name: "Electric Six", song: "dance pattern"}





			//  ];



			//  $ctrl.names = [
			//  {name: "ivan", present: false},
			//  [name: "mishara", present: false],
			//  {name: "john",  present: true},
			//  {name: "grant", present: true},
			 
			//  $ctrl.changeName = function (name){
			//  	$ctrl.me.name = name;
			//  };

			//  $ctrl.addName=function(){
			//  	$ctrl.names.push($ctrl.newName);
			//  	$ctrl.newName=""; //clears name
			//  }

			//  $ctrl.togglePresent= function (student){
			//  	student.present = !student.present;
			//  }




		

		
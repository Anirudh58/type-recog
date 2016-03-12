var app = angular.module('trApp', []);

app.controller('MainController', function($scope){
    var textData1=[], textData2=[], textData3=[];

    $('#test1').keyup(function(evt) {
        if(evt.keyCode == 13) { // ignore enter
            console.log("ENTER ignored");
            return;
        }
        if($('#test1').val().length==0) { // reset after clear
            textData1 = [];
            console.log("DELETED");
            return;
        }
        textData1.push({"scancode":evt.which, "timestamp":evt.timeStamp});

        console.log("Key code: "+evt.which+" On time: "+evt.timeStamp);
        console.log(textData1);
    });



});


/*
var data =[['slashdot','USA','yes',18],
    ['google','France','yes',23],
    ['digg','USA','yes',24],
    ['kiwitobes','France','yes',23],
    ['google','UK','no',21],
    ['(direct)','New Zealand','no',12],
    ['(direct)','UK','no',21],
    ['google','USA','no',24],
    ['slashdot','France','yes',19],
    ['digg','USA','no',18,],
    ['google','UK','no',18,],
    ['kiwitobes','UK','no',19],
    ['digg','New Zealand','yes',12],
    ['slashdot','UK','no',21],
    ['google','UK','yes',18],
    ['kiwitobes','France','yes',19]];
var result = ['None','Premium','Basic','Basic','Premium','None','Basic','Premium','None','None','None','None','Basic','None','Basic','Basic'];

var dt = new ml.DecisionTree({
    data : data,
    result : result
});

dt.build();

// dt.print();

console.log("Classify : ", dt.classify(['(direct)','USA','yes',5]));

dt.prune(1.0); // 1.0 : mingain.
dt.print();
*/

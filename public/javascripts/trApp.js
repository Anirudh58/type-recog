var app = angular.module('trApp', []);

app.controller('MainController', function($scope){
    var textData1=[], updone1=true, firstTime1=true, currentTime1;
    var textData2=[], updone2=true, firstTime2=true, currentTime2;
    var textData3=[], updone3=true, firstTime3=true, currentTime3;

    var testText="pumas are large cat like animals that are found in america when reports came into london zoo that a wild puma had been spotted forty five miles south of london they were not taken seriously";

    var i=0;

    $('#test1').keydown(function(evt) {

        if(testText.charCodeAt(i)-32 == evt.which || (testText[i]==' ' && evt.which == 32)){
            if(updone1){
                updone1=false;
                if(evt.keyCode == 13) { // ignore enter
                    console.log("ENTER ignored");
                    return;
                }


                if(firstTime1){
                    currentTime1 = evt.timeStamp;
                    firstTime1=false;
                }

                textData1.push({"scancode":evt.which, "timestamp":(evt.timeStamp-currentTime1)});

                $('#test1').one("keyup", function(e){
                    console.log('key down' + evt.which);
                    console.log('key up ' + e.which);
                    console.log(e.which, ' pressed for time ', e.timeStamp - evt.timeStamp);

                    textData1[textData1.length-1].keyholdtime = e.timeStamp - evt.timeStamp;
                    updone1=true;
                });
            }
            i++;
        }



    });

    $('#test2').keydown(function(evt) {
        if(updone2){
            updone2=false;
            if(evt.keyCode == 13) { // ignore enter
                console.log("ENTER ignored");
                return;
            }
            if(firstTime2){
                currentTime2 = evt.timeStamp;
                firstTime2=false;
            }
            textData2.push({"scancode":evt.which, "timestamp":(evt.timeStamp-currentTime2)});

            $('#test2').one("keyup", function(e){
                console.log('key down' + evt.which);
                console.log('key up ' + e.which);
                console.log(e.which, ' pressed for time ', e.timeStamp - evt.timeStamp);

                textData2[textData2.length-1].keyholdtime = e.timeStamp - evt.timeStamp;
                updone2=true;
            });
        }


    });

    $('#test3').keydown(function(evt) {
        if(updone3){
            updone3=false;
            if(evt.keyCode == 13) { // ignore enter
                console.log("ENTER ignored");
                return;
            }
            if(firstTime3){
                currentTime3 = evt.timeStamp;
                firstTime3=false;
            }
            textData3.push({"scancode":evt.which, "timestamp":(evt.timeStamp-currentTime3)});

            $('#test3').one("keyup", function(e){
                console.log('key down' + evt.which);
                console.log('key up ' + e.which);
                console.log(e.which, ' pressed for time ', e.timeStamp - evt.timeStamp);

                textData3[textData3.length-1].keyholdtime = e.timeStamp - evt.timeStamp;
                updone3=true;
            });
        }


    });


    $('#ok').one("click", function(){
        console.log(textData1);
        console.log(textData2);
        console.log(textData3);


    });


});

/*var data =[['slashdot','USA','yes',18],
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
dt.print();*/

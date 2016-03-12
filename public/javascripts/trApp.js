var app = angular.module('trApp', []);

app.controller('MainController', function($scope){
    var textData1=[], updone1=true, firstTime1=true, currentTime1;
    var textData2=[], updone2=true, firstTime2=true, currentTime2;
    var textData3=[], updone3=true, firstTime3=true, currentTime3;

    var testText="pumas are large cat like animals that are found in america when reports came into london zoo that a wild puma had been spotted forty five miles south of london they were not taken seriously";

    var flag1;
    var temp1;
    var i=0;
    var len1=0;

    $('#test1').keydown(function(evt) {
        if((testText.charCodeAt(i)-32 == evt.which || (testText[i]==' ' && evt.which == 32)) && len1==i){
            flag1=1;
            if(evt.keyCode == 13) { // ignore enter
                console.log("ENTER ignored");
                return;
            }

            if(firstTime1){
                currentTime1 = evt.timeStamp;
                firstTime1=false;
            }
            console.log('key down' + evt.which);
            textData1.push({"scancode":evt.which, "timestamp":(evt.timeStamp-currentTime1)});

            temp1=evt;
            /*$('#test1').one("keyup", function(e){
                if(downDone){
                    console.log('key up ' + e.which);
                    console.log(e.which, ' pressed for time ', e.timeStamp - evt.timeStamp);

                    textData1[textData1.length-1].keyholdtime = e.timeStamp - evt.timeStamp;
                    downDone=false;
                }
            });*/



            i++;
            len1++; //increment both
        }
        else if(evt.which==8){
            len1--;
        }
        else{
            len1++; // if he is making a mistake
        }


    })
        .keyup(function(e){
            if(flag1==1){
                console.log('key up ' + e.which);
                console.log(e.which, ' pressed for time ', e.timeStamp - temp1.timeStamp);

                textData1[textData1.length-1].keyholdtime = e.timeStamp - temp1.timeStamp;
                flag1=0;
            }
        });

    var flag2;
    var temp2;
    var j=0;
    var len2=0;

    $('#test2').keydown(function(evt) {
        if((testText.charCodeAt(j)-32 == evt.which || (testText[j]==' ' && evt.which == 32)) && len2==j){
                flag2=1;
                if(evt.keyCode == 13) { // ignore enter
                    console.log("ENTER ignored");
                    return;
                }
                if(firstTime2){
                    currentTime2 = evt.timeStamp;
                    firstTime2=false;
                }
                textData2.push({"scancode":evt.which, "timestamp":(evt.timeStamp-currentTime2)});

                temp2=evt;
                /*$('#test2').one("keyup", function(e){
                    console.log('key down' + evt.which);
                    console.log('key up ' + e.which);
                    console.log(e.which, ' pressed for time ', e.timeStamp - evt.timeStamp);

                    textData2[textData2.length-1].keyholdtime = e.timeStamp - evt.timeStamp;
                    updone2=true;
                });*/

            j++;
            len2++;
        }
        else if(evt.which==8){
            len2--;
        }
        else{
            len2++; // if he is making a mistake
        }
    })
        .keyup(function(e){
            if(flag2==1){
                console.log('key up ' + e.which);
                console.log(e.which, ' pressed for time ', e.timeStamp - temp2.timeStamp);

                textData2[textData2.length-1].keyholdtime = e.timeStamp - temp2.timeStamp;
                flag2=0;
            }
        });

    var flag3;
    var temp3;
    var k=0;
    var len3=0;

    $('#test3').keydown(function(evt) {
        if((testText.charCodeAt(k)-32 == evt.which || (testText[k]==' ' && evt.which == 32)) && len3==k){
                flag3=1;
                if(evt.keyCode == 13) { // ignore enter
                    console.log("ENTER ignored");
                    return;
                }
                if(firstTime3){
                    currentTime3 = evt.timeStamp;
                    firstTime3=false;
                }
                textData3.push({"scancode":evt.which, "timestamp":(evt.timeStamp-currentTime3)});

                temp3=evt;
                /*$('#test3').one("keyup", function(e){
                    console.log('key down' + evt.which);
                    console.log('key up ' + e.which);
                    console.log(e.which, ' pressed for time ', e.timeStamp - evt.timeStamp);

                    textData3[textData3.length-1].keyholdtime = e.timeStamp - evt.timeStamp;
                    updone3=true;
                });*/

            k++;
            len3++;
        }
        else if(evt.which==8){
            len3--;
        }
        else{
            len3++; // if he is making a mistake
        }
    })
        .keyup(function(e){
            if(flag3==1){
                console.log('key up ' + e.which);
                console.log(e.which, ' pressed for time ', e.timeStamp - temp3.timeStamp);

                textData3[textData3.length-1].keyholdtime = e.timeStamp - temp3.timeStamp;
                flag3=0;
            }
        });


    $('#ok').one("click", function(){

        for(i=0; i<textData1.length;i++){
            if(!textData1[i].keyholdtime){
                textData1[i].keyholdtime=65;
            }
        }

        for(i=0; i<textData2.length;i++){
            if(!textData2[i].keyholdtime){
                textData2[i].keyholdtime=65;
            }
        }

        for(i=0; i<textData3.length;i++){
            if(!textData3[i].keyholdtime){
                textData3[i].keyholdtime=65;
            }
        }

        console.log(textData1);
        console.log(textData2);
        console.log(textData3);

        //get elapse time of each n-gram. here n=3

        var nGrams1Elap=[], nGrams2Elap=[], nGrams3Elap=[];
        console.log(textData1.length);
        for(i=0; i<textData1.length-3;i++){
            nGrams1Elap.push(textData1[i+3].timestamp - textData1[i].timestamp);
        }

        nGrams1Elap.push(textData1[i+2].timestamp + textData1[i+2].keyholdtime - textData1[i].timestamp);

        console.log(textData2.length);
        for(i=0; i<textData2.length-3;i++){
            nGrams2Elap.push(textData2[i+3].timestamp - textData2[i].timestamp);
        }

        nGrams2Elap.push(textData2[i+2].timestamp + textData2[i+2].keyholdtime - textData2[i].timestamp);

        console.log(textData3.length);
        for(i=0; i<textData3.length-3;i++){
            nGrams3Elap.push(textData3[i+3].timestamp - textData3[i].timestamp);
        }

        nGrams3Elap.push(textData3[i+2].timestamp + textData3[i+2].keyholdtime - textData3[i].timestamp);

        console.log(nGrams1Elap);
        console.log(nGrams2Elap);
        console.log(nGrams3Elap);
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

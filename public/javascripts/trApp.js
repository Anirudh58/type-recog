var app = angular.module('trApp', []);


app.factory('MainFactory', ['$http', function($http){

    var getAllPatterns = function(){

        return $http({
            method: 'GET',
            url: '/users/patterns',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            transformRequest: function(obj) {
                var str = [];
                for(var p in obj)
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            }
            })
            .success(function(json) {
                return json;
            })
            .error(function(err) {
                return err;
            });
    };


    var postPatterns = function(name, data){

        return $http({
            method: 'POST',
            url: '/users/patterns',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            transformRequest: function(obj) {
                var str = [];
                for(var p in obj)
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            },
            data: {name: name, pattern: data}
            })
            .success(function(json) {
                return json;
            })
            .error(function(err) {
                return err;
            });
    };

    return {
        getAllPatterns: getAllPatterns,
        postPatterns: postPatterns
    };

}]);

app.controller('MainController', ['MainFactory', function(MainFactory, $scope){
    var textData1=[], firstTime1=true, currentTime1;
    var textData2=[], firstTime2=true, currentTime2;
    var textData3=[], firstTime3=true, currentTime3;

    var dataSet1=[], dataSet2=[], dataSet3=[];

    var data=[];
    var result=[];

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

    var flag;
    var temp;
    var l=0;
    var len=0;
    var firstTime = true, currentTime;
    var textData=[];

    $('#test').keydown(function(evt) {
            if((testText.charCodeAt(l)-32 == evt.which || (testText[l]==' ' && evt.which == 32)) && len==l){
                flag=1;
                if(evt.keyCode == 13) { // ignore enter
                    console.log("ENTER ignored");
                    return;
                }
                if(firstTime){
                    currentTime = evt.timeStamp;
                    firstTime=false;
                }
                textData.push({"scancode":evt.which, "timestamp":(evt.timeStamp-currentTime)});

                temp=evt;

                l++;
                len++;
            }
            else if(evt.which==8){
                len--;
            }
            else{
                len++; // if he is making a mistake
            }
        })
        .keyup(function(e){
            if(flag==1){
                console.log('key up ' + e.which);
                console.log(e.which, ' pressed for time ', e.timeStamp - temp.timeStamp);

                textData[textData.length-1].keyholdtime = e.timeStamp - temp.timeStamp;
                flag=0;
            }
        });


    $('#ok').click(function(){

        // assign average keyhold time for characters which were left out

        assignAverage(textData1);
        assignAverage(textData2);
        assignAverage(textData3);

        console.log('Text data');

        console.log(textData1);
        console.log(textData2);
        console.log(textData3);

        //get elapse time of each n-gram. here n=3

        var nGrams1Elapse = getElapseTimes(textData1);
        var nGrams2Elapse = getElapseTimes(textData2);
        var nGrams3Elapse = getElapseTimes(textData3);

        console.log('Indices of Elapse times in sorted order:');

        console.log(nGrams1Elapse);
        console.log(nGrams2Elapse);
        console.log(nGrams3Elapse);


        //get keystroke duration for each n-gram

        var nGrams1Key = getKeystrokeDuration(textData1);
        var nGrams2Key = getKeystrokeDuration(textData2);
        var nGrams3Key = getKeystrokeDuration(textData3);

        console.log('Keystroke duration :');

        console.log(nGrams1Key);
        console.log(nGrams2Key);
        console.log(nGrams3Key);

        //get Latency for each n-gram


        var nGrams1Lat = getLatency(textData1);
        var nGrams2Lat = getLatency(textData2);
        var nGrams3Lat = getLatency(textData3);

        console.log('Latency :');
        console.log(nGrams1Lat);
        console.log(nGrams2Lat);
        console.log(nGrams3Lat);

        dataSet1 = createDataSet(nGrams1Elapse, nGrams1Key, nGrams1Lat);
        dataSet2 = createDataSet(nGrams2Elapse, nGrams2Key, nGrams2Lat);
        dataSet3 = createDataSet(nGrams3Elapse, nGrams3Key, nGrams3Lat);

        console.log('Data sets: ');
        console.log(dataSet1);
        console.log(dataSet2);
        console.log(dataSet3);

    });

    $("#submit").click(function(){

        var name = $("#inputName").val();
        console.log(name);

        if(dataSet1.length){
            MainFactory.postPatterns(name, dataSet1.toString()).success(function(json){
                console.log('Response for patterns dataset1', json);
            })
                .error(function(err){
                    console.log('Error ', err);
                });
        }

        if(dataSet2.length){
            MainFactory.postPatterns(name, dataSet2.toString()).success(function(json){
                console.log('Response for patterns dataset2', json);
            })
                .error(function(err){
                    console.log('Error ', err);
                });
        }

        if(dataSet3.length){
            MainFactory.postPatterns(name, dataSet3.toString()).success(function(json){
                console.log('Response for patterns dataset3', json);
            })
                .error(function(err){
                    console.log('Error ', err);
                });
        }

        // re-initialize for next user
        textData1=[], textData2=[], textData3=[];
        i=0,j=0,k=0;
        len1=0, len2=0, len3=0;

        $('#test1').val('');
        $('#test2').val('');
        $('#test3').val('');

        firstTime1=true, firstTime2=true, firstTime3=true;

    });

    $('#predict').click(function(){
       MainFactory.getAllPatterns().success(function(json){
           console.log('response from get patterns ', json);

           for(var i=0;i<json.length;i++){
               var temp = json[i].pattern.split(',');
               for(var j=0;j<temp.length;j++){
                   temp[j]=parseInt(temp[j]);
               }
               console.log('temp', temp);
               data.push(temp);
               result.push(json[i].name);
           }

           var dt = new ml.DecisionTree({
               data : data,
               result : result
           });

           dt.build();

           console.log(data, result);

           // get test data
           assignAverage(textData);
           console.log('Test data' , textData);

            //get elapsed time
           var nGramsElapse = getElapseTimes(textData);
           console.log('Elapse time', nGramsElapse);

            //get keystroke duration
           var nGramsKey = getKeystrokeDuration(textData);
           console.log('Key stroke time', nGramsKey);

           //get Latency for each n-gram
           var nGramsLat = getLatency(textData);
           console.log('Latency :', nGramsLat);

           var dataSet = createDataSet(nGramsElapse, nGramsKey, nGramsLat);

           console.log('test data ', dataSet);


           // dt.print();

           console.log("Classify : ", dt.classify(dataSet));

           dt.prune(1.0); // 1.0 : mingain.
           dt.print();

           })
           .error(function(err){
               console.log('Error '. err);
           })
    });


}]);

function getLatency(textData){
    var nGramsLat=[];
    nGramsLat.push((textData[1].timestamp - (textData[0].timestamp + textData[0].keyholdtime)) + (textData[1].timestamp - (textData[0].timestamp + textData[0].keyholdtime)));

    for(var i=1;i<textData.length-2;i++){
        var sum=0;
        sum+=(textData[i].timestamp - (textData[i-1].timestamp + textData[i-1].keyholdtime));
        sum+=(textData[i+1].timestamp - (textData[i].timestamp + textData[i].keyholdtime));
        sum+=(textData[i+2].timestamp - (textData[i+1].timestamp + textData[i+1].keyholdtime));

        nGramsLat.push(sum);
    }

    return nGramsLat;
}

function getKeystrokeDuration(textData){
    var nGramsKey=[];
    for(var i=0;i<textData.length-2;i++){
        nGramsKey.push(textData[i].keyholdtime + textData[i+1].keyholdtime + textData[i+2].keyholdtime)
    }

    return nGramsKey;
}

function getElapseTimes(textData){
    var nGramsElapse=[];
    var nGramsElap=[];

    for(var i=0; i<textData.length-3;i++){
        nGramsElap.push(textData[i+3].timestamp - textData[i].timestamp);
    }

    nGramsElap.push(textData[i+2].timestamp + textData[i+2].keyholdtime - textData[i].timestamp);

    for(i=0;i<nGramsElap.length;i++){
        nGramsElapse.push(i);
    }

    for(i=0;i<nGramsElap.length-1;i++){
        var imin=i;
        var temp;

        for(j=i+1;j<nGramsElap.length;j++){
            if(nGramsElap[j]<nGramsElap[imin]){
                imin=j;
            }
        }

        temp=nGramsElap[imin];
        nGramsElap[imin]=nGramsElap[i];
        nGramsElap[i]=temp;

        temp=nGramsElapse[imin];
        nGramsElapse[imin]=nGramsElapse[i];
        nGramsElapse[i]=temp;
    }

    return nGramsElapse;
}

function assignAverage(textData){
    for(var i=0; i<textData.length;i++){
        if(!textData[i].keyholdtime){
            textData[i].keyholdtime=65;
        }
    }
}

function createDataSet(nGramsElapse, nGramsKey, nGramsLat){
    var dataSet=[];
    for(var i=0;i<nGramsElapse.length;i++){
        dataSet.push(nGramsElapse[i]);
        dataSet.push(nGramsKey[i]);
        dataSet.push(nGramsLat[i]);
    }

    return dataSet;
}

/*var data =[[[10,11],[11,12,18]],
 [[11,12],[12,13,23]],
 [[11,13],[13,14,24]],
 [[12,13],[11,12,14]],
 [[12,14],[14,13,21]],
 [[12,11],[11,13,12]],
 [[13,14],[13,14,21]],
 [[13,15],[14,15,24]],
 [[13,14],[14,15,19]],
 [[11,12],[14,15,18]],
 [[11,15],[12,13,18]],
 [[14,15],[15,16,19]],
 [[15,16],[13,14,12]],
 [[12,16],[14,16,21]],
 [[13,15],[14,16,18]],
 [[13,16],[15,16,19]]];
 var result = ['None','Premium','Basic','Basic','Premium','None','Basic','Premium','None','None','None','None','Basic','None','Basic','Basic'];

 var dt = new ml.DecisionTree({
 data : data,
 result : result
 });

 dt.build();

 // dt.print();

 console.log("Classify : ", dt.classify([[11,12],[12,13,14]]));

 dt.prune(1.0); // 1.0 : mingain.
 dt.print();*/

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
dt.print();*/

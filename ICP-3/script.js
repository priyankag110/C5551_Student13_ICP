
  angular.module('myApp',[])
    .controller('nutritionctrl', function($scope, $http) {
        console.log("hi");
        $scope.ngShowhide = false;
        $scope.getNutrition = function(ingrName) {

            if(ingrName === undefined)
            { alert('Enter Valid name');}

            else {
                myurl = 'https://api.nutritionix.com/v1_1/search/' + ingrName + '?results=0:1&fields=*&appId=bd5583a6&appKey=9b45a2916776db0b9c4a6901e593ed9c'
                $http.get(myurl).success(function (data) {

                        console.log(data);
                        $scope.itemName = data["hits"]["0"]["fields"]["item_name"];
                        $scope.calories = data["hits"]["0"]["fields"]["nf_calories"];
                        $scope.weight = data["hits"]["0"]["fields"]["nf_serving_weight_grams"];
                        $scope.ngShowhide = true;

                    }
                )
            }
        }
        $scope.playNutritionDetails = function() {
            let text = $scope.itemName + " has " + $scope.calories + " calories " + " and total weight is " + $scope.weight;
            let nutritionURL = "https://stream.watsonplatform.net/text-to-speech/api/v1/synthesize?username=a81fb1d3-99e1-4ccb-8b70-e7d507df4f28&password=HMMSX5seHVdC&text="+text;
            let audio = new Audio(nutritionURL);
            audio.play();
        };

    });



angular.module('weather',[])
    .controller('weatherctrl', function($scope, $http) {
        console.log("hi");
        $scope.result = [];
        $scope.getWeather = function(stateCode,city) {
            myurl = 'http://api.wunderground.com/api/4bbbc25f4f5946dd/hourly/q//' + stateCode +'/' + city +'.json'
            $http.get(myurl).success(function(data) {

                console.log(data);
                $scope.result = data["hourly_forecast"];

            })
        }
        $scope.getHours = function(hours){
            let amPM = (hours > 11) ? "pm" : "am";
            if(hours > 12) {
                hours -= 12;
            } else if(hours == 0) {
                hours = "12";
            }
            return hours + amPM;
        }
        $scope.getTemp = function(temperature){
            return temperature + ' F'
        }
    });
$(document).ready(function () {
    var intervalId_Wheather = null;

    function Start_Wheather() {
        invokeAPI_Wheather();
        intervalId_Wheather = setInterval(invokeAPI_Wheather, 1000);
        $('.result_Wheather').html("조회 진행 중");
    }

    function Stop_Wheather() {
        if (intervalId_Wheather != null) {
            clearInterval(intervalId_Wheather);
            $('.result_Wheather').html(" ");
        }
    }

    var invokeAPI_Wheather = function () {
        var API_URI = 'https://api.openweathermap.org/data/2.5/weather?q=Seoul&units=metric&lang=kr&appid=ab8265d0825b8391030564521ca11357';
        $.ajax(API_URI, {
            method: 'GET',
            dataType: 'json',
            crossDomain: true,

            success: function (data, status, xhr) {
                var result_Wheather = data;
                var filteredData = {
                    temp: result_Wheather.main.temp,
                    humidity: result_Wheather.main.humidity,
                    description: result_Wheather.weather[0].description
                };
                printData_Wheather(filteredData);
                console.log("data=" + data);
            },
            error: function (xhr, status, e) {
                alert("error");
            }
        });
    };

    var printData_Wheather = function (result_Wheather) {
        $('.SeoulNowtemp').html("temp: " + result_Wheather.temp);
        $('.SeoulHumidity').html("Humidity: " + result_Wheather.humidity);
        $('.SeoulDescription').html("기후: " + result_Wheather.description);
    }

    function convertTime() {
        var now = new Date();
        var month = now.getMonth() + 1;
        var date = now.getDate();

        return month + '월' + date + '일';
    }

    var currentTime = convertTime();
    $('.nowtime').html(currentTime);

    var weathericonUrl =
        '<img src="http://openweathermap.org/img/wn/'
        + $('.SeoulIcon').attr("data-weather-icon") +
        '.png" alt="' + $('.SeoulIcon').attr("data-weather-description") + '"/>';

    $('.SeoulIcon').html(weathericonUrl);

    $('#startBtn').click(function () {
        Start_Wheather();
    });

    $('#stopBtn').click(function () {
        Stop_Wheather();
    });
});

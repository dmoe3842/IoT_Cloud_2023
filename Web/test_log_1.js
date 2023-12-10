document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("getLogButton1").addEventListener("click", function() {
        var fromTime1 = new Date(document.getElementById("fromTime1").value);
        var toTime1 = new Date(document.getElementById("toTime1").value);

        fromTime1.setMinutes(fromTime1.getMinutes() - fromTime1.getTimezoneOffset());
        toTime1.setMinutes(toTime1.getMinutes() - toTime1.getTimezoneOffset());

        fromTime1 = encodeURIComponent(fromTime1.toISOString().slice(0, 19).replace('T', ' '));
        toTime1 = encodeURIComponent(toTime1.toISOString().slice(0, 19).replace('T', ' '));

        var xhr = new XMLHttpRequest();
        var url = "https://awkr1e403a.execute-api.ap-northeast-2.amazonaws.com/prod/devices/Device1/log?from=" + fromTime1 + "&to=" + toTime1;

        xhr.open("GET", url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var json = JSON.parse(xhr.responseText);
                var html = "";
                for (var i = 0; i < json.length; i++) {
                    html += json[i];
                }
                document.getElementById("logResult1").innerHTML = html;
            }
        }
        xhr.send();
    });
});

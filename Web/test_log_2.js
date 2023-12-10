document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("getLogButton2").addEventListener("click", function() {
        var fromTime2 = new Date(document.getElementById("fromTime2").value);
        var toTime2 = new Date(document.getElementById("toTime2").value);

        fromTime2.setMinutes(fromTime2.getMinutes() - fromTime2.getTimezoneOffset());
        toTime2.setMinutes(toTime2.getMinutes() - toTime2.getTimezoneOffset());

        fromTime2 = encodeURIComponent(fromTime2.toISOString().slice(0, 19).replace('T', ' '));
        toTime2 = encodeURIComponent(toTime2.toISOString().slice(0, 19).replace('T', ' '));

        var xhr = new XMLHttpRequest();
        var url = "https://awkr1e403a.execute-api.ap-northeast-2.amazonaws.com/prod/devices/Device2/log?from=" + fromTime2 + "&to=" + toTime2;

        xhr.open("GET", url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var json = JSON.parse(xhr.responseText);
                var html = "";
                for (var i = 0; i < json.length; i++) {
                    html += json[i];
                }
                document.getElementById("logResult2").innerHTML = html;
            }
        }
        xhr.send();
    });
});

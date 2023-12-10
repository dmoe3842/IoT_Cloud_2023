document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("getLogButton2").addEventListener("click", function() {
        var fromTime = new Date(document.getElementById("fromTime2").value);
        var toTime = new Date(document.getElementById("toTime2").value);

        fromTime = encodeURIComponent(fromTime.toISOString().slice(0, 19).replace('T', ' '));
        toTime = encodeURIComponent(toTime.toISOString().slice(0, 19).replace('T', ' '));

        var xhr = new XMLHttpRequest();
        var url = "https://awkr1e403a.execute-api.ap-northeast-2.amazonaws.com/prod/devices/Device2/log?from=" + fromTime + "&to=" + toTime;

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

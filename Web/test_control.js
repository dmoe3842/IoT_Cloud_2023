function toggleLED(state) {
    const url = 'https://awkr1e403a.execute-api.ap-northeast-2.amazonaws.com/prod/devices/Device1';
    const data = {
        "tags": [
            {
                "tagName": "LED",
                "tagValue": state
            }
        ]
    };

    fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
    .then(response => {
        if (response.ok) {
            const statusMessage = `Device1이 ${state} 상태로 제어되었습니다.`;
            console.log(`Device1이 ${state} 상태로 제어되었습니다.`);
            document.getElementById('ledStatus1').innerHTML = statusMessage;
        } else {
            document.getElementById('ledStatus1').innerHTML = statusMessage;
            console.error('Device1 제어에 실패했습니다.');
        }
    })
    .catch(error => {
        document.getElementById('ledStatus1').innerHTML = statusMessage;
        console.error('API 요청 중 오류가 발생했습니다.', error);
    });
}

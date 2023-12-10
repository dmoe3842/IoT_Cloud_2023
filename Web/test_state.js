  var intervalId = null;

  function Start_State() {
      invokeAPI_State();
      intervalId = setInterval(invokeAPI_State, 1000);
      document.getElementById("result_State").innerHTML="조회 중...";
  }
  // API 중지
		
  function Stop_State() {
      if(intervalId != null) {
          clearInterval(intervalId);
          document.getElementById("result_State").innerHTML="No Data";
      }
  }
		
  var invokeAPI_State = function() {
      var API_URI = ' https://awkr1e403a.execute-api.ap-northeast-2.amazonaws.com/prod/devices/Device1'; 		        
      $.ajax(API_URI, {
          method: 'GET',
          contentType: "application/json",
		
          success: function (data, status, xhr) {
                  var result_State = JSON.parse(data);
                  printData(result_State);
		               
                  console.log("data="+data);
          },
          error: function(xhr,status,e){
                  alert("error");
          }
      });
  };
		
		

  var printData = function(result_State){      
      document.getElementById("result_State").innerHTML = "temp: "+ result_State.state.reported.temperature +  
                                                  ", Humidity: " + result_State.state.reported.humidity +
                                                  ", LED: " + result_State.state.reported.LED;
  }
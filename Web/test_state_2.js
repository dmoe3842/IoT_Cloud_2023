  var intervalId2 = null;

  function Start_State2() {
      invokeAPI_State2();
      intervalId2 = setInterval(invokeAPI_State2, 1000);
      document.getElementById("result_State2").innerHTML="조회 중...";
  }

  function Stop_State2() {
      if(intervalId2 != null) {
          clearInterval(intervalId2);
          document.getElementById("result_State2").innerHTML="No Data";
      }
  }
		
  var invokeAPI_State2 = function() {
      var API_URI = ' https://awkr1e403a.execute-api.ap-northeast-2.amazonaws.com/prod/devices/Device2'; 		        
      $.ajax(API_URI, {
          method: 'GET',
          contentType: "application/json",
		
          success: function (data, status, xhr) {
                  var result_State2 = JSON.parse(data);
                  printData2(result_State2); 
		               
                  console.log("data="+data);
          },
          error: function(xhr,status,e){
                  alert("error");
          }
      });
  };
		
		
		    
  var printData2 = function(result_State2){      
      document.getElementById("result_State2").innerHTML = "temp: "+ result_State2.state.reported.temperature +  
                                                  ", Humidity: " + result_State2.state.reported.humidity +
                                                  ", LED: " + result_State2.state.reported.LED;
  }
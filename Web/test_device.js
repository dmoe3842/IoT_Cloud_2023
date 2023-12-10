  function Start_Device() {
      invokeAPI_Device();
      emptyTable();
  }

  var invokeAPI_Device = function() {
		
      var API_URI = 'https://awkr1e403a.execute-api.ap-northeast-2.amazonaws.com/prod/devices'; 		        
      $.ajax(API_URI, {
          method: 'GET',
          contentType: "application/json",
		        
		        
          success: function (data_Device, status, xhr) {
		
              var result_Device = JSON.parse(data_Device);
              setDataList_Device(result_Device.things); 
              console.log(data_Device);
          },
          error: function(xhr,status,e){
            //  document.getElementById("result").innerHTML="Error";
              alert("error");
          }
      });
  };

  var emptyTable = function() {
      $( '#mytable > tbody').empty();
      document.getElementById("result_Device").innerHTML="조회 중입니다.";
  }
		
  // 데이터 출력을 위한 함수
  var setDataList_Device = function(data_Device){
		
      $( '#mytable > tbody').empty();
      data_Device.forEach(function(v){
		
          var tr1_Device = document.createElement("tr");
          var td1_Device = document.createElement("td");
          var td2_Device = document.createElement("td");
          td1_Device.innerText = v.thingName;
          td2_Device.innerText = v.thingArn;
          tr1_Device.appendChild(td1_Device);
          tr1_Device.appendChild(td2_Device);
          $("#mytable").append(tr1_Device);
      })
		
      if(data_Device.length>0){
          document.getElementById("result_Device").innerHTML="";
      } else if (data_Device.length ==0) {
          document.getElementById("result_Device").innerHTML="No Data";
      }
  }
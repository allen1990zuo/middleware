
function viewModel() {
	var self=this;
	self.ipaddress=ko.observable(" ");
	self.lat=ko.observable(" ");
	self.lon=ko.observable(" ");
	self.temp=ko.observable(" ");
    self.weatherCode=ko.observable(" ");
	self.getIp=function(){
		$.ajax({
	   		type:"GET",
	   		url:"/getIpAddress",
	   		success:function(data){
	   			self.ipaddress(data);
	   		}
	   	})
	}
   self.getLocation=function(){
	   $.ajax({
   		type:"POST",
   		url:"/getLocation",
   		data:{"ip":self.ipaddress},
   		success:function(data){
   			self.lat(data.lat);
   			self.lon(data.lon);
   		}
   	})
   }
   self.getWeather=function(){
	   $.ajax({
   		type:"POST",
   		url:"/getWeather",
   	 	data:{"lat":self.lat,"lon":self.lon},
   		success:function(data){
   			self.temp(data.main.temp);
   		    self.weatherCode(JSON.stringify(data.weather[0]))
   			
   		}
   	})
   }     
  
};
ko.applyBindings(new viewModel());


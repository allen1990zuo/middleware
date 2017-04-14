var os = require('os')
var Client=require("node-rest-client").Client;
module.exports = function(app) {
	app.get("/getIpAddress",function(req,res){
		var client=new Client();
		var data=client.get("http://jsonip.com",function(data){
			console.log(JSON.stringify(data))
			var ip=data.ip
			res.send(ip);
		})
//		var ip = req.headers['x-forwarded-for'] ||
//		req.connection.remoteAddress ||
//		req.socket.remoteAddress ||
//		req.connection.socket.remoteAddress;
//		console.log("ip:"+ip);
		

	})
	app.post("/getLocation",function(req,res){
		//var ip="99.232.205.215";
		var ip=req.body.ip;
		console.log("ip:"+ip)
		var client=new Client();
		client.get("http://ip-api.com/json/"+ip,function(data){
			console.log("data:"+JSON.stringify(data));
			res.send(data);
		})
		
		
	})
	app.post("/getWeather",function(req,res){
		//lat":43.9045,"lon":-79.3392
		// appid  58711c64559b0fc00bd7def33f6d1e88
//		var lat="43.9045";
//		var lon="-79.3392";
	//api.openweathermap.org/data/2.5/weather?lat=43.9045&lon=-79.3392&appid=58711c64559b0fc00bd7def33f6d1e88
		var lat=req.body.lat;
		var lon=req.body.lon;
		var client=new Client();
		var address="http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=58711c64559b0fc00bd7def33f6d1e88"
		client.get(address,function(data){
			console.log("data:"+JSON.stringify(data));
			res.send(data);
		})
		
	})
}

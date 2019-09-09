const request = require('request');
const express = require('express');
const app = express();
app.use(express.json())
var readlineSync=require('readline-sync')
var cityName=readlineSync.question('Inter the city name : -')
var weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4dd1ac5a32c35cde09f36265c3c2cf94`
console.log(weatherUrl)

request(weatherUrl, { json: true }, (err, body) => {
    const content=body.body;
    console.log(content)
    
    app.get('/api_get', ( request,response) => {

    
        if (!content) {
          console.log("No contacts found." );
        }
        let copyData = content
        let cityNameKey = {};
        cityNameKey[cityName] = copyData
        // console.log(cityNameKey);

        var data1 = {};
        data1.weather = []
        data1.weather.push(cityNameKey)
        response.json(data1);
      });

    // app.post('/api_post', ( request,response) => {
      
    // })

  const hostname = 'localhost';
  const port = 4001;
  
  const server = app.listen(port, hostname, () => {
  
    console.log(`Server running at http://${hostname}:${port}/`);
    
  });
  })
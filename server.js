const request = require('request');
const express = require('express');
const app = express();
app.use(express.json())
const bodyParser = require('body-parser');
app.use(bodyParser.json())
var readlineSync=require('readline-sync')
var cityName=readlineSync.question('Inter the city name : -')
var weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4dd1ac5a32c35cde09f36265c3c2cf94`
console.log(weatherUrl)

request(weatherUrl, { json: true }, (err, body) => {
    const content=body.body;
    // console.log(content)
    
    app.get('/api_get', ( request,response) => {
      if (!content) {
          console.log("No contacts found." );
        }
        var data = {};
        data.weather_data = []
        data.weather_data.push(content)
        response.json(data);
      });

    app.post('/api_post', ( request,response) => {

      var course = {
        year:request.body.year
      };
      if (!content) {
        console.log("No contacts found." );
      }
      
      var data = {};
      data.weather_data = []
      data.weather_data.push(content)
      data.weather_data.push(course)
      response.send(data);
      
    });

    
    app.delete('/api_delete/:key', (request, response) => {
      
      var key=request.params.key
      console.log(key)
      if (!content) {
        console.log("No contacts found." );
      }
      var data = {};
      data.weather_data = []
      data.weather_data.push(content)
      
      delete data.weather_data[0].name;
      console.log(data.weather_data)
      response.json(data);

    });
  const hostname = 'localhost';
  const port = 4001;
  
  const server = app.listen(port, hostname, () => {
  
    console.log(`Server running at http://${hostname}:${port}/`);
    
  });
  })
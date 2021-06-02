const express = require('express');
const alasql = require('alasql');
alasql("CREATE TABLE users (firstname STRING, lastname STRING, socialsecurity INT, phone INT, email STRING, usertype String,  password STRING, PRIMARY KEY (socialsecurity))");
alasql("CREATE TABLE History (socialsecurity INT, symptons STRING,    FOREIGN KEY (socialsecurity) REFERENCES users(socialsecurity),FOREIGN KEY (symptons) REFERENCES diseases(symptons))");
alasql("CREATE TABLE diseases(symptons STRING, disease STRING)");

//https://expressjs.om/en/resources/middleware/cors.html
const app = express();
db =[];
const axios = require('axios')
axios.post('/todos', {
  todo: 'Buy the milk'
})
.then((res) => {
  console.log(`statusCode: ${res.statusCode}`)
  console.log(res)
})
.catch((error) => {
  console.error(error)
})
app.get('/', (req, res) => {
 res.send("test")
  
});
app.get('/insert/history/:ssid/:sympton', (req, res) => {
    users = alasql("INSERT INTO History VALUES ('"+req.param.ssid+"','"+req.param.sympton+"')");
      users= alasql("select * from History");

});8

app.get('/insert/user/:first/:last/:ssid/:phone/:email/:isdoc/:password', (req, res) => {
  alasql("INSERT INTO users VALUES ('"+req.param.first+"',"+"'l',0,0,'e','doctor','password')");
   users= alasql("select * from users");

 res.send(users)
    
});

app.get('/insert/symptons/:disease/:sympton', (req, res) => {
  alasql("INSERT INTO diseases VALUES ('"+req.param.disease+"','"+req.param.sympton+"')");
   symptons= alasql("select * from diseases");

 res.send(symptons)
 });

 
app.get('/select/history/:ssid', (req, res) => {
   users= alasql("select * from History where socialsecurity = '"+req.param.ssid+"'");

 res.send(users)
  
});

app.get('/select/user/:ssid/:password', (req, res) => {
   users= alasql("select * from users where ssid ='"+req.param.s+"' and password = '"+req.param.password+"''");

 res.send(users)
  
});

app.get('/select/symptons/:s', (req, res) => {
   symptons= alasql("select disease from diseases where symptons ='"+req.param.s+"'");

 res.send(symptons)
  
});


app.listen(3000, () => {
  console.log('server started');
});
const express = require("express");
const router = express.Router()
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const config = require('./config.js');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const path = require('path');
const axios = require('axios');
const pg = require('pg')
var id_queue = []

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3001;

const bundle_model = require('./db_functions.js')

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.get('/', (req, res) => {
  bundle_model.getBundles()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})


app.delete('/bundle/:id', (req, res) => {
  bundle_model.deleteBundle(req.params.id)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})


app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });


app.post('/email', (req, res) => {

  var name = req.body.name
  var email = req.body.email
  var question = req.body.question
  var unique_id = req.body.unique_id
  console.log('inside post request' + unique_id);
 

    try{

    const OAuth2 = google.auth.OAuth2
  
    const OAuth2_client = new OAuth2(config.client_id, config.client_secret);
  
    OAuth2_client.setCredentials( { refresh_token: config.refresh_token } );
  
    const accessToken = OAuth2_client.getAccessToken();
  
    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          type: 'OAuth2',
          user: config.user,
          clientId: config.client_id,
          clientSecret: config.client_secret,
          refreshToken: config.refresh_token,
          accessToken: accessToken
      }
    })
  
  
    const mail_options_two = {
        from: 'You & Yours admin <admin@youandyours.io',
        to: email, 
        subject: 'Email from You & Yours web app' + '(Email ID: ' + unique_id + ')',
        html: '<h6>' + question  +'</h6>'
  
  
    }
  
    transport.sendMail( mail_options_two, function(error, result){
        if(error){
            console.log('Error: ',  error)
        }
        else {
            console.log("Success woo!:  ", result)
            id_queue.push({
              id: unique_id,
              results: result
            })
        }
        transport.close()
    } )

   
   // bundle_model.getBundles();
  }
  catch(error) {
  
    console.log("error TEST" + error);
  }

})

app.post('/bundle', (req, res) => {
  var name = req.body.name
  var unique_id = req.body.unique_id
  const objCreate = {
    values: [name, unique_id]
  }
  bundle_model.createBundle(objCreate);
});

// for(var i = 0; i<id_queue.length; i ++){
  
//   axios
//     .get(`https://gmail.googleapis.com/gmail/v1/users/admin@youandyours.io/messages?q=in:inbox subject: ${unique_id[i].id}`,{
//       headers: {
//         authorization: 'Bearer ya29.A0ARrdaM_QR6iOrS2FxWK0BJD0RiovS0j9KL86YiXzaYWVusvNv2btGzoh19H3CGoJsrCETyKttimOSNZQhzgNvsN37r6DQjXf_0LMj-jf4yVHRlKwZlcoiRmBucYhvXnonbb1ob9xwEAxBgxWBkloNBbyzQX6'
//       }
//     })
//     .then(res => {
//       console.log(`statusCode: ${res.status}`)
//       console.log(res.data)
//     })
//     .catch(error => {
//       console.error(error)
//     })


  
  // }


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});





// Static folder
app.use('/access', express.static(path.join(__dirname, 'access')));






module.exports = id_queue;




// const listMessages = (auth, query) => {  
//   return new Promise((resolve, reject) => {    
//     const gmail = google.gmail({version: 'v1', auth});    
//     gmail.users.messages.list(      
//       {        
//         userId: 'me',        
//         q: query,      
//       },   

//       (err, res) => {        
//         if (err) { 
//           reject(err);          
//           return;        
//         }        
//         if (!res.data.messages) { 
//           resolve([]);          
//           return;        
//         }               
//         resolve(res.data.messages); 
//       }    
//     );  
//   })
// ;}


//messagesObj.forEach(msg => { modifyLabels(OAuth2_client, msg.id, ['star']);})

// modifyLabels = (auth, message_id, addLabelIds, removeLabelIds) => {  
//   return new Promise((resolve, reject) => {    
//     const gmail = google.gmail({version: 'v1', auth});    
//     gmail.users.messages.modify(      
//       {        
//         id: message_id,        
//         userId: 'me',        
//         resource: {          
//           addLabelIds          
//           //removeLabelIds,        
//         },      
//       },            
//       (err, res) => {        
//         if (err) { 
//           reject(err);          
//           return;        
//         }               
//         resolve(res);        
//         return;      
//       }    
//     );  
//   });
// }
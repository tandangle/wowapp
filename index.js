// const axios = require('axios');

// axios.post(`https://us.battle.net/oauth/token`, {
//     auth: {
//         username: "8170587803004052b43eb6583a7a82ca",
//         password: "7sFw5yUDviIfc77w1lHTIcb1Wyvu1IdQ"
//     },
//     data: "grant_type=client_credentials"
// })
// .then(function(response){
//     console.log(response);
// })
// .catch(function(error) {
//     console.log("I've run into an error");
//     console.log(error);
// });

// const BlizzAPI = require('blizzapi');

// const BnetApi = new BlizzAPI({
//   region: 'us',
//   clientId: '8170587803004052b43eb6583a7a82ca',
//   clientSecret: '7sFw5yUDviIfc77w1lHTIcb1Wyvu1IdQ',
// });

// BnetApi.query("/wow/connected-realm/index?namespace=dynamic-us&:region=us")
//   .then(function (response) {
//       console.log(response)
//   })
//   .catch(function (error) {
//       console.log(error)
//   });

const axios = require("axios");

axios.request({
    url: "/oauth/token",
    method: "post",
    baseURL: "https://us.battle.net",
    auth: {
      username: "8170587803004052b43eb6583a7a82ca",
      password: "7sFw5yUDviIfc77w1lHTIcb1Wyvu1IdQ"
    },
    data: {
      "grant_type": "client_credentials"
    }
  }).then(respose => {
    console.log(respose);  
  })
  .catch(function(error){
      console.log(error)
  }); 
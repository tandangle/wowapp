const axios = require("axios");

axios.post("https://us.battle.net/oauth/token?grant_type=client_credentials&client_id=8170587803004052b43eb6583a7a82ca&client_secret=7sFw5yUDviIfc77w1lHTIcb1Wyvu1IdQ")
  .then(function(response){
    axios.get(`https://us.api.blizzard.com/data/wow/connected-realm/73/auctions?namespace=dynamic-us&:region=us`, {headers:{Authorization: "Bearer " + response.data.access_token}})
        .then(function(response){
            var tidespray = response.data.auctions.filter(function(auction){
              return auction.item.id === 152576
            });
              tidespray.sort(function(a,b){
                return a.unit_price - b.unit_price
              })
            console.log(tidespray)
        })
        .catch(function(error){
          console.log(error)
        })
  })
  .catch(function(error){
    console.log(error)
  })
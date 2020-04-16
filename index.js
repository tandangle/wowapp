// const axios = require("axios");

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// Get access token via Blizzard's OAuth flow
function render() {axios.post("https://us.battle.net/oauth/token?grant_type=client_credentials&client_id=8170587803004052b43eb6583a7a82ca&client_secret=7sFw5yUDviIfc77w1lHTIcb1Wyvu1IdQ")
  .then(function(response){
    // Get all auctions from the realm
    axios.get(`https://us.api.blizzard.com/data/wow/connected-realm/73/auctions?namespace=dynamic-us&:region=us`, {headers:{Authorization: "Bearer " + response.data.access_token}})
        .then(function(response){
            document.getElementById("slidecontainer").style.display = "flex";
            document.getElementById("number").style.display = "block";
            // Filter all auctions for auctions of Tidespray linen
            var tidesprayLinen = response.data.auctions.filter(function(auction){
                return auction.item.id === 152576
              });
              tidesprayLinen.sort(function(a,b){
                  return a.unit_price - b.unit_price
                })
              var tidesprayLinenPrice = tidesprayLinen[0].unit_price;
              var tidesprayLinenPriceString = tidesprayLinenPrice.toString();
              tidesprayLinenPriceStringCopper = tidesprayLinenPriceString.charAt(tidesprayLinenPriceString.length-2) + tidesprayLinenPriceString.charAt(tidesprayLinenPriceString.length-1)
              tidesprayLinenPriceStringSilver = tidesprayLinenPriceString.charAt(tidesprayLinenPriceString.length-4) + tidesprayLinenPriceString.charAt(tidesprayLinenPriceString.length-3)
              if(tidesprayLinenPriceString.length == 5) {
                tidesprayLinenPriceStringGold = tidesprayLinenPriceString.charAt(0)
              } else if (tidesprayLinenPriceString.length == 6) {
                tidesprayLinenPriceStringGold = tidesprayLinenPriceString.charAt(0) + tidesprayLinenPriceString.charAt(1)
              } else if (tidesprayLinenPriceString.length == 7) {
                tidesprayLinenPriceStringGold = tidesprayLinenPriceString.charAt(0) + tidesprayLinenPriceString.charAt(1) + tidesprayLinenPriceString.charAt(2)
              }

            document.getElementById("tidespray").innerHTML = `
            ${tidesprayLinenPriceStringGold} <img src="images/money-gold.gif"> ${tidesprayLinenPriceStringSilver} <img src="images/money-silver.gif"> ${tidesprayLinenPriceStringCopper} <img src="images/money-copper.gif">`
            
            // Akunda's Bite
             akundasBite = response.data.auctions.filter(function(auction){
                return auction.item.id === 152507
              });
                akundasBite.sort(function(a,b){
                  return a.unit_price - b.unit_price
                })
               akundasBitePrice = akundasBite[0].unit_price;
               akundasBiteString = akundasBitePrice.toString();
              akundasBitePriceCopper = akundasBiteString.charAt(akundasBiteString.length-2) + akundasBiteString.charAt(akundasBiteString.length-1)
              akundasBitePriceSilver = akundasBiteString.charAt(akundasBiteString.length-4) + akundasBiteString.charAt(akundasBiteString.length-3)
              if(akundasBiteString.length == 5) {
                akundasBitePriceGold = akundasBiteString.charAt(0)
              } else if (akundasBiteString.length == 6) {
                akundasBitePriceGold = akundasBiteString.charAt(0) + akundasBiteString.charAt(1)
              } else if (akundasBiteString.length == 7) {
                akundasBitePriceGold = akundasBiteString.charAt(0) + akundasBiteString.charAt(1) + akundasBiteString.charAt(2)
              }

            document.getElementById("akundasbite").innerHTML = `
            ${akundasBitePriceGold} <img src="images/money-gold.gif"> ${akundasBitePriceSilver} <img src="images/money-silver.gif"> ${akundasBitePriceCopper} <img src="images/money-copper.gif">`
            
            // Riverbud
             riverbud = response.data.auctions.filter(function(auction){
                return auction.item.id === 152505
              });
                riverbud.sort(function(a,b){
                  return a.unit_price - b.unit_price
                })
               riverbudPrice = riverbud[0].unit_price;
               riverbudString = riverbudPrice.toString();
              riverbudPriceCopper = riverbudString.charAt(riverbudString.length-2) + riverbudString.charAt(riverbudString.length-1)
              riverbudPriceSilver = riverbudString.charAt(riverbudString.length-4) + riverbudString.charAt(riverbudString.length-3)
              if(riverbudString.length == 5) {
                riverbudPriceGold = riverbudString.charAt(0)
              } else if (riverbudString.length == 6) {
                riverbudPriceGold = riverbudString.charAt(0) + riverbudString.charAt(1)
              } else if (riverbudString.length == 7) {
                riverbudPriceGold = riverbudString.charAt(0) + riverbudString.charAt(1) + riverbudString.charAt(2)
              }

            document.getElementById("riverbud").innerHTML = `
            ${riverbudPriceGold} <img src="images/money-gold.gif"> ${riverbudPriceSilver} <img src="images/money-silver.gif"> ${riverbudPriceCopper} <img src="images/money-copper.gif">`
            
              // Sea Stalk
             seastalk = response.data.auctions.filter(function(auction){
                return auction.item.id === 152511
              });
                seastalk.sort(function(a,b){
                  return a.unit_price - b.unit_price
                })
               seastalkPrice = seastalk[0].unit_price;
               seastalkString = seastalkPrice.toString();
              seastalkPriceCopper = seastalkString.charAt(seastalkString.length-2) + seastalkString.charAt(riverbudString.length-1)
              seastalkPriceSilver = seastalkString.charAt(seastalkString.length-4) + seastalkString.charAt(riverbudString.length-3)
              if(seastalkString.length == 5) {
                seastalkPriceGold = riverbudString.charAt(0)
              } else if (seastalkString.length == 6) {
                seastalkPriceGold = seastalkString.charAt(0) + seastalkString.charAt(1)
              } else if (riverbudString.length == 7) {
                seastalkPriceGold = seastalkString.charAt(0) + seastalkString.charAt(1) + seastalkString.charAt(2)
              }
            
            document.getElementById("seastalk").innerHTML = `
            ${seastalkPriceGold} <img src="images/money-gold.gif"> ${seastalkPriceSilver} <img src="images/money-silver.gif"> ${seastalkPriceCopper} <img src="images/money-copper.gif">`

            // Siren's Pollen
             sirenspollen = response.data.auctions.filter(function(auction){
                return auction.item.id === 152509
              });
                sirenspollen.sort(function(a,b){
                  return a.unit_price - b.unit_price
                })
               sirenspollenPrice = sirenspollen[0].unit_price;
               sirenspollenString = sirenspollenPrice.toString();
              sirenspollenPriceCopper = sirenspollenString.charAt(sirenspollenString.length-2) + sirenspollenString.charAt(sirenspollenString.length-1)
              sirenspollenPriceSilver = sirenspollenString.charAt(sirenspollenString.length-4) + sirenspollenString.charAt(sirenspollenString.length-3)
              if(sirenspollenString.length == 5) {
                sirenspollenPriceGold = sirenspollenString.charAt(0)
              } else if (sirenspollenString.length == 6) {
                sirenspollenPriceGold = sirenspollenString.charAt(0) + sirenspollenString.charAt(1)
              } else if (sirenspollenString.length == 7) {
                sirenspollenPriceGold = sirenspollenString.charAt(0) + sirenspollenString.charAt(1) + sirenspollenPriceCopper.charAt(2)
              }
            
            document.getElementById("sirenspollen").innerHTML = `
            ${sirenspollenPriceGold} <img src="images/money-gold.gif"> ${sirenspollenPriceSilver} <img src="images/money-silver.gif"> ${sirenspollenPriceCopper} <img src="images/money-copper.gif">`

            // Star Moss
             starmoss = response.data.auctions.filter(function(auction){
                return auction.item.id === 152506
              });
                starmoss.sort(function(a,b){
                  return a.unit_price - b.unit_price
                })
               starmossPrice = starmoss[0].unit_price;
               starmossString = starmossPrice.toString();
              starmossPriceCopper = starmossString.charAt(starmossString.length-2) + starmossString.charAt(starmossString.length-1)
              starmossPriceSilver = starmossString.charAt(starmossString.length-4) + starmossString.charAt(starmossString.length-3)
              if(starmossString.length == 5) {
                starmossPriceGold = starmossString.charAt(0)
              } else if (starmossString.length == 6) {
                starmossPriceGold = starmossString.charAt(0) + starmossString.charAt(1)
              } else if (starmossString.length == 7) {
                starmossPriceGold = starmossString.charAt(0) + starmossString.charAt(1) + starmossString.charAt(2)
              }

            document.getElementById("starmoss").innerHTML = `
            ${starmossPriceGold} <img src="images/money-gold.gif"> ${starmossPriceSilver} <img src="images/money-silver.gif"> ${starmossPriceCopper} <img src="images/money-copper.gif">`
  
            // Winter's Kiss
             winterskiss = response.data.auctions.filter(function(auction){
                return auction.item.id === 152508
              });
                winterskiss.sort(function(a,b){
                  return a.unit_price - b.unit_price
                })
               winterskissPrice = winterskiss[0].unit_price;
               winterskissString = winterskissPrice.toString();
              winterskissPriceCopper = winterskissString.charAt(winterskissString.length-2) + winterskissString.charAt(winterskissString.length-1)
              winterskissPriceSilver = winterskissString.charAt(winterskissString.length-4) + winterskissString.charAt(winterskissString.length-3)
              if(winterskissString.length == 5) {
                winterskissPriceGold = winterskissString.charAt(0)
              } else if (winterskissString.length == 6) {
                winterskissPriceGold = winterskissString.charAt(0) + winterskissString.charAt(1)
              } else if (winterskissString.length == 7) {
                winterskissPriceGold = winterskissString.charAt(0) + winterskissString.charAt(1) + winterskissString.charAt(2)
              }
            
            document.getElementById("winterskiss").innerHTML = `
            ${winterskissPriceGold} <img src="images/money-gold.gif"> ${winterskissPriceSilver} <img src="images/money-silver.gif"> ${winterskissPriceCopper} <img src="images/money-copper.gif">`

            // Zin'anthid
             zinanthid = response.data.auctions.filter(function(auction){
                return auction.item.id === 168487
              });
              zinanthid.sort(function(a,b){
                  return a.unit_price - b.unit_price
                })
               zinanthidPrice = zinanthid[0].unit_price;
               zinanthidString = zinanthidPrice.toString();
              zinanthidPriceCopper = zinanthidString.charAt(zinanthidString.length-2) + zinanthidString.charAt(zinanthidString.length-1)
              zinanthidPriceSilver = zinanthidString.charAt(zinanthidString.length-4) + zinanthidString.charAt(zinanthidString.length-3)
              if(zinanthidString.length == 5) {
                zinanthidPriceGold = zinanthidString.charAt(0)
              } else if (zinanthidString.length == 6) {
                zinanthidPriceGold = zinanthidString.charAt(0) + zinanthidString.charAt(1)
              } else if (zinanthidString.length == 7) {
                zinanthidPriceGold = zinanthidString.charAt(0) + zinanthidString.charAt(1) + zinanthidString.charAt(2)
              }

            document.getElementById("zinanthid").innerHTML = `
            ${zinanthidPriceGold} <img src="images/money-gold.gif"> ${zinanthidPriceSilver} <img src="images/money-silver.gif"> ${zinanthidPriceCopper} <img src="images/money-copper.gif">`

            // Anchor Weed
             anchorweed = response.data.auctions.filter(function(auction){
                return auction.item.id === 152510
              });
              anchorweed.sort(function(a,b){
                  return a.unit_price - b.unit_price
                })
               anchorweedPrice = anchorweed[0].unit_price;
               anchorweedString = anchorweedPrice.toString();
              anchorweedPriceCopper = anchorweedString.charAt(anchorweedString.length-2) + anchorweedString.charAt(anchorweedString.length-1)
              anchorweedPriceSilver = anchorweedString.charAt(anchorweedString.length-4) + anchorweedString.charAt(anchorweedString.length-3)
              if(anchorweedString.length == 5) {
                anchorweedPriceGold = anchorweedString.charAt(0)
              } else if (anchorweedString.length == 6) {
                anchorweedPriceGold = anchorweedString.charAt(0) + anchorweedString.charAt(1)
              } else if (anchorweedString.length == 7) {
                anchorweedPriceGold = anchorweedString.charAt(0) + anchorweedString.charAt(1) + anchorweedString.charAt(2)
              }            
            document.getElementById("anchorweed").innerHTML = `
            ${anchorweedPriceGold} <img src="images/money-gold.gif"> ${anchorweedPriceSilver} <img src="images/money-silver.gif"> ${anchorweedPriceCopper} <img src="images/money-copper.gif">`

              // Herb prices pushed into an object

            herbPrices = new Object();
            herbPrices.akundasBite = akundasBitePrice;
            herbPrices.riverbud = riverbudPrice;
            herbPrices.seastalk = seastalkPrice;
            herbPrices.starmoss = starmossPrice;
            herbPrices.winterskiss = winterskissPrice;
            herbPrices.zinanthid = zinanthidPrice;
            herbPrices.anchorweed = anchorweedPrice;
            herbPricesArray = Object.values(herbPrices);
            lowestHerbPrice = Math.min(...herbPricesArray);

        
            // Flasks and Potions
              // Abyssal Healing Potion
                // Cost calculation
             AbyssalHealingPotionCost = zinanthidPrice * 2;
             AbyssalHealingCostString = AbyssalHealingPotionCost.toString();
            AbyssalHealingPotionCostCopper = AbyssalHealingCostString.charAt(AbyssalHealingCostString.length-2) + AbyssalHealingCostString.charAt(AbyssalHealingCostString.length-1)
            AbyssalHealingPotionCostSilver = AbyssalHealingCostString.charAt(AbyssalHealingCostString.length-4) + AbyssalHealingCostString.charAt(AbyssalHealingCostString.length-3)
            if(AbyssalHealingCostString.length == 5) {
              AbyssalHealingPotionCostGold = AbyssalHealingCostString.charAt(0)
            } else if (AbyssalHealingCostString.length == 6) {
              AbyssalHealingPotionCostGold = AbyssalHealingCostString.charAt(0) + AbyssalHealingCostString.charAt(1)
            } else if (AbyssalHealingCostString.length == 7) {
              AbyssalHealingPotionCostGold = AbyssalHealingCostString.charAt(0) + AbyssalHealingCostString.charAt(1) + AbyssalHealingCostString.charAt(2)
            }
            document.getElementById("abyssal-healing-potion-cost").innerHTML = `
            ${AbyssalHealingPotionCostGold} <img src="images/money-gold.gif"> ${AbyssalHealingPotionCostSilver} <img src="images/money-silver.gif"> ${AbyssalHealingPotionCostCopper} <img src="images/money-copper.gif">`             

            // Price calculation
             AbyssalHealingPotion = response.data.auctions.filter(function(auction){
                return auction.item.id === 169451
              });
              AbyssalHealingPotion.sort(function(a,b){
                  return a.unit_price - b.unit_price
                })
             AbyssalHealingPotionPrice = AbyssalHealingPotion[0].unit_price;
             AbyssalHealingString = AbyssalHealingPotionPrice.toString();
            AbyssalHealingPotionCopper = AbyssalHealingString.charAt(AbyssalHealingString.length-2) + AbyssalHealingString.charAt(AbyssalHealingString.length-1)
            AbyssalHealingPotionSilver = AbyssalHealingString.charAt(AbyssalHealingString.length-4) + AbyssalHealingString.charAt(AbyssalHealingString.length-3)
            if(AbyssalHealingString.length == 5) {
              AbyssalHealingPotionGold = AbyssalHealingString.charAt(0)
            } else if (AbyssalHealingString.length == 6) {
              AbyssalHealingPotionGold = AbyssalHealingString.charAt(0) + AbyssalHealingString.charAt(1)
            } else if (AbyssalHealingString.length == 7) {
              AbyssalHealingPotionGold = AbyssalHealingString.charAt(0) + AbyssalHealingString.charAt(1) + AbyssalHealingString.charAt(2)
            }
            document.getElementById("abyssal-healing-potion-price").innerHTML = `
            ${AbyssalHealingPotionGold} <img src="images/money-gold.gif"> ${AbyssalHealingPotionSilver} <img src="images/money-silver.gif"> ${AbyssalHealingPotionCopper} <img src="images/money-copper.gif">`
            
          // Profit/Loss Calculation
        AbyssalHealingPotionProfit = Math.floor(AbyssalHealingPotionPrice * 1.4  - AbyssalHealingPotionCost);
        AbyssalHealingPotionProfitString = AbyssalHealingPotionProfit.toString();
        AbyssalHealingPotionProfitCopper = AbyssalHealingPotionProfitString.charAt(AbyssalHealingPotionProfitString.length-2) + AbyssalHealingPotionProfitString.charAt(AbyssalHealingPotionProfitString.length-1)
        AbyssalHealingPotionProfitSilver = AbyssalHealingPotionProfitString.charAt(AbyssalHealingPotionProfitString.length-4) + AbyssalHealingPotionProfitString.charAt(AbyssalHealingPotionProfitString.length-3)
            if(AbyssalHealingPotionProfitString.length == 5) {
              AbyssalHealingPotionProfitGold = AbyssalHealingPotionProfitString.charAt(0)
            } else if (AbyssalHealingPotionProfitString.length == 6) {
              AbyssalHealingPotionProfitGold = AbyssalHealingPotionProfitString.charAt(0) + AbyssalHealingPotionProfitString.charAt(1)
            } else if (AbyssalHealingPotionProfitString.length == 7) {
              AbyssalHealingPotionProfitGold = AbyssalHealingPotionProfitString.charAt(0) + AbyssalHealingPotionProfitString.charAt(1) + AbyssalHealingPotionProfitString.charAt(2)
            } else {
            AbyssalHealingPotionProfitGold = AbyssalHealingPotionProfitString.charAt(0) + AbyssalHealingPotionProfitString.charAt(1) + AbyssalHealingPotionProfitString.charAt(2) + AbyssalHealingPotionProfitString.charAt(3)
            }
            document.getElementById("abyssal-healing-potion-profit").innerHTML = `
            ${AbyssalHealingPotionProfitGold} <img src="images/money-gold.gif"> ${AbyssalHealingPotionProfitSilver} <img src="images/money-silver.gif"> ${AbyssalHealingPotionProfitCopper} <img src="images/money-copper.gif">`
            if(Math.sign(AbyssalHealingPotionProfit) == -1){
              document.getElementById("abyssal-healing-potion-profit").setAttribute("style", "background-color:red")
            } else {
              document.getElementById("abyssal-healing-potion-profit").setAttribute("style", "background-color:green")
            }

        // Empowered Proximity
                // Cost calculation
                 empoweredProximiyCost = zinanthidPrice * 8 + winterskissPrice * 3;
                 empoweredProximiyCostString = empoweredProximiyCost.toString();
                empoweredProximiyCostCopper = empoweredProximiyCostString.charAt(empoweredProximiyCostString.length-2) + empoweredProximiyCostString.charAt(empoweredProximiyCostString.length-1)
                empoweredProximiyCostSilver = empoweredProximiyCostString.charAt(empoweredProximiyCostString.length-4) + empoweredProximiyCostString.charAt(empoweredProximiyCostString.length-3)
                if(empoweredProximiyCostString.length == 5) {
                  empoweredProximiyCostGold = empoweredProximiyCostString.charAt(0)
                } else if (empoweredProximiyCostString.length == 6) {
                  empoweredProximiyCostGold = empoweredProximiyCostString.charAt(0) + empoweredProximiyCostString.charAt(1)
                } else if (empoweredProximiyCostString.length == 7) {
                  empoweredProximiyCostGold = empoweredProximiyCostString.charAt(0) + empoweredProximiyCostString.charAt(1) + empoweredProximiyCostString.charAt(2)
                }
                document.getElementById("empowered-proximity-cost").innerHTML = `
                ${empoweredProximiyCostGold} <img src="images/money-gold.gif"> ${empoweredProximiyCostSilver} <img src="images/money-silver.gif"> ${empoweredProximiyCostCopper} <img src="images/money-copper.gif">`             
    
                // Price calculation
                 empoweredProximity = response.data.auctions.filter(function(auction){
                    return auction.item.id === 168529
                  });
                  empoweredProximity.sort(function(a,b){
                      return a.unit_price - b.unit_price
                    })
                 empoweredProximityPrice = empoweredProximity[0].unit_price;
                 empoweredProximityString = empoweredProximityPrice.toString();
                empoweredProximityCopper = empoweredProximityString.charAt(empoweredProximityString.length-2) + empoweredProximityString.charAt(empoweredProximityString.length-1)
                empoweredProximitySilver = empoweredProximityString.charAt(empoweredProximityString.length-4) + empoweredProximityString.charAt(empoweredProximityString.length-3)
                if(empoweredProximityString.length == 5) {
                  empoweredProximityGold = empoweredProximityString.charAt(0)
                } else if (empoweredProximityString.length == 6) {
                  empoweredProximityGold = empoweredProximityString.charAt(0) + empoweredProximityString.charAt(1)
                } else if (empoweredProximityString.length == 7) {
                  empoweredProximityGold = empoweredProximityString.charAt(0) + empoweredProximityString.charAt(1) + empoweredProximityString.charAt(2)
                }
                document.getElementById("empowered-proximity-price").innerHTML = `
                ${empoweredProximityGold} <img src="images/money-gold.gif"> ${empoweredProximitySilver} <img src="images/money-silver.gif"> ${empoweredProximityCopper} <img src="images/money-copper.gif">`
                
              // Profit/Loss Calculation
               empoweredProximityProfit = Math.floor(empoweredProximityPrice *1.4 - empoweredProximiyCost);
               empoweredProximityProfitString = empoweredProximityProfit.toString();
              empoweredProximityProfitCopper = empoweredProximityProfitString.charAt(empoweredProximityProfitString.length-2) + empoweredProximityProfitString.charAt(empoweredProximityProfitString.length-1)
              empoweredProximityProfitSilver = empoweredProximityProfitString.charAt(empoweredProximityProfitString.length-4) + empoweredProximityProfitString.charAt(empoweredProximityProfitString.length-3)
                if(empoweredProximityProfitString.length == 5) {
                  empoweredProximityProfitGold = empoweredProximityProfitString.charAt(0)
                } else if (empoweredProximityProfitString.length == 6) {
                  empoweredProximityProfitGold = empoweredProximityProfitString.charAt(0) + empoweredProximityProfitString.charAt(1)
                } else if (empoweredProximityProfitString.length == 7) {
                  empoweredProximityProfitGold = empoweredProximityProfitString.charAt(0) + empoweredProximityProfitString.charAt(1) + empoweredProximityProfitString.charAt(2)
                } else {
                    empoweredProximityProfitGold = empoweredProximityProfitString.charAt(0) + empoweredProximityProfitString.charAt(1) + empoweredProximityProfitString.charAt(2) + empoweredProximityProfitString.charAt(3)
                }
                document.getElementById("empowered-proximity-profit").innerHTML = `
                ${empoweredProximityProfitGold} <img src="images/money-gold.gif"> ${empoweredProximityProfitSilver} <img src="images/money-silver.gif"> ${empoweredProximityProfitCopper} <img src="images/money-copper.gif">`
                if(Math.sign(empoweredProximityProfit) == -1){
                  document.getElementById("empowered-proximity-profit").setAttribute("style", "background-color:red")
                } else {
                  document.getElementById("empowered-proximity-profit").setAttribute("style", "background-color:green")
                }

                // Potion of Focused Resolve
                // Cost calculation
                 focusedResolveCost = zinanthidPrice * 8 + winterskissPrice * 3;
                 focusedResolveCostString = focusedResolveCost.toString();
                focusedResolveCostCopper = focusedResolveCostString.charAt(focusedResolveCostString.length-2) + focusedResolveCostString.charAt(focusedResolveCostString.length-1)
                focusedResolveCostSilver = focusedResolveCostString.charAt(focusedResolveCostString.length-4) + focusedResolveCostString.charAt(focusedResolveCostString.length-3)
                if(focusedResolveCostString.length == 5) {
                  focusedResolveCostGold = focusedResolveCostString.charAt(0)
                } else if (focusedResolveCostString.length == 6) {
                  focusedResolveCostGold = focusedResolveCostString.charAt(0) + focusedResolveCostString.charAt(1)
                } else if (focusedResolveCostString.length == 7) {
                  focusedResolveCostGold = focusedResolveCostString.charAt(0) + focusedResolveCostString.charAt(1) + focusedResolveCostString.charAt(2)
                }
                document.getElementById("focused-resolve-cost").innerHTML = `
                ${focusedResolveCostGold} <img src="images/money-gold.gif"> ${focusedResolveCostSilver} <img src="images/money-silver.gif"> ${focusedResolveCostCopper} <img src="images/money-copper.gif">`             
    
                // Price calculation
                 focusedResolve = response.data.auctions.filter(function(auction){
                    return auction.item.id === 168506
                  });
                  focusedResolve.sort(function(a,b){
                      return a.unit_price - b.unit_price
                    })
                 focusedResolvePrice = focusedResolve[0].unit_price;
                 focusedResolveString = focusedResolvePrice.toString();
                focusedResolveCopper = focusedResolveString.charAt(focusedResolveString.length-2) + focusedResolveString.charAt(focusedResolveString.length-1)
                focusedResolveSilver = focusedResolveString.charAt(focusedResolveString.length-4) + focusedResolveString.charAt(focusedResolveString.length-3)
                if(focusedResolveString.length == 5) {
                  focusedResolveGold = focusedResolveString.charAt(0)
                } else if (focusedResolveString.length == 6) {
                  focusedResolveGold = focusedResolveString.charAt(0) + focusedResolveString.charAt(1)
                } else if (focusedResolveString.length == 7) {
                  focusedResolveGold = focusedResolveString.charAt(0) + focusedResolveString.charAt(1) + focusedResolveString.charAt(2)
                }
                document.getElementById("focused-resolve-price").innerHTML = `
                ${focusedResolveGold} <img src="images/money-gold.gif"> ${focusedResolveSilver} <img src="images/money-silver.gif"> ${focusedResolveCopper} <img src="images/money-copper.gif">`
                
              // Profit/Loss Calculation
               focusedResolveProfit = Math.floor(focusedResolvePrice * 1.4 - focusedResolveCost);
               focusedResolveProfitString = focusedResolveProfit.toString();
              focusedResolveProfitCopper = focusedResolveProfitString.charAt(focusedResolveProfitString.length-2) + focusedResolveProfitString.charAt(focusedResolveProfitString.length-1)
              focusedResolveProfitSilver = focusedResolveProfitString.charAt(focusedResolveProfitString.length-4) + focusedResolveProfitString.charAt(focusedResolveProfitString.length-3)
                if(focusedResolveProfitString.length == 5) {
                  focusedResolveProfitGold = focusedResolveProfitString.charAt(0)
                } else if (focusedResolveProfitString.length == 6) {
                  focusedResolveProfitGold = focusedResolveProfitString.charAt(0) + focusedResolveProfitString.charAt(1)
                } else if (focusedResolveProfitString.length == 7) {
                  focusedResolveProfitGold = focusedResolveProfitString.charAt(0) + focusedResolveProfitString.charAt(1) + focusedResolveProfitString.charAt(2)
                } else {
                    focusedResolveProfitGold = focusedResolveProfitString.charAt(0) + focusedResolveProfitString.charAt(1) + focusedResolveProfitString.charAt(2) + focusedResolveProfitString.charAt(3)
                }
                document.getElementById("focused-resolve-profit").innerHTML = `
                ${focusedResolveProfitGold} <img src="images/money-gold.gif"> ${focusedResolveProfitSilver} <img src="images/money-silver.gif"> ${focusedResolveProfitCopper} <img src="images/money-copper.gif">`
                if(Math.sign(focusedResolveProfit) == -1){
                  document.getElementById("focused-resolve-profit").setAttribute("style", "background-color:red")
                } else {
                  document.getElementById("focused-resolve-profit").setAttribute("style", "background-color:green")
                }

                // Potion of Unbridled Fury
                // Cost calculation
                 unbridledFuryCost = zinanthidPrice * 6;
                 unbridledFuryCostString = unbridledFuryCost.toString();
                unbridledFuryCostCopper = unbridledFuryCostString.charAt(unbridledFuryCostString.length-2) + unbridledFuryCostString.charAt(unbridledFuryCostString.length-1)
                unbridledFuryCostSilver = unbridledFuryCostString.charAt(unbridledFuryCostString.length-4) + unbridledFuryCostString.charAt(unbridledFuryCostString.length-3)
                if(unbridledFuryCostString.length == 5) {
                  unbridledFuryCostGold = unbridledFuryCostString.charAt(0)
                } else if (unbridledFuryCostString.length == 6) {
                  unbridledFuryCostGold = unbridledFuryCostString.charAt(0) + unbridledFuryCostString.charAt(1)
                } else if (unbridledFuryCostString.length == 7) {
                  unbridledFuryCostGold = unbridledFuryCostString.charAt(0) + unbridledFuryCostString.charAt(1) + unbridledFuryCostString.charAt(2)
                }
                document.getElementById("unbridled-fury-cost").innerHTML = `
                ${unbridledFuryCostGold} <img src="images/money-gold.gif"> ${unbridledFuryCostSilver} <img src="images/money-silver.gif"> ${unbridledFuryCostCopper} <img src="images/money-copper.gif">`             
    
                // Price calculation
                 unbridledFury = response.data.auctions.filter(function(auction){
                    return auction.item.id === 169299
                  });
                  unbridledFury.sort(function(a,b){
                      return a.unit_price - b.unit_price
                    })
                 unbridledFuryPrice = unbridledFury[0].unit_price;
                 unbridledFuryString = unbridledFuryPrice.toString();
                unbridledFuryCopper = unbridledFuryString.charAt(unbridledFuryString.length-2) + unbridledFuryString.charAt(unbridledFuryString.length-1)
                unbridledFurySilver = unbridledFuryString.charAt(unbridledFuryString.length-4) + unbridledFuryString.charAt(unbridledFuryString.length-3)
                if(unbridledFuryString.length == 5) {
                  unbridledFuryGold = unbridledFuryString.charAt(0)
                } else if (unbridledFuryString.length == 6) {
                  unbridledFuryGold = unbridledFuryString.charAt(0) + unbridledFuryString.charAt(1)
                } else if (unbridledFuryString.length == 7) {
                  unbridledFuryGold = unbridledFuryString.charAt(0) + unbridledFuryString.charAt(1) + unbridledFuryString.charAt(2)
                }
                document.getElementById("unbridled-fury-price").innerHTML = `
                ${unbridledFuryGold} <img src="images/money-gold.gif"> ${unbridledFurySilver} <img src="images/money-silver.gif"> ${unbridledFuryCopper} <img src="images/money-copper.gif">`
                
              // Profit/Loss Calculation
               unbridledFuryProfit = Math.floor(unbridledFuryPrice * 1.4 - unbridledFuryCost);
               unbridledFuryProfitString = unbridledFuryProfit.toString();
              unbridledFuryProfitCopper = unbridledFuryProfitString.charAt(unbridledFuryProfitString.length-2) + unbridledFuryProfitString.charAt(unbridledFuryProfitString.length-1)
              unbridledFuryProfitSilver = unbridledFuryProfitString.charAt(unbridledFuryProfitString.length-4) + unbridledFuryProfitString.charAt(unbridledFuryProfitString.length-3)
                if(unbridledFuryProfitString.length == 5) {
                  unbridledFuryProfitGold = unbridledFuryProfitString.charAt(0)
                } else if (unbridledFuryProfitString.length == 6) {
                  unbridledFuryProfitGold = unbridledFuryProfitString.charAt(0) + unbridledFuryProfitString.charAt(1)
                } else if (unbridledFuryProfitString.length == 7) {
                  unbridledFuryProfitGold = unbridledFuryProfitString.charAt(0) + unbridledFuryProfitString.charAt(1) + unbridledFuryProfitString.charAt(2)
                } else {
                    unbridledFuryProfitGold = unbridledFuryProfitString.charAt(0) + unbridledFuryProfitString.charAt(1) + unbridledFuryProfitString.charAt(2) + unbridledFuryProfitString.charAt(3)  
                }
                document.getElementById("unbridled-fury-profit").innerHTML = `
                ${unbridledFuryProfitGold} <img src="images/money-gold.gif"> ${unbridledFuryProfitSilver} <img src="images/money-silver.gif"> ${unbridledFuryProfitCopper} <img src="images/money-copper.gif">`
                if(Math.sign(unbridledFuryProfit) == -1){
                  document.getElementById("unbridled-fury-profit").setAttribute("style", "background-color:red")
                } else {
                  document.getElementById("unbridled-fury-profit").setAttribute("style", "background-color:green")
                }

              // Potion of Wild Mending
                // Cost calculation
                 wildMendingCost = zinanthidPrice * 6;
                 wildMendingCostString = wildMendingCost.toString();
                wildMendingCostCopper = wildMendingCostString.charAt(wildMendingCostString.length-2) + wildMendingCostString.charAt(wildMendingCostString.length-1)
                wildMendingCostSilver = wildMendingCostString.charAt(wildMendingCostString.length-4) + wildMendingCostString.charAt(wildMendingCostString.length-3)
                if(wildMendingCostString.length == 5) {
                  wildMendingCostGold = wildMendingCostString.charAt(0)
                } else if (wildMendingCostString.length == 6) {
                  wildMendingCostGold = wildMendingCostString.charAt(0) + wildMendingCostString.charAt(1)
                } else if (wildMendingCostString.length == 7) {
                  wildMendingCostGold = wildMendingCostString.charAt(0) + wildMendingCostString.charAt(1) + wildMendingCostString.charAt(2)
                }
                document.getElementById("wild-mending-cost").innerHTML = `
                ${wildMendingCostGold} <img src="images/money-gold.gif"> ${wildMendingCostSilver} <img src="images/money-silver.gif"> ${wildMendingCostCopper} <img src="images/money-copper.gif">`             
    
                // Price calculation
                 wildMending = response.data.auctions.filter(function(auction){
                    return auction.item.id === 169300
                  });
                  wildMending.sort(function(a,b){
                      return a.unit_price - b.unit_price
                    })
                 wildMendingPrice = wildMending[0].unit_price;
                 wildMendingString = wildMendingPrice.toString();
                wildMendingPriceCopper = wildMendingString.charAt(wildMendingString.length-2) + wildMendingString.charAt(wildMendingString.length-1)
                wildMendingPriceSilver = wildMendingString.charAt(wildMendingString.length-4) + wildMendingString.charAt(wildMendingString.length-3)
                if(wildMendingString.length == 5) {
                  wildMendingPriceGold = wildMendingString.charAt(0)
                } else if (wildMendingString.length == 6) {
                  wildMendingPriceGold = wildMendingString.charAt(0) + wildMendingString.charAt(1)
                } else if (wildMendingString.length == 7) {
                  wildMendingPriceGold = wildMendingString.charAt(0) + wildMendingString.charAt(1) + wildMendingString.charAt(2)
                }
                document.getElementById("wild-mending-price").innerHTML = `
                ${wildMendingPriceGold} <img src="images/money-gold.gif"> ${wildMendingPriceSilver} <img src="images/money-silver.gif"> ${wildMendingPriceCopper} <img src="images/money-copper.gif">`
                
              // Profit/Loss Calculation
               wildMendingProfit = Math.floor(wildMendingPrice * 1.4 - wildMendingCost);
               wildMendingProfitString = wildMendingProfit.toString();
              wildMendingProfitCopper = wildMendingProfitString.charAt(wildMendingProfitString.length-2) + wildMendingProfitString.charAt(wildMendingProfitString.length-1)
              wildMendingProfitSilver = wildMendingProfitString.charAt(wildMendingProfitString.length-4) + wildMendingProfitString.charAt(wildMendingProfitString.length-3)
                if(wildMendingProfitString.length == 5) {
                  wildMendingProfitGold = wildMendingProfitString.charAt(0)
                } else if (wildMendingProfitString.length == 6) {
                  wildMendingProfitGold = wildMendingProfitString.charAt(0) + wildMendingProfitString.charAt(1)
                } else if (wildMendingProfitString.length == 7) {
                  wildMendingProfitGold = wildMendingProfitString.charAt(0) + wildMendingProfitString.charAt(1) + wildMendingProfitString.charAt(2)
                } else {
                    wildMendingProfitGold = wildMendingProfitString.charAt(0) + wildMendingProfitString.charAt(1) + wildMendingProfitString.charAt(2) + wildMendingProfitString.charAt(3)  
                }
                document.getElementById("wild-mending-profit").innerHTML = `
                ${wildMendingProfitGold} <img src="images/money-gold.gif"> ${wildMendingProfitSilver} <img src="images/money-silver.gif"> ${wildMendingProfitCopper} <img src="images/money-copper.gif">`
                if(Math.sign(wildMendingProfit) == -1){
                  document.getElementById("wild-mending-profit").setAttribute("style", "background-color:red")
                } else {
                  document.getElementById("wild-mending-profit").setAttribute("style", "background-color:green")
                }

              // Superior Battle Potion of Agility 
              // Cost calculation
               superiorAgilityCost = zinanthidPrice * 8 + riverbudPrice * 3;
               superiorAgilityCostString = superiorAgilityCost.toString();
              superiorAgilityCostCopper = superiorAgilityCostString.charAt(superiorAgilityCostString.length-2) + superiorAgilityCostString.charAt(superiorAgilityCostString.length-1)
              superiorAgilityCostSilver = superiorAgilityCostString.charAt(superiorAgilityCostString.length-4) + superiorAgilityCostString.charAt(superiorAgilityCostString.length-3)
              if(superiorAgilityCostString.length == 5) {
                superiorAgilityCostGold = superiorAgilityCostString.charAt(0)
              } else if (superiorAgilityCostString.length == 6) {
                superiorAgilityCostGold = superiorAgilityCostString.charAt(0) + superiorAgilityCostString.charAt(1)
              } else if (superiorAgilityCostString.length == 7) {
                superiorAgilityCostGold = superiorAgilityCostString.charAt(0) + superiorAgilityCostString.charAt(1) + superiorAgilityCostString.charAt(2)
              }
              document.getElementById("superior-agility-cost").innerHTML = `
              ${superiorAgilityCostGold} <img src="images/money-gold.gif"> ${superiorAgilityCostSilver} <img src="images/money-silver.gif"> ${superiorAgilityCostCopper} <img src="images/money-copper.gif">`             
  
              // Price calculation
               superiorAgility = response.data.auctions.filter(function(auction){
                  return auction.item.id === 168489
                });
                superiorAgility.sort(function(a,b){
                    return a.unit_price - b.unit_price
                  })
               superiorAgilityPrice = superiorAgility[0].unit_price;
               superiorAgiliyString = superiorAgilityPrice.toString();
              superiorAgilityCopper = superiorAgiliyString.charAt(superiorAgiliyString.length-2) + superiorAgiliyString.charAt(superiorAgiliyString.length-1)
              superiorAgilitySilver = superiorAgiliyString.charAt(superiorAgiliyString.length-4) + superiorAgiliyString.charAt(superiorAgiliyString.length-3)
              if(superiorAgiliyString.length == 5) {
                superiorAgilityGold = superiorAgiliyString.charAt(0)
              } else if (superiorAgiliyString.length == 6) {
                superiorAgilityGold = superiorAgiliyString.charAt(0) + superiorAgiliyString.charAt(1)
              } else if (superiorAgiliyString.length == 7) {
                superiorAgilityGold = superiorAgiliyString.charAt(0) + superiorAgiliyString.charAt(1) + superiorAgiliyString.charAt(2)
              }
              document.getElementById("superior-agility-price").innerHTML = `
              ${superiorAgilityGold} <img src="images/money-gold.gif"> ${superiorAgilitySilver} <img src="images/money-silver.gif"> ${superiorAgilityCopper} <img src="images/money-copper.gif">`
              
            // Profit/Loss Calculation
             superiorAgilityProfit = Math.floor(superiorAgilityPrice * 1.4 - superiorAgilityCost);
             superiorAgilityProfitString = superiorAgilityProfit.toString();
            superiorAgilityProfitCopper = superiorAgilityProfitString.charAt(superiorAgilityProfitString.length-2) + superiorAgilityProfitString.charAt(superiorAgilityProfitString.length-1)
            superiorAgilityProfitSilver = superiorAgilityProfitString.charAt(superiorAgilityProfitString.length-4) + superiorAgilityProfitString.charAt(superiorAgilityProfitString.length-3)
              if(superiorAgilityProfitString.length == 5) {
                superiorAgilityProfitGold = superiorAgilityProfitString.charAt(0)
              } else if (superiorAgilityProfitString.length == 6) {
                superiorAgilityProfitGold = superiorAgilityProfitString.charAt(0) + superiorAgilityProfitString.charAt(1)
              } else if (superiorAgilityProfitString.length == 7) {
                superiorAgilityProfitGold = superiorAgilityProfitString.charAt(0) + superiorAgilityProfitString.charAt(1) + superiorAgilityProfitString.charAt(2)
              } else {
                superiorAgilityProfitGold = superiorAgilityProfitString.charAt(0) + superiorAgilityProfitString.charAt(1) + superiorAgilityProfitString.charAt(2) + superiorAgilityProfitString.charAt(3)
              }
              document.getElementById("superior-agility-profit").innerHTML = `
              ${superiorAgilityProfitGold} <img src="images/money-gold.gif"> ${superiorAgilityProfitSilver} <img src="images/money-silver.gif"> ${superiorAgilityProfitCopper} <img src="images/money-copper.gif">`
              if(Math.sign(superiorAgilityProfit) == -1){
                document.getElementById("superior-agility-profit").setAttribute("style", "background-color:red")
              } else {
                document.getElementById("superior-agility-profit").setAttribute("style", "background-color:green")
              }

            // Superior Battle Potion of Intellect
            // Cost calculation
               superiorIntellectCost = zinanthidPrice * 8 + sirenspollenPrice * 3;
               superiorIntellectCostString = superiorIntellectCost.toString();
              superiorIntellectCostCopper = superiorIntellectCostString.charAt(superiorIntellectCostString.length-2) + superiorIntellectCostString.charAt(superiorIntellectCostString.length-1)
              superiorIntellectCostSilver = superiorIntellectCostString.charAt(superiorIntellectCostString.length-4) + superiorIntellectCostString.charAt(superiorIntellectCostString.length-3)
              if(superiorIntellectCostString.length == 5) {
                superiorIntellectCostGold = superiorIntellectCostString.charAt(0)
              } else if (superiorIntellectCostString.length == 6) {
                superiorIntellectCostGold = superiorIntellectCostString.charAt(0) + superiorIntellectCostString.charAt(1)
              } else if (superiorIntellectCostString.length == 7) {
                superiorIntellectCostGold = superiorIntellectCostString.charAt(0) + superiorIntellectCostString.charAt(1) + superiorIntellectCostString.charAt(2)
              }
              document.getElementById("superior-intellect-cost").innerHTML = `
              ${superiorIntellectCostGold} <img src="images/money-gold.gif"> ${superiorIntellectCostSilver} <img src="images/money-silver.gif"> ${superiorIntellectCostCopper} <img src="images/money-copper.gif">`             
  
              // Price calculation
               superiorIntellect = response.data.auctions.filter(function(auction){
                  return auction.item.id === 168498
                });
                superiorIntellect.sort(function(a,b){
                    return a.unit_price - b.unit_price
                  })
               superiorIntellectPrice = superiorIntellect[0].unit_price;
               superiorIntellectPriceString = superiorIntellectPrice.toString();
              superiorIntellectCopper = superiorIntellectPriceString.charAt(superiorIntellectPriceString.length-2) + superiorIntellectPriceString.charAt(superiorIntellectPriceString.length-1)
              superiorIntellectSilver = superiorIntellectPriceString.charAt(superiorIntellectPriceString.length-4) + superiorIntellectPriceString.charAt(superiorIntellectPriceString.length-3)
              if(superiorIntellectPriceString.length == 5) {
                superiorIntellectGold = superiorIntellectPriceString.charAt(0)
              } else if (superiorIntellectPriceString.length == 6) {
                superiorIntellectGold = superiorIntellectPriceString.charAt(0) + superiorIntellectPriceString.charAt(1)
              } else if (superiorIntellectPriceString.length == 7) {
                superiorIntellectGold = superiorIntellectPriceString.charAt(0) + superiorIntellectPriceString.charAt(1) + superiorIntellectPriceString.charAt(2)
              }
              document.getElementById("superior-intellect-price").innerHTML = `
              ${superiorIntellectGold} <img src="images/money-gold.gif"> ${superiorIntellectSilver} <img src="images/money-silver.gif"> ${superiorIntellectCopper} <img src="images/money-copper.gif">`
              
            // Profit/Loss Calculation
             superiorIntellectProfit = Math.floor(superiorIntellectPrice * 1.4 - superiorIntellectCost);
             superiorIntellectProfitString = superiorIntellectProfit.toString();
            superiorIntellectProfitCopper = superiorIntellectProfitString.charAt(superiorIntellectProfitString.length-2) + superiorIntellectProfitString.charAt(superiorIntellectProfitString.length-1)
            superiorIntellectProfitSilver = superiorIntellectProfitString.charAt(superiorIntellectProfitString.length-4) + superiorIntellectProfitString.charAt(superiorIntellectProfitString.length-3)
              if(superiorIntellectProfitString.length == 5) {
                superiorIntellectProfitGold = superiorIntellectProfitString.charAt(0)
              } else if (superiorIntellectProfitString.length == 6) {
                superiorIntellectProfitGold = superiorIntellectProfitString.charAt(0) + superiorIntellectProfitString.charAt(1)
              } else if (superiorIntellectProfitString.length == 7) {
                superiorIntellectProfitGold = superiorIntellectProfitString.charAt(0) + superiorIntellectProfitString.charAt(1) + superiorIntellectProfitString.charAt(2)
              } else { 
                superiorIntellectProfitGold = superiorIntellectProfitString.charAt(0) + superiorIntellectProfitString.charAt(1) + superiorIntellectProfitString.charAt(2) + superiorIntellectProfitString.charAt(3)
              }
              document.getElementById("superior-intellect-profit").innerHTML = `
              ${superiorIntellectProfitGold} <img src="images/money-gold.gif"> ${superiorIntellectProfitSilver} <img src="images/money-silver.gif"> ${superiorIntellectProfitCopper} <img src="images/money-copper.gif">`
              if(Math.sign(superiorIntellectProfit) == -1){
                document.getElementById("superior-intellect-profit").setAttribute("style", "background-color:red")
              } else {
                document.getElementById("superior-intellect-profit").setAttribute("style", "background-color:green")
              }
            
            // Superior Battle Potion of Stamina
            // Cost calculation
             superiorStaminaCost = zinanthidPrice * 8 + seastalkPrice * 3;
             superiorStaminaCostString = superiorStaminaCost.toString();
            superiorStaminaCostCopper = superiorStaminaCostString.charAt(superiorStaminaCostString.length-2) + superiorStaminaCostString.charAt(superiorStaminaCostString.length-1)
            superiorStaminaCostSilver = superiorStaminaCostString.charAt(superiorStaminaCostString.length-4) + superiorStaminaCostString.charAt(superiorStaminaCostString.length-3)
            if(superiorStaminaCostString.length == 5) {
              superiorStaminaCostGold = superiorStaminaCostString.charAt(0)
            } else if (superiorStaminaCostString.length == 6) {
              superiorStaminaCostGold = superiorStaminaCostString.charAt(0) + superiorStaminaCostString.charAt(1)
            } else if (superiorStaminaCostString.length == 7) {
              superiorStaminaCostGold = superiorStaminaCostString.charAt(0) + superiorStaminaCostString.charAt(1) + superiorStaminaCostString.charAt(2)
            }
            document.getElementById("superior-stamina-cost").innerHTML = `
            ${superiorStaminaCostGold} <img src="images/money-gold.gif"> ${superiorStaminaCostSilver} <img src="images/money-silver.gif"> ${superiorStaminaCostCopper} <img src="images/money-copper.gif">`             

            // Price calculation
             superiorStamina = response.data.auctions.filter(function(auction){
                return auction.item.id === 168499
              });
              superiorStamina.sort(function(a,b){
                  return a.unit_price - b.unit_price
                })
             superiorStaminaPrice = superiorStamina[0].unit_price;
             superiorStaminaPriceString = superiorStaminaPrice.toString();
            superiorStaminaCopper = superiorStaminaPriceString.charAt(superiorStaminaPriceString.length-2) + superiorStaminaPriceString.charAt(superiorStaminaPriceString.length-1)
            superiorStaminaSilver = superiorStaminaPriceString.charAt(superiorStaminaPriceString.length-4) + superiorStaminaPriceString.charAt(superiorStaminaPriceString.length-3)
            if(superiorStaminaPriceString.length == 5) {
              superiorStaminaGold = superiorStaminaPriceString.charAt(0)
            } else if (superiorStaminaPriceString.length == 6) {
              superiorStaminaGold = superiorStaminaPriceString.charAt(0) + superiorStaminaPriceString.charAt(1)
            } else if (superiorStaminaPriceString.length == 7) {
              superiorStaminaGold = superiorStaminaPriceString.charAt(0) + superiorStaminaPriceString.charAt(1) + superiorStaminaPriceString.charAt(2)
            }
            document.getElementById("superior-stamina-price").innerHTML = `
            ${superiorStaminaGold} <img src="images/money-gold.gif"> ${superiorStaminaSilver} <img src="images/money-silver.gif"> ${superiorStaminaCopper} <img src="images/money-copper.gif">`
            
          // Profit/Loss Calculation
           superiorStaminaProfit = Math.floor(superiorStaminaPrice * 1.4 - superiorStaminaCost);
           superiorStaminaProfitString = superiorStaminaProfit.toString();
          superiorStaminaProfitCopper = superiorStaminaProfitString.charAt(superiorStaminaProfitString.length-2) + superiorStaminaProfitString.charAt(superiorStaminaProfitString.length-1)
          superiorStaminaProfitSilver = superiorStaminaProfitString.charAt(superiorStaminaProfitString.length-4) + superiorStaminaProfitString.charAt(superiorStaminaProfitString.length-3)
            if(superiorStaminaProfitString.length == 5) {
              superiorStaminaProfitGold = superiorStaminaProfitString.charAt(0)
            } else if (superiorStaminaProfitString.length == 6) {
              superiorStaminaProfitGold = superiorStaminaProfitString.charAt(0) + superiorStaminaProfitString.charAt(1)
            } else if (superiorStaminaProfitString.length == 7) {
              superiorStaminaProfitGold = superiorStaminaProfitString.charAt(0) + superiorStaminaProfitString.charAt(1) + superiorStaminaProfitString.charAt(2)
            } else {
                superiorStaminaProfitGold = superiorStaminaProfitString.charAt(0) + superiorStaminaProfitString.charAt(1) + superiorStaminaProfitString.charAt(2) + superiorStaminaProfitString.charAt(3)
            }
            document.getElementById("superior-stamina-profit").innerHTML = `
            ${superiorStaminaProfitGold} <img src="images/money-gold.gif"> ${superiorStaminaProfitSilver} <img src="images/money-silver.gif"> ${superiorStaminaProfitCopper} <img src="images/money-copper.gif">`
            if(Math.sign(superiorStaminaProfit) == -1){
              document.getElementById("superior-stamina-profit").setAttribute("style", "background-color:red")
            } else {
              document.getElementById("superior-stamina-profit").setAttribute("style", "background-color:green")
            }

          // Superior Strength
          // Cost calculation
           superiorStrengthCost = zinanthidPrice * 8 + starmossPrice * 3;
           superiorStrengthCostString = superiorStrengthCost.toString();
          superiorStrengthCostCopper = superiorStrengthCostString.charAt(superiorStrengthCostString.length-2) + superiorStrengthCostString.charAt(superiorStrengthCostString.length-1)
          superiorStrengthCostSilver = superiorStrengthCostString.charAt(superiorStrengthCostString.length-4) + superiorStrengthCostString.charAt(superiorStrengthCostString.length-3)
          if(superiorStrengthCostString.length == 5) {
            superiorStrengthCostGold = superiorStrengthCostString.charAt(0)
          } else if (superiorStrengthCostString.length == 6) {
            superiorStrengthCostGold = superiorStrengthCostString.charAt(0) + superiorStrengthCostString.charAt(1)
          } else if (superiorStrengthCostString.length == 7) {
            superiorStrengthCostGold = superiorStrengthCostString.charAt(0) + superiorStrengthCostString.charAt(1) + superiorStrengthCostString.charAt(2)
          }
          document.getElementById("superior-strength-cost").innerHTML = `
          ${superiorStrengthCostGold} <img src="images/money-gold.gif"> ${superiorStrengthCostSilver} <img src="images/money-silver.gif"> ${superiorStrengthCostCopper} <img src="images/money-copper.gif">`             

          // Price calculation
           superiorStrength = response.data.auctions.filter(function(auction){
              return auction.item.id === 168500
            });
            superiorStrength.sort(function(a,b){
                return a.unit_price - b.unit_price
              })
           superiorStrengthPrice = superiorStrength[0].unit_price;
           superiorStrengthPriceString = superiorStrengthPrice.toString();
          superiorStrengthCopper = superiorStrengthPriceString.charAt(superiorStrengthPriceString.length-2) + superiorStrengthPriceString.charAt(superiorStrengthPriceString.length-1)
          superiorStrengthSilver = superiorStrengthPriceString.charAt(superiorStrengthPriceString.length-4) + superiorStrengthPriceString.charAt(superiorStrengthPriceString.length-3)
          if(superiorStrengthPriceString.length == 5) {
            superiorStrengthGold = superiorStrengthPriceString.charAt(0)
          } else if (superiorStrengthPriceString.length == 6) {
            superiorStrengthGold = superiorStrengthPriceString.charAt(0) + superiorStrengthPriceString.charAt(1)
          } else if (superiorStrengthPriceString.length == 7) {
            superiorStrengthGold = superiorStrengthPriceString.charAt(0) + superiorStrengthPriceString.charAt(1) + superiorStrengthPriceString.charAt(2)
          }
          document.getElementById("superior-strength-price").innerHTML = `
          ${superiorStrengthGold} <img src="images/money-gold.gif"> ${superiorStrengthSilver} <img src="images/money-silver.gif"> ${superiorStrengthCopper} <img src="images/money-copper.gif">`
          
        // Profit/Loss Calculation
         superiorStrengthProfit = Math.floor(superiorStrengthPrice * 1.4 - superiorStrengthCost);
         superiorStrengthProfitString = superiorStrengthProfit.toString();
        superiorStrengthProfitCopper = superiorStrengthProfitString.charAt(superiorStrengthProfitString.length-2) + superiorStrengthProfitString.charAt(superiorStrengthProfitString.length-1)
        superiorStrengthProfitSilver = superiorStrengthProfitString.charAt(superiorStrengthProfitString.length-4) + superiorStrengthProfitString.charAt(superiorStrengthProfitString.length-3)
          if(superiorStrengthProfitString.length == 5) {
            superiorStrengthProfitGold = superiorStrengthProfitString.charAt(0)
          } else if (superiorStrengthProfitString.length == 6) {
            superiorStrengthProfitGold = superiorStrengthProfitString.charAt(0) + superiorStrengthProfitString.charAt(1)
          } else if (superiorStrengthProfitString.length == 7) {
            superiorStrengthProfitGold = superiorStrengthProfitString.charAt(0) + superiorStrengthProfitString.charAt(1) + superiorStrengthProfitString.charAt(2)
          } else {
            superiorStrengthProfitGold = superiorStrengthProfitString.charAt(0) + superiorStrengthProfitString.charAt(1) + superiorStrengthProfitString.charAt(2) + superiorStrengthProfitString.charAt(3)
          }
          document.getElementById("superior-strength-profit").innerHTML = `
          ${superiorStrengthProfitGold} <img src="images/money-gold.gif"> ${superiorStrengthProfitSilver} <img src="images/money-silver.gif"> ${superiorStrengthProfitCopper} <img src="images/money-copper.gif">`
          if(Math.sign(superiorStrengthProfit) == -1){
            document.getElementById("superior-strength-profit").setAttribute("style", "background-color:red")
          } else {
            document.getElementById("superior-strength-profit").setAttribute("style", "background-color:green")
          }
        // Superior Steelskin Potion
        // Cost calculation
         superiorSteelSkinCost = zinanthidPrice * 8 + akundasBitePrice * 3;
         superiorSteelSkinCostString = superiorSteelSkinCost.toString();
        superiorSteelSkinCostCopper = superiorSteelSkinCostString.charAt(superiorSteelSkinCostString.length-2) + superiorSteelSkinCostString.charAt(superiorSteelSkinCostString.length-1)
        superiorSteelSkinCostSilver = superiorSteelSkinCostString.charAt(superiorSteelSkinCostString.length-4) + superiorSteelSkinCostString.charAt(superiorSteelSkinCostString.length-3)
        if(superiorSteelSkinCostString.length == 5) {
          superiorSteelSkinCostGold = superiorSteelSkinCostString.charAt(0)
        } else if (superiorSteelSkinCostString.length == 6) {
          superiorSteelSkinCostGold = superiorSteelSkinCostString.charAt(0) + superiorSteelSkinCostString.charAt(1)
        } else if (superiorSteelSkinCostString.length == 7) {
          superiorSteelSkinCostGold = superiorSteelSkinCostString.charAt(0) + superiorSteelSkinCostString.charAt(1) + superiorSteelSkinCostString.charAt(2)
        }
        document.getElementById("superior-steelskin-cost").innerHTML = `
        ${superiorSteelSkinCostGold} <img src="images/money-gold.gif"> ${superiorSteelSkinCostSilver} <img src="images/money-silver.gif"> ${superiorSteelSkinCostCopper} <img src="images/money-copper.gif">`             

        // Price calculation
         superiorSteelskin = response.data.auctions.filter(function(auction){
            return auction.item.id === 168501
          });
          superiorSteelskin.sort(function(a,b){
              return a.unit_price - b.unit_price
            })
         superiorSteelskinPrice = superiorSteelskin[0].unit_price;
         superiorSteelskinPriceString = superiorSteelskinPrice.toString();
        superiorSteelskinCopper = superiorSteelskinPriceString.charAt(superiorSteelskinPriceString.length-2) + superiorSteelskinPriceString.charAt(superiorSteelskinPriceString.length-1)
        superiorSteelskinSilver = superiorSteelskinPriceString.charAt(superiorSteelskinPriceString.length-4) + superiorSteelskinPriceString.charAt(superiorSteelskinPriceString.length-3)
        if(superiorSteelskinPriceString.length == 5) {
          superiorSteelskinGold = superiorSteelskinPriceString.charAt(0)
        } else if (superiorSteelskinPriceString.length == 6) {
          superiorSteelskinGold = superiorSteelskinPriceString.charAt(0) + superiorSteelskinPriceString.charAt(1)
        } else if (superiorSteelskinPriceString.length == 7) {
          superiorSteelskinGold = superiorSteelskinPriceString.charAt(0) + superiorSteelskinPriceString.charAt(1) + superiorSteelskinPriceString.charAt(2)
        }
        document.getElementById("superior-steelskin-price").innerHTML = `
        ${superiorSteelskinGold} <img src="images/money-gold.gif"> ${superiorSteelskinSilver} <img src="images/money-silver.gif"> ${superiorSteelskinCopper} <img src="images/money-copper.gif">`
        
      // Profit/Loss Calculation
       superiorSteelskinProfit = Math.floor(superiorSteelskinPrice * 1.4 - superiorSteelSkinCost);
       superiorSteelskinProfitString = superiorSteelskinProfit.toString();
      superiorSteelskinProfitCopper = superiorSteelskinProfitString.charAt(superiorSteelskinProfitString.length-2) + superiorSteelskinProfitString.charAt(superiorSteelskinProfitString.length-1)
      superiorSteelskinProfitSilver = superiorSteelskinProfitString.charAt(superiorSteelskinProfitString.length-4) + superiorSteelskinProfitString.charAt(superiorSteelskinProfitString.length-3)
        if(superiorSteelskinProfitString.length == 5) {
          superiorSteelskinProfitGold = superiorSteelskinProfitString.charAt(0)
        } else if (superiorSteelskinProfitString.length == 6) {
          superiorSteelskinProfitGold = superiorSteelskinProfitString.charAt(0) + superiorSteelskinProfitString.charAt(1)
        } else if (superiorSteelskinProfitString.length == 7) {
          superiorSteelskinProfitGold = superiorSteelskinProfitString.charAt(0) + superiorSteelskinProfitString.charAt(1) + superiorSteelskinProfitString.charAt(2)
        } else {
            superiorSteelskinProfitGold = superiorSteelskinProfitString.charAt(0) + superiorSteelskinProfitString.charAt(1) + superiorSteelskinProfitString.charAt(2) + superiorSteelskinProfitString.charAt(3)
        }
        document.getElementById("superior-steelskin-profit").innerHTML = `
        ${superiorSteelskinProfitGold} <img src="images/money-gold.gif"> ${superiorSteelskinProfitSilver} <img src="images/money-silver.gif"> ${superiorSteelskinProfitCopper} <img src="images/money-copper.gif">`
        if(Math.sign(superiorSteelskinProfit) == -1){
          document.getElementById("superior-steelskin-profit").setAttribute("style", "background-color:red")
        } else {
          document.getElementById("superior-steelskin-profit").setAttribute("style", "background-color:green")
        }

      // Potion of Replenishment
        // Cost calculation
         replenishmentCost = sirenspollenPrice * 10 + starmossPrice * 8;
         replenishmentCostString = replenishmentCost.toString();
        replenishmentCostCopper = replenishmentCostString.charAt(replenishmentCostString.length-2) + replenishmentCostString.charAt(replenishmentCostString.length-1)
        replenishmentCostSilver = replenishmentCostString.charAt(replenishmentCostString.length-4) + replenishmentCostString.charAt(replenishmentCostString.length-3)
        if(replenishmentCostString.length == 5) {
          replenishmentCostGold = replenishmentCostString.charAt(0)
        } else if (replenishmentCostString.length == 6) {
          replenishmentCostGold = replenishmentCostString.charAt(0) + replenishmentCostString.charAt(1)
        } else if (replenishmentCostString.length == 7) {
          replenishmentCostGold = replenishmentCostString.charAt(0) + replenishmentCostString.charAt(1) + replenishmentCostString.charAt(2)
        }
        document.getElementById("replenishment-cost").innerHTML = `
        ${replenishmentCostGold} <img src="images/money-gold.gif"> ${replenishmentCostSilver} <img src="images/money-silver.gif"> ${replenishmentCostCopper} <img src="images/money-copper.gif">`             

        // Price calculation
         replenishment = response.data.auctions.filter(function(auction){
            return auction.item.id === 152561
          });
          replenishment.sort(function(a,b){
              return a.unit_price - b.unit_price
            })
         replenishmentPrice = replenishment[0].unit_price;
         replenishmentPriceString = replenishmentPrice.toString();
        replenishmentPriceCopper = replenishmentPriceString.charAt(replenishmentPriceString.length-2) + replenishmentPriceString.charAt(replenishmentPriceString.length-1)
        replenishmentPriceSilver = replenishmentPriceString.charAt(replenishmentPriceString.length-4) + replenishmentPriceString.charAt(replenishmentPriceString.length-3)
        if(replenishmentPriceString.length == 5) {
          replenishmentPriceGold = replenishmentPriceString.charAt(0)
        } else if (replenishmentPriceString.length == 6) {
          replenishmentPriceGold = replenishmentPriceString.charAt(0) + replenishmentPriceString.charAt(1)
        } else if (replenishmentPriceString.length == 7) {
          replenishmentPriceGold = replenishmentPriceString.charAt(0) + replenishmentPriceString.charAt(1) + replenishmentPriceString.charAt(2)
        }
        document.getElementById("replenishment-price").innerHTML = `
        ${replenishmentPriceGold} <img src="images/money-gold.gif"> ${replenishmentPriceSilver} <img src="images/money-silver.gif"> ${replenishmentPriceCopper} <img src="images/money-copper.gif">`
        
      // Profit/Loss Calculation

       replenishmentProfit = Math.floor(replenishmentPrice * 1.4 - replenishmentCost);
       replenishmentProfitString = replenishmentProfit.toString();
      replenishmentProfitCopper = replenishmentProfitString.charAt(replenishmentProfitString.length-2) + replenishmentProfitString.charAt(replenishmentProfitString.length-1)
      replenishmentProfitSilver = replenishmentProfitString.charAt(replenishmentProfitString.length-4) + replenishmentProfitString.charAt(replenishmentProfitString.length-3)
        if(replenishmentProfitString.length == 5) {
          replenishmentProfitGold = replenishmentProfitString.charAt(0)
        } else if (replenishmentProfitString.length == 6) {
          replenishmentProfitGold = replenishmentProfitString.charAt(0) + replenishmentProfitString.charAt(1)
        } else if (replenishmentProfitString.length == 7) {
          replenishmentProfitGold = replenishmentProfitString.charAt(0) + replenishmentProfitString.charAt(1) + replenishmentProfitString.charAt(2)
        } else {
          replenishmentProfitGold = replenishmentProfitString.charAt(0) + replenishmentProfitString.charAt(1) + replenishmentProfitString.charAt(2) + replenishmentProfitString.charAt(3)
        }
        document.getElementById("replenishment-profit").innerHTML = `
        ${replenishmentProfitGold} <img src="images/money-gold.gif"> ${replenishmentProfitSilver} <img src="images/money-silver.gif"> ${replenishmentProfitCopper} <img src="images/money-copper.gif">`
        if(Math.sign(replenishmentProfit) == -1){
          document.getElementById("replenishment-profit").setAttribute("style", "background-color:red")
        } else {
          document.getElementById("replenishment-profit").setAttribute("style", "background-color:green")
        }

      // Greater Flask of Endless Fathoms

        // Cost calculation
         greaterFathomsCost = zinanthidPrice * 20 + riverbudPrice * 5 + anchorweedPrice * 5;
         greaterFathomsCostString = greaterFathomsCost.toString();
        greaterFathomsCostCopper = greaterFathomsCostString.charAt(greaterFathomsCostString.length-2) + greaterFathomsCostString.charAt(greaterFathomsCostString.length-1)
        greaterFathomsCostSilver = greaterFathomsCostString.charAt(greaterFathomsCostString.length-4) + greaterFathomsCostString.charAt(greaterFathomsCostString.length-3)
        if(greaterFathomsCostString.length == 5) {
          greaterFathomsCostGold = greaterFathomsCostString.charAt(0)
        } else if (greaterFathomsCostString.length == 6) {
          greaterFathomsCostGold = greaterFathomsCostString.charAt(0) + greaterFathomsCostString.charAt(1)
        } else if (greaterFathomsCostString.length == 7) {
          greaterFathomsCostGold = greaterFathomsCostString.charAt(0) + greaterFathomsCostString.charAt(1) + greaterFathomsCostString.charAt(2)
        } else {
            greaterFathomsCostGold = greaterFathomsCostString.charAt(0) + greaterFathomsCostString.charAt(1) + greaterFathomsCostString.charAt(2) + greaterFathomsCostString.charAt(3)
        }
        document.getElementById("greater-fathoms-cost").innerHTML = `
        ${greaterFathomsCostGold} <img src="images/money-gold.gif"> ${greaterFathomsCostSilver} <img src="images/money-silver.gif"> ${greaterFathomsCostCopper} <img src="images/money-copper.gif">`             

        // Price calculation
         greaterFathoms = response.data.auctions.filter(function(auction){
            return auction.item.id === 168652
          });
          greaterFathoms.sort(function(a,b){
              return a.unit_price - b.unit_price
            })
         greaterFathomsPrice = greaterFathoms[0].unit_price;
         greaterFathomsPriceString = greaterFathomsPrice.toString();
        greaterFathomsPriceCopper = greaterFathomsPriceString.charAt(greaterFathomsPriceString.length-2) + greaterFathomsPriceString.charAt(greaterFathomsPriceString.length-1)
        greaterFathomsPriceSilver = greaterFathomsPriceString.charAt(greaterFathomsPriceString.length-4) + greaterFathomsPriceString.charAt(greaterFathomsPriceString.length-3)
        if(greaterFathomsPriceString.length == 5) {
          greaterFathomsPriceGold = greaterFathomsPriceString.charAt(0)
        } else if (greaterFathomsPriceString.length == 6) {
          greaterFathomsPriceGold = greaterFathomsPriceString.charAt(0) + greaterFathomsPriceString.charAt(1)
        } else if (greaterFathomsPriceString.length == 7) {
          greaterFathomsPriceGold = greaterFathomsPriceString.charAt(0) + greaterFathomsPriceString.charAt(1) + greaterFathomsPriceString.charAt(2)
        }
        document.getElementById("greater-fathoms-price").innerHTML = `
        ${greaterFathomsPriceGold} <img src="images/money-gold.gif"> ${greaterFathomsPriceSilver} <img src="images/money-silver.gif"> ${greaterFathomsPriceCopper} <img src="images/money-copper.gif">`
        
      // Profit/Loss Calculation

       greaterFathomsProfit = Math.floor(greaterFathomsPrice * 1.4 - greaterFathomsCost);
       greaterFathomsProfitString = greaterFathomsProfit.toString();
      greaterFathomsProfitCopper = greaterFathomsProfitString.charAt(greaterFathomsProfitString.length-2) + greaterFathomsProfitString.charAt(greaterFathomsProfitString.length-1)
      greaterFathomsProfitSilver = greaterFathomsProfitString.charAt(greaterFathomsProfitString.length-4) + greaterFathomsProfitString.charAt(greaterFathomsProfitString.length-3)
        if(greaterFathomsProfitString.length == 5) {
          greaterFathomsProfitGold = greaterFathomsProfitString.charAt(0)
        } else if (greaterFathomsProfitString.length == 6) {
          greaterFathomsProfitGold = greaterFathomsProfitString.charAt(0) + greaterFathomsProfitString.charAt(1)
        } else if (greaterFathomsProfitString.length == 7) {
          greaterFathomsProfitGold = greaterFathomsProfitString.charAt(0) + greaterFathomsProfitString.charAt(1) + greaterFathomsProfitString.charAt(2)
        } else if (greaterFathomsProfitString.length == 8) {
          greaterFathomsProfitGold = greaterFathomsProfitString.charAt(0) + greaterFathomsProfitString.charAt(1) + greaterFathomsProfitString.charAt(2) + greaterFathomsProfitString.charAt(3)
        } else {
            greaterFathomsProfitGold = greaterFathomsProfitString.charAt(0) + greaterFathomsProfitString.charAt(1) + greaterFathomsProfitString.charAt(2) + greaterFathomsProfitString.charAt(3) + greaterFathomsProfitString.charAt(4)
        }
        document.getElementById("greater-fathoms-profit").innerHTML = `
        ${greaterFathomsProfitGold} <img src="images/money-gold.gif"> ${greaterFathomsProfitSilver} <img src="images/money-silver.gif"> ${greaterFathomsProfitCopper} <img src="images/money-copper.gif">`
        if(Math.sign(greaterFathomsProfit) == -1){
          document.getElementById("greater-fathoms-profit").setAttribute("style", "background-color:red")
        } else {
          document.getElementById("greater-fathoms-profit").setAttribute("style", "background-color:green")
        }

      // Greater Flask of the Currents

        // Cost calculation
         greaterCurrentsCost = zinanthidPrice * 20 + seastalkPrice * 5 + anchorweedPrice * 5;
         greaterCurrentsCosttString = greaterCurrentsCost.toString();
        greaterCurrentsCostCopper = greaterCurrentsCosttString.charAt(greaterCurrentsCosttString.length-2) + greaterCurrentsCosttString.charAt(greaterCurrentsCosttString.length-1)
        greaterCurrentsCostSilver = greaterCurrentsCosttString.charAt(greaterCurrentsCosttString.length-4) + greaterCurrentsCosttString.charAt(greaterCurrentsCosttString.length-3)
        if(greaterCurrentsCosttString.length == 5) {
          greaterCurrentsCostGold = greaterCurrentsCosttString.charAt(0)
        } else if (greaterCurrentsCosttString.length == 6) {
          greaterCurrentsCostGold = greaterCurrentsCosttString.charAt(0) + greaterCurrentsCosttString.charAt(1)
        } else if (greaterCurrentsCosttString.length == 7) {
          greaterCurrentsCostGold = greaterCurrentsCosttString.charAt(0) + greaterCurrentsCosttString.charAt(1) + greaterCurrentsCosttString.charAt(2)
        } else {
            greaterCurrentsCostGold = greaterCurrentsCosttString.charAt(0) + greaterCurrentsCosttString.charAt(1) + greaterCurrentsCosttString.charAt(2) + greaterCurrentsCosttString.charAt(3)
         }
        document.getElementById("greater-currents-cost").innerHTML = `
        ${greaterCurrentsCostGold} <img src="images/money-gold.gif"> ${greaterCurrentsCostSilver} <img src="images/money-silver.gif"> ${greaterCurrentsCostCopper} <img src="images/money-copper.gif">`             

        // Price calculation
         greaterCurrents = response.data.auctions.filter(function(auction){
            return auction.item.id === 168651
          });
          greaterCurrents.sort(function(a,b){
              return a.unit_price - b.unit_price
            })
         greaterCurrentsPrice = greaterCurrents[0].unit_price;
         greaterCurrentsPriceString = greaterCurrentsPrice.toString();
        greaterCurrentsPriceCopper = greaterCurrentsPriceString.charAt(greaterCurrentsPriceString.length-2) + greaterCurrentsPriceString.charAt(greaterCurrentsPriceString.length-1)
        greaterCurrentsPriceSilver = greaterCurrentsPriceString.charAt(greaterCurrentsPriceString.length-4) + greaterCurrentsPriceString.charAt(greaterCurrentsPriceString.length-3)
        if(greaterCurrentsPriceString.length == 5) {
          greaterCurrentsPriceGold = greaterCurrentsPriceString.charAt(0)
        } else if (greaterCurrentsPriceString.length == 6) {
          greaterCurrentsPriceGold = greaterCurrentsPriceString.charAt(0) + greaterCurrentsPriceString.charAt(1)
        } else if (greaterCurrentsPriceString.length == 7) {
          greaterCurrentsPriceGold = greaterCurrentsPriceString.charAt(0) + greaterCurrentsPriceString.charAt(1) + greaterCurrentsPriceString.charAt(2)
        }
        document.getElementById("greater-currents-price").innerHTML = `
        ${greaterCurrentsPriceGold} <img src="images/money-gold.gif"> ${greaterCurrentsPriceSilver} <img src="images/money-silver.gif"> ${greaterCurrentsPriceCopper} <img src="images/money-copper.gif">`
        
      // Profit/Loss Calculation

       greaterCurrentsProfit = Math.floor(greaterCurrentsPrice * 1.4 - greaterCurrentsCost);
       greaterCurrentsProfitString = greaterCurrentsProfit.toString();
      greaterCurrentsProfitCopper = greaterCurrentsProfitString.charAt(greaterCurrentsProfitString.length-2) + greaterCurrentsProfitString.charAt(greaterCurrentsProfitString.length-1)
      greaterCurrentsProfitSilver = greaterCurrentsProfitString.charAt(greaterCurrentsProfitString.length-4) + greaterCurrentsProfitString.charAt(greaterCurrentsProfitString.length-3)
        if(greaterCurrentsProfitString.length == 5) {
          greaterCurrentsProfitGold = greaterCurrentsProfitString.charAt(0)
        } else if (greaterCurrentsProfitString.length == 6) {
          greaterCurrentsProfitGold = greaterCurrentsProfitString.charAt(0) + greaterCurrentsProfitString.charAt(1)
        } else if (greaterCurrentsProfitString.length == 7) {
          greaterCurrentsProfitGold = greaterCurrentsProfitString.charAt(0) + greaterCurrentsProfitString.charAt(1) + greaterCurrentsProfitString.charAt(2)
        } else {
          greaterCurrentsProfitGold = greaterCurrentsProfitString.charAt(0) + greaterCurrentsProfitString.charAt(1) + greaterCurrentsProfitString.charAt(2) + greaterCurrentsProfitString.charAt(3)
        }
        document.getElementById("greater-currents-profit").innerHTML = `
        ${greaterCurrentsProfitGold} <img src="images/money-gold.gif"> ${greaterCurrentsProfitSilver} <img src="images/money-silver.gif"> ${greaterCurrentsProfitCopper} <img src="images/money-copper.gif">`
        if(Math.sign(greaterCurrentsProfit) == -1){
          document.getElementById("greater-currents-profit").setAttribute("style", "background-color:red")
        } else {
          document.getElementById("greater-currents-profit").setAttribute("style", "background-color:green")
        }

      // Greater Flask of the Undertow
        // Cost calculation
         greaterUndertowCost = zinanthidPrice * 20 + sirenspollenPrice * 5 + anchorweedPrice * 5;
         greaterUndertowCostString = greaterUndertowCost.toString();
        greaterUndertowCostCopper = greaterUndertowCostString.charAt(greaterUndertowCostString.length-2) + greaterUndertowCostString.charAt(greaterUndertowCostString.length-1)
        greaterUndertowCostSilver = greaterUndertowCostString.charAt(greaterUndertowCostString.length-4) + greaterUndertowCostString.charAt(greaterUndertowCostString.length-3)
        if(greaterUndertowCostString.length == 5) {
          greaterUndertowCostGold = greaterUndertowCostString.charAt(0)
        } else if (greaterUndertowCostString.length == 6) {
          greaterUndertowCostGold = greaterUndertowCostString.charAt(0) + greaterUndertowCostString.charAt(1)
        } else if (greaterUndertowCostString.length == 7) {
          greaterUndertowCostGold = greaterUndertowCostString.charAt(0) + greaterUndertowCostString.charAt(1) + greaterUndertowCostString.charAt(2)
        } else {
            greaterUndertowCostGold = greaterUndertowCostString.charAt(0) + greaterUndertowCostString.charAt(1) + greaterUndertowCostString.charAt(2) + greaterUndertowCostString.charAt(3)
        }
        document.getElementById("greater-undertow-cost").innerHTML = `
        ${greaterUndertowCostGold} <img src="images/money-gold.gif"> ${greaterUndertowCostSilver} <img src="images/money-silver.gif"> ${greaterUndertowCostCopper} <img src="images/money-copper.gif">`             

        // Price calculation
         greaterUndertow = response.data.auctions.filter(function(auction){
            return auction.item.id === 168654
          });
          greaterUndertow.sort(function(a,b){
              return a.unit_price - b.unit_price
            })
         greaterUndertowPrice = greaterUndertow[0].unit_price;
         greaterUndertowPriceString = greaterUndertowPrice.toString();
        greaterUndertowPriceCopper = greaterUndertowPriceString.charAt(greaterUndertowPriceString.length-2) + greaterUndertowPriceString.charAt(greaterUndertowPriceString.length-1)
        greaterUndertowPriceSilver = greaterUndertowPriceString.charAt(greaterUndertowPriceString.length-4) + greaterUndertowPriceString.charAt(greaterUndertowPriceString.length-3)
        if(greaterUndertowPriceString.length == 5) {
          greaterUndertowPriceGold = greaterUndertowPriceString.charAt(0)
        } else if (greaterUndertowPriceString.length == 6) {
          greaterUndertowPriceGold = greaterUndertowPriceString.charAt(0) + greaterUndertowPriceString.charAt(1)
        } else if (greaterUndertowPriceString.length == 7) {
          greaterUndertowPriceGold = greaterUndertowPriceString.charAt(0) + greaterUndertowPriceString.charAt(1) + greaterUndertowPriceString.charAt(2)
        }
        document.getElementById("greater-undertow-price").innerHTML = `
        ${greaterUndertowPriceGold} <img src="images/money-gold.gif"> ${greaterUndertowPriceSilver} <img src="images/money-silver.gif"> ${greaterUndertowPriceCopper} <img src="images/money-copper.gif">`
        
      // Profit/Loss Calculation

       greaterUndertowProfit = Math.floor(greaterUndertowPrice * 1.4 - greaterUndertowCost);
       greaterUndertowProfitString = greaterUndertowProfit.toString();
      greaterUndertowProfitCopper = greaterUndertowProfitString.charAt(greaterUndertowProfitString.length-2) + greaterUndertowProfitString.charAt(greaterUndertowProfitString.length-1)
      greaterUndertowProfitSilver = greaterUndertowProfitString.charAt(greaterUndertowProfitString.length-4) + greaterUndertowProfitString.charAt(greaterUndertowProfitString.length-3)
        if(greaterUndertowProfitString.length == 5) {
          greaterUndertowProfitGold = greaterUndertowProfitString.charAt(0)
        } else if (greaterUndertowProfitString.length == 6) {
          greaterUndertowProfitGold = greaterUndertowProfitString.charAt(0) + greaterUndertowProfitString.charAt(1)
        } else if (greaterUndertowProfitString.length == 7) {
          greaterUndertowProfitGold = greaterUndertowProfitString.charAt(0) + greaterUndertowProfitString.charAt(1) + greaterUndertowProfitString.charAt(2)
        } else {
          greaterUndertowProfitGold = greaterUndertowProfitString.charAt(0) + greaterUndertowProfitString.charAt(1) + greaterUndertowProfitString.charAt(2) + greaterUndertowProfitString.charAt(3)
        }
        document.getElementById("greater-undertow-profit").innerHTML = `
        ${greaterUndertowProfitGold} <img src="images/money-gold.gif"> ${greaterUndertowProfitSilver} <img src="images/money-silver.gif"> ${greaterUndertowProfitCopper} <img src="images/money-copper.gif">`
        if(Math.sign(greaterUndertowProfit) == -1){
          document.getElementById("greater-undertow-profit").setAttribute("style", "background-color:red")
        } else {
          document.getElementById("greater-undertow-profit").setAttribute("style", "background-color:green")
        }

      // Greater Flask of the Vast Horizon
        // Cost calculation
         greaterHorizonCost = zinanthidPrice * 20 + starmossPrice * 5 + anchorweedPrice * 5;
         greaterHorizonCosttString = greaterHorizonCost.toString();
        greaterHorizonCostCopper = greaterHorizonCosttString.charAt(greaterHorizonCosttString.length-2) + greaterHorizonCosttString.charAt(greaterHorizonCosttString.length-1)
        greaterHorizonCostSilver = greaterHorizonCosttString.charAt(greaterHorizonCosttString.length-4) + greaterHorizonCosttString.charAt(greaterHorizonCosttString.length-3)
        if(greaterHorizonCosttString.length == 5) {
          greaterHorizonCostGold = greaterHorizonCosttString.charAt(0)
        } else if (greaterHorizonCosttString.length == 6) {
          greaterHorizonCostGold = greaterHorizonCosttString.charAt(0) + greaterHorizonCosttString.charAt(1)
        } else if (greaterHorizonCosttString.length == 7) {
          greaterHorizonCostGold = greaterHorizonCosttString.charAt(0) + greaterHorizonCosttString.charAt(1) + greaterHorizonCosttString.charAt(2)
        } else {
            greaterHorizonCostGold = greaterHorizonCosttString.charAt(0) + greaterHorizonCosttString.charAt(1) + greaterHorizonCosttString.charAt(2) + greaterHorizonCosttString.charAt(3)
        }
        document.getElementById("greater-horizon-cost").innerHTML = `
        ${greaterHorizonCostGold} <img src="images/money-gold.gif"> ${greaterHorizonCostSilver} <img src="images/money-silver.gif"> ${greaterHorizonCostCopper} <img src="images/money-copper.gif">`             

        // Price calculation
         greaterHorizon = response.data.auctions.filter(function(auction){
            return auction.item.id === 168653
          });
          greaterHorizon.sort(function(a,b){
              return a.unit_price - b.unit_price
            })
         greaterHorizonPrice = greaterHorizon[0].unit_price;
         greaterHorizonPriceString = greaterHorizonPrice.toString();
        greaterHorizonPriceCopper = greaterHorizonPriceString.charAt(greaterHorizonPriceString.length-2) + greaterHorizonPriceString.charAt(greaterHorizonPriceString.length-1)
        greaterHorizonPriceSilver = greaterHorizonPriceString.charAt(greaterHorizonPriceString.length-4) + greaterHorizonPriceString.charAt(greaterHorizonPriceString.length-3)
        if(greaterHorizonPriceString.length == 5) {
          greaterHorizonPriceGold = greaterHorizonPriceString.charAt(0)
        } else if (greaterHorizonPriceString.length == 6) {
          greaterHorizonPriceGold = greaterHorizonPriceString.charAt(0) + greaterHorizonPriceString.charAt(1)
        } else if (greaterHorizonPriceString.length == 7) {
          greaterHorizonPriceGold = greaterHorizonPriceString.charAt(0) + greaterHorizonPriceString.charAt(1) + greaterHorizonPriceString.charAt(2)
        }
        document.getElementById("greater-horizon-price").innerHTML = `
        ${greaterHorizonPriceGold} <img src="images/money-gold.gif"> ${greaterHorizonPriceSilver} <img src="images/money-silver.gif"> ${greaterHorizonPriceCopper} <img src="images/money-copper.gif">`
        
      // Profit/Loss Calculation

       greaterHorizonProfit = Math.floor(greaterHorizonPrice * 1.4 - greaterHorizonCost);
       greaterHorizonProfitString = greaterHorizonProfit.toString();
      greaterHorizonProfitCopper = greaterHorizonProfitString.charAt(greaterHorizonProfitString.length-2) + greaterHorizonProfitString.charAt(greaterHorizonProfitString.length-1)
      greaterHorizonProfitSilver = greaterHorizonProfitString.charAt(greaterHorizonProfitString.length-4) + greaterHorizonProfitString.charAt(greaterHorizonProfitString.length-3)
        if(greaterHorizonProfitString.length == 5) {
          greaterHorizonProfitGold = greaterHorizonProfitString.charAt(0)
        } else if (greaterHorizonProfitString.length == 6) {
          greaterHorizonProfitGold = greaterHorizonProfitString.charAt(0) + greaterHorizonProfitString.charAt(1)
        } else if (greaterHorizonProfitString.length == 7) {
          greaterHorizonProfitGold = greaterHorizonProfitString.charAt(0) + greaterHorizonProfitString.charAt(1) + greaterHorizonProfitString.charAt(2)
        } else {
          greaterHorizonProfitGold = greaterHorizonProfitString.charAt(0) + greaterHorizonProfitString.charAt(1) + greaterHorizonProfitString.charAt(2) + greaterHorizonProfitString.charAt(3)
        }
        document.getElementById("greater-horizon-profit").innerHTML = `
        ${greaterHorizonProfitGold} <img src="images/money-gold.gif"> ${greaterHorizonProfitSilver} <img src="images/money-silver.gif"> ${greaterHorizonProfitCopper} <img src="images/money-copper.gif">`
        if(Math.sign(greaterUndertowProfit) == -1){
          document.getElementById("greater-horizon-profit").setAttribute("style", "background-color:red")
        } else {
          document.getElementById("greater-horizon-profit").setAttribute("style", "background-color:green")
        }

        // Scrolls
        // War-Scroll of Intellect
        warscrollIntellectCost = lowestHerbPrice * 27;
        warscrollIntellectCostString = warscrollIntellectCost.toString();
        warscrollIntellectCostStringCopper = warscrollIntellectCostString.charAt(warscrollIntellectCostString.length-2) + warscrollIntellectCostString.charAt(warscrollIntellectCostString.length-1)
        warscrollIntellectCostStringSilver = warscrollIntellectCostString.charAt(warscrollIntellectCostString.length-4) + warscrollIntellectCostString.charAt(warscrollIntellectCostString.length-3)
       if(warscrollIntellectCostString.length == 5) {
        warscrollIntellectCostStringGold = warscrollIntellectCostString.charAt(0)
       } else if (warscrollIntellectCostString.length == 6) {
        warscrollIntellectCostStringGold = warscrollIntellectCostString.charAt(0) + warscrollIntellectCostString.charAt(1)
       } else if (warscrollIntellectCostString.length == 7) {
        warscrollIntellectCostStringGold = warscrollIntellectCostString.charAt(0) + warscrollIntellectCostString.charAt(1) + warscrollIntellectCostString.charAt(2)
       } else {
        warscrollIntellectCostStringGold = warscrollIntellectCostString.charAt(0) + warscrollIntellectCostString.charAt(1) + warscrollIntellectCostString.charAt(2) + warscrollIntellectCostString.charAt(3)
       }
       document.getElementById("warscroll-intellect-cost").innerHTML = `
       ${warscrollIntellectCostStringGold} <img src="images/money-gold.gif"> ${warscrollIntellectCostStringSilver} <img src="images/money-silver.gif"> ${warscrollIntellectCostStringCopper} <img src="images/money-copper.gif">`             

       // Price calculation
        warscrollIntellect = response.data.auctions.filter(function(auction){
           return auction.item.id === 158201
         });
         warscrollIntellect.sort(function(a,b){
             return a.unit_price - b.unit_price
           })
           warscrollIntellectPrice = warscrollIntellect[0].unit_price;
           warscrollIntellectPriceString = warscrollIntellectPrice.toString();
       warscrollIntellectPriceStringCopper = warscrollIntellectPriceString.charAt(warscrollIntellectPriceString.length-2) + warscrollIntellectPriceString.charAt(warscrollIntellectPriceString.length-1)
       warscrollIntellectPriceStringSilver = warscrollIntellectPriceString.charAt(warscrollIntellectPriceString.length-4) + warscrollIntellectPriceString.charAt(warscrollIntellectPriceString.length-3)
       if(warscrollIntellectPriceString.length == 5) {
        warscrollIntellectPriceStringGold = warscrollIntellectPriceString.charAt(0)
       } else if (warscrollIntellectPriceString.length == 6) {
        warscrollIntellectPriceStringGold = warscrollIntellectPriceString.charAt(0) + warscrollIntellectPriceString.charAt(1)
       } else if (warscrollIntellectPriceString.length == 7) {
        warscrollIntellectPriceStringGold = warscrollIntellectPriceString.charAt(0) + warscrollIntellectPriceString.charAt(1) + warscrollIntellectPriceString.charAt(2)
       }
       document.getElementById("warscroll-intellect-price").innerHTML = `
       ${warscrollIntellectPriceStringGold} <img src="images/money-gold.gif"> ${warscrollIntellectPriceStringSilver} <img src="images/money-silver.gif"> ${warscrollIntellectPriceStringCopper} <img src="images/money-copper.gif">`
       
     // Profit/Loss Calculation

      warscrollIntellectProfit = Math.floor(warscrollIntellectPrice - warscrollIntellectCost);
      warscrollIntellectProfitString = warscrollIntellectProfit.toString();
      warscrollIntellectProfitStringCopper = warscrollIntellectProfitString.charAt(warscrollIntellectProfitString.length-2) + warscrollIntellectProfitString.charAt(warscrollIntellectProfitString.length-1)
      warscrollIntellectProfitStringSilver = warscrollIntellectProfitString.charAt(warscrollIntellectProfitString.length-4) + warscrollIntellectProfitString.charAt(warscrollIntellectProfitString.length-3)
       if(warscrollIntellectProfitString.length == 5) {
        warscrollIntellectProfitStringGold = warscrollIntellectProfitString.charAt(0)
       } else if (warscrollIntellectProfitString.length == 6) {
        warscrollIntellectProfitStringGold = warscrollIntellectProfitString.charAt(0) + warscrollIntellectProfitString.charAt(1)
       } else if (warscrollIntellectProfitString.length == 7) {
        warscrollIntellectProfitStringGold = warscrollIntellectProfitString.charAt(0) + warscrollIntellectProfitString.charAt(1) + warscrollIntellectProfitString.charAt(2)
       } else {
        warscrollIntellectProfitStringGold = warscrollIntellectProfitString.charAt(0) + warscrollIntellectProfitString.charAt(1) + warscrollIntellectProfitString.charAt(2) + warscrollIntellectProfitString.charAt(3)
       }
       document.getElementById("warscroll-intellect-profit").innerHTML = `
       ${warscrollIntellectProfitStringGold} <img src="images/money-gold.gif"> ${warscrollIntellectProfitStringSilver} <img src="images/money-silver.gif"> ${warscrollIntellectProfitStringCopper} <img src="images/money-copper.gif">`
       if(Math.sign(warscrollIntellectProfit) == -1){
         document.getElementById("warscroll-intellect-profit").setAttribute("style", "background-color:red")
       } else {
         document.getElementById("warscroll-intellect-profit").setAttribute("style", "background-color:green")
       }

       // War-scroll of Fortitude
       warscrollFortitudeCost = lowestHerbPrice * 27;
       warscrollFortitudeCostString = warscrollFortitudeCost.toString();
       warscrollFortitudeCostStringCopper = warscrollFortitudeCostString.charAt(warscrollFortitudeCostString.length-2) + warscrollFortitudeCostString.charAt(warscrollFortitudeCostString.length-1)
       warscrollFortitudeCostStringSilver = warscrollFortitudeCostString.charAt(warscrollFortitudeCostString.length-4) + warscrollFortitudeCostString.charAt(warscrollFortitudeCostString.length-3)
      if(warscrollFortitudeCostString.length == 5) {
        warscrollFortitudeCostStringGold = warscrollFortitudeCostString.charAt(0)
      } else if (warscrollFortitudeCostString.length == 6) {
        warscrollFortitudeCostStringGold = warscrollFortitudeCostString.charAt(0) + warscrollFortitudeCostString.charAt(1)
      } else if (warscrollFortitudeCostString.length == 7) {
        warscrollFortitudeCostStringGold = warscrollFortitudeCostString.charAt(0) + warscrollFortitudeCostString.charAt(1) + warscrollFortitudeCostString.charAt(2)
      } else {
        warscrollFortitudeCostStringGold = warscrollFortitudeCostString.charAt(0) + warscrollFortitudeCostString.charAt(1) + warscrollFortitudeCostString.charAt(2) + warscrollFortitudeCostString.charAt(3)
      }
      document.getElementById("warscroll-fortitude-cost").innerHTML = `
      ${warscrollFortitudeCostStringGold} <img src="images/money-gold.gif"> ${warscrollFortitudeCostStringSilver} <img src="images/money-silver.gif"> ${warscrollFortitudeCostStringCopper} <img src="images/money-copper.gif">`             

      // Price calculation
       warscrollFortitude = response.data.auctions.filter(function(auction){
          return auction.item.id === 158204
        });
        warscrollFortitude.sort(function(a,b){
            return a.unit_price - b.unit_price
          })
          warscrollFortitudePrice = warscrollFortitude[0].unit_price;
          warscrollFortitudePriceString = warscrollFortitudePrice.toString();
          warscrollFortitudePriceStringCopper = warscrollFortitudePriceString.charAt(warscrollFortitudePriceString.length-2) + warscrollFortitudePriceString.charAt(warscrollFortitudePriceString.length-1)
          warscrollFortitudePriceStringSilver = warscrollFortitudePriceString.charAt(warscrollFortitudePriceString.length-4) + warscrollFortitudePriceString.charAt(warscrollFortitudePriceString.length-3)
      if(warscrollFortitudePriceString.length == 5) {
        warscrollFortitudePriceStringGold = warscrollFortitudePriceString.charAt(0)
      } else if (warscrollFortitudePriceString.length == 6) {
        warscrollFortitudePriceStringGold = warscrollFortitudePriceString.charAt(0) + warscrollFortitudePriceString.charAt(1)
      } else if (warscrollFortitudePriceString.length == 7) {
        warscrollFortitudePriceStringGold = warscrollFortitudePriceString.charAt(0) + warscrollFortitudePriceString.charAt(1) + warscrollFortitudePriceString.charAt(2)
      }
      document.getElementById("warscroll-fortitude-price").innerHTML = `
      ${warscrollFortitudePriceStringGold} <img src="images/money-gold.gif"> ${warscrollFortitudePriceStringSilver} <img src="images/money-silver.gif"> ${warscrollFortitudePriceStringCopper} <img src="images/money-copper.gif">`
      
    // Profit/Loss Calculation

     warscrollFortitudeProfit = Math.floor(warscrollFortitudePrice - warscrollFortitudeCost);
     warscrollFortitudeProfitString = warscrollFortitudeProfit.toString();
     warscrollFortitudeProfitStringCopper = warscrollFortitudeProfitString.charAt(warscrollFortitudeProfitString.length-2) + warscrollFortitudeProfitString.charAt(warscrollFortitudeProfitString.length-1)
     warscrollFortitudeProfitStringSilver = warscrollFortitudeProfitString.charAt(warscrollFortitudeProfitString.length-4) + warscrollFortitudeProfitString.charAt(warscrollFortitudeProfitString.length-3)
      if(warscrollFortitudeProfitString.length == 5) {
        warscrollFortitudeProfitStringGold = warscrollFortitudeProfitString.charAt(0)
      } else if (warscrollFortitudeProfitString.length == 6) {
        warscrollFortitudeProfitStringGold = warscrollFortitudeProfitString.charAt(0) + warscrollFortitudeProfitString.charAt(1)
      } else if (warscrollFortitudeProfitString.length == 7) {
        warscrollFortitudeProfitStringGold = warscrollFortitudeProfitString.charAt(0) + warscrollFortitudeProfitString.charAt(1) + warscrollFortitudeProfitString.charAt(2)
      } else {
        warscrollFortitudeProfitStringGold = warscrollFortitudeProfitString.charAt(0) + warscrollFortitudeProfitString.charAt(1) + warscrollFortitudeProfitString.charAt(2) + warscrollFortitudeProfitString.charAt(3)
      }
      document.getElementById("warscroll-fortitude-profit").innerHTML = `
      ${warscrollFortitudeProfitStringGold} <img src="images/money-gold.gif"> ${warscrollFortitudeProfitStringSilver} <img src="images/money-silver.gif"> ${warscrollFortitudeProfitStringCopper} <img src="images/money-copper.gif">`
      if(Math.sign(warscrollFortitudeProfit) == -1){
        document.getElementById("warscroll-fortitude-profit").setAttribute("style", "background-color:red")
      } else {
        document.getElementById("warscroll-fortitude-profit").setAttribute("style", "background-color:green")
      }

      // War-scroll of Battle Shout
      warscrollBattleshoutCost = lowestHerbPrice * 27;
      warscrollBattleshoutCostString = warscrollBattleshoutCost.toString();
      warscrollBattleshoutCostStringCopper = warscrollFortitudeCostString.charAt(warscrollFortitudeCostString.length-2) + warscrollFortitudeCostString.charAt(warscrollFortitudeCostString.length-1)
      warscrollBattleshoutCostStringSilver = warscrollFortitudeCostString.charAt(warscrollFortitudeCostString.length-4) + warscrollFortitudeCostString.charAt(warscrollFortitudeCostString.length-3)
     if(warscrollBattleshoutCostString.length == 5) {
        warscrollBattleshoutCostStringGold = warscrollBattleshoutCostString.charAt(0)
     } else if (warscrollBattleshoutCostString.length == 6) {
        warscrollBattleshoutCostStringGold = warscrollBattleshoutCostString.charAt(0) + warscrollBattleshoutCostString.charAt(1)
     } else if (warscrollBattleshoutCostString.length == 7) {
        warscrollBattleshoutCostStringGold = warscrollBattleshoutCostString.charAt(0) + warscrollBattleshoutCostString.charAt(1) + warscrollBattleshoutCostString.charAt(2)
     } else {
        warscrollBattleshoutCostStringGold = warscrollBattleshoutCostString.charAt(0) + warscrollBattleshoutCostString.charAt(1) + warscrollBattleshoutCostString.charAt(2) + warscrollBattleshoutCostString.charAt(3)
     }
     document.getElementById("warscroll-battleshout-cost").innerHTML = `
     ${warscrollBattleshoutCostStringGold} <img src="images/money-gold.gif"> ${warscrollBattleshoutCostStringSilver} <img src="images/money-silver.gif"> ${warscrollBattleshoutCostStringCopper} <img src="images/money-copper.gif">`             

     // Price calculation
      warscrollBattleshout = response.data.auctions.filter(function(auction){
         return auction.item.id === 158202
       });
       warscrollBattleshout.sort(function(a,b){
           return a.unit_price - b.unit_price
         })
         warscrollBattleshoutPrice = warscrollBattleshout[0].unit_price;
         warscrollBattleshoutPriceString = warscrollBattleshoutPrice.toString();
         warscrollBattleshoutPriceStringCopper = warscrollBattleshoutPriceString.charAt(warscrollBattleshoutPriceString.length-2) + warscrollBattleshoutPriceString.charAt(warscrollBattleshoutPriceString.length-1)
         warscrollBattleshoutPriceStringSilver = warscrollBattleshoutPriceString.charAt(warscrollBattleshoutPriceString.length-4) + warscrollBattleshoutPriceString.charAt(warscrollBattleshoutPriceString.length-3)
     if(warscrollBattleshoutPriceString.length == 5) {
        warscrollBattleshoutPriceStringGold = warscrollBattleshoutPriceString.charAt(0)
     } else if (warscrollBattleshoutPriceString.length == 6) {
        warscrollBattleshoutPriceStringGold = warscrollBattleshoutPriceString.charAt(0) + warscrollBattleshoutPriceString.charAt(1)
     } else if (warscrollBattleshoutPriceString.length == 7) {
        warscrollBattleshoutPriceStringGold = warscrollBattleshoutPriceString.charAt(0) + warscrollBattleshoutPriceString.charAt(1) + warscrollBattleshoutPriceString.charAt(2)
     }
     document.getElementById("warscroll-battleshout-price").innerHTML = `
     ${warscrollBattleshoutPriceStringGold} <img src="images/money-gold.gif"> ${warscrollBattleshoutPriceStringSilver} <img src="images/money-silver.gif"> ${warscrollBattleshoutPriceStringCopper} <img src="images/money-copper.gif">`
     
   // Profit/Loss Calculation

    warscrollBattleshoutProfit = Math.floor(warscrollBattleshoutPrice - warscrollBattleshoutCost);
    warscrollBattleshoutProfitString = warscrollBattleshoutProfit.toString();
    warscrollBattleshoutProfitStringCopper = warscrollBattleshoutProfitString.charAt(warscrollBattleshoutProfitString.length-2) + warscrollBattleshoutProfitString.charAt(warscrollBattleshoutProfitString.length-1)
    warscrollBattleshoutProfitStringSilver = warscrollBattleshoutProfitString.charAt(warscrollBattleshoutProfitString.length-4) + warscrollBattleshoutProfitString.charAt(warscrollBattleshoutProfitString.length-3)
     if(warscrollBattleshoutProfitString.length == 5) {
        warscrollBattleshoutProfitStringGold = warscrollBattleshoutProfitString.charAt(0)
     } else if (warscrollBattleshoutProfitString.length == 6) {
        warscrollBattleshoutProfitStringGold = warscrollBattleshoutProfitString.charAt(0) + warscrollBattleshoutProfitString.charAt(1)
     } else if (warscrollBattleshoutProfitString.length == 7) {
        warscrollBattleshoutProfitStringGold = warscrollBattleshoutProfitString.charAt(0) + warscrollBattleshoutProfitString.charAt(1) + warscrollBattleshoutProfitString.charAt(2)
     } else {
        warscrollBattleshoutProfitStringGold = warscrollBattleshoutProfitString.charAt(0) + warscrollBattleshoutProfitString.charAt(1) + warscrollBattleshoutProfitString.charAt(2) + warscrollBattleshoutProfitString.charAt(3)
     }
     document.getElementById("warscroll-battleshout-profit").innerHTML = `
     ${warscrollBattleshoutProfitStringGold} <img src="images/money-gold.gif"> ${warscrollBattleshoutProfitStringSilver} <img src="images/money-silver.gif"> ${warscrollBattleshoutProfitStringCopper} <img src="images/money-copper.gif">`
     if(Math.sign(warscrollFortitudeProfit) == -1){
       document.getElementById("warscroll-battleshout-profit").setAttribute("style", "background-color:red")
     } else {
       document.getElementById("warscroll-battleshout-profit").setAttribute("style", "background-color:green")
     }


        })
        .catch(function(error){
          console.log(error)
        });
  })
  .catch(function(error){
    console.log(error)
  })
}

document.getElementById("pullData").addEventListener("click", render)

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
  document.getElementById("potiontable").rows[0].cells[3].innerHTML = `Profit/Loss assuming procs (${this.value}x per craft)`;
  document.getElementById("flasktable").rows[0].cells[3].innerHTML = `Profit/Loss assuming procs (${this.value}x per craft)`;
  AbyssalHealingPotionProfit = Math.floor(AbyssalHealingPotionPrice * this.value - AbyssalHealingPotionCost);
        AbyssalHealingPotionProfitString = AbyssalHealingPotionProfit.toString();
        AbyssalHealingPotionProfitCopper = AbyssalHealingPotionProfitString.charAt(AbyssalHealingPotionProfitString.length-2) + AbyssalHealingPotionProfitString.charAt(AbyssalHealingPotionProfitString.length-1)
        AbyssalHealingPotionProfitSilver = AbyssalHealingPotionProfitString.charAt(AbyssalHealingPotionProfitString.length-4) + AbyssalHealingPotionProfitString.charAt(AbyssalHealingPotionProfitString.length-3)
            if(AbyssalHealingPotionProfitString.length == 5) {
              AbyssalHealingPotionProfitGold = AbyssalHealingPotionProfitString.charAt(0)
            } else if (AbyssalHealingPotionProfitString.length == 6) {
              AbyssalHealingPotionProfitGold = AbyssalHealingPotionProfitString.charAt(0) + AbyssalHealingPotionProfitString.charAt(1)
            } else if (AbyssalHealingPotionProfitString.length == 7) {
              AbyssalHealingPotionProfitGold = AbyssalHealingPotionProfitString.charAt(0) + AbyssalHealingPotionProfitString.charAt(1) + AbyssalHealingPotionProfitString.charAt(2)
            } else {
                AbyssalHealingPotionProfitGold = AbyssalHealingPotionProfitString.charAt(0) + AbyssalHealingPotionProfitString.charAt(1) + AbyssalHealingPotionProfitString.charAt(2) + AbyssalHealingPotionProfitString.charAt(3)  
            }
            document.getElementById("abyssal-healing-potion-profit").innerHTML = `
            ${AbyssalHealingPotionProfitGold} <img src="images/money-gold.gif"> ${AbyssalHealingPotionProfitSilver} <img src="images/money-silver.gif"> ${AbyssalHealingPotionProfitCopper} <img src="images/money-copper.gif">`
            if(Math.sign(AbyssalHealingPotionProfit) == -1){
              document.getElementById("abyssal-healing-potion-profit").setAttribute("style", "background-color:red")
            } else {
              document.getElementById("abyssal-healing-potion-profit").setAttribute("style", "background-color:green")
            };
//
empoweredProximityProfit = Math.floor(empoweredProximityPrice * this.value - empoweredProximiyCost);
               empoweredProximityProfitString = empoweredProximityProfit.toString();
              empoweredProximityProfitCopper = empoweredProximityProfitString.charAt(empoweredProximityProfitString.length-2) + empoweredProximityProfitString.charAt(empoweredProximityProfitString.length-1)
              empoweredProximityProfitSilver = empoweredProximityProfitString.charAt(empoweredProximityProfitString.length-4) + empoweredProximityProfitString.charAt(empoweredProximityProfitString.length-3)
                if(empoweredProximityProfitString.length == 5) {
                  empoweredProximityProfitGold = empoweredProximityProfitString.charAt(0)
                } else if (empoweredProximityProfitString.length == 6) {
                  empoweredProximityProfitGold = empoweredProximityProfitString.charAt(0) + empoweredProximityProfitString.charAt(1)
                } else if (empoweredProximityProfitString.length == 7) {
                  empoweredProximityProfitGold = empoweredProximityProfitString.charAt(0) + empoweredProximityProfitString.charAt(1) + empoweredProximityProfitString.charAt(2)
                } else {
                    empoweredProximityProfitGold = empoweredProximityProfitString.charAt(0) + empoweredProximityProfitString.charAt(1) + empoweredProximityProfitString.charAt(2) + empoweredProximityProfitString.charAt(3)   
                }
                document.getElementById("empowered-proximity-profit").innerHTML = `
                ${empoweredProximityProfitGold} <img src="images/money-gold.gif"> ${empoweredProximityProfitSilver} <img src="images/money-silver.gif"> ${empoweredProximityProfitCopper} <img src="images/money-copper.gif">`
                if(Math.sign(empoweredProximityProfit) == -1){
                  document.getElementById("empowered-proximity-profit").setAttribute("style", "background-color:red")
                } else {
                  document.getElementById("empowered-proximity-profit").setAttribute("style", "background-color:green")
                }
//
focusedResolveProfit = Math.floor(focusedResolvePrice * this.value - focusedResolveCost);
               focusedResolveProfitString = focusedResolveProfit.toString();
              focusedResolveProfitCopper = focusedResolveProfitString.charAt(focusedResolveProfitString.length-2) + focusedResolveProfitString.charAt(focusedResolveProfitString.length-1)
              focusedResolveProfitSilver = focusedResolveProfitString.charAt(focusedResolveProfitString.length-4) + focusedResolveProfitString.charAt(focusedResolveProfitString.length-3)
                if(focusedResolveProfitString.length == 5) {
                  focusedResolveProfitGold = focusedResolveProfitString.charAt(0)
                } else if (focusedResolveProfitString.length == 6) {
                  focusedResolveProfitGold = focusedResolveProfitString.charAt(0) + focusedResolveProfitString.charAt(1)
                } else if (focusedResolveProfitString.length == 7) {
                  focusedResolveProfitGold = focusedResolveProfitString.charAt(0) + focusedResolveProfitString.charAt(1) + focusedResolveProfitString.charAt(2)
                } else {
                    focusedResolveProfitGold = focusedResolveProfitString.charAt(0) + focusedResolveProfitString.charAt(1) + focusedResolveProfitString.charAt(2) + focusedResolveProfitString.charAt(3)  
                }
                document.getElementById("focused-resolve-profit").innerHTML = `
                ${focusedResolveProfitGold} <img src="images/money-gold.gif"> ${focusedResolveProfitSilver} <img src="images/money-silver.gif"> ${focusedResolveProfitCopper} <img src="images/money-copper.gif">`
                if(Math.sign(focusedResolveProfit) == -1){
                  document.getElementById("focused-resolve-profit").setAttribute("style", "background-color:red")
                } else {
                  document.getElementById("focused-resolve-profit").setAttribute("style", "background-color:green")
                }
//
unbridledFuryProfit = Math.floor(unbridledFuryPrice * this.value - unbridledFuryCost);
               unbridledFuryProfitString = unbridledFuryProfit.toString();
              unbridledFuryProfitCopper = unbridledFuryProfitString.charAt(unbridledFuryProfitString.length-2) + unbridledFuryProfitString.charAt(unbridledFuryProfitString.length-1)
              unbridledFuryProfitSilver = unbridledFuryProfitString.charAt(unbridledFuryProfitString.length-4) + unbridledFuryProfitString.charAt(unbridledFuryProfitString.length-3)
                if(unbridledFuryProfitString.length == 5) {
                  unbridledFuryProfitGold = unbridledFuryProfitString.charAt(0)
                } else if (unbridledFuryProfitString.length == 6) {
                  unbridledFuryProfitGold = unbridledFuryProfitString.charAt(0) + unbridledFuryProfitString.charAt(1)
                } else if (unbridledFuryProfitString.length == 7) {
                  unbridledFuryProfitGold = unbridledFuryProfitString.charAt(0) + unbridledFuryProfitString.charAt(1) + unbridledFuryProfitString.charAt(2)
                } else {
                    unbridledFuryProfitGold = unbridledFuryProfitString.charAt(0) + unbridledFuryProfitString.charAt(1) + unbridledFuryProfitString.charAt(2) +  unbridledFuryProfitString.charAt(3)  
                }
                document.getElementById("unbridled-fury-profit").innerHTML = `
                ${unbridledFuryProfitGold} <img src="images/money-gold.gif"> ${unbridledFuryProfitSilver} <img src="images/money-silver.gif"> ${unbridledFuryProfitCopper} <img src="images/money-copper.gif">`
                if(Math.sign(unbridledFuryProfit) == -1){
                  document.getElementById("unbridled-fury-profit").setAttribute("style", "background-color:red")
                } else {
                  document.getElementById("unbridled-fury-profit").setAttribute("style", "background-color:green")
                }
//
wildMendingProfit = Math.floor(wildMendingPrice * this.value - wildMendingCost);
               wildMendingProfitString = wildMendingProfit.toString();
              wildMendingProfitCopper = wildMendingProfitString.charAt(wildMendingProfitString.length-2) + wildMendingProfitString.charAt(wildMendingProfitString.length-1)
              wildMendingProfitSilver = wildMendingProfitString.charAt(wildMendingProfitString.length-4) + wildMendingProfitString.charAt(wildMendingProfitString.length-3)
                if(wildMendingProfitString.length == 5) {
                  wildMendingProfitGold = wildMendingProfitString.charAt(0)
                } else if (wildMendingProfitString.length == 6) {
                  wildMendingProfitGold = wildMendingProfitString.charAt(0) + wildMendingProfitString.charAt(1)
                } else if (wildMendingProfitString.length == 7) {
                  wildMendingProfitGold = wildMendingProfitString.charAt(0) + wildMendingProfitString.charAt(1) + wildMendingProfitString.charAt(2)
                } else {
                    wildMendingProfitGold = wildMendingProfitString.charAt(0) + wildMendingProfitString.charAt(1) + wildMendingProfitString.charAt(2) + wildMendingProfitString.charAt(3)
                }
                document.getElementById("wild-mending-profit").innerHTML = `
                ${wildMendingProfitGold} <img src="images/money-gold.gif"> ${wildMendingProfitSilver} <img src="images/money-silver.gif"> ${wildMendingProfitCopper} <img src="images/money-copper.gif">`
                if(Math.sign(wildMendingProfit) == -1){
                  document.getElementById("wild-mending-profit").setAttribute("style", "background-color:red")
                } else {
                  document.getElementById("wild-mending-profit").setAttribute("style", "background-color:green")
                }
//
superiorAgilityProfit = Math.floor(superiorAgilityPrice * this.value - superiorAgilityCost);
             superiorAgilityProfitString = superiorAgilityProfit.toString();
            superiorAgilityProfitCopper = superiorAgilityProfitString.charAt(superiorAgilityProfitString.length-2) + superiorAgilityProfitString.charAt(superiorAgilityProfitString.length-1)
            superiorAgilityProfitSilver = superiorAgilityProfitString.charAt(superiorAgilityProfitString.length-4) + superiorAgilityProfitString.charAt(superiorAgilityProfitString.length-3)
              if(superiorAgilityProfitString.length == 5) {
                superiorAgilityProfitGold = superiorAgilityProfitString.charAt(0)
              } else if (superiorAgilityProfitString.length == 6) {
                superiorAgilityProfitGold = superiorAgilityProfitString.charAt(0) + superiorAgilityProfitString.charAt(1)
              } else if (superiorAgilityProfitString.length == 7) {
                superiorAgilityProfitGold = superiorAgilityProfitString.charAt(0) + superiorAgilityProfitString.charAt(1) + superiorAgilityProfitString.charAt(2)
              } else {
                superiorAgilityProfitGold = superiorAgilityProfitString.charAt(0) + superiorAgilityProfitString.charAt(1) + superiorAgilityProfitString.charAt(2) + superiorAgilityProfitString.charAt(3)
              }
              document.getElementById("superior-agility-profit").innerHTML = `
              ${superiorAgilityProfitGold} <img src="images/money-gold.gif"> ${superiorAgilityProfitSilver} <img src="images/money-silver.gif"> ${superiorAgilityProfitCopper} <img src="images/money-copper.gif">`
              if(Math.sign(superiorAgilityProfit) == -1){
                document.getElementById("superior-agility-profit").setAttribute("style", "background-color:red")
              } else {
                document.getElementById("superior-agility-profit").setAttribute("style", "background-color:green")
              }
//
superiorIntellectProfit = Math.floor(superiorIntellectPrice * this.value - superiorIntellectCost);
             superiorIntellectProfitString = superiorIntellectProfit.toString();
            superiorIntellectProfitCopper = superiorIntellectProfitString.charAt(superiorIntellectProfitString.length-2) + superiorIntellectProfitString.charAt(superiorIntellectProfitString.length-1)
            superiorIntellectProfitSilver = superiorIntellectProfitString.charAt(superiorIntellectProfitString.length-4) + superiorIntellectProfitString.charAt(superiorIntellectProfitString.length-3)
              if(superiorIntellectProfitString.length == 5) {
                superiorIntellectProfitGold = superiorIntellectProfitString.charAt(0)
              } else if (superiorIntellectProfitString.length == 6) {
                superiorIntellectProfitGold = superiorIntellectProfitString.charAt(0) + superiorIntellectProfitString.charAt(1)
              } else if (superiorIntellectProfitString.length == 7) {
                superiorIntellectProfitGold = superiorIntellectProfitString.charAt(0) + superiorIntellectProfitString.charAt(1) + superiorIntellectProfitString.charAt(2)
              } else { 
                superiorIntellectProfitGold = superiorIntellectProfitString.charAt(0) + superiorIntellectProfitString.charAt(1) + superiorIntellectProfitString.charAt(2) + superiorIntellectProfitString.charAt(3)
              }
              document.getElementById("superior-intellect-profit").innerHTML = `
              ${superiorIntellectProfitGold} <img src="images/money-gold.gif"> ${superiorIntellectProfitSilver} <img src="images/money-silver.gif"> ${superiorIntellectProfitCopper} <img src="images/money-copper.gif">`
              if(Math.sign(superiorIntellectProfit) == -1){
                document.getElementById("superior-intellect-profit").setAttribute("style", "background-color:red")
              } else {
                document.getElementById("superior-intellect-profit").setAttribute("style", "background-color:green")
              }
//
superiorStaminaProfit = Math.floor(superiorStaminaPrice * this.value - superiorStaminaCost);
           superiorStaminaProfitString = superiorStaminaProfit.toString();
          superiorStaminaProfitCopper = superiorStaminaProfitString.charAt(superiorStaminaProfitString.length-2) + superiorStaminaProfitString.charAt(superiorStaminaProfitString.length-1)
          superiorStaminaProfitSilver = superiorStaminaProfitString.charAt(superiorStaminaProfitString.length-4) + superiorStaminaProfitString.charAt(superiorStaminaProfitString.length-3)
            if(superiorStaminaProfitString.length == 5) {
              superiorStaminaProfitGold = superiorStaminaProfitString.charAt(0)
            } else if (superiorStaminaProfitString.length == 6) {
              superiorStaminaProfitGold = superiorStaminaProfitString.charAt(0) + superiorStaminaProfitString.charAt(1)
            } else if (superiorStaminaProfitString.length == 7) {
              superiorStaminaProfitGold = superiorStaminaProfitString.charAt(0) + superiorStaminaProfitString.charAt(1) + superiorStaminaProfitString.charAt(2)
            } else {
                superiorStaminaProfitGold = superiorStaminaProfitString.charAt(0) + superiorStaminaProfitString.charAt(1) + superiorStaminaProfitString.charAt(2) + superiorStaminaProfitString.charAt(3)  
            }
            document.getElementById("superior-stamina-profit").innerHTML = `
            ${superiorStaminaProfitGold} <img src="images/money-gold.gif"> ${superiorStaminaProfitSilver} <img src="images/money-silver.gif"> ${superiorStaminaProfitCopper} <img src="images/money-copper.gif">`
            if(Math.sign(superiorStaminaProfit) == -1){
              document.getElementById("superior-stamina-profit").setAttribute("style", "background-color:red")
            } else {
              document.getElementById("superior-stamina-profit").setAttribute("style", "background-color:green")
            }

//
superiorStrengthProfit = Math.floor(superiorStrengthPrice * this.value - superiorStrengthCost);
         superiorStrengthProfitString = superiorStrengthProfit.toString();
        superiorStrengthProfitCopper = superiorStrengthProfitString.charAt(superiorStrengthProfitString.length-2) + superiorStrengthProfitString.charAt(superiorStrengthProfitString.length-1)
        superiorStrengthProfitSilver = superiorStrengthProfitString.charAt(superiorStrengthProfitString.length-4) + superiorStrengthProfitString.charAt(superiorStrengthProfitString.length-3)
        if(superiorStrengthProfitString.length == 5) {
            superiorStrengthProfitGold = superiorStrengthProfitString.charAt(0)
          } else if (superiorStrengthProfitString.length == 6) {
            superiorStrengthProfitGold = superiorStrengthProfitString.charAt(0) + superiorStrengthProfitString.charAt(1)
          } else if (superiorStrengthProfitString.length == 7) {
            superiorStrengthProfitGold = superiorStrengthProfitString.charAt(0) + superiorStrengthProfitString.charAt(1) + superiorStrengthProfitString.charAt(2)
          } else if (superiorStrengthProfitString.length == 8)  {
            superiorStrengthProfitGold = superiorStrengthProfitString.charAt(0) + superiorStrengthProfitString.charAt(1) + superiorStrengthProfitString.charAt(2) + superiorStrengthProfitString.charAt(3) 
          } else {
            superiorStrengthProfitGold = superiorStrengthProfitString.charAt(0) + superiorStrengthProfitString.charAt(1) + superiorStrengthProfitString.charAt(2) + superiorStrengthProfitString.charAt(3) + superiorStrengthProfitString.charAt(4)
          }
          document.getElementById("superior-strength-profit").innerHTML = `
          ${superiorStrengthProfitGold} <img src="images/money-gold.gif"> ${superiorStrengthProfitSilver} <img src="images/money-silver.gif"> ${superiorStrengthProfitCopper} <img src="images/money-copper.gif">`
          if(Math.sign(superiorStrengthProfit) == -1){
            document.getElementById("superior-strength-profit").setAttribute("style", "background-color:red")
          } else {
            document.getElementById("superior-strength-profit").setAttribute("style", "background-color:green")
          }

//
superiorSteelskinProfit = Math.floor(superiorSteelskinPrice * this.value - superiorSteelSkinCost);
       superiorSteelskinProfitString = superiorSteelskinProfit.toString();
      superiorSteelskinProfitCopper = superiorSteelskinProfitString.charAt(superiorSteelskinProfitString.length-2) + superiorSteelskinProfitString.charAt(superiorSteelskinProfitString.length-1)
      superiorSteelskinProfitSilver = superiorSteelskinProfitString.charAt(superiorSteelskinProfitString.length-4) + superiorSteelskinProfitString.charAt(superiorSteelskinProfitString.length-3)
        if(superiorSteelskinProfitString.length == 5) {
          superiorSteelskinProfitGold = superiorSteelskinProfitString.charAt(0)
        } else if (superiorSteelskinProfitString.length == 6) {
          superiorSteelskinProfitGold = superiorSteelskinProfitString.charAt(0) + superiorSteelskinProfitString.charAt(1)
        } else if (superiorSteelskinProfitString.length == 7) {
          superiorSteelskinProfitGold = superiorSteelskinProfitString.charAt(0) + superiorSteelskinProfitString.charAt(1) + superiorSteelskinProfitString.charAt(2)
        } else {
            superiorSteelskinProfitGold = superiorSteelskinProfitString.charAt(0) + superiorSteelskinProfitString.charAt(1) + superiorSteelskinProfitString.charAt(2) + superiorSteelskinProfitString.charAt(3)  
        }
        document.getElementById("superior-steelskin-profit").innerHTML = `
        ${superiorSteelskinProfitGold} <img src="images/money-gold.gif"> ${superiorSteelskinProfitSilver} <img src="images/money-silver.gif"> ${superiorSteelskinProfitCopper} <img src="images/money-copper.gif">`
        if(Math.sign(superiorSteelskinProfit) == -1){
          document.getElementById("superior-steelskin-profit").setAttribute("style", "background-color:red")
        } else {
          document.getElementById("superior-steelskin-profit").setAttribute("style", "background-color:green")
        }
//
replenishmentProfit = Math.floor(replenishmentPrice * this.value - replenishmentCost);
       replenishmentProfitString = replenishmentProfit.toString();
      replenishmentProfitCopper = replenishmentProfitString.charAt(replenishmentProfitString.length-2) + replenishmentProfitString.charAt(replenishmentProfitString.length-1)
      replenishmentProfitSilver = replenishmentProfitString.charAt(replenishmentProfitString.length-4) + replenishmentProfitString.charAt(replenishmentProfitString.length-3)
        if(replenishmentProfitString.length == 5) {
          replenishmentProfitGold = replenishmentProfitString.charAt(0)
        } else if (replenishmentProfitString.length == 6) {
          replenishmentProfitGold = replenishmentProfitString.charAt(0) + replenishmentProfitString.charAt(1)
        } else if (replenishmentProfitString.length == 7) {
          replenishmentProfitGold = replenishmentProfitString.charAt(0) + replenishmentProfitString.charAt(1) + replenishmentProfitString.charAt(2)
        } else {
          replenishmentProfitGold = replenishmentProfitString.charAt(0) + replenishmentProfitString.charAt(1) + replenishmentProfitString.charAt(2) + replenishmentProfitString.charAt(3)
        }
        document.getElementById("replenishment-profit").innerHTML = `
        ${replenishmentProfitGold} <img src="images/money-gold.gif"> ${replenishmentProfitSilver} <img src="images/money-silver.gif"> ${replenishmentProfitCopper} <img src="images/money-copper.gif">`
        if(Math.sign(replenishmentProfit) == -1){
          document.getElementById("replenishment-profit").setAttribute("style", "background-color:red")
        } else {
          document.getElementById("replenishment-profit").setAttribute("style", "background-color:green")
        }

//

greaterFathomsProfit = Math.floor(greaterFathomsPrice * this.value - greaterFathomsCost);
       greaterFathomsProfitString = greaterFathomsProfit.toString();
      greaterFathomsProfitCopper = greaterFathomsProfitString.charAt(greaterFathomsProfitString.length-2) + greaterFathomsProfitString.charAt(greaterFathomsProfitString.length-1)
      greaterFathomsProfitSilver = greaterFathomsProfitString.charAt(greaterFathomsProfitString.length-4) + greaterFathomsProfitString.charAt(greaterFathomsProfitString.length-3)
        if(greaterFathomsProfitString.length == 5) {
          greaterFathomsProfitGold = greaterFathomsProfitString.charAt(0)
        } else if (greaterFathomsProfitString.length == 6) {
          greaterFathomsProfitGold = greaterFathomsProfitString.charAt(0) + greaterFathomsProfitString.charAt(1)
        } else if (greaterFathomsProfitString.length == 7) {
          greaterFathomsProfitGold = greaterFathomsProfitString.charAt(0) + greaterFathomsProfitString.charAt(1) + greaterFathomsProfitString.charAt(2)
        } else {
          greaterFathomsProfitGold = greaterFathomsProfitString.charAt(0) + greaterFathomsProfitString.charAt(1) + greaterFathomsProfitString.charAt(2) + greaterFathomsProfitString.charAt(3)
        }
        document.getElementById("greater-fathoms-profit").innerHTML = `
        ${greaterFathomsProfitGold} <img src="images/money-gold.gif"> ${greaterFathomsProfitSilver} <img src="images/money-silver.gif"> ${greaterFathomsProfitCopper} <img src="images/money-copper.gif">`
        if(Math.sign(greaterFathomsProfit) == -1){
          document.getElementById("greater-fathoms-profit").setAttribute("style", "background-color:red")
        } else {
          document.getElementById("greater-fathoms-profit").setAttribute("style", "background-color:green")
        }

//

greaterCurrentsProfit = Math.floor(greaterCurrentsPrice * this.value - greaterCurrentsCost);
       greaterCurrentsProfitString = greaterCurrentsProfit.toString();
      greaterCurrentsProfitCopper = greaterCurrentsProfitString.charAt(greaterCurrentsProfitString.length-2) + greaterCurrentsProfitString.charAt(greaterCurrentsProfitString.length-1)
      greaterCurrentsProfitSilver = greaterCurrentsProfitString.charAt(greaterCurrentsProfitString.length-4) + greaterCurrentsProfitString.charAt(greaterCurrentsProfitString.length-3)
        if(greaterCurrentsProfitString.length == 5) {
          greaterCurrentsProfitGold = greaterCurrentsProfitString.charAt(0)
        } else if (greaterCurrentsProfitString.length == 6) {
          greaterCurrentsProfitGold = greaterCurrentsProfitString.charAt(0) + greaterCurrentsProfitString.charAt(1)
        } else if (greaterCurrentsProfitString.length == 7) {
          greaterCurrentsProfitGold = greaterCurrentsProfitString.charAt(0) + greaterCurrentsProfitString.charAt(1) + greaterCurrentsProfitString.charAt(2)
        } else {
          greaterCurrentsProfitGold = greaterCurrentsProfitString.charAt(0) + greaterCurrentsProfitString.charAt(1) + greaterCurrentsProfitString.charAt(2) + greaterCurrentsProfitString.charAt(3)
        }
        document.getElementById("greater-currents-profit").innerHTML = `
        ${greaterCurrentsProfitGold} <img src="images/money-gold.gif"> ${greaterCurrentsProfitSilver} <img src="images/money-silver.gif"> ${greaterCurrentsProfitCopper} <img src="images/money-copper.gif">`
        if(Math.sign(greaterCurrentsProfit) == -1){
          document.getElementById("greater-currents-profit").setAttribute("style", "background-color:red")
        } else {
          document.getElementById("greater-currents-profit").setAttribute("style", "background-color:green")
        }

//
greaterUndertowProfit = Math.floor(greaterUndertowPrice * this.value - greaterUndertowCost);
       greaterUndertowProfitString = greaterUndertowProfit.toString();
      greaterUndertowProfitCopper = greaterUndertowProfitString.charAt(greaterUndertowProfitString.length-2) + greaterUndertowProfitString.charAt(greaterUndertowProfitString.length-1)
      greaterUndertowProfitSilver = greaterUndertowProfitString.charAt(greaterUndertowProfitString.length-4) + greaterUndertowProfitString.charAt(greaterUndertowProfitString.length-3)
        if(greaterUndertowProfitString.length == 5) {
          greaterUndertowProfitGold = greaterUndertowProfitString.charAt(0)
        } else if (greaterUndertowProfitString.length == 6) {
          greaterUndertowProfitGold = greaterUndertowProfitString.charAt(0) + greaterUndertowProfitString.charAt(1)
        } else if (greaterUndertowProfitString.length == 7) {
          greaterUndertowProfitGold = greaterUndertowProfitString.charAt(0) + greaterUndertowProfitString.charAt(1) + greaterUndertowProfitString.charAt(2)
        } else {
          greaterUndertowProfitGold = greaterUndertowProfitString.charAt(0) + greaterUndertowProfitString.charAt(1) + greaterUndertowProfitString.charAt(2) + greaterUndertowProfitString.charAt(3)
        }
        document.getElementById("greater-undertow-profit").innerHTML = `
        ${greaterUndertowProfitGold} <img src="images/money-gold.gif"> ${greaterUndertowProfitSilver} <img src="images/money-silver.gif"> ${greaterUndertowProfitCopper} <img src="images/money-copper.gif">`
        if(Math.sign(greaterUndertowProfit) == -1){
          document.getElementById("greater-undertow-profit").setAttribute("style", "background-color:red")
        } else {
          document.getElementById("greater-undertow-profit").setAttribute("style", "background-color:green")
        }

//

greaterHorizonProfit = Math.floor(greaterHorizonPrice * this.value - greaterHorizonCost);
       greaterHorizonProfitString = greaterHorizonProfit.toString();
      greaterHorizonProfitCopper = greaterHorizonProfitString.charAt(greaterHorizonProfitString.length-2) + greaterHorizonProfitString.charAt(greaterHorizonProfitString.length-1)
      greaterHorizonProfitSilver = greaterHorizonProfitString.charAt(greaterHorizonProfitString.length-4) + greaterHorizonProfitString.charAt(greaterHorizonProfitString.length-3)
        if(greaterHorizonProfitString.length == 5) {
          greaterHorizonProfitGold = greaterHorizonProfitString.charAt(0)
        } else if (greaterHorizonProfitString.length == 6) {
          greaterHorizonProfitGold = greaterHorizonProfitString.charAt(0) + greaterHorizonProfitString.charAt(1)
        } else if (greaterHorizonProfitString.length == 7) {
          greaterHorizonProfitGold = greaterHorizonProfitString.charAt(0) + greaterHorizonProfitString.charAt(1) + greaterHorizonProfitString.charAt(2)
        } else {
          greaterHorizonProfitGold = greaterHorizonProfitString.charAt(0) + greaterHorizonProfitString.charAt(1) + greaterHorizonProfitString.charAt(2) + greaterHorizonProfitString.charAt(3)
        }
        document.getElementById("greater-horizon-profit").innerHTML = `
        ${greaterHorizonProfitGold} <img src="images/money-gold.gif"> ${greaterHorizonProfitSilver} <img src="images/money-silver.gif"> ${greaterHorizonProfitCopper} <img src="images/money-copper.gif">`
        if(Math.sign(greaterUndertowProfit) == -1){
          document.getElementById("greater-horizon-profit").setAttribute("style", "background-color:red")
        } else {
          document.getElementById("greater-horizon-profit").setAttribute("style", "background-color:green")
        }

}
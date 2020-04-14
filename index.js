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
            // Filter all auctions for auctions of Tidespray linen
            var tidespray = response.data.auctions.filter(function(auction){
              return auction.item.id === 152576
            });
            // Sort the auctions from lowest buyout price to highest buyout price
              tidespray.sort(function(a,b){
                return a.unit_price - b.unit_price
              })

            // Akunda's Bite
            var akundasBite = response.data.auctions.filter(function(auction){
                return auction.item.id === 152507
              });
                akundasBite.sort(function(a,b){
                  return a.unit_price - b.unit_price
                })
              var akundasBitePrice = akundasBite[0].unit_price;
              var akundasBiteString = akundasBitePrice.toString();
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
            var riverbud = response.data.auctions.filter(function(auction){
                return auction.item.id === 152505
              });
                riverbud.sort(function(a,b){
                  return a.unit_price - b.unit_price
                })
              var riverbudPrice = riverbud[0].unit_price;
              var riverbudString = riverbudPrice.toString();
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
            var seastalk = response.data.auctions.filter(function(auction){
                return auction.item.id === 152511
              });
                seastalk.sort(function(a,b){
                  return a.unit_price - b.unit_price
                })
              var seastalkPrice = seastalk[0].unit_price;
              var seastalkString = seastalkPrice.toString();
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
            var sirenspollen = response.data.auctions.filter(function(auction){
                return auction.item.id === 152509
              });
                sirenspollen.sort(function(a,b){
                  return a.unit_price - b.unit_price
                })
              var sirenspollenPrice = sirenspollen[0].unit_price;
              var sirenspollenString = sirenspollenPrice.toString();
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
            var starmoss = response.data.auctions.filter(function(auction){
                return auction.item.id === 152506
              });
                starmoss.sort(function(a,b){
                  return a.unit_price - b.unit_price
                })
              var starmossPrice = starmoss[0].unit_price;
              var starmossString = starmossPrice.toString();
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
            var winterskiss = response.data.auctions.filter(function(auction){
                return auction.item.id === 152508
              });
                winterskiss.sort(function(a,b){
                  return a.unit_price - b.unit_price
                })
              var winterskissPrice = winterskiss[0].unit_price;
              var winterskissString = winterskissPrice.toString();
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
            var zinanthid = response.data.auctions.filter(function(auction){
                return auction.item.id === 168487
              });
              zinanthid.sort(function(a,b){
                  return a.unit_price - b.unit_price
                })
              var zinanthidPrice = zinanthid[0].unit_price;
              var zinanthidString = zinanthidPrice.toString();
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
            var anchorweed = response.data.auctions.filter(function(auction){
                return auction.item.id === 152510
              });
              anchorweed.sort(function(a,b){
                  return a.unit_price - b.unit_price
                })
              var anchorweedPrice = anchorweed[0].unit_price;
              var anchorweedString = anchorweedPrice.toString();
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

            // Flasks and Potions
              // Abyssal Healing Potion
                // Cost calculation
            var AbyssalHealingPotionCost = zinanthidPrice * 2;
            var AbyssalHealingCostString = AbyssalHealingPotionCost.toString();
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
            var AbyssalHealingPotion = response.data.auctions.filter(function(auction){
                return auction.item.id === 169451
              });
              AbyssalHealingPotion.sort(function(a,b){
                  return a.unit_price - b.unit_price
                })
            var AbyssalHealingPotionPrice = AbyssalHealingPotion[0].unit_price;
            var AbyssalHealingString = AbyssalHealingPotionPrice.toString();
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
          var AbyssalHealingPotionProfit = AbyssalHealingPotionPrice * 1.4  - AbyssalHealingPotionCost;
          var AbyssalHealingPotionProfitString = AbyssalHealingPotionProfit.toString();
          AbyssalHealingPotionProfitCopper = AbyssalHealingPotionProfitString.charAt(AbyssalHealingPotionProfitString.length-2) + AbyssalHealingPotionProfitString.charAt(AbyssalHealingPotionProfitString.length-1)
          AbyssalHealingPotionProfitSilver = AbyssalHealingPotionProfitString.charAt(AbyssalHealingPotionProfitString.length-4) + AbyssalHealingPotionProfitString.charAt(AbyssalHealingPotionProfitString.length-3)
            if(AbyssalHealingPotionProfitString.length == 5) {
              AbyssalHealingPotionProfitGold = AbyssalHealingPotionProfitString.charAt(0)
            } else if (AbyssalHealingPotionProfitString.length == 6) {
              AbyssalHealingPotionProfitGold = AbyssalHealingPotionProfitString.charAt(0) + AbyssalHealingPotionProfitString.charAt(1)
            } else if (AbyssalHealingPotionProfitString.length == 7) {
              AbyssalHealingPotionProfitGold = AbyssalHealingPotionProfitString.charAt(0) + AbyssalHealingPotionProfitString.charAt(1) + AbyssalHealingPotionProfitString.charAt(2)
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
                var empoweredProximiyCost = zinanthidPrice * 8 + winterskissPrice * 3;
                var empoweredProximiyCostString = empoweredProximiyCost.toString();
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
                var empoweredProximity = response.data.auctions.filter(function(auction){
                    return auction.item.id === 168529
                  });
                  empoweredProximity.sort(function(a,b){
                      return a.unit_price - b.unit_price
                    })
                var empoweredProximityPrice = empoweredProximity[0].unit_price;
                var empoweredProximityString = empoweredProximityPrice.toString();
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
              var empoweredProximityProfit = empoweredProximityPrice *1.4 - empoweredProximiyCost;
              var empoweredProximityProfitString = empoweredProximityProfit.toString();
              empoweredProximityProfitCopper = empoweredProximityProfitString.charAt(empoweredProximityProfitString.length-2) + empoweredProximityProfitString.charAt(empoweredProximityProfitString.length-1)
              empoweredProximityProfitSilver = empoweredProximityProfitString.charAt(empoweredProximityProfitString.length-4) + empoweredProximityProfitString.charAt(empoweredProximityProfitString.length-3)
                if(empoweredProximityProfitString.length == 5) {
                  empoweredProximityProfitGold = empoweredProximityProfitString.charAt(0)
                } else if (empoweredProximityProfitString.length == 6) {
                  empoweredProximityProfitGold = empoweredProximityProfitString.charAt(0) + empoweredProximityProfitString.charAt(1)
                } else if (empoweredProximityProfitString.length == 7) {
                  empoweredProximityProfitGold = empoweredProximityProfitString.charAt(0) + empoweredProximityProfitString.charAt(1) + empoweredProximityProfitString.charAt(2)
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
                var focusedResolveCost = zinanthidPrice * 8 + winterskissPrice * 3;
                var focusedResolveCostString = focusedResolveCost.toString();
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
                var focusedResolve = response.data.auctions.filter(function(auction){
                    return auction.item.id === 168506
                  });
                  focusedResolve.sort(function(a,b){
                      return a.unit_price - b.unit_price
                    })
                var focusedResolvePrice = focusedResolve[0].unit_price;
                var focusedResolveString = focusedResolvePrice.toString();
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
              var focusedResolveProfit = focusedResolvePrice * 1.4 - focusedResolveCost;
              var focusedResolveProfitString = focusedResolveProfit.toString();
              focusedResolveProfitCopper = focusedResolveProfitString.charAt(focusedResolveProfitString.length-2) + focusedResolveProfitString.charAt(focusedResolveProfitString.length-1)
              focusedResolveProfitSilver = focusedResolveProfitString.charAt(focusedResolveProfitString.length-4) + focusedResolveProfitString.charAt(focusedResolveProfitString.length-3)
                if(focusedResolveProfitString.length == 5) {
                  focusedResolveProfitGold = focusedResolveProfitString.charAt(0)
                } else if (focusedResolveProfitString.length == 6) {
                  focusedResolveProfitGold = focusedResolveProfitString.charAt(0) + focusedResolveProfitString.charAt(1)
                } else if (focusedResolveProfitString.length == 7) {
                  focusedResolveProfitGold = focusedResolveProfitString.charAt(0) + focusedResolveProfitString.charAt(1) + focusedResolveProfitString.charAt(2)
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
                var unbridledFuryCost = zinanthidPrice * 6;
                var unbridledFuryCostString = unbridledFuryCost.toString();
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
                var unbridledFury = response.data.auctions.filter(function(auction){
                    return auction.item.id === 169299
                  });
                  unbridledFury.sort(function(a,b){
                      return a.unit_price - b.unit_price
                    })
                var unbridledFuryPrice = unbridledFury[0].unit_price;
                var unbridledFuryString = unbridledFuryPrice.toString();
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
              var unbridledFuryProfit = unbridledFuryPrice * 1.4 - unbridledFuryCost;
              var unbridledFuryProfitString = unbridledFuryProfit.toString();
              unbridledFuryProfitCopper = unbridledFuryProfitString.charAt(unbridledFuryProfitString.length-2) + unbridledFuryProfitString.charAt(unbridledFuryProfitString.length-1)
              unbridledFuryProfitSilver = unbridledFuryProfitString.charAt(unbridledFuryProfitString.length-4) + unbridledFuryProfitString.charAt(unbridledFuryProfitString.length-3)
                if(unbridledFuryProfitString.length == 5) {
                  unbridledFuryProfitGold = unbridledFuryProfitString.charAt(0)
                } else if (unbridledFuryProfitString.length == 6) {
                  unbridledFuryProfitGold = unbridledFuryProfitString.charAt(0) + unbridledFuryProfitString.charAt(1)
                } else if (unbridledFuryProfitString.length == 7) {
                  unbridledFuryProfitGold = unbridledFuryProfitString.charAt(0) + unbridledFuryProfitString.charAt(1) + unbridledFuryProfitString.charAt(2)
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
                var wildMendingCost = zinanthidPrice * 6;
                var wildMendingCostString = wildMendingCost.toString();
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
                var wildMending = response.data.auctions.filter(function(auction){
                    return auction.item.id === 169300
                  });
                  wildMending.sort(function(a,b){
                      return a.unit_price - b.unit_price
                    })
                var wildMendingPrice = wildMending[0].unit_price;
                var wildMendingString = wildMendingPrice.toString();
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
              var wildMendingProfit = wildMendingPrice * 1.4 - wildMendingCost;
              var wildMendingProfitString = wildMendingProfit.toString();
              wildMendingProfitCopper = wildMendingProfitString.charAt(wildMendingProfitString.length-2) + wildMendingProfitString.charAt(wildMendingProfitString.length-1)
              wildMendingProfitSilver = wildMendingProfitString.charAt(wildMendingProfitString.length-4) + wildMendingProfitString.charAt(wildMendingProfitString.length-3)
                if(wildMendingProfitString.length == 5) {
                  wildMendingProfitGold = wildMendingProfitString.charAt(0)
                } else if (wildMendingProfitString.length == 6) {
                  wildMendingProfitGold = wildMendingProfitString.charAt(0) + wildMendingProfitString.charAt(1)
                } else if (wildMendingProfitString.length == 7) {
                  wildMendingProfitGold = wildMendingProfitString.charAt(0) + wildMendingProfitString.charAt(1) + wildMendingProfitString.charAt(2)
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
              var superiorAgilityCost = zinanthidPrice * 8 + riverbudPrice * 3;
              var superiorAgilityCostString = superiorAgilityCost.toString();
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
              var superiorAgility = response.data.auctions.filter(function(auction){
                  return auction.item.id === 168489
                });
                superiorAgility.sort(function(a,b){
                    return a.unit_price - b.unit_price
                  })
              var superiorAgilityPrice = superiorAgility[0].unit_price;
              var superiorAgiliyString = superiorAgilityPrice.toString();
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
            var superiorAgilityProfit = superiorAgilityPrice * 1.4 - superiorAgilityCost;
            var superiorAgilityProfitString = superiorAgilityProfit.toString();
            superiorAgilityProfitCopper = superiorAgilityProfitString.charAt(superiorAgilityProfitString.length-2) + superiorAgilityProfitString.charAt(superiorAgilityProfitString.length-1)
            superiorAgilityProfitSilver = superiorAgilityProfitString.charAt(superiorAgilityProfitString.length-4) + superiorAgilityProfitString.charAt(superiorAgilityProfitString.length-3)
              if(superiorAgilityProfitString.length == 5) {
                superiorAgilityProfitGold = superiorAgilityProfitString.charAt(0)
              } else if (superiorAgilityProfitString.length == 6) {
                superiorAgilityProfitGold = superiorAgilityProfitString.charAt(0) + superiorAgilityProfitString.charAt(1)
              } else if (superiorAgilityProfitString.length == 7) {
                superiorAgilityProfitGold = superiorAgilityProfitString.charAt(0) + superiorAgilityProfitString.charAt(1) + superiorAgilityProfitString.charAt(2)
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
              var superiorIntellectCost = zinanthidPrice * 8 + sirenspollenPrice * 3;
              var superiorIntellectCostString = superiorIntellectCost.toString();
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
              var superiorIntellect = response.data.auctions.filter(function(auction){
                  return auction.item.id === 168498
                });
                superiorIntellect.sort(function(a,b){
                    return a.unit_price - b.unit_price
                  })
              var superiorIntellectPrice = superiorIntellect[0].unit_price;
              var superiorIntellectPriceString = superiorIntellectPrice.toString();
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
            var superiorIntellectProfit = superiorIntellectPrice * 1.4 - superiorIntellectCost;
            var superiorIntellectProfitString = superiorIntellectProfit.toString();
            superiorIntellectProfitCopper = superiorIntellectProfitString.charAt(superiorIntellectProfitString.length-2) + superiorIntellectProfitString.charAt(superiorIntellectProfitString.length-1)
            superiorIntellectProfitSilver = superiorIntellectProfitString.charAt(superiorIntellectProfitString.length-4) + superiorIntellectProfitString.charAt(superiorIntellectProfitString.length-3)
              if(superiorIntellectProfitString.length == 5) {
                superiorIntellectProfitGold = superiorIntellectProfitString.charAt(0)
              } else if (superiorIntellectProfitString.length == 6) {
                superiorIntellectProfitGold = superiorIntellectProfitString.charAt(0) + superiorIntellectProfitString.charAt(1)
              } else if (superiorIntellectProfitString.length == 7) {
                superiorIntellectProfitGold = superiorIntellectProfitString.charAt(0) + superiorIntellectProfitString.charAt(1) + superiorIntellectProfitString.charAt(2)
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
              var superiorIntellectCost = zinanthidPrice * 8 + sirenspollenPrice * 3;
              var superiorIntellectCostString = superiorIntellectCost.toString();
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
              var superiorIntellect = response.data.auctions.filter(function(auction){
                  return auction.item.id === 168498
                });
                superiorIntellect.sort(function(a,b){
                    return a.unit_price - b.unit_price
                  })
              var superiorIntellectPrice = superiorIntellect[0].unit_price;
              var superiorIntellectPriceString = superiorIntellectPrice.toString();
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
            var superiorIntellectProfit = superiorIntellectPrice * 1.4 - superiorIntellectCost;
            var superiorIntellectProfitString = superiorIntellectProfit.toString();
            superiorIntellectProfitCopper = superiorIntellectProfitString.charAt(superiorIntellectProfitString.length-2) + superiorIntellectProfitString.charAt(superiorIntellectProfitString.length-1)
            superiorIntellectProfitSilver = superiorIntellectProfitString.charAt(superiorIntellectProfitString.length-4) + superiorIntellectProfitString.charAt(superiorIntellectProfitString.length-3)
              if(superiorIntellectProfitString.length == 5) {
                superiorIntellectProfitGold = superiorIntellectProfitString.charAt(0)
              } else if (superiorIntellectProfitString.length == 6) {
                superiorIntellectProfitGold = superiorIntellectProfitString.charAt(0) + superiorIntellectProfitString.charAt(1)
              } else if (superiorIntellectProfitString.length == 7) {
                superiorIntellectProfitGold = superiorIntellectProfitString.charAt(0) + superiorIntellectProfitString.charAt(1) + superiorIntellectProfitString.charAt(2)
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
            var superiorStaminaCost = zinanthidPrice * 8 + seastalkPrice * 3;
            var superiorStaminaCostString = superiorStaminaCost.toString();
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
            var superiorStamina = response.data.auctions.filter(function(auction){
                return auction.item.id === 168499
              });
              superiorStamina.sort(function(a,b){
                  return a.unit_price - b.unit_price
                })
            var superiorStaminaPrice = superiorStamina[0].unit_price;
            var superiorStaminaPriceString = superiorStaminaPrice.toString();
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
          var superiorStaminaProfit = superiorStaminaPrice * 1.4 - superiorStaminaCost;
          var superiorStaminaProfitString = superiorStaminaProfit.toString();
          superiorStaminaProfitCopper = superiorStaminaProfitString.charAt(superiorStaminaProfitString.length-2) + superiorStaminaProfitString.charAt(superiorStaminaProfitString.length-1)
          superiorStaminaProfitSilver = superiorStaminaProfitString.charAt(superiorStaminaProfitString.length-4) + superiorStaminaProfitString.charAt(superiorStaminaProfitString.length-3)
            if(superiorStaminaProfitString.length == 5) {
              superiorStaminaProfitGold = superiorStaminaProfitString.charAt(0)
            } else if (superiorStaminaProfitString.length == 6) {
              superiorStaminaProfitGold = superiorStaminaProfitString.charAt(0) + superiorStaminaProfitString.charAt(1)
            } else if (superiorStaminaProfitString.length == 7) {
              superiorStaminaProfitGold = superiorStaminaProfitString.charAt(0) + superiorStaminaProfitString.charAt(1) + superiorStaminaProfitString.charAt(2)
            }
            document.getElementById("superior-stamina-profit").innerHTML = `
            ${superiorStaminaProfitGold} <img src="images/money-gold.gif"> ${superiorStaminaProfitSilver} <img src="images/money-silver.gif"> ${superiorStaminaProfitCopper} <img src="images/money-copper.gif">`
            if(Math.sign(superiorStaminaProfit) == -1){
              document.getElementById("superior-stamina-profit").setAttribute("style", "background-color:red")
            } else {
              document.getElementById("superior-stamina-profit").setAttribute("style", "background-color:green")
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
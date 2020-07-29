var db = require("../models");
const food = require("../models/food");
const request = require("request");
// const appId = process.env.APP_ID;
// const appKey = process.env.APP_KEY;


/* ----------------------- all food from a restaurant ----------------------- */
module.exports = function(app) {
    app.get("/api/food", function(req, res) {
    db.Food.findAll({
        include: [db.Restaurant]
    }).then(function(trackFood) {
        res.json(trackFood);
    })
    .catch(function(err){
        res.json(err);
    });
    });

    // since we are creating the meals ? do we need req.params.meals???????????????????
    // This is not coming from the API server
/* ------------------------------- Back End server requesting the external API for data ------------------------------ */
app.get("/api/nutrition/:input/:meal/:RestaurantId", function(req, res){
    const userInput = req.params.input;
    const userMeal = req.params.meal;
    const resId = req.params.RestaurantId;
    // https://api.edamam.com/api/nutrition-data?app_id=7a57ac67&app_key=8868f05120bf80af87dfd7844e4d4466&ingr=1%20large%20apple
    const queryURL = `https://api.edamam.com/api/nutrition-data?app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}&ingr=${userInput}`;
    var options = {
     'method': 'GET',
    'url': queryURL ,
    'headers': {
        'Cookie': 'route=3fb21b3a330e18479587acfee3ee1f11'
    }
    
    };
    request(options, function (error, response) {
        var responseBody=JSON.parse(response.body);
        if (error) throw new Error(error);
        console.log(responseBody,"responseBody");
        let nutrients=responseBody.totalNutrients ;
        console.log(nutrients, "nutrients");
        let carbohydrates = nutrients.CHOCDF.quantity ? nutrients.CHOCDF.quantity: 0;
        console.log(carbohydrates, "carbohydrates");
        let totalFibers=nutrients.FIBTG.quantity ? nutrients.FIBTG.quantity: 0;
        console.log(totalFibers,"totalfibers");

        // const netCarbs = responseBody.totalNutrients ;
        let netCarbs =parseInt((carbohydrates)-(totalFibers)).toFixed(1);
        console.log(netCarbs,"netCarbs");
        var dbItem = {
            // add restaurant function
            RestaurantId: resId,
            meal:userMeal,
            carbs:nutrients && carbohydrates,
            fiber:nutrients && totalFibers,
            netCarbs:netCarbs
        };
        console.log(dbItem);
        // ────────────────────────────────────────────────────────────────────────────────
        // insert into db you got from the API
        db.Food.create(dbItem)
            .then(function(dbResponse){
                console.log("did we get here");
                res.json(responseBody);
        })
        .catch(function(err){
            res.json(err);
        });
    });
    
});

};






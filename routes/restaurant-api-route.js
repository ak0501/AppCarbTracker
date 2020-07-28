var db = require("../models");
const restaurant = require("../models/restaurant");

// ────────────────────────────────────────────── GET ALL RESTAURANTS FROM DB ─────
module.exports = function(app) {
    app.get("/api/restaurant", function(req, res) {
      db.Restaurant.findAll({
        // order:
        // ['name','DESC'],
        
        // include: [db.Food]
      }).then(function(results) {
        res.json(results);
      })
      .catch(function(err){
          res.json(err);
      });
    });

/* ---------------------- get data from one restaurant ---------------------- */
// app.get("/api/restaurant/:id",function(req,res){
// db.Restaurant.findOne({where:{
//   id:req.params.id
// },
// include:[db.Food]
// }).then(function(trackFood){
//   res.json(trackFood);
// })
// .catch(function(err){
//   res.json(err);
// });
// });

/* -------------------------- create new restaurant ------------------------- */

    app.post("/api/restaurant", function(req, res) {
        db.Restaurant.create(req.body).then(function(trackFood) {
          res.json(trackFood);
        })
        .catch(function(err){
          res.json(err);
      });  
    });

// /* ----------------------------- Edit Restaurant ---------------------------- */

//       app.put("/api/restaurant", function(req, res) {
//         db.Restaurant.update(
//           req.body,
//           {
//             where: {
//               id: req.body.id
//             }
//           }).then(function(track) {
//           res.json(trackFood);
//         })
//         .catch(function(err){
//             res.json(err);
//         });
//       });

// /* --------------------------- delete restaurant --------------------------- */

//       app.delete("/api/restaurant/:id", function(req, res) {
//         db.Restaurant.destroy({
//           where:{
//               id:req.params.id
//           }
//         }).then(function(trackFood) {
//           res.json(trackFood);
//         })
//         .catch(function(err){
//             res.json(err);
//         });
//       });
    };
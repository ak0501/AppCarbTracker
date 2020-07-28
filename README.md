<<<<<<< HEAD
# Scot_Avi_CarbTracker
get all the restaurants--names, id --- sort them alphabetically
 fetch(api/restaurants)
 => my server processes this
 => direct to db.Restaurants.findAll({order:[
     ['name', 'ASC || DESC']
 ]})
=> data in the form of an array

loop over data to create a drop down (selectors)
    <option value=${restarant.name} data-rest-id=${restaruant.id}>


**** ALREADY COMPLETED BELOW ****
i select one and fill out the rest of form
fetch(post, /api/restuarants)
    db.Food.create(req.body).then(function(data) {
        yay we were succesful
    }).catch(function(err) {
        boo your insert failed.
    });
=======
# AppCarbTracker
>>>>>>> 2a08b410f623985dd6ec9cd4c0e23c758ec77e49


const $restaurant = $("#restaurantBox");
const $meal = $("#mealBox");
const $analyzeBtn = $("#analyzeAction");
// const $restName =$("#viewBy");
// const $nBtn = $(".new-note");
// const $noteList = $(".list-container .list-group");
// Font end calling to back end /

const getRestaurant = () => {
  return $.ajax({
    url: "/api/restaurant",
    method: "GET",
  })
  .then((response)=>{
    $(document).ready(function(){
      var x, txt ="";
      var restaurantName = response;
      for (x in restaurantName){
        txt +=restaurantName[x] + " ";
      }
      var selectElem =$("#mySelect");
      $.each(restaurantName, function(index, value){
        $("<option/>", {
          id: value.id,
          text: value.name
        })
        .appendTo(selectElem);
    });
    });

// const getRestaurant = () => {
//   return $.ajax({
//     url: "/api/restaurant",
//     method: "GET",
//   })

//   .then((response)=>{
//   Object.values(response).forEach(value=>{
  

//    // ────────────────────────────────────────────────────────────────────────────────

  
//     $.each(response, function(name,value) {
//       // $.each(this, function(name,value) {
//           console.log(`${name} = ${value}`);

//           $restName.append($('<option></option>').val(name).html(value));

//         });
     

// ────────────────────────────────────────────────────────────────────────────────

  });
  

  // $("#viewBy").append(value.name);
// ────────────────────────────────────────────────────────────────────────────────

//    
//   });
// // ─────────────────────────────────────────────────────────────────
// this.$('select#viewBy').append('<option>response</option>');



    
 };


  
  // });

$analyzeBtn.on("click",function(){
  var nutrition=$("#analyzeInput").val();
  var meal = $("#mealBox").val();
  var restaurantId = $("#mySelect option:selected").attr("id");  
  console.log("foonut", nutrition);
  console.log("meal", meal);
  console.log("resname", restaurantId);
  return $.ajax({
    url: "/api/nutrition/" + nutrition + "/"+ meal + "/" + restaurantId,
    method: "GET",
  })
  // When API call comes back from the backend 
  .then((api_nutrition)=>{
    let $tr=$("<tr>");
    let $tdQty=$("<td>");
    // let $tdUnit=$("<td>");
    // let $tdFood=$("<td>");
    let $tdCarbs=$("<td>");
    let $tdFiber=$("<td>");
    let $tdNetCarbs=$("<td>");
    $tdQty.text(api_nutrition.totalWeight);
    $tr.append($tdQty);
    $("tbody").append($tr);
    // $tdFood.text(api_nutrition.);
    // ─────────────────────────────────────────────────────────────────
  let totalCarbs=(api_nutrition.totalNutrients.CHOCDF.quantity).toFixed(1);
    $tdCarbs.text(totalCarbs);
    $tr.append($tdCarbs);
    $("tbody").append($tr);
    // ─────────────────────────────────────────────────────────────────

    let totalFiber =(api_nutrition.totalNutrients.FIBTG.quantity).toFixed(1);
    $tdFiber.text(totalFiber);
    $tr.append($tdFiber);
    $("tbody").append($tr);
// ────────────────────────────────────────────────────────────────────────────────
    let netCarbs = (totalCarbs - totalFiber);
    console.log(netCarbs);
    $tdNetCarbs.text(netCarbs);
    $tr.append($tdNetCarbs);
    $("tbody").append($tr);

  });

});



// // A function for getting all the restaurants + meals + nutrition data from the db

// const getMeals = () => {
//   return $.ajax({
//     url: "/api/food",
//     method: "GET",
//   });
// };
// ────────────────────────────────────────────────────────────────────────────────



// // A function for saving a note to the db
// const saveMeal = (meal) => {
//   return $.ajax({
//     url: "/api/food",
//     data: note,
//     method: "POST",
//   });
// };
// const saveRestaurant = (restaurant) => {
//   return $.ajax({
//     url: "/api/restaurant",
//     data: note,
//     method: "POST",
//   });
// };


// A function for deleting a note from the db
// const deleteMeal = (id) => {
//   return $.ajax({
//     url: "api/food/" + id,
//     method: "DELETE",
//   });
// };
// const deleteRestaurant = (id) => {
//   return $.ajax({
//     url: "api/restaurant/" + id,
//     method: "DELETE",
//   });
// };
// // ────────────────────────────────────────────────────────────────────────────────

getRestaurant();



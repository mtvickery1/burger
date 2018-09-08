$(function () {

  // Devour burger
  $(".devour-button").on("click", function (event) {
    event.preventDefault();
    console.log("devour");
    var id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: { id: id }
    }).then(function () {
      console.log("Devouring burger id " + id);
      location.reload();
    });
  });

  // Add burger
  $("#submit-form").on("submit", function (event) {
    event.preventDefault();

    var burger = $("#burger-form").val().trim();

    $.ajax("/api/burgers", {
      type: "POST",
      data: { name: burger }
    }).then(function () {
      console.log("Adding burger " + burger);
      location.reload();
    });
  });

});
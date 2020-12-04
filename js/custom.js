$("#navb-ham").click(() => {
  let status = $("#navb-ham").attr("class");
  if (status === "fa fa-bars") {
    $("#navb-ham").attr("class", "fa fa-times");
    $(".navb").css("display", "block");
  } else {
    $(".navb").css("display", "none");
    $("#navb-ham").attr("class", "fa fa-bars");
  }
});

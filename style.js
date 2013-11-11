$(document).ready(function() {
  $("#style_editor input:eq(3)").on("click", function(event){
    event.preventDefault();
    console.log("bing!")

    var first_box = $("#style_editor input:eq(0)").val()
    console.log("This is first_box:")
    console.log(first_box)
    var second_box = $("#style_editor input:eq(1)").val()
    var third_box = $("#style_editor input:eq(2)").val()

    $(first_box).css(second_box, third_box)

  });

  // Shorthand for document ready
  // $("selector")function(){
  //   // your code goes here.
  // });



});

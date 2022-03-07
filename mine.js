$(document).ready(function () {
  $(function () {
    setInterval(function () {
      let counter = parseInt($(".time").html());

      if (counter !== 5) {
        $(".time").html(counter + 1);
        
      } else if ((counter = 5)) {
        $(".title").fadeToggle();
        $(".time").text((counter = "0.00"));
      }
    }, 1000);
  });
});

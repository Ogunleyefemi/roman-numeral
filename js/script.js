function convert(num) { 
  if(num < 1)
  { return "";}
  if(num >= 1000)
  { return "M" + convert(num - 1000);}
  if(num >= 500){ return "D" + convert(num - 500);}
  if(num >= 100){ return "C" + convert(num - 100);}
  if(num >= 50){ return "L" + convert(num - 50);}
  if(num >= 10){ return "X" + convert(num - 10);}
  if(num >= 5){ return "V" + convert(num - 5);}
  if(num >= 1){ return "I" + convert(num - 1);} 
  return convert(num);
  };
  // console.log(convert(num));

// UI LOGIC
$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
      const value = $("#input").val();
       const show  = convert(value);
      $("#result").html(show);
    });
  });





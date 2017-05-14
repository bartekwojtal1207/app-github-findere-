$(document).ready(function(){
  var input_search = $(".input_search");
  var panel_result = $(".search_result");


  input_search.on("keyup",function(e){
    let value_input = e.target.value;
    var counter = input_search.val().length;
    check_length(counter);

    $.ajax({
      url: "https://api.github.com/search/repositories?q=" + value_input+"&page=1&per_page=10",
      type : "get"
      }).done(function(repositories){
        let x = repositories.items[0];
          if(typeof x == "undefined") {
            console.log('nie ma ');
            panel_result.html("szukaj");
          }else{
            console.log(x);
            panel_result.html(x.name)
            console.log('jest');
          }
        console.log("done");
      }).fail(function(error){
        console.log("fail");
      });
  });

  function check_length(counter){
    if (counter <=3 ) {
    };
  };

});

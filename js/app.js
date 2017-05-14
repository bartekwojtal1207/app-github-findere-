$(document).ready(function(){
  var input_search = $(".input_search");

  input_search.on("keyup",function(e){
    let value_input = e.target.value;
    //console.log(value_input);
    var counter = input_search.val().length;
    check_length(counter);

    $.ajax({
    //  url: "https://api.github.com/users/"+value_input
      url: "https://api.github.com/search/repositories?q=" + value_input+"&page=1&per_page=10",
      type : "get"
      // https://api.github.com/search/repositories?q=topic:ruby+topic:rails

    }).done(function(repositories){
        console.log(repositories.items[0]);
        console.log("done");
    });

    console.log("fail");
  });




  function check_length(counter){
    if (counter <=3 ) {
    //  console.log('za malo literek');

    };
  };



});

$(document).ready(function(){
  var input_search = $(".input_search");
  var panel_result = $(".search_result");


  input_search.on("keyup",function(e){
    let value_input = e.target.value;
    var counter = input_search.val().length;

    $.ajax({
      url: "https://api.github.com/search/repositories?q=" + value_input+"&page=1&per_page=10",
      type : "get",
      data : {
        client_id : "6be82356726ebd3a4b7f",
        client_secret : "8b52d99f3e5af6a5b5f11bae8179e612b8c6ec14"
      }
      }).done(function(repositories){
        let repo_item = repositories.items;

        if (counter <4 ) {
          $(".list").children().remove();
          $("h3").css("display","block");
          $("h4").css("display","none");
          $("h5").css("display","none");
        }else{
          $("h3").css("display","none");
          $("h4").css("display","none");
          $("h5").css("display","block");
          serch_repo(repo_item);
        }
          console.log(repo_item.length);
          console.log("done");
      }).fail(function(error){
        console.log("fail");
      });
  });// end of function with keyup



//function with valid to input search


  function serch_repo(repo_item,counter){
    if(typeof repo_item == "undefined") {
      console.log('nie ma ');
      $("h3").css("display","none");
      $("h4").css("display","block");
      $("h5").css("display","none");
      }else if (repo_item.length <1 ) {
        $(".list").html("<h5>result : 0 !</h5>");
        console.log('nie ma  : brak wyniku');
        $("h3").css("display","none");
        $("h4").css("display","none");
        $("h5").css("display","block");
      }else{
        $(".list").html("<h4>Resluts:</h4>");
        console.log('jest ');
        $("h3").css("display","none");
        $("h4").css("display","block");
        $("h5").css("display","none");
          for (var i = 0; i < repo_item.length; i++) {
            console.log(repo_item[i]);
            var new_li = $("<li>"+repo_item[i].name+"</li>");
            console.log(new_li);
            $(".list").append(new_li);
          }/// end pf loop
      }// end of else
  };// end of function


});

$(document).ready(function(){
  var input_search = $(".input_search");
  var btn = $("#search");
  var panel_result = $(".search_result");


  btn.on("click",function(e){
    e.preventDefault();
    let value_input = input_search.val();
    var counter = input_search.val().length;

    $.ajax({
      url: "https://api.github.com/search/repositories?q=" + value_input+"&page=1&per_page=10",
      type : "get",
      data : {
        client_id : "6be82356726ebd3a4b7f",
        client_secret : "8b52d99f3e5af6a5b5f11bae8179e612b8c6ec14"
      }
    }).done(function(repositories){//conect
        let repo_item = repositories.items;
        if (counter <4 ) {// if symbol < 4
          $(".list").children().remove();
          $(".waring_title").fadeIn(1000);// show message
        }else{// if not
          $(".warnig_title").fadeOut(200);
          serch_repo(repo_item); // run function search
        }
          console.log("done");
      }).fail(function(error){
        console.log("fail");
      });
  });// end of function with keyup



//function with valid to input search


  function serch_repo(repo_item,counter){
    if(typeof repo_item == "undefined") { // if repo undefined
      $(".waring_title").css("display","none");
      $(".no_result_title").fadeIn(1000);
    }else if (repo_item.length <1 ) { // if repo not found
          $(".list").children().remove();
          $(".waring_title").fadeOut(200);
          $(".no_result_title").fadeIn(1000); //show message
      }else{
        $(".list").html(""); //clear list
        $(".waring_title").fadeOut(200);
        $(".no_result_title").fadeOut(200);  // hide message
          for (var i = 0; i < repo_item.length; i++) {
            var rep_name = $("<h3 class='name_repo_title'>"+repo_item[i].name+"</h6>");
            var rep_full_name = $("<p class='full_name_repo_title'>"+repo_item[i].full_name+"</p>");
            var new_img = $("<img class='avatar' src="+repo_item[i].owner.avatar_url+"/>");
            var new_li = $("<li>");
            var new_link = $("<a href="+repo_item[i].owner.html_url+"/>");
            var container_result_li = $("<div class='big_link'>");
          console.log(repo_item[i]);
           $(".list").append(new_li);
            $(new_li).append(new_link);
            $(new_link).append(container_result_li);
              $(container_result_li).append(new_img);
              $(container_result_li).append(rep_name);
              $(container_result_li).append(rep_full_name);
          //  $(new_link).append(rep_name);
            //$(new_link).append(rep_full_name);
            // $(new_li).append(new_img);
            // $(new_li).append(rep_name);
            // $(new_li).append(rep_full_name);

          }/// end pf loop
      }// end of else
  };// end of function


});

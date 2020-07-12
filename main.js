//javascript, jQuery

function getData (){

    var input = $("#search").val()

var xhr = $.get("http://api.giphy.com/v1/gifs/search?q="+input+"&api_key=V8pnrIcD23BbBA4sY0Hv480QXEoHk6YG&limit=30");

xhr.done(function(response) { 
    
    console.log("success got data", response);

var gifs = response.data

for (i in gifs)
{
 $(".container").append("<img src='"+gifs[i].images.original.url+"'/>")

}
    });

}
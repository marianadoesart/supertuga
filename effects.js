$(document).ready(function () {
    
    
      $("#myModal").modal("show");

     
   function showSidebar(){
  $("#nav").toggle("slow");
};
function toggleExpand(){
  if($("#content").css("margin-left")=="0px")
    $("#content").animate({"margin-left":'-85px'},300);
  else
    $("#content").animate({"margin-left":'0px'},300);
};

$(".logo,#opener").click(function(){
  showSidebar();
  toggleExpand();
});
    });

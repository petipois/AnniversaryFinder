document.getElementById("anniversary").max = new Date().getFullYear()-1;
document.getElementById("anniversary").min = new Date().getFullYear()-60;

$("#findGift").click(function(event){
    event.preventDefault();
    $('.alert').hide();

    if($("#anniversary").val() !="")
    {
        var a = $("#anniversary").val();
        var b = new Date().getFullYear();
        var calc = b-a;

        $.get("scraper.php?anniversary="+$("#anniversary").val(),function(data){
        if(data=="")
        {
            
        $("#theYear").hide();
            $("#fail").fadeIn();
        } else{
    
     
            $("#theYear").html("<h2><i class='fas fa-calendar-alt'></i> "+calc+"</h2>").fadeIn();
            $("#success").html("<h2><span><i class='fas fa-gift'></i></span> "+data+"</h2>").fadeIn();
        }

    });

    } else{
        $("#noGift").fadeIn();

    }
});

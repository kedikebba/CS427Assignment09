$(function(){
    $("#submitBtn").click(validatePage);
});

function validatePage(evt){
    
    let seatID = $("#seats");
    let taxiID = $("#taxi");
    let extrasID = $("#extra");
    evt.preventDefault();

    if(seatID.val()<=0 ||seatID.val()>200 ||seatID.val()=='' || typeof(seatID.val())!=Number){
        $("#error1").html("The Value of seats should be less than 200");
    }
    else if(!$('[name="taxiOpt"]').is(':checked')){
        $("#error2").html("You must select taxi type"); 
    }
    else if(!$('[name="extrasOpt"]').is(':checked')){
        $("#error3").html("You must check one extra"); 
    }
  
    else{
        $("#formID").submit(); 
    }

  

}
$(function(){
    $("#verify_form").submit((e)=>{
        e.preventDefault();
        console.log("submitted");
       // var values = [];
        
       console.log($("#verify").val());


       /*  $('#verify_form').each(function () {
            values.push($(this).val());
        });

        values.forEach(function(element) {
            console.log(element);
        }, this);
 */
    })
})
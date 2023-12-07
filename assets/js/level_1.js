$(document).ready(function(){

    $("body").on("change", "#select_a_number", selectNumber) /* Select option */
});

/**
* DOCU: This will append image element. <br>
* Last Updated Date: December 7, 2023
* @memberof module:Beginners_Activity_level_1
* @author Denverjack
*/
function selectNumber(){
    /* This will clear the li elements before appending new li elements */
    $("#appended_images").empty();

    /* Loop the selected value */
    for(let index = 0; index < $(this).val(); index++){

        /* Cloning and remove the id attribute */
        let image_clone = $("#image_clone").clone().removeAttr("id");
        
        $('#appended_images').append(image_clone);
    }
}
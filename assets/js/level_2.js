$(document).ready(function(){

    $("body")
        .on("change", "#select_a_number", selectNumber) /* Select option */
        .on("click", ".delete_button", function(){
            $(this).closest("li").remove(); /* This will remove the specific li element */
        })
});

/**
* DOCU: This will append image element with delete button. <br>
* Last Updated Date: December 7, 2023
* @memberof module:Beginners_Activity_level_2
* @author Denverjack
*/
function selectNumber(){
    /* This will clear the li elements before appending new li elements */
    $("#appended_images").empty();

    /* Loop the value options to be appended */
    for(let index = 0; index < $(this).val(); index++){

        /* Cloning element */
        let image_clone = $("#image_clone").clone().removeAttr("id");
        
        /* Append element */
        $('#appended_images').append(image_clone);
    }
}
$(document).ready(function(){

    $("body")
        .on("change", "#select_a_number", selectNumber) /* Select option */
        .on("click", ".delete_button", deleteImageButton) /* Delete image */
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
        image_clone.addClass("image");
        
        /* Append element */
        $('#appended_images').append(image_clone);
    }
}

/**
* DOCU: This will delete image and calling a function to update the selected option value. <br>
* Last Updated Date: December 13, 2023
* @memberof module:Beginners_Activity_level_2
* @author Denverjack
*/
function deleteImageButton(){
    $(this).closest("li").remove(); /* This will remove the specific li element */

    /* This will update the value of the selected number */
    $("#select_a_number").val($(".image").length);
}
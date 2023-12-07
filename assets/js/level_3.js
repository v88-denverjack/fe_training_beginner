$(document).ready(function() {

    $("body").on("change", "#generate_multiplication", generateMultiplicationTable)
});

/**
* DOCU: This will generate a multiplication table. <br>
* Last Updated Date: December 7, 2023
* @memberof module:Beginners_Activity_level_3
* @author Denverjack
*/
function generateMultiplicationTable(){
    /* Value to be multiplied */
    let multiplier = $("#generate_multiplication").val();

    /* This will clear table before generating new table */
    $("#multiplication_table").text("");

    /* First index value to be multiplied */
    for(let index1 = 1; index1 <= 10; index1++) {
        let table_row = $("<tr></tr>");

        /* Second index value to be multiplied and append in td */
        for(let index2 = 1; index2 <= multiplier; index2++) {
            table_row.append($("<td>" + index1 * index2 + "</td>"));
        } 
        /* Append multiplied index */
        $("#multiplication_table").append(table_row);
    }
}

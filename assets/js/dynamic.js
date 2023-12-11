$(document).ready(function() {

    $("body").on("change", "#dynamic_table_form", dynamicTableElements)
});

/**
* DOCU: This will generate a dynamic table elements. <br>
* Last Updated Date: December 11, 2023
* @memberof module:Dynamic_Table_Elements
* @author Denverjack
*/
function dynamicTableElements(){
    $("#dynamic_table_elements").text("");

    /* First index value to be multiplied */
    for(let index1 = 0; index1 <= $("#row_element").val() -1; index1++){
        let table_row = $("<tr></tr>");

         /* Second index value to be multiplied and append in td */
        for(let index2 = 0; index2 <= $("#column_element").val() -1; index2++){

            /* Append the table column to the current row */
            table_row.append($("<td>" + index1 + "," + index2 + "</td>"));
        }

        $("#dynamic_table_elements").append(table_row);
    }
}
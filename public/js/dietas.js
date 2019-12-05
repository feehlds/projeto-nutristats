
//Listar dietas
function getDietas(reqBody) {
    console.log('beteu')
    $.ajax({
        type: "GET",
        url: '/dietas',
        data: reqBody,
        dataType: "json",
        success: function (data, textStatus, xhr) {
            console.log(data)
        },
        complete: function (xhr, textStatus) {
            console.log('completou')
        }
    });
}
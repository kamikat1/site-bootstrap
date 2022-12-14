
$('#exampleModal').on('show.bs.modal', function(){
   

    $('#modal').removeClass("btn-info")
    $('#modal').addClass("btn-warning")
})

$(!'#exampleModal').on('show.bs.modal', function(){
    $('#modal').removeClass("btn-warning")
    $('#modal').addClass("btn-success")
})



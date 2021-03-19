
$(".bbuttons").on("click", function(event) {
    event.preventDefault()
//   console.log("clicked");
    let buttonId = $(this).data("id")
    let eatenStatus = $(this).data("eaten")
    console.log(eatenStatus)
    console.log(buttonId)

    $.ajax("/api/burger/" + buttonId, {
        type: "PUT",
        data: {"eaten": eatenStatus}
    }).then(
        () => {
            console.log("completed")
            location.reload()
        }
    )
    

})
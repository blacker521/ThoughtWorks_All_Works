    $("#Input").on("click", function () {
        $("#Add").dialog();
    });

    $("#Add_New").on("click", function () {
        $("#Add").dialog("close");
        let name = $("#Add_Name").val();
        let type = $("#Add_Type").val();
        let str = `<div><label>${name}<input type="${type}"></label><button class='btn btn-danger'>删除</button></div>`;
        $("#container").append(str);
    });

    $("body").on("click", ".delete", function () {
        $(this).prevAll().remove();
        $(this).remove();
    });

    $("#Preview").on("click", function () {
        $("#Input").hide();
        $("#Compile").show();
        $(this).hide();
    });

    $("#Compile").on("click", function () {
        $(this).hide();
        $("#Input").show();
        $("#Preview").show();
    });
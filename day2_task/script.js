$(document).ready(function () {
    // var elem;
    // $("ul:eq(0)").on("click", "li", function () {
    //     elem = $(this)
    // })
    // $("#btn1").click(function () {
    //     $("ul:eq(1)").append(elem)
    // })
    // $("#btn2").click(function () {
    //     let value = $("#input1").val()
    //     $("ul:eq(0)").append(`<li>${value}</li>`)
    // })



                                                 // q2

    $("#btn4").click(function ()
    {
        $.ajax({
            url: "file.json",
            method: "get",
            datatype: "json",
            success: function (data) {
                let heeders = $(`
                <tr>
                <th>name</th>
                <th>id</th>
                <th>salary</th>
                </tr>
                `)
                $("#table1").append(heeders)
                for (var i = 0; i < data.length; i++)
                {
                    var objects = $(`
                <tr>
                <td>${data[i].name}</td>
                <td>${data[i].id}</td>
                <td>${data[i].salary}</td>
                </tr>
                `)
                    $("#table1").append(objects)

                    $("#table1").css("display", "block");
                    $("#table1").css("width", "170px");
                }
                
            },
            error: function ()
            {
                console.log("error")
                }
        })
        })
                                // q3
    
    $("#btn3").click( async function ()
    {
        var posts = await fetch("https://jsonplaceholder.typicode.com/posts");
        var json_posts = await posts.json();
        for (var i = 0; i < json_posts.length; i++)
        {
            var objects = $(`
                <tr>
                <td>${json_posts[i].id}</td>
                <td>${json_posts[i].title}</td>
                <td>${json_posts[i].body}</td>
                </tr>
                `)
            $("#table1").append(objects)
            $("#table1").css("display", "block");
            $("#table1").css("width", "400px");

        }
    })
});

import $ from 'jquery';
import Application, {MY_DATA, MY_DATA1} from "./Application"
import {MY_DATA as my_data} from "./constants";

$.ajax();
const application = new Application();
application.run();
console.log(MY_DATA);
console.log(my_data);


$(document).ready(() => {
    $('#create_user').on('submit', (event) => {
        event.preventDefault();

        const user = {
            id: $('#id').val(),
            email: $('#email').val(),
            password: $('#password').val()
        };
        $.ajax({
            url: "/users/save",
            type: "POST",
            data: JSON.stringify(user),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: (data, textStatus) => {
                console.log(data);
                console.log(textStatus);
            }
        })
    });

    $('#btn').on('click', function() {
        $.ajax({
            url: "/users/list",
            type: "POST",
            data: JSON.stringify({"pagination": {"skip": 0, "pageSize": 10}, "filter": {}}),
            contentType: "application/json; charset=utf-8",
            success: (data, textStatus) => {
                console.log(data);
                console.log(textStatus);
            }
        })
    })
});
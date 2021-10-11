$(document).ready(() => {
  $("#contact-form--send").on("click", (e) => {
    e.preventDefault();

    $.ajax({
      url: "../mail.php",
      method: "post",
      dataType: "json",
      /* Тип данных в ответе (xml, json, script, html). */
      data: {
        name: $("#name-input").val(),
        email: $("#email-input").val(),
        message: $("#message-input").val(),
      },
      success: function (data) {
        console.log(data);
      },
    });
  });
});

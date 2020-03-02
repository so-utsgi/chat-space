$(function(){ 
     function buildHTML(message){
      if ( message.image ) {
        var html =
         `<div class="contents__message__box">
            <div class="contents__message__box__upper">
              <div class="contents__message__box__upper__name">
                ${message.user_name}
              </div>
              <div class="contents__message__box__upper__daily">
                ${message.created_at}
              </div>
            </div>
            <div class="contents__message__text">
              <p class="lower-message__content">
                ${message.content}
              </p>
            </div>
            <img src=${message.image} >
          </div>`
        return html;
      } else {
        var html =
         `<div class="contents__message__box">
            <div class="contents__message__box__upper">
              <div class="contents__message__box__upper__name">
                ${message.user_name}
              </div>
              <div class="contents__message__box__upper__daily">
                ${message.created_at}
              </div>
            </div>
            <div class="contents__message__text">
              <p class="lower-message__content">
                ${message.content}
              </p>
            </div>
          </div>`
        return html;
      };
    }
$('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
     .done(function(data){
       var html = buildHTML(data);
       $('.contents__message').append(html);
       $('.contents__message').animate({scrollTop: $('.contents__message')[0].scrollHeight});      
       $('form')[0].reset();
      })
     .fail(function() {
      alert("メッセージ送信に失敗しました");
      })
     .always(function(){
      $('.contents__from__box__btn').prop('disabled', false);
      });
 
})
});
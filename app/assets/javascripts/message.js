$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="Message-wrapper">
          <div class="Message-information">
            <div class="Message-information__name">
              ${message.user_name}
            </div>
            <div class="Message-information__time">
              ${message.created_at}
            </div>
          </div>
          <div class="Message-textarea">
            <p class="Message-textarea__text">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="Message-wrapper">
        <div class="Message-information">
          <div class="Message-information__name">
            ${message.user_name}
          </div>
          <div class="Message-information__time">
            ${message.created_at}
          </div>
        </div>
        <div class="Message-textarea">
          <p class="Message-textarea__text">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }

  $('#Form-id').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.Chat-main__message-list').append(html); 
      $('.Chat-main__message-list').animate({ scrollTop: $('.Chat-main__message-list')[0].scrollHeight});   
      $('form')[0].reset(); 
      $('.Form__submit-btn').prop('disabled', false);
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
    })
  })
});
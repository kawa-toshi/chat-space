$(function(){

  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="Message-wrapper" data-message-id=${message.id}>
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
    }  else  {
      let html =
      `<div class="Message-wrapper" data-message-id=${message.id} >
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

  let reloadMessages = function() {
    //カスタムデータ属性を利用し、ブラウザに表示されている最新メッセージのidを取得
      let last_message_id = $('.Message-wrapper:last').data("message-id");
      $.ajax({
      //ルーティングで設定した通り/groups/id番号/api/messagesとなるように文字列を書く
        url: "api/messages",
      //ルーティングで設定した通りhttpメソッドをgetに指定
        type: 'get',
        dataType: 'json',
    //dataオプションでリクエストに値を含める
        data: {id: last_message_id}
      })
    .done(function(messages) {
    
      if (messages.length !== 0) {

        let insertHTML = '';

        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });

        $('.Chat-main__message-list').append(insertHTML);
        $('.Chat-main__message-list').animate({ scrollTop: $('.Chat-main__message-list')[0].scrollHeight});   
      }
    })
    .fail(function() {
      alert('error');
    });
  
  };
  setInterval(reloadMessages, 7000);
});
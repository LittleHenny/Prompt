document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('burger_menu').addEventListener('click', function () {
    document.getElementById('menu').classList.toggle('menu--close')
  })
  document.getElementById('menu_button').addEventListener('click', function () {
    document.getElementById('menu').classList.toggle('menu--close')
  })
  document.getElementById('menu_button--mob').addEventListener('click', function () {
    document.getElementById('menu').classList.toggle('menu--close')
  })
  function copy(text) {
    if(navigator.clipboard) {
      navigator.clipboard.writeText(text).then(function() {
        console.log('Текст успешно скопирован в буфер обмена');
      }, function(err) {
        console.error('Произошла ошибка при копировании текста: ', err);
      });
    }
    document.getElementById('info_message').classList.toggle('message--close')
    setTimeout(() => {
      document.getElementById('info_message').classList.toggle('message--close')
    }, 3000);
  }
  document.getElementById('info_text').addEventListener('click', function () {
    let copy_text = document.getElementById('info_text').textContent
    copy(copy_text)
  })
  document.getElementById('info_button').addEventListener('click', function () {
    let copy_text = document.getElementById('info_text').textContent
    copy(copy_text)
  })
})


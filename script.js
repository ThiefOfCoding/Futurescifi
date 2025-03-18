document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('unlock-btn').addEventListener('click', function() {
    var password = document.getElementById('password-input').value;
    var correctPassword = '25019700'; // Substitua pela sua senha real

    if (password === correctPassword) {
      // Esconde a área de senha
      document.getElementById('password-container').style.display = 'none';

      // Exibe a galeria de imagens
      document.getElementById('image-gallery').style.display = 'block';
    } else {
      document.getElementById('error-message').textContent = 'Senha incorreta!';
    }
  });

  // Função para atualizar o relógio
  function updateClock() {
    var clockElement = document.getElementById('clock');
    var currentTime = new Date();
    var hours = currentTime.getHours().toString().padStart(2, '0');
    var minutes = currentTime.getMinutes().toString().padStart(2, '0');
    var seconds = currentTime.getSeconds().toString().padStart(2, '0');
    var timeString = hours + ':' + minutes + ':' + seconds;

    clockElement.textContent = timeString;
  }

  // Atualiza o relógio a cada segundo
  setInterval(updateClock, 1000);

  // Atualiza o relógio imediatamente ao carregar a página
  updateClock();
});

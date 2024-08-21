// Primeiro Query é do botão limpa tudo com a função hide para ficar escondido quando não há menhuma tarefa adicionada //
$('#limparTudo').hide()

// Segundo Query botão adicionar adiciona um elemento com a função click
$('#adicionar').click(() => {
  const valor = $('#texto').focus().val()

  if (valor) { // Aqui explica quando um texto é adicionado no input de ID= texto o botão limpaTudo é mostrado
    $('#limparTudo').show()

    $('#texto').val('') //Aqui explica que o valor é pego atraves da função val na ID texto

    $('<li>')  // Aqui explica que na li quan há um valor de texto: já inserido na lista: quando clicado adiciona um evento de 'text-decoration', 'line-through'
      .text(valor)
      .appendTo('#lista')
      .click(() => $(event.target).css('text-decoration', 'line-through'))
  }
})

$('#texto').focus().keyup(() => { // Aqui quando o mouse é colocado em cima do texto da lista o mouse muda de simbolo para cursor vertical
  if (event.keyCode === 13) $('#adicionar').click()
})

$('#limparTudo').click(() => { //  Aqui o botão limpaTudo remove os itens até não haver mais nada depois fica hide "escondido"
  $('#lista li').remove()
  $('#limparTudo').hide()
  $('#texto').val('').focus()
})
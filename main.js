$(document).ready(function() {

    $("#adicionar").click(function() {
        const tarefa = $("#tarefa").val();

        if (tarefa.trim() !== "") {
            const novoItem = $("<li>").text(tarefa);
            
            $("#lista-tarefas").append(novoItem);
            $("#tarefa").val("");
        }
    });
});
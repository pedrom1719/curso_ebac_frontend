$(document).ready(function() {

    // Inserir tarefa na lista
    $('.submitButton').click(function(e){

        e.preventDefault();

        let inputTask = $('#inputTask');
        
        if(!inputTask.val() == ''){

            let listItem = `<li class="uncrossed"><i class="fi fi-br-square-dashed"></i><span>${inputTask.val()}</span></li>`;

            // $('#listContainer').append(listItem);
            $(listItem).prependTo('#listContainer');

            inputTask.val('');
        }else{

            alert("Lembre-se de inserir a tarefa ;D");
        }

    });

    // Marcar tarefa como concluida e enviar para o fim da lista
    $('#listContainer').on('click', '.uncrossed', function(){

        $(this).toggleClass('crossed');
        $(this).find('.fi').toggleClass('fi-br-square-dashed fi-br-checkbox');

        let toggledItem = '<li class="crossed">' + $(this).html() + '</li>';

        $(this).remove();
        $('#listContainer').append(toggledItem);

    });

    // Marcar tarefa como nao concluida e enviar para o inicio da lista
    $('#listContainer').on('click', '.crossed', function(){
        
        $(this).toggleClass('crossed');
        $(this).find('.fi').toggleClass('fi-br-square-dashed fi-br-checkbox');

        let untoggledItem = '<li class="uncrossed">' + $(this).html() + '</li>';

        $(this).remove();
        $(untoggledItem).prependTo('#listContainer');

    });

});
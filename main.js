$(document).ready(function(){

    // Selecionando elementos 
    const templateImage = $('.profile-avatar');
    const templateName = $('.profile-name');
    const templateNickname = $('.profile-username');
    const templateRepo =  $('.numbers-item:first-child').find('span');
    const templateFollowers =  $('.numbers-item:nth-child(2)').find('span');
    const templateFollowing =  $('.numbers-item:last-child').find('span');
    const templateHyperlink = $('.profile-link');

    $('.modal__form').submit(function(e){
        e.preventDefault();

        let userName = $('#modal__form__input').val();

        // Endpoint
        const endPoint = `https://api.github.com/users/${userName}`;

        // Buscando informacoes
        fetch(endPoint)
        .then(function(reqAnswer){  
            return reqAnswer.json();
        })
        .then(function(json){
            // console.log(json);
            templateImage.attr('src', json.avatar_url);
            templateName.text(json.name);
            templateNickname.html('<span>@</span>'+json.login);
            templateRepo.text(json.public_repos);
            templateFollowers.text(json.followers);
            templateFollowing.text(json.following);
            templateHyperlink.attr('href', json.html_url);

            $('.modal').addClass('modal--hidden');
            $('.page-overlay').addClass('modal--hidden');
        })
        .catch(function(error){
            alert('Ocorreu um erro ao buscar os dados. Tente novamente mais tarde ;D');
            console.log(error);
        });
    });

    // Resetando e mostrando modal com formulario
    $('.research-button').click(function(){
        $('#modal__form__input').val('');
        let userName = '';

        $('.modal').removeClass('modal--hidden');
        $('.page-overlay').removeClass('modal--hidden');
    });
});
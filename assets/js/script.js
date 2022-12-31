document.getElementById('btn-submit').addEventListener('click', e => {

    console.log('O botão foi clicado!');

});

document.getElementById('form-login').addEventListener('mouseenter', e => {

    console.log('O mouse está sobre o formulário!');

});

document.querySelector('#form-login').addEventListener('mouseleave', e => {

    console.log('O mouse está fora do formulário!');

});

document.querySelector('#form-login').addEventListener('submit', e => {

    e.preventDefault();

    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;


    let json = {
        email: email,
        password
    }

    console.log(json);

    let strigJSON = JSON.stringify(json);

    console.log(strigJSON);

    let jsonParse = JSON.parse(strigJSON);

    console.log(jsonParse);

    if (!json.email) {

        console.error('O campo E-mail não foi preenchido!');
    } else if (!json.password) {

        console.error('O campo password deve ser preenchido!');
    } else {

        console.info('Dados validados com sucesso!')
    }
});
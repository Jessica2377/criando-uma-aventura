corEach(button => {
    button.addEventListener('click', function(){
        const aconst avanca = document.querySelectorAll('.btn-proximo');

avanca.ftual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})

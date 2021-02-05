class gitController {

    Info(user) {

        let dados = new gitModel(user)
        dados.buscaDados()

        let desenha = new gitViews()
        desenha.criaElementos(dados);
    }
}

// BUSCANDO DADOS DA MODEL

const profile = $('#input').value;
let btn = document.getElementById('submit');

let gitHub = new gitController();

btn.addEventListener('click', () => {
  
    gitHub.Info(profile)

});
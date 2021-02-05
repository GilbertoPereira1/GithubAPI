const main = "https://api.github.com/users/";
const $ = document.querySelector.bind(document);


// INSERIR DADOS
class gitModel {

  constructor(user, img) {

    this._img = img;
    this._user = user;
    this._repoArray = [];

  }
  get img() {
    return this._img;
  }
  get user() {
    return this._user;
  }
  get repositorios() {
    return [].concat(this._repoArray);
  }



  // BUSCA DADOS API

  buscaDados() {

    let request = new XMLHttpRequest();

    const profile = $('#input').value;
    const url = `${main}${profile}/repos`

    // passar como parâmetro a data

    request.open("GET", url, false);

    request.addEventListener('load', () => {

      if (request.status == 200) {

        let response = JSON.parse(request.responseText);

        response.forEach((object) => {

          let repos = {
            imagem: object.owner.avatar_url,
            nome: object.owner.login,
            repositorio: object.name,
            link: object.html_url,
            linguagem: object.language,
          }

          this._repoArray.push(repos);
        })

      }
        else if(request.status == 404){
          throw alert("404 - User not Found");
      }
      else{
          throw alert("Unknown error - please try again.");
      }    

    });

    request.send();

  }
};
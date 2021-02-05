class gitViews {
    constructor() {
        this._name = $("#name"); 
        this._repo = $("#repo");
    }

addRepo(dados) { 

    let list = ""; 
    let img = ""; 

    dados.repositorios.forEach((i) => { 
        img = ` 
            <img
                src="${i.imagem}"
                alt=""
                id="img"
            />
            <p id="login"> ${i.nome}<p>
        `;

        list += `
            <ul> 
            <li class="repos"><a href="${i.link}">${i.repositorio}</a> | ${i.linguagem} </li>
            </ul>
        `;
        })

        return `
        ${img}
        
        <ul id="lista-repo">
           ${list}
        </ul>
        `
    }

    criaElementos(dados) {
        console.log(dados);
        if (dados.repositorios.length > 0) {
          
            this._repo.innerHTML = this.addRepo(dados);
        }
    }
};
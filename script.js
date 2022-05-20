var ordem = [];
var paises = [];
var favoritos = [];
console.log("tamanho favoritos: " + favoritos.length);

window.addEventListener('load',function(){

    //console.log("antes do fetch")
    


    const valores=fetch('https://restcountries.com/v2/all').then(res=>{
    //console.log(res)
    res.json().then(dados=>{
        console.log("dados");
        console.log(dados);
        prepararArrays(dados);

        });
}).catch(erro=>{
    console.log(erro+" erro na requisição")
});
console.log("valores aqui")
console.log(valores);

//console.log("depois fetch")
    

});

function prepararArrays(dados){
    for (var i = 0; i < dados.length; i++){
        ordem.push(dados[i]);
        paises.push(dados[i]);
    }
    mostraPaises(paises);
    mostraFavoritos(favoritos);
}

function atualizar(){
    paises.sort(function(a,b){
        return ordem.indexOf(a) - ordem.indexOf(b);
    });
    favoritos.sort(function(a,b){
        return ordem.indexOf(a) - ordem.indexOf(b);
    });
    mostraPaises(paises);
    mostraFavoritos(favoritos);
}

function mostraPaises(dados){
    if(dados.length<1){
        const paises=document.querySelector('#paises'); //Div paises
        paises.innerHTML = "";
        var h1 = document.createElement("h1");
        h1.textContent = "Países do Mundo";
        h1.classList.add("subSubTitulo");
        paises.appendChild(h1);
        var p = document.createElement("p");
        p.textContent = "Todos os países foram favoritados <3";
        p.classList.add("mensagemKawaii");
        paises.appendChild(p);
    }
    else{
        function criarBotãoFavorito(index){
            var btnFavorito = document.createElement("button");
            btnFavorito.classList.add("btnFavorito");
            function favoritar(){
                console.log("favoritou " + index);
                favoritos.push(dados[index]);
                dados.splice(index,1);
                atualizar();
            }
            btnFavorito.addEventListener("click",favoritar);
            return btnFavorito;
        }
    
        const paises=document.querySelector('#paises'); //Div paises
        paises.innerHTML = "";
        var populao = 0;
        var ul = document.createElement("ul");
        for (var i = 0; i < dados.length; i++){
            //criação de elementos
            var nominho = dados[i].translations.br; //nome do pais
            var banderinha = dados[i].flag; //banderinha do pais
            var regiaozinha = dados[i].region; //região do pais
            var populinho = dados[i].population; //população do pais
            populao+=populinho; //soma da população
    
            var li = document.createElement("li");
    
            var spanNome = document.createElement("span"); //span nome do pais
            spanNome.textContent = nominho;
    
            var spanBanderinha = document.createElement("span");//span banderinha do pais
            spanBanderinha.innerHTML = "<img src=" + banderinha +" class='bandeirolas'></img>";
    
            var spanLeft = document.createElement("span"); //span esquerda
            spanLeft.classList.add("spanLeft");
    
            var spanRight = document.createElement("span"); //span direita
            spanRight.classList.add("spanRight");
    
            var spanRegiao = document.createElement("span"); //span região do pais
            switch(regiaozinha){
                case "Africa":
                    spanRegiao.classList.add("africa");
                    spanRegiao.textContent = "África";
                break;
                case "Americas":
                    spanRegiao.classList.add("americas");
                    spanRegiao.textContent = "América";
                break;
                case "Asia":
                    spanRegiao.classList.add("asia");
                    spanRegiao.textContent = "Ásia";
                break;
                case "Europe":
                    spanRegiao.classList.add("europe");
                    spanRegiao.textContent = "Europa";
                break;
                case "Oceania":
                    spanRegiao.classList.add("oceania");
                    spanRegiao.textContent = "Oceania";
                break;
                case "Polar":
                    spanRegiao.classList.add("polar");
                    spanRegiao.textContent = "Polares";
                break;
                case "Antarctic Ocean":
                    spanRegiao.classList.add("antarcticOcean");
                    spanRegiao.textContent = "Oceano Antártico";
                break;
                case "Antarctic":
                    spanRegiao.classList.add("antarctic");
                    spanRegiao.textContent = "Antártica";
                break;
            };
            spanRegiao.classList.add("regiao");
    
            spanRight.appendChild(spanRegiao);
            spanRight.appendChild(spanBanderinha);
                
    
            var btnFavorito = criarBotãoFavorito(i);
    
            spanLeft.appendChild(btnFavorito);
            spanLeft.appendChild(spanNome);
    
            li.appendChild(spanLeft);
            li.appendChild(spanRight);
    
            ul.appendChild(li);
        }
        var spanPopulacao = document.createElement("span");
        spanPopulacao.classList.add("totalPopulacao");
        spanPopulacao.textContent = "População Total: " + populao;
        
        var spanTotalPaises = document.createElement("span");
        spanTotalPaises.classList.add("totalPaises");
        spanTotalPaises.textContent = "Total de Países: " + dados.length;

        var h1 = document.createElement("h1");
        h1.textContent = "Países do Mundo";
        h1.classList.add("subSubTitulo");
        paises.appendChild(h1);
        paises.appendChild(spanPopulacao);
        paises.appendChild(spanTotalPaises);
        paises.appendChild(ul);
    }

}

function mostraFavoritos(dados){
    if(dados.length<1){
        const favoritos=document.querySelector('#favoritos'); //Div favoritos
        favoritos.innerHTML = "";
        var h1 = document.createElement("h1");
        h1.textContent = "Países Favoritos";
        h1.classList.add("subSubTitleFav");
        favoritos.appendChild(h1);
        var p = document.createElement("p");
        p.textContent = "Você ainda não possui nenhum favorito ;-;";
        p.classList.add("mensagemKawaii");
        favoritos.appendChild(p);
    }
    else{
        function criarBotãoFavorito(index){
            var btnFavorito = document.createElement("button");
            btnFavorito.classList.add("btnJaFavorito");
            function favoritar(){
                console.log("favoritou " + index);
                paises.push(dados[index]);
                dados.splice(index,1);
                atualizar();
            }
            btnFavorito.addEventListener("click",favoritar);
            return btnFavorito;
        }
    
        const favoritos=document.querySelector('#favoritos'); //Div favoritos
        favoritos.innerHTML = "";
        var populao = 0;
        var ul = document.createElement("ul");
        for (var i = 0; i < dados.length; i++){
            //criação de elementos
            var nominho = dados[i].translations.br; //nome do pais
            var banderinha = dados[i].flag; //banderinha do pais
            var regiaozinha = dados[i].region; //região do pais
            var populinho = dados[i].population; //população do pais
            populao+=populinho; //soma da população
    
            var li = document.createElement("li");
    
            var spanNome = document.createElement("span"); //span nome do pais
            spanNome.textContent = nominho;
    
            var spanBanderinha = document.createElement("span");//span banderinha do pais
            spanBanderinha.innerHTML = "<img src=" + banderinha +" class='bandeirolas'></img>";
    
            var spanLeft = document.createElement("span"); //span esquerda
            spanLeft.classList.add("spanLeft");
    
            var spanRight = document.createElement("span"); //span direita
            spanRight.classList.add("spanRight");
    
            var spanRegiao = document.createElement("span"); //span região do pais
            switch(regiaozinha){
                case "Africa":
                    spanRegiao.classList.add("africa");
                    spanRegiao.textContent = "África";
                break;
                case "Americas":
                    spanRegiao.classList.add("americas");
                    spanRegiao.textContent = "América";
                break;
                case "Asia":
                    spanRegiao.classList.add("asia");
                    spanRegiao.textContent = "Ásia";
                break;
                case "Europe":
                    spanRegiao.classList.add("europe");
                    spanRegiao.textContent = "Europa";
                break;
                case "Oceania":
                    spanRegiao.classList.add("oceania");
                    spanRegiao.textContent = "Oceania";
                break;
                case "Polar":
                    spanRegiao.classList.add("polar");
                    spanRegiao.textContent = "Polares";
                break;
                case "Antarctic Ocean":
                    spanRegiao.classList.add("antarcticOcean");
                    spanRegiao.textContent = "Oceano Antártico";
                break;
                case "Antarctic":
                    spanRegiao.classList.add("antarctic");
                    spanRegiao.textContent = "Antártica";
                break;
            };
            spanRegiao.classList.add("regiao");
    
            spanRight.appendChild(spanRegiao);
            spanRight.appendChild(spanBanderinha);
                
    
            var btnFavorito = criarBotãoFavorito(i);
    
            spanLeft.appendChild(btnFavorito);
            spanLeft.appendChild(spanNome);
    
            li.appendChild(spanLeft);
            li.appendChild(spanRight);
    
            ul.appendChild(li);
        }
        var spanPopulacao = document.createElement("span");
        spanPopulacao.classList.add("totalPopulacao");
        spanPopulacao.textContent = "População Total: " + populao;

        var spanTotalPaises = document.createElement("span");
        spanTotalPaises.classList.add("totalPaises");
        spanTotalPaises.textContent = "Total de Países: " + dados.length;

        var h1 = document.createElement("h1");
        h1.textContent = "Países Favoritos";
        h1.classList.add("subSubTitleFav");
        favoritos.appendChild(h1);
        favoritos.appendChild(spanPopulacao);
        favoritos.appendChild(spanTotalPaises);
        favoritos.appendChild(ul);
    }
}
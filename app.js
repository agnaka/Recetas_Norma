function removerAcentosEMinusculas(texto) {
  return texto.toLowerCase()
              .normalize('NFD') //Decompõe os caracteres acentuados em suas partes base e diacríticos (acentos).
              .replace(/[\u0300-\u036f]/g, ''); //Remove todos os diacríticos (acentos) usando uma expressão regular.
}

function pesquisar() {
  // Seleciona a seção onde os resultados serão exibidos
  let section = document.getElementById("resultado_pesquisa");


  let campoPesquisa = document.getElementById("campo_pesquisa").value;

  if (!campoPesquisa) { // campoPesquisa == "" foi simplificado o '!' significa se não existe ou se não tem nada
    section.innerHTML = "<p>Nada fue digitado.</p>"
    return;
  }

  campoPesquisa = removerAcentosEMinusculas(campoPesquisa);
  // alert(campoPesquisa);

  // Inicializa uma string vazia para armazenar os resultados
  let resultados = "";
  let titulo = "";
  let ingredientes = "";
  let preparacion = "";
  let tags = "";
  let autor = "";

  // Itera sobre cada reeta no array 'recetasNorma'
  for (let receta of recetasNorma) {
    titulo = removerAcentosEMinusculas(receta.titulo);  
    ingredientes = receta.ingredientes.map(ingrediente => {
      return removerAcentosEMinusculas(ingrediente);
    });
    preparacion = removerAcentosEMinusculas(receta.preparacion);
    tags = removerAcentosEMinusculas(receta.tags);
    autor = removerAcentosEMinusculas(receta.autor);

    // .replace(/[\u0300-\u036f]/g, ""): Aqui, utilizamos uma expressão regular para encontrar e remover todos os caracteres Unicode que representam diacríticos (acentos). A parte [\u0300-\u036f] define um intervalo de caracteres Unicode que abrange a maioria dos diacríticos comuns. O modificador g garante que todas as ocorrências sejam substituídas.

    // se titulo , ingredientes, preparación, tags o autor está includes no campoPesquisa
    if (titulo.includes(campoPesquisa) || ingredientes.includes(campoPesquisa) || preparacion.includes(campoPesquisa) || tags.includes(campoPesquisa) || autor.includes(campoPesquisa)) {
      //cria um novo elemento;
      resultados += `
        <div class="item-resultado">
          <img src="${receta.foto}" width='50' height= 'auto'>
            <div class="item-resultado-direita">
            <h2>                        
              ${receta.titulo} <img src="${receta.foto}" class="foto_pequena">
            </h2>
            <p class="descricao-meta">Ingredientes</br>
              ${receta.ingredientes}</br></br>
              Preparación</br>
              ${receta.preparacion}</br></br>
              Autor: ${receta.autor}
            </p>
            <a href=${receta.link} target="_blank">Mais informações</a>
            </div>          
        </div>
      `;
    }
  }
  if (!resultados) {
    resultados = "<P>Nada foi encontrado</p>"
  }
  // Atribui os resultados gerados à seção HTML
  section.innerHTML = resultados;
}
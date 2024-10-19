// lista + objeto
let recetasNorma = [
    {
        titulo: "Guiso Picante",
        ingredientes : [
          ' 300 kg de bola de lomo',
          ' 50 gr de panceta ahumada',
          ' 2 papas',
          ' Ají verde',
          ' Orégano',
          ' 1 diente de ajo',
          ' 1 cebolla',
          ' 1 tallo de apio',
          ' 2 o 3 cdas. de vino blanco',
          ' 1/2 lata de tomate',
          ' 1/2 pote de crema',
          ' Sal y pimienta al gusto'
        ],
        preparacion: "Se pican juntos la panceta, la cebolla y el apio. Se vierte el picadillo en un recipiente y se añade el ajo machacado, pelado. Apenas esté todo bien refogado, se añaden los ajíes cortados en tiritas, la carne en trozos, sal, pimienta y orégano y se remueven los trozos de carne para que puedan dorarse bien, luego se bañan con el vino que se dejar evaporar y los tomates. Se vierte el agua caliente para cubrir la carne, se tapa el recipiente y se cierra a fuego lento, mezclando a menudo a media cocción, se agregan las papas cortadas en cubos, si fuese necesario, se añade caldo o agua caliente. Pocos minutos antes de srvir, se agrega la crema de leche, se mezcla y se saca el recipiente del fuego, sirviendo el guiso bien caliente.",
        tags: "tags: arroz aji verde, receta facil,  plato principal, papa ",
        foto: 'assets/guiso_picante.png',
        autor: "Normita"
    },
    
    {
      titulo: "Arroz con Pollo",        
      ingredientes: [
        ' 3 muslos de pollo',
        ' 3 medidas de arroz',
        ' 1 cebolla',
        ' 1/2 ají verde',
        ' 1 zanahoria',
        ' 1/2 lata de tomate',
        ' 1/2 cdita. de azúcar',
        ' Sal y pimienta al gusto'
      ],
      preparacion: "Trozar el pollo y dorarlo en aceite. Agregar cebolla picada, 1/2 ají picado y la zanahoria rayada. Dorar todo junto. Poner 1/2 lata de tomate picado, S, P, azúcar (1/2 cdita). Dejar cocinar en mínimo. Lavar una taza de café de arroz por persona y dejar escurrir en el colador. 1/2 hora antes del almuerzo colocar 2 azafrán junto con el pollo y revolver, agregar el arroz sobre el pollo y 2 1/2 tazas de agua caliente. Mezclar y cocinar como si fuese gohan. Si se desea el arroz más blando se agrega más agua.</br> Cacerola Essen, hervir 8' apagar y esperar 40'",
      tags: "arroz azafrán salsa tomate papa",
      foto: "assets/arroz_con_pollo.png",
      autor: "Normita"
  },

  {
    titulo: "Pão caseiro",        
    ingredientes: [
      '360grs de farinha de trigo',
      '230ml de água morna',
      '4grs de fermento biológico seco (sachê)',      
      '7grs sal (1 colher de sopa'
    ],
    preparacion: "Misture todo em seco. Acrescentar a água. Misturar xxx a massa até ficar homogenia. Antes de sovar deixar descansar 10 min. Sovar por 10 min. Colocar a parte lisa para acima e cobrir com um pano e deixar descansar por 1 hora. Untar uma assadeira com manteiga, modelar o pão e eixar descansar +30 min. Pulverizar o forno com água para criar a parte crocante. ",
    tags: "pao levadura leche harina ",
    foto: "assets/pan1.jpeg",
    autor: "Emília"
  },
    {
      titulo: "Flan",        
      ingredientes: [
        '6 huevos',
        '200 gr. azúcar',
        '600 cm³ leche',
        '1 cdita esencia de vainilla '
      ],
      preparacion: "Batir en un bol los huevos con el azúcar, agregarle la leche y la esencia. Volcar la preparación en una flanera caramelizada (acordarse de preparar antes). Cocinar en la flanera Essen. Aproximadamente 40 minutos a fuego corona",
      tags: "leche huevo ",
      foto: "assets/flan.png",
      autor: "Jandra (adaptación)"
  },
  {
    titulo: "Salsa Blanca",
    ingredientes: [
        '50gr de manteca',
        '3 cdas al ras de maicena',
        '1/2 l de leche',
        '1 cdita. de sal fina',
        '1/4 cdita. de pimienta',
        '1/4 cdita. de nuez moscada'
    ],
    preparacion: "Derretir la manteca, agregar la maicena y cocinarla un momento. Agregar después la leche caliente y revolver. Cocinarla agitando hasta hervir durante 2', revolviendo continuamente.",
    tags: "salsa, blanca, manteca, maicena, leche",
    foto: "assets/Salsa_blanca.jpg", 
    autor: "Normita"
  },
  {
    titulo: "Macarrão à Carbonara",
    rendimento: "6 porções",
    tempoPreparo: "15 minutos",
    ingredientes: [
        'Bacon picado a gosto',
        'Queijo ralado a gosto',
        '3 ovos',
        'Sal, pimenta',
        'Macarrão de sua escolha (espaguete, fusili, etc.)',
        'Creme de leite (opcional)'
    ],
    preparacion: "Frite o bacon até ficar crocante e adicione o creme. Cozinhe o macarrão. Em um refratário, bata os ovos com um garfo, tempere com sal e pimenta, e adicione o queijo ralado. Escorra o macarrão bem quente e adicione-o ao refratário com os ovos. Misture rapidamente para que os ovos cozinhem com o calor do macarrão. Adicione o bacon frito com creme. Misture bem e sirva imediatamente.",
    tags: "macarrao, carbonara, manteca, leche",
    foto: "assets/Carbonara.jpg", 
    autor: "internet" 
  },
  {
    titulo: "Croquetas de Carne",
    ingredientes: [
      "250g de carne picada",
      "1/2 cebolla picada",
      "Pimenta",
      "Sal",
      "Pan rallado",
      "1 huevo",
      "2 papas",
      "Perejil (salsinha)"
    ],
    preparacion: "Saltear la cebolla en aceite hasta dorar. Añadir la carne picada y cocinar hasta dorar. Cocinar las patatas y machacarlas. Mezclar la carne cocinada con las patatas machacadas, el huevo, el pan rallado, el perejil, sal y pimienta. Formar croquetas y freír en aceite caliente hasta dorar.",
    tags: "prato principal carne papa",
    foto: "assets/Croquetas_carne.jpg",
    autor: "Normita"
  },
  {
    titulo: "Kare Raisu (Curry Japonês)",
    ingredientes: [
      "350g de coxão mole picado em cubos",
      "1 colher de sopa de manteiga",
      "200g de batata picada em cubos",
      "250g de cebola picada",
      "100g de cenoura picada em cubos",
      "50g de vagem picada",
      "700ml de água",
      "2 cubos de curry"
    ],
    preparacion: "Numa caçarola, refogue a carne na manteiga. Acrescente os legumes picados e a água. Cozinhe em fogo alto por 15 minutos ou até os legumes estarem macios. Dissolva os cubos de curry na mistura. Sirva com arroz branco japonês.",
    tags: "prato principal, japonês, curry, carne, legumes, almoço, jantar",
    foto: "assets/kare.jpg",
    autor: "internet",
    rendimento: "4 porções",
    tempoPreparo: "45 minutos",
    dificuldade: "fácil"
  } 

];
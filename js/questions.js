const questions = [
    {
        alreadyAnswered: 0,
        question: 'Qual é o nome dado ao estado da água em forma de gelo? ',
        a: 'Líquido',
        b: 'Sólido',
        c: 'Gasoso',
        d: 'Vaporoso',
        rightQ: 'b'
    },

    {
        alreadyAnswered: 0,
        question: 'Quem é a namorada do Mickey? ',
        a: 'Margarida',
        b: 'Minnie',
        c: 'A pequena sereia',
        d: 'Olivia Palito',
        rightQ: 'b'
    },

    {
        alreadyAnswered: 0,
        question: 'Qual é o personagem do folclóre brasileiro que tem uma perna só? ',
        a: 'Cuca',
        b: 'Negrinho do Pastoreio',
        c: 'Boitatá',
        d: 'Saci-Pererê',
        rightQ: 'd'
    },

    {
        alreadyAnswered: 0,
        question: 'Qual a letra que representa o número dez em números Romanos? ',
        a: 'V',
        b: 'C',
        c: 'T',
        d: 'X',
        rightQ: 'd'
    },

    {
        alreadyAnswered: 0,
        question: 'Quem proclamou a república no Brasil em 1889?',
        a: 'Duque de Caxias',
        b: 'Marechal Rondon',
        c: 'Dom Pedro II',
        d: 'Marechal Deodoro',
        rightQ: 'd'
    },

    {
        alreadyAnswered: 0,
        question: 'O que era Frankenstein de Mary Shelley? ',
        a: 'Monstro',
        b: 'Gorila',
        c: 'Príncipe',
        d: 'Sapo',
        rightQ: 'a'
    },

    {
        alreadyAnswered: 0,
        question: 'Qual é o signo do zodíaco de quem nasce no dia do ano-novo? ',
        a: 'Virgem',
        b: 'Aquario',
        c: 'Capricórnio',
        d: 'Áries',
        rightQ: 'c'
    },

    {
        alreadyAnswered: 0,
        question: 'Quem fundou a fábrica de automóveis Ford? ',
        a: 'Harrison Ford',
        b: 'Gerald Ford',
        c: 'Henry Ford',
        d: 'Anna Ford',
        rightQ: 'c'
    },

    {
        alreadyAnswered: 0,
        question: 'Qual é a cor que se associa com os grupos ecológicos? ',
        a: 'Preta',
        b: 'Vermelha',
        c: 'Azul',
        d: 'Verde',
        rightQ: 'd'
    },

    {
        alreadyAnswered: 0,
        question: 'A água ferve a quantos graus centígrados? ',
        a: '200',
        b: '100',
        c: '170',
        d: '220',
        rightQ: 'b'
    },

    {
        alreadyAnswered: 0,
        question: 'Quando é comemorado o dia da Independência do Brasil? ',
        a: '21 de Abril',
        b: '12 de Outubro',
        c: '7 de Setembro',
        d: '25 de Dezembro',
        rightQ: 'c'
    },

    {
        alreadyAnswered: 0,
        question: 'Qual lugar é também chamado de Santa Sé? ',
        a: 'Veneza',
        b: 'Vitória',
        c: 'Vancouver',
        d: 'Vaticano',
        rightQ: 'd'
    },

    {
        alreadyAnswered: 0,
        question: 'Quem foi o grande amor de Julieta? ',
        a: 'Romeu',
        b: 'Orfeu',
        c: 'Hamlet',
        d: 'Iago',
        rightQ: 'a'
    },

    {
        alreadyAnswered: 0,
        question: 'Quantos signos formam o zodíaco? ',
        a: '9',
        b: '10',
        c: '11',
        d: '12',
        rightQ: 'd'
    },

    {
        alreadyAnswered: 0,
        question: 'Vatapá é uma comida típica de qual estado? ',
        a: 'Paraná',
        b: 'Santa Catarina',
        c: 'São Paulo',
        d: 'Bahia',
        rightQ: 'd'
    },

    {
        alreadyAnswered: 0,
        question: 'Qual personagem da turma da Mônica tem apenas cinco fios de cabelo? ',
        a: 'Mônica',
        b: 'Cebolinha',
        c: 'Cascão',
        d: 'Magali',
        rightQ: 'b'
    },

    {
        alreadyAnswered: 0,
        question: 'O churrasco é considerado uma comida típica de qual estado? ',
        a: 'Ceará',
        b: 'Rio Grande do Sul',
        c: 'Pará',
        d: 'Maranhão',
        rightQ: 'b'
    },

    {
        alreadyAnswered: 0,
        question: 'Qual cantor e o pai da dupla Sandy e Junior? ',
        a: 'Leonardo',
        b: 'Xororó',
        c: 'Zezé di Camargo',
        d: 'Chitãozinho',
        rightQ: 'b'
    },

    {
        alreadyAnswered: 0,
        question: 'Quem fundou a Microsoft? ',
        a: 'Sultão de Brunei',
        b: 'Akio Morita',
        c: 'Bill Gates',
        d: 'Príncipe Charles',
        rightQ: 'c'
    },

    {
        alreadyAnswered: 0,
        question: 'Qual é o nome dado ao pneu reserva do carro? ',
        a: 'Calota',
        b: 'Estepe',
        c: 'Macaco',
        d: 'Chave de roda',
        rightQ: 'b'
    },

    {
        alreadyAnswered: 0,
        question: 'Quantos jogadores um jogo de vôlei reúne na quadra? ',
        a: '6',
        b: '8',
        c: '10',
        d: '12',
        rightQ: 'd'
    },

    {
        alreadyAnswered: 0,
        question: 'Qual é o país do tango? ',
        a: 'Uruguai',
        b: 'Argentina',
        c: 'Paraguai',
        d: 'Espanha',
        rightQ: 'b'
    },

    {
        alreadyAnswered: 0,
        question: 'Que imperador pôs fogo em Roma? ',
        a: 'Trajano',
        b: 'Nero',
        c: 'Brutus',
        d: 'Caligula',
        rightQ: 'b'
    },

    {
        alreadyAnswered: 0,
        question: 'A cidade de Pompeia que foi soterrada por um vulcão fica em qual desses países? ',
        a: 'Japão',
        b: 'México',
        c: 'Itália',
        d: 'Estados Unidos',
        rightQ: 'c'
    },

    {
        alreadyAnswered: 0,
        question: 'Como é chamado quem nasce em Milão na Itália? ',
        a: 'Milanese',
        b: 'Milano',
        c: 'Milista',
        d: 'Milanez',
        rightQ: 'd'
    },

    {
        alreadyAnswered: 0,
        question: 'Que profissional usa uma ferramenta chamada formão? ',
        a: 'Carpinteiro',
        b: 'Relojoeiro',
        c: 'Confeiteiro',
        d: 'Bombeiro',
        rightQ: 'a'
    },

    {
        alreadyAnswered: 0,
        question: 'Em qual estádio Pelé marcou seu milésimo gol? ',
        a: 'Morumbi',
        b: 'Pacaembu',
        c: 'Maracanã',
        d: 'Mineirão',
        rightQ: 'c'
    },

    {
        alreadyAnswered: 0,
        question: 'O que é gôndola? ',
        a: 'Embarcação',
        b: 'Brinquedo',
        c: 'Música',
        d: 'Símbolo',
        rightQ: 'a'
    },

    {
        alreadyAnswered: 0,
        question: 'Sashimi é um prato originário de qual país? ',
        a: 'Japão',
        b: 'China',
        c: 'Índia',
        d: 'Indonésia',
        rightQ: 'a'
    },

    {
        alreadyAnswered: 0,
        question: 'Como é chamada a cantora que representa o papel principal em uma ópera? ',
        a: 'Primeira dama',
        b: 'Dona-prima',
        c: 'Prima-dona',
        d: 'Obra-prima',
        rightQ: 'c'
    },

    {
        alreadyAnswered: 0,
        question: 'Peroba é uma espécie de? ',
        a: 'Inseto',
        b: 'Árvore',
        c: 'Verme',
        d: 'Verdura',
        rightQ: 'b'
    },

    {
        alreadyAnswered: 0,
        question: 'O alpinismo é praticado em que lugar? ',
        a: 'Oceano',
        b: 'Montanha',
        c: 'Rio',
        d: 'Praia',
        rightQ: 'b'
    },

    {
        alreadyAnswered: 0,
        question: 'O Coliseu é um monumento histórico de que cidade europeia? ',
        a: 'Paris',
        b: 'Copenhague',
        c: 'Roma',
        d: 'Londres',
        rightQ: 'c'
    },

    {
        alreadyAnswered: 0,
        question: 'Qual é o ponto mais alto da Terra? ',
        a: 'Everest',
        b: 'Monte Sinai',
        c: 'Monte Castelo',
        d: 'Mont Blanc',
        rightQ: 'a'
    },

    {
        alreadyAnswered: 0,
        question: 'Que rio corta a cidade de Londres na Inglaterra? ',
        a: 'Tâmisa',
        b: 'Sena',
        c: 'Reno',
        d: 'Aube',
        rightQ: 'a'
    },

    {
        alreadyAnswered: 0,
        question: 'Qual é a raça do personagem principal do filme Beethoven? ',
        a: 'Fila',
        b: 'Pastor Alemão',
        c: 'Poodle',
        d: 'São Bernardo',
        rightQ: 'd'
    },

    {
        alreadyAnswered: 0,
        question: 'Quem foi eleito presidente da África do Sul em 1994? ',
        a: 'Nelson Piquet',
        b: 'Nelson Mandela',
        c: 'Nelson Red',
        d: 'John Nelson',
        rightQ: 'b'
    },

    {
        alreadyAnswered: 0,
        question: 'Quantos quilates tem o ouro puro? ',
        a: '18',
        b: '20',
        c: '24',
        d: '30',
        rightQ: 'c'
    },

    {
        alreadyAnswered: 0,
        question: 'Qual é a sigla da Organização das Nações Unidas? ',
        a: 'ONU',
        b: 'FMI',
        c: 'CIA',
        d: 'OTAN',
        rightQ: 'a'
    },

    {
        alreadyAnswered: 0,
        question: 'De quantos em quantos anos aparece o cometa Halley? ',
        a: '57 anos',
        b: '67 anos',
        c: '76 anos',
        d: '79 anos',
        rightQ: 'c'
    },

    {
        alreadyAnswered: 0,
        question: 'Em qual espécie o macho choca os ovos e a fêmea procura alimento? ',
        a: 'Andorinha',
        b: 'Pato Selvagem',
        c: 'Pinguim',
        d: 'Marreco',
        rightQ: 'c'
    },

    {
        alreadyAnswered: 0,
        question: 'Em qual país está localizado o Muro das Lamentações? ',
        a: 'Alemanha',
        b: 'Brasil',
        c: 'Venezuela',
        d: 'Israel',
        rightQ: 'd'
    },

    {
        alreadyAnswered: 0,
        question: 'Qual desses países não fica na ásia? ',
        a: 'Paquistão',
        b: 'Japão',
        c: 'Tailândia',
        d: 'Egito',
        rightQ: 'd'
    },

    {
        alreadyAnswered: 0,
        question: 'Qual desses astros de filmes de ação é belga? ',
        a: 'Arnold Schwarzenegger',
        b: 'Sylvester Stallone',
        c: 'Steven Seagal',
        d: 'Jean Claude Van Damme',
        rightQ: 'd'
    },

    {
        alreadyAnswered: 0,
        question: 'Onde foi conduzida a vitória das forças aliadas na Segunda Guerra Mundial? ',
        a: 'Cannes',
        b: 'Normandia',
        c: 'Capri',
        d: 'Marselha',
        rightQ: 'b'
    },

    {
        alreadyAnswered: 0,
        question: 'Onde nasceu Van Gogh o grande pintor impressionista? ',
        a: 'Polônia',
        b: 'França',
        c: 'Itália',
        d: 'Holanda',
        rightQ: 'd'
    },

    {
        alreadyAnswered: 0,
        question: 'Qual é a primeira letra do alfabeto grego? ',
        a: 'Delta',
        b: 'Beta',
        c: 'Alfa',
        d: 'Gama',
        rightQ: 'c'
    },

    {
        alreadyAnswered: 0,
        question: 'O que significa literalmente Perestroika? ',
        a: 'Conversão',
        b: 'Involução',
        c: 'Reestruturação',
        d: 'Regressão',
        rightQ: 'c'
    },

    {
        alreadyAnswered: 0,
        question: 'Qual desses quatro pesos é o mais leve? ',
        a: '10 onças',
        b: '10 gramos',
        c: '10 quilos',
        d: '10 libras',
        rightQ: 'b'
    },

    {
        alreadyAnswered: 0,
        question: 'Brahma e o Deus de que religião? ',
        a: 'Hinduísmo',
        b: 'Xintoísmo',
        c: 'Budismo',
        d: 'Islamismo',
        rightQ: 'a'
    },

    {
        alreadyAnswered: 0,
        question: 'Que ramo da pecuária ocupa-se de bodes e cabras? ',
        a: 'Asinino',
        b: 'Caprino',
        c: 'Bufalino',
        d: 'Muar',
        rightQ: 'b'
    },

    {
        alreadyAnswered: 0,
        question: 'Que conflito ideológico envolveu os EUA e a União Soviética? ',
        a: 'Guerra Fria',
        b: 'Guerra do Vietnã',
        c: 'Guerra nas Estrelas',
        d: 'Guerra na Coreia',
        rightQ: 'a'
    },

    {
        alreadyAnswered: 0,
        question: 'O trapézio e um músculo que está situado: ',
        a: 'No pescoço',
        b: 'No ombro',
        c: 'Na cabeça',
        d: 'No braço',
        rightQ: 'b'
    },

    {
        alreadyAnswered: 0,
        question: 'Quem escreveu Ulisses em 1922? ',
        a: 'Ernest Hemingway',
        b: 'Marcel Proust',
        c: 'T.S. Elliot',
        d: 'James Joyce',
        rightQ: 'd'
    },

    {
        alreadyAnswered: 0,
        question: 'Qual o símbolo químico do arsênio? ',
        a: 'Rr',
        b: 'Rd',
        c: 'Rn',
        d: 'Ro',
        rightQ: 'c'
    },

    {
        alreadyAnswered: 0,
        question: 'O que são meninges? ',
        a: 'Células',
        b: 'Nervos',
        c: 'Membranas',
        d: 'Músculos',
        rightQ: 'c'
    },

    {
        alreadyAnswered: 0,
        question: 'O confucionismo é uma filosofia de qual nacionalidade? ',
        a: 'Indiana',
        b: 'Japonesa',
        c: 'Chinesa',
        d: 'Coreana',
        rightQ: 'c'
    },

    {
        alreadyAnswered: 0,
        question: 'Qual a ciência que estuda a distribuição dos animais? ',
        a: 'Zooterapia',
        b: 'Zoogeografia',
        c: 'Zodíaco',
        d: 'Zoometria',
        rightQ: 'b'
    },

    {
        alreadyAnswered: 0,
        question: 'A eletrônica é parte de qual ciência? ',
        a: 'Física',
        b: 'Biologia',
        c: 'Química',
        d: 'Botânica',
        rightQ: 'a'
    },

    {
        alreadyAnswered: 0,
        question: 'A Bélgica é: ',
        a: 'Uma república',
        b: 'Uma monarquia constitucional',
        c: 'Um emirado',
        d: 'Um principado',
        rightQ: 'b'
    },

    {
        alreadyAnswered: 0,
        question: 'Que parte do corpo humano é afetada pela cólera? ',
        a: 'Garganta',
        b: 'Intestino',
        c: 'Pulmões',
        d: 'Rins',
        rightQ: 'b'
    },

    {
        alreadyAnswered: 0,
        question: 'A união do espermatozoide com o óvulo origina uma célula chamada: ',
        a: 'Zigoto',
        b: 'Bigoto',
        c: 'Feto',
        d: 'Garoto',
        rightQ: 'a'
    },

    {
        alreadyAnswered: 0,
        question: 'A que país pertence a ilha de Terra Nova? ',
        a: 'Estados Unidos',
        b: 'Dinamarca',
        c: 'Canada',
        d: 'França',
        rightQ: 'c'
    },

    {
        alreadyAnswered: 0,
        question: 'Em que país você pode gastar rublos? ',
        a: 'Holanda',
        b: 'Rússia',
        c: 'Espanha',
        d: 'África do Sul',
        rightQ: 'b'
    },

    {
        alreadyAnswered: 0,
        question: 'Que nome recebe a foz de um rio que se abre para o mar? ',
        a: 'Alagado',
        b: 'Manguezal',
        c: 'Pântano',
        d: 'Estuário',
        rightQ: 'd'
    },

    {
        alreadyAnswered: 0,
        question: 'Arábica e robusta são tipos de que? ',
        a: 'Uva',
        b: 'Café',
        c: 'Melão',
        d: 'Laranja',
        rightQ: 'b'
    },

    {
        alreadyAnswered: 0,
        question: 'Em que ano Ayrton Senna venceu o primeiro campeonato de Fórmula 1? ',
        a: '1987',
        b: '1990',
        c: '1985',
        d: '1988',
        rightQ: 'd'
    },

    {
        alreadyAnswered: 0,
        question: 'Qual é a menor República do mundo? ',
        a: 'Mônaco',
        b: 'San Marino', 
        c: 'Nova Zelândia',
        d: 'China',
        rightQ: 'b'
    },

    {
        alreadyAnswered: 0,
        question: 'Quem construiu o primeiro telescópio astronômico completo? ',
        a: 'Cyrus Mccormick',
        b: 'Thomas Edison',
        c: 'Michelangelo',
        d: 'Galileu Galilei',
        rightQ: 'd'
    },

    {
        alreadyAnswered: 0,
        question: 'De quem é a frase Penso logo existo? ',
        a: 'Platão',
        b: 'Júlio Verne',
        c: 'Aristóteles',
        d: 'René Descartes',
        rightQ: 'd'
    },
]

export default questions

const personagens = [
    {
        nome: "Steve Rogers",
        codinome: "Capitão América",
        armaPrincipal: "Escudo americano",
        armaSecundaria: "",
        velocidade: 85,
        forca: 75,
        resistencia: 80,
        descricao: function () {
            return `Nome: ${this.nome}\n
            Codinome: ${this.codinome}\n
            Arma Principal: ${this.armaPrincipal}\n
            Arma Secundária: ${this.armaSecundaria}\n
            Força: ${this.forca}\nVelocidade: ${this.velocidade}\n
            Resistência: ${this.resistencia}`;
        }
    },
    {
        nome: "Tony Stark",
        codinome: "Homem de Ferro",
        armaPrincipal: "Armadura tecnológica",
        armaSecundaria: " ",
        velocidade: 90,
        forca: 80,
        resistencia: 70,
        descricao: function () {
            return `Nome: ${this.nome}\n
            Codinome: ${this.codinome}\n
            Arma Principal: ${this.armaPrincipal}\n
            Arma Secundária: ${this.armaSecundaria}\n
            Força: ${this.forca}\n
            Velocidade: ${this.velocidade}\n
            Resistência: ${this.resistencia}`;
        }
    },
    {
        nome: "Thor Odinson",
        codinome: "Thor",
        armaPrincipal: "Mjolnir",
        armaSecundaria: "Rompe-Tormentas",
        velocidade: 80,
        forca: 100,
        resistencia: 100,
        descricao: function () {
            return `Nome: ${this.nome}\n
            Codinome: ${this.codinome}\n
            Arma Principal: ${this.armaPrincipal}\n
            Arma Secundária: ${this.armaSecundaria}\n
            Força: ${this.forca}\n
            Velocidade: ${this.velocidade}\n
            Resistência: ${this.resistencia}`;
        }
    },
    {
        nome: "Bruce Banner",
        codinome: "Hulk",
        armaPrincipal: "Super força",
        armaSecundaria: "",
        velocidade: 40,
        forca: 100,
        resistencia: 100,
        descricao: function () {
            return `Nome: ${this.nome}\n
            Codinome: ${this.codinome}\n
            Arma Principal: ${this.armaPrincipal}\n
            Arma Secundária: ${this.armaSecundaria}\n
            Força: ${this.forca}\n
            Velocidade: ${this.velocidade}\n
            Resistência: ${this.resistencia}`;
        }
    },
       {
        nome: "Wanda Maximoff",
        codinome: "Feiticeira Escarlate",
        armaPrincipal: "Manipulação da realidade",
        armaSecundaria: "Projeção de energia",
        velocidade: 40,
        forca: 100,
        resistencia: 100,
        descricao: function () {
            return `Nome: ${this.nome}\n
            Codinome: ${this.codinome}\n
            Arma Principal: ${this.armaPrincipal}\n
            Arma Secundária: ${this.armaSecundaria}\n
            Força: ${this.forca}\n
            Velocidade: ${this.velocidade}\n
            Resistência: ${this.resistencia}`;
        }
    }, 
    {
        nome: "Natasha Romanoff",
        codinome: "Viúva Negra",
        armaPrincipal: "Bastões elétricos",
        armaSecundaria: "Atirador M249",
        velocidade: 85,
        forca: 70,
        resistencia: 50,
        descricao: function () {
            return `Nome: ${this.nome}\n
            Codinome: ${this.codinome}\n
            Arma Principal: ${this.armaPrincipal}\n
            Arma Secundária: ${this.armaSecundaria}\n
            Força: ${this.forca}\n
            Velocidade: ${this.velocidade}\n
            Resistência: ${this.resistencia}`;
        }
    },
     {
        nome: "Stephen Strange",
        codinome: "Doutor Estranho",
        armaPrincipal: "Olho de Agamotto",
        armaSecundaria: "Manto da Levitação",
        velocidade: 50,
        forca: 80,
        resistencia: 100,
        descricao: function () {
            return `Nome: ${this.nome}\n
            Codinome: ${this.codinome}\n
            Arma Principal: ${this.armaPrincipal}\n
            Arma Secundária: ${this.armaSecundaria}\n
            Força: ${this.forca}\n
            Velocidade: ${this.velocidade}\n
            Resistência: ${this.resistencia}`;
        }
    }, 
         {
        nome: "",
        codinome: "Visão ",
        armaPrincipal: "Joia da Mente",
        armaSecundaria: " ",
        velocidade: 90,
        forca: 80,
        resistencia: 60,
        descricao: function () {
            return `Nome: ${this.nome}\n
            Codinome: ${this.codinome}\n
            Arma Principal: ${this.armaPrincipal}\n
            Arma Secundária: ${this.armaSecundaria}\n
            Força: ${this.forca}\n
            Velocidade: ${this.velocidade}\n
            Resistência: ${this.resistencia}`;
        }
    }, 
    {
        nome: "Peter Parker",
        codinome: "Homem Aranha",
        armaPrincipal: "Teia",
        armaSecundaria: " ",
        velocidade: 75,
        forca: 60,
        resistencia: 55,
        descricao: function () {
            return `Nome: ${this.nome}\n
            Codinome: ${this.codinome}\n
            Arma Principal: ${this.armaPrincipal}\n
            Arma Secundária: ${this.armaSecundaria}\n
            Força: ${this.forca}\n
            Velocidade: ${this.velocidade}\n
            Resistência: ${this.resistencia}`;
        }
    },
    {
        nome: "Thanos",
        codinome: "Titã Louco",
        armaPrincipal: "Manopla do Infinito",
        armaSecundaria: "Força Brutal",
        velocidade: 70,
        forca: 100,
        resistencia: 100,
        descricao: function () {
            return `Nome: ${this.nome}\n
            Codinome: ${this.codinome}\n
            Arma Principal: ${this.armaPrincipal}\n
            Arma Secundária: ${this.armaSecundaria}\n
            Força: ${this.forca}\n
            Velocidade: ${this.velocidade}\n
            Resistência: ${this.resistencia}`;
        }
    }
];

function encontrarMelhor(atributo) {
    let melhor = personagens[0];

    personagens.forEach(personagem => {
        if (personagem[atributo] > melhor[atributo]) {
            melhor = personagem;
        }
    });

    return melhor;
}

console.log("Melhor em cada atributo:");
console.log(`- Maior força: ${encontrarMelhor("forca").codinome}`);
console.log(`- Maior velocidade: ${encontrarMelhor("velocidade").codinome}`);
console.log(`- Maior resistência: ${encontrarMelhor("resistencia").codinome}`);

function encontrarMaisForte() {
    let maisForte = personagens[0];

    personagens.forEach(personagem => {
        let poderAtual = personagem.forca + personagem.velocidade + personagem.resistencia;
        let poderMaisForte = maisForte.forca + maisForte.velocidade + maisForte.resistencia;

        if (poderAtual > poderMaisForte) {
            maisForte = personagem;
        }
    });

    return maisForte;
}

console.log(`\nO personagem mais forte no geral é: ${encontrarMaisForte().codinome}`);

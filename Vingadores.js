const personagens = [
    { nome: "Homem de Ferro", forca: 80, velocidade: 70, inteligencia: 100 },
    { nome: "Capitão América", forca: 85, velocidade: 65, inteligencia: 75 },
    { nome: "Thor", forca: 100, velocidade: 60, inteligencia: 70 },
    { nome: "Hulk", forca: 100, velocidade: 50, inteligencia: 60 },
    { nome: "Viúva Negra", forca: 50, velocidade: 80, inteligencia: 85 },
    { nome: "Gavião Arqueiro", forca: 55, velocidade: 75, inteligencia: 80 },
    { nome: "Thanos", forca: 100, velocidade: 55, inteligencia: 90 }
];

function compararPersonagens() {
    for (let i = 0; i < personagens.length; i++) {
        for (let j = i + 1; j < personagens.length; j++) {
            const p1 = personagens[i];
            const p2 = personagens[j];
            console.log(`\nComparando ${p1.nome} vs ${p2.nome}`);
            
            for (const atributo of ["forca", "velocidade", "inteligencia"]) {
                if (p1[atributo] > p2[atributo]) {
                    console.log(`${p1.nome} vence em ${atributo}! (${p1[atributo]} > ${p2[atributo]})`);
                } else if (p1[atributo] < p2[atributo]) {
                    console.log(`${p2.nome} vence em ${atributo}! (${p2[atributo]} > ${p1[atributo]})`);
                } else {
                    console.log(`${p1.nome} e ${p2.nome} empatam em ${atributo}! (${p1[atributo]} = ${p2[atributo]})`);
                }
            }
        }
    }
}

compararPersonagens();

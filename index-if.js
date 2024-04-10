class classeHeroi {
    
    constructor(nome, idade, classe) {
    this.nome = nome;
    this.idade = idade;
    this.classe = classe;
    }
      
atacar() {
    let ataque
    if (this.classe === "mago"){
      ataque = "Magia de fogo"
    } else if (this.classe === "guerreiro"){
      ataque = "Uma Espada Spectral"
    } else if (this.classe === "monge"){
      ataque = "Artes Marciais"
    } else if (this.classe === "ninja"){
      ataque = "Shuriken"
    } else ataque = "usou um ataque desconhecido e não obteve êxito";

      console.log(`O ${this.classe} ${this.nome} de ${this.idade} anos, atacou usando ${ataque}`)
  }
}

const hero1 = new classeHeroi("Albino", 22, "ninja")
const hero2 = new classeHeroi("Antonio", 58, "monge")
const hero3 = new classeHeroi("altair", 40, "guerreiro")
const hero4 = new classeHeroi("Álamo", 258, "mago")
const hero5 = new classeHeroi("Ascer", 10, "child") 

hero1.atacar()
hero2.atacar()
hero3.atacar()
hero4.atacar()
hero5.atacar()
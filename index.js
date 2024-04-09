/*
Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )
*/

class classeHeroi {
    
    constructor(nome, idade, classe) {
    this.nome = nome;
    this.idade = idade;
    this.classe = classe;
    }
    
/*
além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)    
*/
    

atacar() {
    let ataque
    switch (this.classe) {
      case "mago":
        ataque = "Magia"
        break
      case "guerreiro":
        ataque = "Uma Espada"
        break
      case "monge":
        ataque = "Artes Marciais"
        break
      case "ninja":
        ataque = "Shuriken"
        break
      default:
        ataque = "usou um ataque desconhecido e não obteve êxito"
    }
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
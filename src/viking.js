// Soldier
class Soldier {
    constructor(health,strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength; 
    }
    recieveDamage(damage){
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(vikingName,health,strength){
        this.vikingName = ""
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength; 
    }
    recieveDamage(damage){
        this.health -= damage;
        if(health>=1){
            return `${this.vikingName} has recieved ${damage} points of damage`

        }else{
            return `${this.vikingName} has died in act of combat`
    }
    }
    battlecry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    recieveDamage(damage){
        this.health -= damage;
        if(health>=1){
            return `a Saxon has recieved ${damage} points of damage`
        }else{
            return`A Saxon has died in act of combat`
    }
    }

}

// War
class War {
    constructor{
        this.vikingArmy=[];
        this.SaxonArmy=[];
    }
    addViking(viking){
        this.vikingArmy.push(viking);
    }
      
    addSaxon(saxon){
        this.SaxonArmy.push(saxon);
    }

    countTheDeads(array){
        array.forEach((e,i)
        if(health<=0){
            array.push
        }else{
            array.splice (i,1)null;
        }
        )
        
    }
    vikingAttack(){
        const result = this.saxonArmy [0].recieveDamage(this.vikingArmy[0].strength);
        this.countTheDeads(this.saxonArmy)
        return recieveDamage(viking.strength);
    }
    saxonAttack(){
        const result = this.vikingArmy[0].recieveDamage(this.saxonArmy[0].strength);
        this.countTheDeads(this.vikingArmy);
    }
    showStatus(){
        if(this.saxonArmy.length <=0){
            return "Vikings have won the war of the century!"
        }else if (this.vikingArmy.length<=0){
            return "Saxons have fought for their lives and survived another day... "
        }else{ 
            return "Vikings and Saxons are still in the thick of battle."

        }
    }
}

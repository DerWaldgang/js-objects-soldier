const soldier = {

    name: 'J.Price',
    health: 10,
    weapon: {
        name: 'AK-47',
        ammo: 30,
    },
    ammunition: 3,

    fire: function () {
        if(this.weapon.ammo > 0){
            this.weapon.ammo -= 1
            console.log("Fire! Fire! Don't move, drop the gun ! Fire!")
        } else {
            console.log("Mag is empty, reload quickly!")
        }


    },

    reload: function () {
        if(this.ammunition > 0) {
            this.weapon.ammo = 30
            this.ammunition -= 1
            console.log('Reloading...')
        } else {
            console.log("There are no ammunition for reload...")
        }
 
    },

    injure: function () {
        if(this.health > 0){
            this.health -= 1
            console.log("I got shot, but i haven't give up!")
        } else {
            console.log('You dead...')
            return false
        }

        
    },


}
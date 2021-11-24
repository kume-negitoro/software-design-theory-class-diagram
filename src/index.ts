import { Hero } from './Hero'
import { Dragon } from './Dragon'
import { HeroSword } from './HeroSword'

const main = () => {
    const hero = new Hero()
    const dragon = new Dragon()

    const sword = new HeroSword()
    hero.equip(sword)

    dragon.attack(hero)
    hero.attack(dragon)

    dragon.attack(hero)
    hero.attack(dragon)

    dragon.skill(hero)
    hero.useNextEquipment(dragon)

    dragon.attack(hero)
    hero.skill(dragon)
}

main()

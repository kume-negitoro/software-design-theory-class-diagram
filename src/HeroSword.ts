import { Equipment } from './Equipment'
import { Unit } from './Unit'

export class HeroSword extends Equipment {
    protected recoverValue = 10
    protected damageValue = 10

    constructor() {
        super()

        this.name = 'おうじゃのけん'
        this.power = 20
    }

    effect(user: Unit, target: Unit): void {
        this.recoverAndDamage(user, target)
    }

    recoverAndDamage(user: Unit, target: Unit): void {
        console.log(`${user.getName()} は ${this.getName()} を かかげた ！`)
        user.onRecover(this.recoverValue)
        target.onDamage(this.damageValue)
    }
}

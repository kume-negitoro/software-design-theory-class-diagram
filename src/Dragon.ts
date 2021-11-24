import { Unit } from './Unit'

export class Dragon extends Unit {
    constructor() {
        super()

        this.name = 'ドラゴン'
        this.hitPoint = 50
        this.power = 15

        this.skillName = 'しゃくねつ の ほのお'
        this.skillCost = 2
        this.skillDamage = 10
    }
}

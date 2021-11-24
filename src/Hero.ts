import { Unit } from './Unit'
import { Equipment } from './Equipment'

export class Hero extends Unit {
    protected equipments: Equipment[]

    constructor() {
        super()

        this.name = 'ゆうしゃ'
        this.hitPoint = 20
        this.power = 20

        this.skillName = 'ドラゴンぎり'
        this.skillCost = 2
        this.skillDamage = 15

        this.equipments = []
    }

    override attack(target: Unit) {
        let power = this.power
        for (const equipment of this.equipments) {
            power += equipment.getPower()
        }

        const damage = Math.ceil(power / 2 - target.getDefense() / 4)
        console.log(`${this.name} の こうげき ！`)

        target.onDamage(damage)
    }

    equip(equipment: Equipment) {
        if (this.equipments.length > 5) {
            console.log(`${this.name} は これいじょう そうびできない`)
            return
        }

        console.log(`${this.name} は ${equipment.getName()} を そうびした`)
        this.equipments.push(equipment)
    }

    useNextEquipment(target: Unit) {
        const item = this.equipments.shift()
        if (!item) {
            console.log(`${this.name} は そうび が ない ！`)
            return
        }
        this.equipments.push(item)
        item.effect(this, target)
    }
}

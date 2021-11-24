export abstract class Unit {
    protected name: string

    protected hitPoint: number
    protected magicPoint: number
    protected power: number
    protected defense: number
    protected speed: number

    protected skillName: string
    protected skillDamage: number
    protected skillCost: number

    constructor() {
        this.name = 'けつばん'

        this.hitPoint = 10
        this.magicPoint = 10
        this.power = 10
        this.defense = 10
        this.speed = 10

        this.skillName = 'スキル'
        this.skillDamage = 0
        this.skillCost = 0
    }

    attack(target: Unit) {
        const damage = Math.ceil(this.power / 2 - target.getDefense() / 4)
        console.log(`${this.name} の こうげき ！`)

        target.onDamage(damage)
    }

    skill(target: Unit) {
        console.log(`${this.name} の ${this.skillName} ！`)

        if (this.magicPoint - this.skillCost < 0) {
            console.log('しかし MP が たりない ！')
            return
        }

        this.magicPoint -= this.skillCost
        target.onDamage(this.skillDamage)
    }

    onDamage(damage: number) {
        this.hitPoint -= damage
        console.log(`${this.name} は ${damage} の ダメージ を うけた ！`)

        if (this.hitPoint < 0) {
            this.onDead()
            return
        }

        if (this.hitPoint <= 5) {
            console.log(`${this.name} は ぼろぼろ だ ！`)
        }
    }

    onRecover(point: number) {
        this.hitPoint += point
        console.log(`${this.name} は ${point} ポイント かいふく ！`)
    }

    onDead() {
        console.log(`${this.name} は たおれた ！`)
    }

    getName(): string {
        return this.name
    }

    getHitPoint(): number {
        return this.hitPoint
    }

    getMagicPoint(): number {
        return this.magicPoint
    }

    getPower(): number {
        return this.power
    }

    getDefense(): number {
        return this.defense
    }

    getSpeed(): number {
        return this.speed
    }

    getSkillName(): string {
        return this.skillName
    }
}

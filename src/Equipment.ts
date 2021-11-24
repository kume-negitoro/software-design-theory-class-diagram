import { Unit } from './Unit'

export class Equipment {
    protected name: string
    protected power: number

    constructor() {
        this.name = 'そうび'
        this.power = 0
    }

    effect(user: Unit, target: Unit): void {
        console.log(`${user.getName()} は ${this.getName()} を かかげた ！`)
        console.log('しかし なにも おこらなかった ！')
    }

    getName(): string {
        return this.name
    }

    getPower(): number {
        return this.power
    }
}

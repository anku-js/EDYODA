import { Dispatch, SetStateAction } from "react"

export interface Subscription {
    id: number,
    month : number;
    totalPrice : number,
    perMonthPrice: number,
    activePlan: boolean,
    planSelectedId: number,
    setPlanSelectedId: Dispatch<SetStateAction<number>>,
}
export interface HeroText {
    slashedPrice: number,
    currentPrice : number
}



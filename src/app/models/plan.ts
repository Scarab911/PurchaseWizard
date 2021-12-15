export class Plan {
    public constructor(public readonly planId: number,
        public name: string,
        public period: string,
        public consList: string[],
        public price: number,
        public currency: string,
        public bestOffer?: boolean){
            this.planId = planId;
            this.name = name;
            this.period = period;
            this.consList = consList;
            this.price = price;
            this.bestOffer = bestOffer;
    }
}

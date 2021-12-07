export class Plan {
    public constructor(public readonly planId: number,
        public name: string,
        public consList: string[],
        public price: number){
            this.planId = planId;
            this.name = name;
            this.consList = consList;
            this.price = price;
    }
}

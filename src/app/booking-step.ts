export class BookingStep {
    highestStep:number;
    completed:boolean;
    constructor(highestStep:number, completed:boolean){
        this.highestStep = highestStep;
        this.completed = completed;
    }
}

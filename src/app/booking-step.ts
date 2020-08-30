export class BookingStep {
    highestCompletedStep:number;
    currentStep:number;
    completedSteps:Array<boolean>;

    constructor(highestCompletedStep:number, currentStep:number, completedSteps:Array<boolean>){
        this.highestCompletedStep = highestCompletedStep;
        this.currentStep = currentStep;
        this.completedSteps = completedSteps;
    }
}

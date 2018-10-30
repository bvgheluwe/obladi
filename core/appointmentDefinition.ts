export class AppointmentDefinition {
    constructor(public subject: string, public location: string, public timeFrom: Date
        , public timeTo: Date, public reminderTime: Date, public isAllDay: boolean
        , public description: string, public dates: Date[]){

    }
}

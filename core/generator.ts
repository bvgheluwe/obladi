import { AppointmentDefinition } from './appointmentDefinition';
import * as ical from 'ical-generator';


export class AppointmentGenerator{

    private _ics: string = '';

    public Generate(definition: AppointmentDefinition): void {
        if (definition == null || definition.dates.length == 0){
            this._ics = '';
            return;
        }

        var cal = ical({
            name: 'Appointment sequence',
            timezone: 'Europe/Brussels',
            prodId: {
                company: 'bvgheluwe',
                product: 'iCalSequenceGenerator',
                language: 'NL'
            }
        });

        var date: Date;
        var numDates: number = definition.dates.length;
        var event: any;
        for(var i: number = 0; i < numDates; i++){
            date = definition.dates[i];
            event = cal.createEvent({
                allDay: definition.isAllDay,
                start: new Date(date.getFullYear(), date.getMonth(), date.getDate(), definition.timeFrom.getHours(), definition.timeFrom.getMinutes(), 0),
                end: new Date(date.getFullYear(), date.getMonth(), date.getDate(), definition.timeTo.getHours(), definition.timeTo.getMinutes(), 0),
                summary: definition.subject,
                description: definition.description,
                location: definition.location
            });
            event.createAlarm({
                type: 'display',
                trigger: definition.reminderTime.getSeconds() + definition.reminderTime.getMinutes()*60 + definition.reminderTime.getHours()*3600
            });
            
        }

        this._ics = cal.toString();
    }

    get Result(): string {
        return this._ics;
    }
}
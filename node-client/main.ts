import * as cmd from 'commander';
import * as fs from 'fs';
import { Utils } from '../core/utils';
import { AppointmentDefinition } from '../core/appointmentDefinition';
import { AppointmentGenerator } from '../core/generator';

export class Main {
    
    public Start(): void {
        
        cmd
            .option('-i, --inputfile <file>]', 'The input file (json) that specifies the sequence of calendar items')
            .option('-o, --outputfile <file>', 'The output file that will be produced')
            .parse(process.argv);
            
        if (cmd.inputfile == undefined) {
            console.log('   error: inputfile argument is missing');
            process.exit(1);
        }
        
        var parsed = this.ReadJson(<string>cmd.inputfile);
        var appointment: AppointmentDefinition = this.Convert(parsed);
        
        var generator: AppointmentGenerator = new AppointmentGenerator();
        generator.Generate(appointment);
        console.log(generator.Result);
        fs.writeFileSync(cmd.outputfile, generator.Result);
        console.log('Done!');
    }

    private ReadJson(file: string): any {
        var appointmentJson: string = fs.readFileSync(cmd.inputfile, { encoding: 'utf8' });
        return JSON.parse(appointmentJson);
    }

    private Convert(json: any) : AppointmentDefinition {
        var l: number = json.dates.length;
        var dates: Date[] = new Array<Date>();
        for (var i = 0; i < l; i++) {
            dates[i] = Utils.parseDate(json.dates[i]);
        }
        var appointment = new AppointmentDefinition(
            json.subject, json.location, Utils.parseTime(json.timeFrom), Utils.parseTime(json.timeTo)
            , Utils.parseTime(json.reminderTime), json.isAllDay, json.description, dates
        );

        return appointment;
    }
}

var program = new Main();
program.Start();

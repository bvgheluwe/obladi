
export class Utils {

    public static parseDate(dateStr : string) : Date {
        var parts : string[] = dateStr.split("-");
        if(parts.length !== 3){
            throw "date format not ok";
        }

        return new Date(parseInt(parts[0]), parseInt(parts[1])-1, parseInt(parts[2]));
    }

    public static parseTime(timeStr : string) : Date {
        var parts : string[] = timeStr.split(":");
        if(parts.length !== 2){
            throw "time format not ok";
        }

        return new Date(1900,0,1,parseInt(parts[0]), parseInt(parts[1]));
    }
}
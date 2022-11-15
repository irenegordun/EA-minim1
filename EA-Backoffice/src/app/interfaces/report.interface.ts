
//MÍNIM 1 IRENE GORDUN --> gestor de denuncies
//Los documetnos de la colección tendrán al menos 3 tipos de datos diferentes (String, Number i Date)

export class Report {
    _id?: string;
    reportingUser : string;
    description: string;
    importance: number;
    //creation_date ?: Date;


    constructor(reportingUser: string, description: string, importance:number /*, creation_date: Date*/) {
        this.reportingUser = reportingUser;
        this.description = description;
        this.importance = importance;
        //this.creation_date = creation_date;

    }
}
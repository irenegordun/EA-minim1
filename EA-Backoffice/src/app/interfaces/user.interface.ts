export class User {
    _id?: string;
    name: string;
    email: string;
    points: number;
    password: string | undefined; //no entenc perque surt aixi
    language?: string;
    myBookings: string[];
    myOpinions: string[];
    myFavourites: string[];
    myParkings: string[];

    constructor(name: string, email: string, points: number, language: string, 
        myBookings: string[], myOpinions: string[], myFavourites: string[], myParkings: string[]) {
        this.name = name;
        this.email = email;
        this.points = points;
        this.language = language;
        this.myBookings = myBookings;
        this.myOpinions = myOpinions;
        this.myFavourites = myFavourites;
        this.myParkings = myParkings;
    }
}
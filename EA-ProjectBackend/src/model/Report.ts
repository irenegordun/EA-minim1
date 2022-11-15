import {Schema, model} from 'mongoose';

//MÍNIM 1 IRENE GORDUN --> gestor de denuncies
//Los documetnos de la colección tendrán al menos 3 tipos de datos diferentes (String, Number i Date)

const ReportSchema = new Schema({
    reportingUser: {type: Schema.Types.ObjectId, ref: 'User'},
    description: {type:String}, 
    importance: {type:Number},
    creationDate: {type: Date, default:Date.now}, 
})

export default model('Report', ReportSchema);
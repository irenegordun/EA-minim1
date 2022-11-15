import User from '../model/User';
import Report from '../model/Report';

import { Request, Response } from 'express';

//MÍNIM 1 IRENE GORDUN --> gestor de denuncies

// create OK
const create = async (req: Request, res: Response) => {
    const { reportingUser, description, importance, creationDate } = req.body;
	try {
		const reporter = await User.findOne({ email: reportingUser });
		const newReport = new Report({
			reportingUser: reporter._id,
			description,
			importance,
            creationDate
		});
		await newReport.save().catch(Error);
		await User.updateOne(
			{ email: reportingUser },
			{ $addToSet: { myReports: newReport._id } }
		);
		res.status(200).json({ auth: true });
	}
	catch(err) {
		return res.status(400).json({ message: 'Could not create report', err });
	}
};

// get all OK
const getall = async (req: Request, res: Response) => {
	const reports = await Report.find(); 
	res.json(reports);
};

// getOne OK
const getOne = async (req: Request, res: Response) => {
	try {
		const report = await Report.findById(req.params.id);
		res.json(report);
	}
	catch (err) {
		res.status(400).send({ message: 'Report not found', err });
	}
}

// cancel
const cancel = async (req: Request, res: Response) => {
	try {
		const _id = req.params.id;
        const report3 = await Report.findById(_id);
        await User.updateOne(
			{ _id:  report3.reportingUser },
			{ $pull: { myReports: report3._id } }
		);
		await Report.findByIdAndDelete({ _id });
		res.status(200).json({ status: 'Report removed' });
	}
	catch(err) {
		res.status(500).json({ message: 'Report not found', err });
	}
};

// update
const update = async (req: Request, res: Response) => {
	const _id = req.params.id;
	const { reportingUser, description, importance, creationDate } = req.body;
	try {
		const report = await Report.findByIdAndUpdate(_id, {
            description,
            importance,
            creationDate
		}, {new: true});
		return res.json(report);
	}
	catch (err) {
		res.status(400).send({ message: 'Cannot update report', err });
	}
}



export default {
	create,
	getall,
	getOne,
    cancel,
	update

};


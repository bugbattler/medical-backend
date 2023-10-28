
const popupModel = require('../Models/Contact');

exports.createContact = async (req, res) => {
    const {
        fname,
        email,
        phone,
       
    } = req.body;

    const createContact = new popupModel({
        fname,
        email,
        phone,
    });

    console.log("ok")
    createContact.save((error, popup) => {
        if (error) return res.status(400).json({ error });
        if (popup) {
            res.status(201).json({ popup });
        }
    });
}

exports.getContact = async (req, res) => {
    try {
        const getusers = await popupModel.find();
        res.json(getusers);
    }
    catch { (err) => res.json(err) };
}

exports.getSingleContact = async (req, res) => {
    try {
        const user = await popupModel.find({ user: req.params.id });
        res.json(user);
    } catch (err) {
        res.json({ err });
    }
}


exports.updateContact = (req, res) => {
    popupModel.findOneAndUpdate({ _id: req.params.id }, (req.body), { new: true }, (err, data) => {
        try {
            res.json(data);
        } catch (err) {
            res.json({ err });
        }
    })
}


exports.deleteContact = (req, res) => {

    popupModel.findOneAndDelete({ _id: req.params.id }, (err, data) => {
        if (err) {
            res.json({ err });
        } else {
            res.json(data);
        }
    });
}

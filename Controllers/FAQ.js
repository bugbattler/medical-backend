const FAQModel = require('../Models/FAQ');

// Create a new FAQ's 

exports.createFAQ = async (req, res) => {
    const {
        que,
        ans
    } = req.body;

    const createFAQ = new FAQModel({
        que,
        ans
    });

    createFAQ.save((error, FAQ) => {
        if (error) return res.status(400).json({ error });
        if (FAQ) {
            res.status(201).json({ FAQ });
        }
    });
}

// Get all FAQ's  

exports.getFAQ = async (req, res) => {
    try {
        const getusers = await FAQModel.find();
        res.json(getusers);
    }
    catch { (err) => res.json(err) };
}

// Get FAQ's by ID  

exports.getSingleFAQ = async (req, res) => {
    try {
        const user = await FAQModel.find({ user: req.params.UserId });
        res.json(user);
    } catch (err) {
        res.json({ err });
    }
}

// Update FAQ's by ID  

exports.updateFAQ = (req, res) => {
    FAQModel.findOneAndUpdate({ _id: req.params.id }, (req.body), { new: true }, (err, data) => {
        try {
            res.json(data);
        } catch (err) {
            res.json({ err });
        }
    })
}

// Delete FAQ by ID
exports.deleteFAQ = (req, res) => {

    FAQModel.findOneAndDelete({ _id: req.params.id }, (err, data) => {
        if (err) {
            res.json({ err });
        } else {
            res.json(data);
        }
    });
}
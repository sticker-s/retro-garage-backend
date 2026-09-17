const Part = require('../models/Part');

const getAllParts = async (req, res) => {
    try {
        const allParts = await Part.find();
        // const justPartNames = allParts.map(part => part.name);
        res.json(allParts);
    } catch (error) {
        res.status(500).json({ message: "Error fetching parts" });
    }
};

const addPart = async (req, res) => {
    try {
        const itemToAdd = req.body.newPart;
        const newPart = new Part({
            name: itemToAdd
        });
        await newPart.save();
        res.json({ status: "success", message: "Part added to database!" })
    } catch (error) {
        res.status(500).json({ message: "Error inserting part" });
    }
};

const deletePart = async (req, res) => {
    try {
        const id = req.params.id;
        await Part.deleteOne({ _id: id });
        res.json({ status: "Success", message: `deleted from da mongo` });

    } catch (error) {
        res.status(500).json({ message: "Error deleting from da database" });
    }

};
const updatePart = async (req, res) => {
    try {
        const id = req.params.id;
        const newName = req.body.newName;

        await Part.updateOne({ _id: id }, { $set: { name: newName } });
        res.json({ status: "success", message: "Part updated successfully" });

    } catch (error) {
        res.status(500).json({ message: "Error updating part" });
    }
}
module.exports = { getAllParts, addPart, deletePart, updatePart };
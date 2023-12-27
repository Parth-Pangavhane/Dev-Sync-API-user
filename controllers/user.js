const User = require("../models/user");
const getAllusers = async(req, res) => {
    const myData = await User.find({});
    res.status(200).json({ myData });

};

const getAllusersTesting = async(req, res) => {
    const myData = await User.find(req.query);
    res.status(200).json({ myData });

};

module.exports = { getAllusers, getAllusersTesting };
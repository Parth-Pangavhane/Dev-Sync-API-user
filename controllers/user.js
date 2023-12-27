const getAllusers = async(req, res) => {
    res.status(200).json({ msg: "I am getALLuserS" });

};

const getAllusersTesting = async(req, res) => {
    res.status(200).json({ msg: "I am getALLuserSTESTING" });

};

module.exports = { getAllusers, getAllusersTesting };
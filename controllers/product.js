const getAllProducts = async(req, res) => {
    res.status(200).json({ msg: "I am getALLPRODUCTS" });

};

const getAllProductsTesting = async(req, res) => {
    res.status(200).json({ msg: "I am getALLPRODUCTSTESTING" });

};

module.exports = { getAllProducts, getAllProductsTesting };
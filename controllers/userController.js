import userModel from "../models/userModel.js";

export const getuserControlller = async (req, res) => {
    try {
        const user = await userModel.find({});
        res.status(200).send({
            success: true,
            message: "All user List",
            user,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error in getting user",
        });
    }
}

//delete user
export const deleteUserCOntroller = async (req, res) => {
    try {
        const { id } = req.params;
        await userModel.findByIdAndDelete(id);
        res.status(200).send({
            success: true,
            message: "user Deleted Successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "error while deleting user",
            error,
        });
    }
};
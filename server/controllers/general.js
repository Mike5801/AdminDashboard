import User from "../models/User.js";

export const getUser = async (req, res) => {
  console.log("got to route correctly")
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
    
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}
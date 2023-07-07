const {imageUploader} = require('../utils/cloudinary');
const user = require('../models/user.model')

const register = async (req, res) => {
    try {
        const newUser = await user.create(req.body);
        res.status(201).json({ message: "user craeted successfully", USER: { id: newUser._id,name: newUser.name,
             email: newUser.email } })
    } catch (error) {
        res.json(error.message);
    }
}
const uploadProfilePics = async (req, res) => {
    const {userId:id} = req.params.id
    const User = await user.findOne({id});
    if(!User){
        throw new Error('user not found')
    }
    const path = req.file.path;
    const image = await imageUploader(User._id,path)
    const saveProfilePics = await user.findOneAndUpdate({_id:req.params.id},{image:image},
        {new:true,runValidators:true})
    res.status(200).json({imageUrl: image})
}

module.exports = { register, uploadProfilePics }
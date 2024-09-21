import User from "../Model/userModel.js"

export const create = async(req, res)=>{
    try {
        const newUser = new User(req.body)
        const {email} = newUser;
        const userExist = await User.findOne({email})

        if(userExist){
            return res.status(400).json({message: "user already exist"})
        }
        const savedData = await newUser.save()
        res.status(200).json(savedData)
    } catch (error) {
        res.status(500).json({errorMessage: error.message})
    }
}

export const getAllUsers = async(req, res)=>{
    try {
        const userData = await User.find();
        if(!userData || userData.length===0){
            return res.status(404).json({message: "User data not found"})
        }
        res.status(200).json(userData)
    } catch (error) {
        res.status(500).json({errorMessage: error.message})
    }
}

export const update = async(req, res) =>{
    try {
        const id = req.params.id;
        const userExist = await User.findOne({_id: id})
        if(!userExist){
            return res.status(404).json({message: "User not found"})
        }
        const updateUser = await User.findByIdAndUpdate(id, req.body,{new: true})
        res.status(201).json(updateUser)
    } catch (error) {
        res.status(500).json({errorMessage: error.message})
    }
}

export const deleteUser = async(req, res)=>{
    try {
        const id = req.params.id;
        const userExist = await User.findOne({_id: id})
        if(!userExist){
            return res.status(404).json({message: "User not found"})
        }
        await User.findByIdAndDelete(id)
        res.status(201).json({message: "User deleted success"})
    } catch (error) {
        res.status(500).json({errorMessage: error.message})
    }
}
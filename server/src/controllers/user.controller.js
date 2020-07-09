import UserModel from '../models/User'
import passport from 'passport'

export const readAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find()
    res.json(users)
  } catch (e) {
    console.error(e)
    res.status(500).json({
      error: e
    })
  }
}

export const readOneUser = async (req, res) => {
  const { id } = req.params
  try {
    const event = await UserModel.findById(id)
    res.json(event)
  } catch (e) {
    console.error(e)
    res.status(500).json({
      error: e
    })
  }
}

export const createUser = async (req, res) => {
  const { body } = req

  try {
    const user = await UserModel.register(new UserModel({username: body.username}), body.password)
    res.json(user)
  } catch (e) {
    res.json({
      error: e,
      body: body
    })
  }
}

export const updateUser = async (req, res) => {
  const { body } = req
  const { id } = req.params

  try {
    const user = await UserModel.findByIdAndUpdate(id, body, { new: true })
    res.json(user)
  } catch (e) {
    res.json({
      error: e,
      body: body
    })
  }
}

export const deleteUser = async (req, res) => {
  const { id } = req.params

  try {
    const user = await UserModel.findByIdAndDelete(id)
    res.json(user)
  } catch (e) {
    res.json({
      error: e
    })
  }
}

export const loginUser = async (req, res)=>{
  res.json({
    username: req.user.username,
    status: "Authorized"
  })
}

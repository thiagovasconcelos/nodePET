const express = require("express")
const userRoutes = express.Router()

const User = require ("../model/User")

app.post("/user", async (req, res) => {
    const {name, email} = req.body 
    const user = {
     name,
     email
    } 
    try{
 
      await User.create(user)
      res.status(201).json({message: "Usuario criado com sucesso"})
    } catch (error){
      res.status(500).json({error: error})
    }
 
    app.get("/user", async (req, res) => {
     try{
         const users = await User.fing()
         res.status(200).json(users)
     } catch (error){
         res.status(500).json({error: error})
       }
    
    })
 
 })

 userRoutes.get("/user/:id", async (req, res) =>{
    const id = req.params.id
    try{
        const user = await Users.findOne({_id: id})
        if(!user){
            res.status(422).json({mensage: "Usuario não encontrado"})
            return
        }
        res.status(200).json(user)

    }catch (error){
         res.status(500).json({error: error})
       }
 })

 userRoutes.patch("/user/id", async (req, res) =>{
    const id = req.params.id
    const {name, email} = req.body
    const user = {
        name,
        email
    }
    try{
        const userUpdated = await User.updateOne({_id: id}, user)
        if(userUpdated.matchedCount === 0){
            res.status(500).json({message: "Usuário não encontrado"})
            return
        }
        res.status(200).json(user)

    }catch (error){
        res.status(500).json({error: error})
      }
 }  )

 userRoutes.delete("/user/id:", async (req, res) => {
    const id = req.params.id

    const user = await User.findOne({_id: id})
    if(!user) {
        res.status(422).json({message: "Usuario não encontrado"})
        return
    }
    try{
        await User.deleteOne({_id: id})
        res.status(200).json("Usuario deletado com sucesso")
    } catch (error){
        res.status(500).json({error: error})
    }
 })

 module.exports = userRoutes
import express from "express";

const router= express.Router()

import {Todo} from '../models/todo'

type RequestBody = { text: string }
type RequestParams = { id : string }

let todos :Todo[]=[]

router.get('/',(req,res,next)=>{

    res.status(200).json({todos:todos})
})

router.post('/add',(req,res,next)=>{
    const body = req.body as RequestBody
    const newtodo:Todo = {
        id : new Date().toISOString(),
        text : body.text
    }

    todos.push(newtodo)
    res.status(201).json({message:'added',todos:newtodo})
})

router.put('/update/:id',(req,res,next)=>{
    const params = req.params as RequestParams
    const id= params.id
    const todoindex= todos.findIndex((todoitem) => todoitem.id===id)
    if(todoindex>=0)
    {
        const body = req.body as RequestBody
        todos[todoindex]= {id:todos[todoindex].id,text:body.text}
        return res.status(200).json({message:'updated',todos:todos})
    }
    res.status(205).json({message:'unable to find data'})
})


router.delete('/remove/:id',(req,res,next)=>{
    const params = req.params as RequestParams
    todos=todos.filter(todoitem => todoitem.id!==params.id)
    res.status(207).json({message:'deleted',todos:todos})

})

export default router


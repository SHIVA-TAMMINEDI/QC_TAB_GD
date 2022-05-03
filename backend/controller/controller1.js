const QC1_1= require('../models/modelQC1_1')
const QC1_2= require('../models/modelQC1_2')
const QC2_1= require('../models/modelQC2_1')
const QC2_2= require('../models/modelQC2_2')
const QC3_1= require('../models/modelQC3_1')
const QC4_1= require('../models/modelQC4_1')
const QC5= require('../models/modelQC5')
const QC5_2= require('../models/modelQC5_2')
const QC6_1= require('../models/modelQC6_1')
const QC7_1= require('../models/modelQC7_1')
const QC7_2= require('../models/modelQC7_2')
const QC7_3= require('../models/modelQC7_3')
const QC7_4= require('../models/modelQC7_4')
const QC8= require('../models/modelQC8')
const QC9= require('../models/modelQC9')

    const getQC1_1 = async(req,res)=>{
        const data = await QC1_1.find().sort({ _id: -1 }) // newest first id -1
        res.status(200).json(data)} 



    const getQC1_2 = async(req,res)=>{
        const data = await QC1_2.find().sort({ _id: -1 })
        res.status(200).json(data)}
    
    const getQC2_1 = async(req,res)=>{
        const data = await QC2_1.find().sort({ _id: -1 })
        res.status(200).json(data)}

    const getQC2_2 = async(req,res)=>{
        const data = await QC2_2.find().sort({ _id: -1 })
        res.status(200).json(data)}
    
    const getQC3_1 = async(req,res)=>{
        const data = await QC3_1.find().sort({ _id: -1 })
        res.status(200).json(data)}

    const getQC4_1 = async(req,res)=>{
        const data = await QC4_1.find().sort({ _id: -1 })
        res.status(200).json(data)}

    
    const getQC5 = async(req,res)=>{
        const data = await QC5.find().sort({ _id: -1 })
         res.status(200).json(data)}

    const getQC5_2 = async(req,res)=>{
        const data = await QC5_2.find().sort({ _id: -1 })
        res.status(200).json(data)}


    const getQC6_1 = async(req,res)=>{
        const data = await QC6_1.find().sort({ _id: -1 })
        res.status(200).json(data)}
    
    const getQC7_1 = async(req,res)=>{
        const data = await QC7_1.find().sort({ _id: -1 })
        res.status(200).json(data)}


    const getQC7_2 = async(req,res)=>{
        const data = await QC7_2.find().sort({ _id: -1 })
        res.status(200).json(data)}


    const getQC7_3 = async(req,res)=>{
        const data = await QC7_3.find().sort({ _id: -1 })
        res.status(200).json(data)}
        
    const getQC7_4 = async(req,res)=>{
        const data = await QC7_4.find().sort({ _id: -1 })
        res.status(200).json(data)}
    
    const getQC8 = async(req,res)=>{
        const data = await QC8.find().sort({ _id: -1 })
        res.status(200).json(data)}

    const getQC9 = async(req,res)=>{
        const data = await QC9.find().sort({ _id: -1 })
        res.status(200).json(data)}    

        
    
    const getGoal = (req,res)=>{
         res.status(200).json({message:"hi t"})
    }
    module.exports = {
        getQC1_1,getQC1_2,getQC2_1,getQC2_2,getQC3_1,getQC4_1,getQC5,getQC5_2,getQC6_1,getQC7_1,getQC7_2,getQC7_3,getQC7_4,getQC8,getQC9}
    
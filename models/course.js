const mongoose=require("mongoose")

const course = mongoose.Schema({

    title:{
        type:String,
        require:true
    },
    content: {
        type:String,
        require:true
    } ,
    video: {
        type:Number,
        require:true
    },
    active:Boolean
})

module.exports=mongoose.model("courses",course)
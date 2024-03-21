const mongoose = require('mongoose');



mongoose.connect('mongodb://127.0.0.1:27017/prepinstaCollege')

	.then(() => console.log('database connected successfully'))

	.catch((e) => console.log('not connected', e))



const courseSchema = new mongoose.Schema({

	title: String,

	cType: String,

	noVideos: Number,

	author: String,

	active: Boolean

})

//crud----create, read, update and delete

const courseRecord = new mongoose.model('courseRecord', courseSchema);



//create document

const Reactdata= new courseRecord({

	title:'React JS',

	cType:'Front End',

	noVideos:45,

	author:'Richa',

	active:true

})



Reactdata.save();

// asyn await

const createDocument = async () => {

	try {

    	const allData = await courseRecord.create([

        	{

            	title: 'Express JS',

            	cType: 'Back End',

            	noVideos: 35,

            	author: 'Richa',

            	active: true

        	},

        	{

            	title: 'Vue JS',

            	cType: 'Front End',

            	noVideos: 55,

            	author: 'Richa',

            	active: true

        	},

        	{

            	title: 'Node JS',

            	cType: 'Back End',

            	noVideos: 25,

            	author: 'Richa',

            	active: true

        	}

    	])

    	const resilt=await courseRecord.insertMany([exp,node,vue])

	}

	catch(e){

    	console.log('error');

	}

}

createDocument();





// read/ get data

const getDocument=async()=>{

    const result1=await courseRecord.find();

    const result2=await courseRecord.find({title:'React JS'});

    const result3=await courseRecord.find({cType:'Front End'},{title:0});

    console.log(result1);

}

getDocument();

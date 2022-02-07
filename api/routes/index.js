const express = require('express');
const router = express.Router();
const path = require('path')

router.get('/',(req,res,next)=>{
	res.sendFile(path.resolve(process.cwd() + './../public/index.html'));
	console.log('Default route called');
	next();
});

module.exports = router;
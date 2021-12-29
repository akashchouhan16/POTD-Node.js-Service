require('dotenv').config();
const express = require('express');
const router = express.Router();
const sanitizer = require('mongo-sanitize');

const problems = require('../model/problem.model');
const {FALL_BACK_GET, FALL_BACK_POST} = require('../api-fallback-responses/fallbacks-router');

let iterator = 1;
const LIMIT = 755;

const filterParameter = (req,res,next)=>{
    req.body = sanitizer(req.body);
    req.query = sanitizer(req.query);
    // console.log(`[*] Request Obj Sanitized`);
    next();
}
router.get('/problemoftheday', async(req,res)=>{
    try{
        if(!iterator)
            iterator = 1; //reset.
        
        const question = await problems.find({question_id: iterator});
        const problem_statement = question[0].problem_statement;
        const link = question[0].link;
        const topic = question[0].topic;
        const data = {
            status: 200,
            message: `Problem Of The Day #${iterator}`,
            problem: problem_statement || `Problem Statement is unavailable`,
            link: link || `Link is unavailable`,
            topic: topic || `Topic is unavailable`
        }
        iterator = (iterator+1)%LIMIT;
        return res.status(200).json(data);

    }catch(error){
        return res.status(500).json({
            status: 500,
            message: `Server Failure`,
            error : error.message
        });
    }
})

router.get('/test',filterParameter, async(req,res)=>{
    const token = req.body.token || req.query.token;
    const sanitizedToken = sanitizer(token);

    if(sanitizedToken === process.env.ADMIN_TOKEN && sanitizedToken !== undefined){
        try{
        const questions = await problems.find({});
        const data = {
            status: 200,
            message: `Problems [Complete Set]`,
            questions: questions
        }
        res.status(200).json(data);
    }catch(err){
        return res.status(401).json({
            message: `Server Failure`,
            error : err.message
        });
    }
    }
    else{
        return res.status(403).json({
            status:403,
            message: token===undefined?`Admin Access Token Needed`:`Invalid Access Token`
        })
    }
    
})

// Fallbacks
router.get('/*', (req,res)=>{
    res.status(403).json(FALL_BACK_GET);
})
router.post('/*', (req,res)=>{
    res.status(403).json(FALL_BACK_POST);
})

module.exports = router;






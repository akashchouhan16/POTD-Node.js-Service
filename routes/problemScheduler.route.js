require('dotenv').config();
const express = require('express');
const router = express.Router();
const sanitizer = require('mongo-sanitize')
const schedule = require('node-schedule');
const hash_fxn = require('string-hash');

const problems = require('../model/problem.model');
const {FALL_BACK_GET, FALL_BACK_POST} = require('../api-fallback-responses/fallbacks-router');
const sanitize = require('mongo-sanitize');

let iterator = 315;
const LIMIT = 755;

const filterParameter = (req,res,next)=>{
    req.body = sanitizer(req.body);
    req.query = sanitizer(req.query);
    next();
}
/*
Cron For Every Day @ midnight -> | 0 0 0 * * * |  
Cron For Every hour -> | 0 0 * * * * |
*/ 
// =============================== DISCARDED ====================================================
// let cachedProblem;
// schedule.scheduleJob('0 * * ? * *', function(){
//   if(counter === 60){
//       iterator = Math.round(1 + Math.random()*LIMIT);
//       counter = 0;
//   }
//   counter= counter + 1;
//   console.log('Problem Of the Day Updated to Problem #' + iterator); 
// });

// For debugging
// schedule.scheduleJob('0 * * ? * *', ()=>{
//     let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
//     let schedulerDateString = new Date().toLocaleDateString("en-IN", options);
//     console.log(`Server Time: `, schedulerDateString);
// })
// =======================================================================================

let cachedProblem={
    question_id: 0,
    problem_statement: "N/A",
    topic: "N/A",
    link: "N/A",
    valid: false
};

router.get('/problemoftheday', async(req,res)=>{
    try{
        if(!iterator)
            iterator = 1; //reset.
        
        const value = req.query.key || '128';
        const key = sanitize(value);
        const hash = hash_fxn(key);
        iterator = Math.round(1+hash%LIMIT);

        let problem_statement,link,topic;
        if(cachedProblem.valid === true && cachedProblem.question_id === iterator){
            //prevent Network Request
            problem_statement = cachedProblem.problem_statement;
            link = cachedProblem.link;
            topic = cachedProblem.topic;
            console.log("Cache Hit For Question #" + iterator);
        }else{
            //Network Request to Atlas:
            console.log("Cache Miss For Question #" + iterator);
            const question = await problems.find({question_id: iterator});
            problem_statement = question[0].problem_statement;
            link = question[0].link;
            topic = question[0].topic;
            
            //cache the problem
            cachedProblem.question_id = iterator;
            cachedProblem.problem_statement = problem_statement;
            cachedProblem.link = link;
            cachedProblem.topic = topic;
            cachedProblem.valid = true;
        }
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const dateString = new Date().toLocaleDateString("en-US", options);
        const data = {
            status: 200,
            message: `Problem Of The Day [Based on ${topic}]`,
            day: dateString,
            response: {
                problem_id: iterator+1000,
                problem: problem_statement || `Problem Statement is unavailable`,
                link: link || `Link is unavailable`,
                topic: topic || `Topic is unavailable`
            }
        }
        
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






require('dotenv').config();
const express = require('express');
const _router = express.Router();

const sanitizer = require('mongo-sanitize')
const needle = require('needle')
const Proxy_URI = process.env.PROXY_URI;

const valid_ids = ['codeforces', 'code_chef', 'leet_code', 'at_coder', 'hacker_rank', 'hacker_earth', 'kick_start', 'top_coder'];

_router.get('/contests/:id', async(req,res)=>{
    try{
        const platform = req.params.id;
        let value = sanitizer(platform);
        let validity = false;

        for(let id in valid_ids){
            if(value === valid_ids[id]){
                validity = true;
                break;
            }
        }
        
        //default platform is set to codeforces for invalid ids.
        if(validity === false)
            value = 'codeforces'; 
        
        needle.get(Proxy_URI + value, (error, response, body)=>{
            if(error)
                throw error;
                
            return res.status(200).json({
            contests: body
            });
        });
    }catch(error){
        console.warn(error.message);
        return res.status(503).json({
            message: `Something went wrong at the POTD Server. :(`
        })
    }
})

module.exports = _router;

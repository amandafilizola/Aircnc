const express = require('express');
const User = require('../models/Spot');
//index, show, store, update, destroy


module.exports = {
    async store(req, res) {
        console.log(req.body)
        console.log(req.file)
        return res.json({ok:true});
    }
};
const { ObjectId } = require('mongodb');
const db = require('../db');

const getHomePage = async function (req, res) {
    // let data = await db.get().collection('data').find().toArray()
    // res.render('index', { data });
    res.render('index');
}

exports.getHomePage = getHomePage;
const Spot = require('../models/spot');

module.exports = {
    index,
    new: newSpot,
    show,
}

async function index (req, res) {
    const spots = await Spot.find({});
    res.render('spots/index', {title: 'Index Functionality', spots})
};

function newSpot (req, res) {
    res.render('spots/new', {title: 'Add Surf Spot'})
}

async function show (req, res) {
    const spot = await Spot.findById(req.params.id)
    console.log(spot)
    res.render('spots/show', {title: 'Show', spot})
}
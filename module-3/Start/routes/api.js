/**
 * Created by JaserAkuly on 10/4/15.
 */
var express = require('express');
var router = express.Router();

router.use(function(req, res, next){

    if(!req.isAuthenticated()){
        res.redirect('/#login');
    }
});
router.route('/posts')
    //returns all post
    .get(function (req, res) {

        //temporary solution
        res.send({message: 'TODO return all post'})
    })

    .post(function (req, res) {

        //temporary solution
        res.send({message: 'TODO Create a new post'});
    });

router.route('/posts/:id')

    //creates a particular post
    .get(function (req, res) {
        res.send({message: 'TODO return post with ID ' + req.params.id})
    })

    //updates exisiting post
    .put(function (req, res) {
        res.send({message: 'TODO return modify with ID ' + req.params.id})
    })

    //updates exisiting post
    .delete(function (req, res) {
        res.send({message: 'TODO return delete with ID ' + req.params.id})
    });
module.exports = router;
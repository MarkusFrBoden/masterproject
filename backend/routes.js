const express = require('express');
const { ObjectId } = require('mongodb');
const { connectToDb, getDb } = require('./db');

const router = express.Router();

connectToDb((err) => {
  if (!err) {
    db = getDb();
  }
});

//Get SurveysOverview
router.get('/SurveysOverview', (req, res) => {
    let surveys = []

    db.collection('surveys')
        .find()
        .sort({ createdAt: 1 })
        .forEach(survey => surveys.push({"_id":survey._id,"title":survey.title,"createdFor": survey.createdFor,"createdBy": survey.createdBy,"createdAt": survey.createdAt, "updatedBy":survey.updatedBy, "updatedAt":survey.updatedAt}))
        .then(() => {
            res.status(200).json(surveys)
        })
        .catch(() => {
            res.status(500).json({ error: 'Could not fetch the documents' })
        })
})

router.get('/SurveyById/:id', (req, res) => {
    if (ObjectId.isValid(req.params.id)){
        db.collection('surveys')
        .findOne({ _id: new ObjectId(req.params.id) })
        .then(survey => {
              res.status(200).json(survey);
        })
        .catch(() => {
            res.status(500).json({ error: 'Could not fetch the document' });
        });
    } else {
        res.status(500).json({error:'Not a valid doc id'})
    }
});

//Post
router.post('/Survey', (req, res) => {
    const survey = req.body

    db.collection('surveys')
        .insertOne(survey)
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json({ err: 'Could not create the documents' })
        })
})

//Delete
router.delete('/SurveyById/:id', (req, res) =>{
    if (ObjectId.isValid(req.params.id)){
        db.collection('surveys')
        .deleteOne({ _id: new ObjectId(req.params.id) })
        .then(result => {
              res.status(200).json(result);
        })
        .catch(() => {
            res.status(500).json({ error: 'Could not delete the document' });
        });
    } else {
        res.status(500).json({error:'Not a valid doc id'})
    }
})

router.post('/deleteMultipleSurveys', async (req, res) => {
    const surveyIds = req.body.surveyIds;
    console.log(surveyIds)
    if (!surveyIds || !Array.isArray(surveyIds)) {
        return res.status(400).json({ error: 'surveyIds is not a valid array.' });
    }
    const areValidIds = surveyIds.every(id => ObjectId.isValid(id));
    if (!areValidIds) {
        return res.status(400).json({ error: 'One or more provided survey IDs are not valid.' });
    }
    const objectIds = surveyIds.map(id => new ObjectId(id));
    try {
        const result = await db.collection('surveys').deleteMany({ _id: { $in: objectIds } });
        res.status(200).json(result);
    } catch (error) {
        console.error('Error deleting surveys:', error);
        res.status(500).json({ error: 'Could not delete surveys.' });
    }
});

//Patch
router.patch('/surveys/:id', (req, res) => {
    const updates = req.body

    if (ObjectId.isValid(req.params.id)){
        db.collection('surveys')
        .updateOne({ _id: new ObjectId(req.params.id)}, {$set: updates})
        .then(result => {
              res.status(200).json(result);
        })
        .catch(() => {
            res.status(500).json({ error: 'Could not update the document' });
        });
    } else {
        res.status(500).json({error:'Not a valid doc id'})
    }
})

module.exports = router;
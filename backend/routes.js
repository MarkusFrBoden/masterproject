const express = require('express');
const multer = require('multer');
const { ObjectId } = require('mongodb');
const { connectToDb, getDb } = require('./db');

//create exproess router for internal API routes
const router = express.Router();
connectToDb((err) => {
    if (!err) {
        db = getDb();
    }
});

// ---------------------------- User ----------------------------------
//Get
router.get('/UsersOverview', (req, res) => {
    let users = []

    db.collection('users')
        .find()
        .toArray()
        .then(users => {
            const formattedUsers = users.map(user => ({
                _id: user._id,
                email: user.email,
                password: user.password,
                organization: user.organization
            }));
            res.status(200).json(formattedUsers);
        })
        .catch(() => {
            res.status(500).json({ error: 'Could not fetch the documents' });
        });
})

router.get('/UserByMail/:email', (req, res) => {
    db.collection('users')
        .findOne({ email: req.params.email })
        .then(user => {
            res.status(200).json(user);
        })
        .catch(() => {
            res.status(500).json({ error: 'Could not fetch the document' });
        });
});

router.get('/UserById/:Id', (req, res) => {
    db.collection('users')
        .findOne({ _id: new ObjectId(req.params.Id) })
        .then(user => {
            res.status(200).json(user);
        })
        .catch(() => {
            res.status(500).json({ error: 'Could not fetch the document' });
        });
});

router.get('/UserByMailAndPassword/:email/:password', (req, res) => {
    db.collection('users')
        .findOne({ email: req.params.email, password: req.params.password })
        .then(user => {
            res.status(200).json(user);
        })
        .catch(() => {
            res.status(500).json({ error: 'Could not fetch the document' });
        });
});


//Post
router.post('/User', (req, res) => {
    const user = req.body

    db.collection('users')
        .insertOne(user)
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json({ err: 'Could not create the documents' })
        })
})


//Patch
router.patch('/UserById/:id', (req, res) => {
    const updates = req.body

    if (ObjectId.isValid(req.params.id)) {
        db.collection('users')
            .updateOne({ _id: new ObjectId(req.params.id) }, { $set: updates })
            .then(result => {
                res.status(200).json(result);
            })
            .catch(() => {
                res.status(500).json({ error: 'Could not update the document' });
            });
    } else {
        res.status(500).json({ error: 'Not a valid doc id' })
    }
})


// ------------------------ Organization -------------------------------
//Get
router.get('/OrganizationByName/:organizationName', (req, res) => {
    db.collection('users')
        .findOne({ 'organization.name': req.params.organizationName })
        .then(user => {
            res.status(200).json(user);
        })
        .catch(() => {
            res.status(500).json({ error: 'Could not fetch the document' });
        });
});

router.get('/OrganizationOverview', (req, res) => {
    db.collection('users')
        .aggregate([
            { $match: { 'organization.name': { $ne: 'EDIH Thuringia' } } },
            { $group: { _id: "$organization.name", organization: { $first: "$organization" } } }
        ])
        .toArray()
        .then(organizations => {
            res.status(200).json(organizations);
        })
        .catch(() => {
            res.status(500).json({ error: 'Could not fetch the document' });
        });
});

router.post('/deleteMultipleOrganizations', async (req, res) => {
    const orgaNames = req.body.orgaNames;
    if (!orgaNames || !Array.isArray(orgaNames)) {
        return res.status(400).json({ error: 'orgaNames is not a valid array.' });
    }
    else {
        try {
            const result = await db.collection('users').deleteMany({ 'organization.name': { $in: orgaNames } });
            res.status(200).json(result);
        } catch (error) {
            console.error('Error deleting organization:', error);
            res.status(500).json({ error: 'Could not delete Organization.' });
        }
    }
});



// -------------------------- DMA -----------------------------------
//Get
router.get('/DmaOverview', (req, res) => {
    let dmas = []

    db.collection('DMAs')
        .find()
        .sort({ createdAt: 1 })
        .forEach(dma => dmas.push({ "_id": dma._id, "title": dma.title, "createdFor": dma.createdFor, "createdBy": dma.createdBy, "createdAt": dma.createdAt, "updatedBy": dma.updatedBy, "updatedAt": dma.updatedAt }))
        .then(() => {
            res.status(200).json(dmas)
        })
        .catch(() => {
            res.status(500).json({ error: 'Could not fetch the documents' })
        })
})

router.get('/DmaByOrganization/:organizationName', (req, res) => {
    let dmas = []

    db.collection('DMAs')
        .find({ createdFor: req.params.organizationName })
        .sort({ createdAt: 1 })
        .forEach(dma => dmas.push({ "_id": dma._id, "title": dma.title, "createdBy": dma.createdBy, "createdAt": dma.createdAt, "updatedBy": dma.updatedBy, "updatedAt": dma.updatedAt }))
        .then(() => {
            res.status(200).json(dmas)
        })
        .catch(() => {
            res.status(500).json({ error: 'Could not fetch the documents' })
        })
})

router.get('/DmaById/:id', (req, res) => {
    if (ObjectId.isValid(req.params.id)) {
        db.collection('DMAs')
            .findOne({ _id: new ObjectId(req.params.id) })
            .then(dma => {
                res.status(200).json(dma);
            })
            .catch(() => {
                res.status(500).json({ error: 'Could not fetch the document' });
            });
    } else {
        res.status(500).json({ error: 'Not a valid doc id' })
    }
});

//Post
router.post('/Dma', (req, res) => {
    const dma = req.body

    db.collection('DMAs')
        .insertOne(dma)
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json({ err: 'Could not create the documents' })
        })
})

//Delete
router.delete('/DmaById/:id', (req, res) => {
    if (ObjectId.isValid(req.params.id)) {
        db.collection('DMAs')
            .deleteOne({ _id: new ObjectId(req.params.id) })
            .then(result => {
                res.status(200).json(result);
            })
            .catch(() => {
                res.status(500).json({ error: 'Could not delete the document' });
            });
    } else {
        res.status(500).json({ error: 'Not a valid doc id' })
    }
})

router.post('/deleteMultipleDmas', async (req, res) => {
    const dmaIds = req.body.dmaIds;
    console.log(dmaIds)
    if (!dmaIds || !Array.isArray(dmaIds)) {
        return res.status(400).json({ error: 'dmaIds is not a valid array.' });
    }
    const areValidIds = dmaIds.every(id => ObjectId.isValid(id));
    if (!areValidIds) {
        return res.status(400).json({ error: 'One or more provided dma IDs are not valid.' });
    }
    const objectIds = dmaIds.map(id => new ObjectId(id));
    try {
        const result = await db.collection('DMAs').deleteMany({ _id: { $in: objectIds } });
        res.status(200).json(result);
    } catch (error) {
        console.error('Error deleting dmas:', error);
        res.status(500).json({ error: 'Could not delete dmas.' });
    }
});

//Patch
router.patch('/DmaById/:id', (req, res) => {
    const updates = req.body

    if (ObjectId.isValid(req.params.id)) {
        db.collection('DMAs')
            .updateOne({ _id: new ObjectId(req.params.id) }, { $set: updates })
            .then(result => {
                res.status(200).json(result);
            })
            .catch(() => {
                res.status(500).json({ error: 'Could not update the document' });
            });
    } else {
        res.status(500).json({ error: 'Not a valid doc id' })
    }
})

// -------------------------- DMM-Moduls -----------------------------------
//Get
router.get('/DmmOverview', (req, res) => {
    let dmms = []

    db.collection('DMMs')
        .find()
        .sort({ createdAt: 1 })
        .forEach(dmm => dmms.push({ "_id": dmm._id, "title": dmm.title,"akronym": dmm.akronym, "createdBy": dmm.createdBy, "createdAt": dmm.createdAt, "updatedBy": dmm.updatedBy, "updatedAt": dmm.updatedAt }))
        .then(() => {
            res.status(200).json(dmms)
        })
        .catch(() => {
            res.status(500).json({ error: 'Could not fetch the documents' })
        })
})

router.get('/PublishedDmm', (req, res) => {
    let dmms = []

    db.collection('DMMs')
        .find({ published: true })
        .sort({ createdAt: 1 })
        .forEach(dmm => dmms.push({ "_id": dmm._id, "title": dmm.title,"akronym": dmm.akronym, "createdBy": dmm.createdBy, "createdAt": dmm.createdAt, "updatedBy": dmm.updatedBy, "updatedAt": dmm.updatedAt }))
        .then(() => {
            res.status(200).json(dmms)
        })
        .catch(() => {
            res.status(500).json({ error: 'Could not fetch the documents' })
        })
})

router.get('/DmmById/:id', (req, res) => {
    if (ObjectId.isValid(req.params.id)) {
        db.collection('DMMs')
            .findOne({ _id: new ObjectId(req.params.id) })
            .then(dmm => {
                res.status(200).json(dmm);
            })
            .catch(() => {
                res.status(500).json({ error: 'Could not fetch the document' });
            });
    } else {
        res.status(500).json({ error: 'Not a valid doc id' })
    }
});

//Post
router.post('/Dmm', (req, res) => {
    const dmm = req.body

    db.collection('DMMs')
        .insertOne(dmm)
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json({ err: 'Could not create the documents' })
        })
})

//Patch
router.patch('/DmmById/:id', (req, res) => {
    const updates = req.body

    if (ObjectId.isValid(req.params.id)) {
        db.collection('DMMs')
            .updateOne({ _id: new ObjectId(req.params.id) }, { $set: updates })
            .then(result => {
                res.status(200).json(result);
            })
            .catch((err) => {
                res.status(500).json({ error: 'Could not update the document', err });
            });
    } else {
        res.status(500).json({ error: 'Not a valid doc id' })
    }
})

//Delete
router.post('/deleteMultipleDmms', async (req, res) => {
    const dmmIds = req.body.dmmIds;
    console.log(dmmIds)
    if (!dmmIds || !Array.isArray(dmmIds)) {
        return res.status(400).json({ error: 'dmmIds is not a valid array.' });
    }
    const areValidIds = dmmIds.every(id => ObjectId.isValid(id));
    if (!areValidIds) {
        return res.status(400).json({ error: 'One or more provided dmm IDs are not valid.' });
    }
    const objectIds = dmmIds.map(id => new ObjectId(id));
    try {
        const result = await db.collection('DMMs').deleteMany({ _id: { $in: objectIds } });
        res.status(200).json(result);
    } catch (error) {
        console.error('Error deleting dmms:', error);
        res.status(500).json({ error: 'Could not delete dmms.' });
    }
});

// -------------------------- local file system -----------------------------------
// enable picture upload to backend file system
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

router.post('/upload', upload.single('file'), (req, res) => {
    const filename = req.file.filename;
    res.json({ filePath: `/uploads/${filename}` });
});

//export route instance
module.exports = router;
const express = require('express');
const router = express.Router();
const async = require('async');
const fs = require('fs');


router.get('/getformcategory', (req, res)=>{
    let dbFormCategory = req.db.get('formCategory');
    dbFormCategory.find()
        .then(check1=>{
            res.json({status:true, message:'Get form category successfully!', data:check1});
        })
        .catch(err1=>{res.json({status:false, message:'Get form category error: '+err1, data:null})});
});

router.get('/getactiveforms/:category/:start/:limit/:sort/:search', (req, res)=>{
    let category = req.params.category,
        start = Number(req.params.start),
        limit = Number(req.params.limit),
        sort = req.params.sort,
        search = req.params.search;
    let dbForms = req.db.get('forms');

    let sortObj = {_id:-1};
    if (sort=='Name increasing') sortObj = {nameTH: 1, nameEN: 1};
    else if (sort=='Name decreasing') sortObj = {nameTH: -1, nameEN: -1};
    else if (sort=='Owner increasing') sortObj = {onwer: 1};
    else if (sort=='Owner decreasing') sortObj = {onwer: -1};
    else if (sort=='Created date increasing') sortObj = {_id: 1};
    else if (sort=='Created date decreasing') sortObj = {_id: -1};

    let query = {
        $and: [
            {status: 'Active'}
        ]
    };
    if (search!='EmptyNone') {
        query = {
            $and: [
                {status: 'Active'},
                {$or: [
                    {nameTH: {$regex: search, $options: 'i'}},
                    {nameEN: {$regex: search, $options: 'i'}},
                    {owner: {$regex: search, $options: 'i'}}
                ]}
            ]
        }
    }
    if (category!='None') query['$and'].push({category: category});

    dbForms.find(query, {
            limit: limit, skip: start, sort: sortObj
        })
        .then(check1=>{
            dbForms.count(query)
                .then(totalForms=>{
                    res.json({
                        status: true, 
                        message: 'Get forms successfully!', 
                        data: check1,
                        totalForms: totalForms 
                    });
                })
                .catch(err2=>{res.json({status:false, message:'Get forms error: '+err2, data:null})});
        })
        .catch(err1=>{res.json({status:false, message:'Get forms error: '+err1, data:null})});
});
router.get('/getformdetail/:accessCode', (req, res)=>{
    let accessCode = req.params.accessCode;
    let dbForms = req.db.get('forms');
    
    dbForms.findOne({ accessCode: accessCode })
        .then(check1=>{
            if (check1===null) res.json({status:false, message:'Get form detail failed: Cannot find the form.', data:0});
            else res.json({status:true, message:'Get form detail successfully!', data:check1})
        })
        .catch(err1=>{res.json({status:false, message:'Get form detail error: '+err1, data:null})});
});

router.get('/getsubmittedforms/:userId/:start/:limit/:sort', (req, res)=>{
    let userId = req.db.id(req.params.userId),
        start = Number(req.params.start),
        limit = Number(req.params.limit),
        sort = req.params.sort;
    let dbSubmittedForms = req.db.get('submittedForms'),
        dbForms = req.db.get('forms');

    let sortObj = {_id: -1};
    if (sort=='Status increasing') sortObj = {status: 1};
    else if (sort=='Status decreasing') sortObj = {status: -1};
    else if (sort=='Submitted date increasing') sortObj = {_id: 1};
    else if (sort=='Submitted date decreasing') sortObj = {_id: -1};

    let query = {userId: userId};
    
    dbSubmittedForms.find(query, {
        limit: limit, skip: start, sort: sortObj
    })
    .then(check1=>{

        let result = [];
        async.each(
            check1,
            (d, callback)=>{
                let formId = req.db.id(d.formId);
                dbForms.findOne({_id: formId}, {_id:-1, accessCode: 1, nameTH: 1, nameEN: 1})
                    .then(check2=>{
                        if (check2!==null) {
                            d.form = check2;
                            result.push(d);
                        }
                        callback();
                    });
            },
            err2=>{
                dbSubmittedForms.count(query)
                    .then(check3=>{
                        res.json({
                            status: true, message: 'Get submitted forms successfully!', 
                            data: result, totalSubmittedForms: check3
                        });
                    });
            }
        );
    })
    .catch(err1=>{res.json({status:false, message:'Get submitted forms error: '+err1, data:null})});
});

router.post('/submitform', (req, res)=>{
    let input = req.body,
        userId = req.db.id(input.userId),
        formId = req.db.id(input.formId),
        formValue = input.formValue;
    let dbSubmittedForms = req.db.get('submittedForms');

    let insertObj = {
        userId: userId, formId: formId,
        formValue: formValue, status: 'Pending'
    }
    if (input.evidences!==undefined) insertObj['evidences'] = input.evidences;

    dbSubmittedForms.insert(insertObj)
    .then(check1=>{
        res.json({status:true, message:'Submit form successfully!', data:formId});
    })
    .catch(err1=>{res.json({status:false, message:'Submit form error: '+err1, data:null})}); 
});
router.post('/editsubmittedform', (req, res)=>{
    let input = req.body,
        formId = req.db.id(input.formId),
        formValue = input.formValue;
    let dbSubmittedForms = req.db.get('submittedForms');

    dbSubmittedForms.findOne({_id: formId})
        .then(check1=>{
            if (check1===null) res.json({status:false, message:'Edit submitted form failed: Cannot find the submitted form.', data:0});
            else {
                check1.formValue = formValue;
                if (input.evidences!==undefined) check1['evidences'] = input.evidences;

                dbSubmittedForms.update({_id: formId}, check1, { multi: false })
                    .then(check2=>{
                        res.json({status:true, message:'Edit submitted form successfully!', data:1});
                    });
            }
        })
        .catch(err1=>{res.json({status:false, message:'Edit submitted form error: '+err1, data:null})}); 
});
router.post('/deletesubmittedform', (req, res)=>{
    let input = req.body,
        userId = req.db.id(input.userId),
        formId = req.db.id(input.formId);
    let dbSubmittedForms = req.db.get('submittedForms');

    if (input.evidences!==undefined) {
        for (let i=0; i<input.evidences.length; i++) {
            let path = 'public/formEvidences/' + input.evidences[i].file;
            if (fs.existsSync(path)) fs.unlinkSync(path);
        }
    }

    dbSubmittedForms.remove({_id: formId, userId: userId}, { justOne: true })
        .then(status1=>{
            res.json({status:true, message:'The submitted form has been deleted successfully!', data:formId});
        });
});

router.get('/pendingformnumber', (req, res)=>{
    let dbSubmittedForms = req.db.get('submittedForms');
    
    dbSubmittedForms.count({status: 'Pending'})
        .then(check1=>{
            res.json({status:true, message:'Get pending form number successfully!', data:check1});
        })
        .catch(err1=>{res.json({status:false, message:'Get pending form number error: '+err1, data:null})});
});

router.get('/admingetactiveforms/:category/:start/:limit/:sort/:search', (req, res)=>{
    let category = req.params.category,
        start = Number(req.params.start),
        limit = Number(req.params.limit),
        sort = req.params.sort,
        search = req.params.search;
    let dbForms = req.db.get('forms'),
        dbSubmittedForms = req.db.get('submittedForms');

    let sortObj = {_id:-1};
    if (sort=='Name increasing') sortObj = {nameTH: 1, nameEN: 1};
    else if (sort=='Name decreasing') sortObj = {nameTH: -1, nameEN: -1};
    else if (sort=='Owner increasing') sortObj = {onwer: 1};
    else if (sort=='Owner decreasing') sortObj = {onwer: -1};
    else if (sort=='Created date increasing') sortObj = {_id: 1};
    else if (sort=='Created date decreasing') sortObj = {_id: -1};

    let query = {
        $and: [
            {status: 'Active'}
        ]
    };
    if (search!='EmptyNone') {
        query = {
            $and: [
                {status: 'Active'},
                {$or: [
                    {nameTH: {$regex: search, $options: 'i'}},
                    {nameEN: {$regex: search, $options: 'i'}},
                    {owner: {$regex: search, $options: 'i'}}
                ]}
            ]
        }
    }
    if (category!='None') query['$and'].push({category: category});

    dbForms.find(query, {
            limit: limit, skip: start, sort: sortObj
        })
        .then(check1=>{
            dbForms.count(query)
                .then(totalForms=>{
                    async.each(
                        check1,
                        (d, callback)=>{
                            dbSubmittedForms.count({formId: req.db.id(d._id), status: 'Pending'})
                                .then(check2=>{
                                    d.pendingNumber = check2;
                                    callback();
                                });
                        },
                        err2=>{
                            res.json({
                                status: true, 
                                message: 'Get admin forms successfully!', 
                                data: check1,
                                totalForms: totalForms 
                            });
                        });
                })
                .catch(err2=>{res.json({status:false, message:'Get admin forms error: '+err2, data:null})});
        })
        .catch(err1=>{res.json({status:false, message:'Get admin forms error: '+err1, data:null})});
});
router.get('/admingetsubmittedforms/:formId/:start/:limit/:sort', (req, res)=>{
    let formId = req.db.id(req.params.formId),
        start = Number(req.params.start),
        limit = Number(req.params.limit),
        sort = req.params.sort,
        search = req.params.search;
    let dbSubmittedForms = req.db.get('submittedForms'),
        dbUsers = req.db.get('users');

    let sortObj = {_id: -1};
    if (sort=='Status increasing') sortObj = {status: 1};
    else if (sort=='Status decreasing') sortObj = {status: -1};
    else if (sort=='Submitted date increasing') sortObj = {_id: 1};
    else if (sort=='Submitted date decreasing') sortObj = {_id: -1};

    let query = {formId: formId};
    
    dbSubmittedForms.find(query, {
        limit: limit, skip: start, sort: sortObj
    })
    .then(check1=>{
        dbSubmittedForms.count(query)
            .then(totalForms=>{
                async.each(
                    check1,
                    (d, callback)=>{
                        dbUsers.findOne({_id: req.db.id(d.userId)}, {firstname: 1, lastname: 1, email:1})
                            .then(check2=>{
                                d.firstname = check2.firstname;
                                d.lastname = check2.lastname;
                                d.email = check2.email;
                                callback();
                            });
                    },
                    err2=>{
                        res.json({
                            status: true, 
                            message: 'Get admin submitted forms successfully!', 
                            data: check1,
                            totalForms: totalForms 
                        });
                    });
            });
    })
    .catch(err1=>{res.json({status:false, message:'Get admin submitted forms error: '+err1, data:null})});
});
router.get('/admingetforms/:start/:limit/:sort/:search', (req, res)=>{
    let start = Number(req.params.start),
        limit = Number(req.params.limit),
        sort = req.params.sort,
        search = req.params.search;
    let dbForms = req.db.get('forms');

    let sortObj = {_id:-1};
    if (sort=='Name increasing') sortObj = {nameTH: 1, nameEN: 1};
    else if (sort=='Name decreasing') sortObj = {nameTH: -1, nameEN: -1};
    else if (sort=='Status increasing') sortObj = {status: 1};
    else if (sort=='Status decreasing') sortObj = {status: -1};
    else if (sort=='Created date increasing') sortObj = {_id: 1};
    else if (sort=='Created date decreasing') sortObj = {_id: -1};
    else if (sort=='Owner increasing') sortObj = {owner: 1};
    else if (sort=='Owner decreasing') sortObj = {owner: -1};

    let query = {};
    if (search!='EmptyNone') {
        query = {
            $or: [
                {nameTH: {$regex: search, $options: 'i'}},
                {nameEN: {$regex: search, $options: 'i'}},
                {status: {$regex: search, $options: 'i'}},
                {owner: {$regex: search, $options: 'i'}}
            ]
        }
    }

    dbForms.find(query, {limit: limit, skip: start, sort: sortObj})
        .then(check1=>{
            dbForms.count(query)
                .then(totalForms=>{
                    res.json({
                        status: true, message: 'Get forms successfully!', 
                        data: check1, totalForms: totalForms
                    });
                });
        })
        .catch(err1=>{res.json({status:false, message:'Get forms error: '+err1, data:null})});
});

router.post('/setsubmittedformstatus', (req, res)=>{
    let formId = req.db.id(req.body.formId),
        status = req.body.status,
        approver = req.body.approver;
    let dbSubmittedForms = req.db.get('submittedForms');

    dbSubmittedForms.findOne({ _id: formId })
        .then(check1=>{
            if (check1===null) res.json({status:false, message:'Set submitted form status failed: Cannot find the form.', data:0});
            else {
                check1.status = status;
                check1.approverId = req.db.id(approver._id);
                check1.approvedDate = new Date();
                dbSubmittedForms.update({ _id: formId }, check1, { multi: false })
                    .then(()=>{
                        res.json({ status:true, message:'The submitted form status is set successfully.', data:1});
                    });
            }
        })
        .catch(err1=>{res.json({status:false, message:'Set submitted form status error: '+err1, data:null})});        
});
router.post('/setformstatus', (req, res)=>{
    let formId = req.db.id(req.body.formId),
        status = req.body.status;
    let dbForms = req.db.get('forms');

    dbForms.findOne({ _id: formId })
        .then(check1=>{
            if (check1===null) res.json({status:false, message:'Set form status failed: Cannot find the form.', data:0});
            else {
                check1.status = status;
                dbForms.update({ _id: formId }, check1, { multi: false })
                    .then(()=>{
                        res.json({ status:true, message:'The form status is set successfully.', data:1});
                    });
            }
        })
        .catch(err1=>{res.json({status:false, message:'Set form status error: '+err1, data:null})});        
});

router.post('/createform', (req, res)=>{
    let form = req.body.form;
    let dbForms = req.db.get('forms');

    dbForms.findOne({}, {sort: {_id:-1}})
        .then(check1=>{
            let count = 0;
            if (check1!==null) count = Number(check1.accessCode.replace('form-', ''));

            if (form.creatorId!==undefined) form.creatorId = req.db.id(form.creatorId);
            form.accessCode = 'form-' + (count+1);
            dbForms.insert(form)
                .then(check2=>{
                    res.json({status:true, message:'Create form successfully.', data:1});
                })
                .catch(err2=>{res.json({status:false, message:'Create form error: '+err2, data:null})}); 
        })
        .catch(err1=>{res.json({status:false, message:'Create form error: '+err1, data:null})});       
});
router.post('/deleteform', (req, res)=>{
    let form = req.body.form,
        formId = req.db.id(form._id);
    let dbForms = req.db.get('forms'),
        dbSubmittedForms = req.db.get('submittedForms');

    dbForms.remove({ _id: formId }, { justOne: true }).then(check1=>{
        let path1 = 'public/forms/' + form.pdfForm;
        if (fs.existsSync(path1)) fs.unlinkSync(path1);

        if (form.previewUrl!==undefined && form.previewUrl!==null && form.previewUrl!='') {
            let path2 = 'public/formPreview/' + form.previewUrl;
            if (fs.existsSync(path2)) fs.unlinkSync(path2);
        }

        if (!form.requireEvidence) {
            dbSubmittedForms.remove({ formId: formId }).then(check2=>{
                res.json({status:true, message:'Delete form successfully!', data:1})
            })
            .catch(err2=>{res.json({status:false, message:'Delete form error: '+err2, data:null})});
        } else {
            // To do if form require evidence
            dbSubmittedForms.remove({ formId: formId }).then(check2=>{
                res.json({status:true, message:'Delete form successfully!', data:1})
            })
            .catch(err2=>{res.json({status:false, message:'Delete form error: '+err2, data:null})});
        }
    })
    .catch(err1=>{res.json({status:false, message:'Delete form error: '+err1, data:null})});     
});
router.post('/editform', (req, res)=>{
    let form = req.body.form,
        formId = req.db.id(form._id);
    let dbForms = req.db.get('forms');

    dbForms.findOne({_id: formId})
        .then(check1=>{
            if (check1===null) res.json({status:false, message:'Edit form failed: Cannot find the gov form.', data:0});
            else {
                let editedForm = {...check1, ...form};
                dbForms.update({ _id: formId }, editedForm, { multi: false })
                    .then(()=>{
                        res.json({ status:true, message:'The form is edited successfully.', data:1});
                    });
            } 
        })
        .catch(err1=>{res.json({status:false, message:'Edit form error: '+err1, data:null})});       
});

router.post('/addformcategory', (req, res)=>{
    let formCategory = req.body.formCategory;
    let dbFormCategory = req.db.get('formCategory');

    dbFormCategory.findOne({
        $or: [
            {categoryTH: formCategory.categoryTH}, 
            {categoryEN: formCategory.categoryEN}
        ]
    })
    .then(check1=>{
        if (check1!==null) res.json({status:false, message:'Add form category failed: Repeated category name.', data:0});
        else {
            dbFormCategory.insert(formCategory)
                .then(check2=>{
                    res.json({status:true, message:'Add form category successfully.', data:1});
                })
                .catch(err2=>{res.json({status:false, message:'Add form category error: '+err2, data:null})});
        } 
    })
    .catch(err1=>{res.json({status:false, message:'Add form category error: '+err1, data:null})});       
});
router.post('/deleteformcategory', (req, res)=>{
    let formCategory = req.body.formCategory,
        formId = req.db.id(formCategory._id);
    let dbFormCategory = req.db.get('formCategory');

    dbFormCategory.remove({_id: formId}, { justOne: true })
        .then(check1=>{
            res.json({status:true, message:'Delete form category successfully!', data:1});
        })
        .catch(err1=>{res.json({status:false, message:'Delete form category error: '+err1, data:null})});       
});


module.exports = router;
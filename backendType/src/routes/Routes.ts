import * as express from 'express'
import {Router} from "express";
import Issue from "../modules/Issue";

export class Routes {

     static mountRoutes (): Router {

        const router = express.Router()

        router.get('/', (req, res) => {
            res.json({
                message: 'Hello World!'
            })
        })

        router.route('/issues').get((req, res) => {

            Issue.find((err, issues) => {
                if (err)
                    console.log(err);
                else
                    res.json(issues);
            });
        });

        router.route('/issues/:id').get((req, res) => {


            Issue.findById(req.params.id, (err, issue) => {
                if (err)
                    console.log(err);
                else
                    res.json(issue);
            });
        });

        router.route('/issues/add').post((req: Request, res: Response) => {

            let issue = new Issue(req.body)

            issue.save()
                .then(issue => {
                    res.status(200).json({'issue': 'Added successfully'});
                })
                .catch(err => {
                    res.status(400).send('Failed to create new record');
                });

        });

        router.route('/issues/update/:id').post((req, res) => {

            Issue.findById(req.params.id, (err, issue) => {
                if (!issue)
                    return next(new Error('Could not load document'));
                else {
                    issue.title = req.body.title;
                    issue.responsible = req.body.responsible;
                    issue.description = req.body.description;
                    issue.severity = req.body.severity;
                    issue.status = req.body.status;

                    issue.save().then(issue => {
                        res.json('Update done');
                        console.log(res);
                    }).catch(err => {
                        res.status(400).send('Update failed');
                    });
                }
            });
        });

        router.route('/issues/delete/:id').get((req, res) => {

            Issue.findByIdAndRemove({_id: req.params.id}, (err, issue) => {
                if (err)
                    res.json(err);
                else
                    res.json('Remove successfully');
            })
        })

        return router

    }

}


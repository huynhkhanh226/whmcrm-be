/**
 * CreateController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */

module.exports = {

    friendlyName: 'CreateController',

    inputs: {
        username: {
            description: '',
            type: 'string',
            required: true
        },
        password: {
            description: 'dfdsfsdfdsfsf',
            type: 'string',
            required: true
        },
    },


    fn: async function (inputs) {
        // All done.
        const token = await sails.helpers.jwt.create.with({
            ...inputs,
            expiresIn: "1h"
        });

        return {
            code: 200,
            data: {
                token
            }
        };
    }


};


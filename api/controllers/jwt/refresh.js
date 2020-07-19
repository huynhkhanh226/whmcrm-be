
module.exports = {

    friendlyName: 'CreateController',

    inputs: {
        token: {
            description: '',
            type: 'string',
        },
    },


    fn: async function ({token}) {
        // All done.
        const decodeData = await sails.helpers.jwt.verify.with({token});
        console.log(decodeData);

        if (!decodeData || !decodeData.data.id) {
            return this.res.badRequest({
                code: 10000,
                message: 'Invalid token'
            });
        }
        //delete decodeData.iat;
        //delete decodeData.exp;
        const newToken = await sails.helpers.jwt.create.with({
            ...decodeData.data,
            expiresIn: "1h"
        });

        return {
            code: 200,
            data: {
                newToken
            }
        };
    }


};


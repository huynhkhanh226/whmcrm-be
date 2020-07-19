/**
 * @copyright 2019 © DigiNet
 * @author rocachien
 * @create 2019/04/24 17:24
 * @update 2019/04/24 17:24
 */
'use strict';

// https://gist.github.com/millermedeiros/4724047
exports.exec = (cmd, cb) => {
    /*eslint-disable camelcase*/
    let child_process = require('child_process');
    /*eslint-enable camelcase*/

    let parts = cmd.split(/\s+/g);
    let p = child_process.spawn(parts[0], parts.slice(1), {stdio: 'inherit'});
    p.on('exit', (code) => {
        let err = null;
        if (code) {
            err = new Error('command "'+ cmd +'" exited with wrong status code "'+ code +'"');
            err.code = code;
            err.cmd = cmd;
        }
        if (cb) {
            return cb(err);
        }
    });
};


// execute multiple commands in series
// this could be replaced by any flow control lib
exports.series = function(cmds, cb){
    let execNext = function(){
        exports.exec(cmds.shift(), function(err){
            if (err) {
                return cb(err);
            } else {
                if (cmds.length) {
                    execNext();
                }
                else {
                    return cb(null);
                }
            }
        });
    };
    execNext();
};

/*
 *  This code is adapted from the work of Michael Nachbaur 
 *  by Simon Madine of The Angry Robot Zombie Factory
 *   - Converted to Cordova 1.6.1 by Josemando Sobral.
 *   - Converted to Cordova 2.0.0 by Simon MacDonald
 *  2012-07-03
 *  MIT licensed
 */
var exec = require('cordova/exec'), formats = ['png','jpg'];
module.exports = {
	save:function(callback,format,quality) {
		format = (format || 'png').toLowerCase();
		if(formats.indexOf(format) === -1){
			return callback && callback('invalid format '+format);
		}
		quality = typeof(quality) !== 'number'?100:quality;
		exec(function(){
			callback && callback();
		}, function(error){
			callback && callback(error);
		}, "Screenshot", "saveScreenshot", [format,quality]);
	}
};

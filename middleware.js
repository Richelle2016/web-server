// Use module exports to expose middleware

var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log('private route hit!');
	},
	logger: function (req, res, next){
			new Date().toString();
		console.log('Request: ' + Date().toString() + ' ' +req.method + ' ' + req.originalUrl);
		next();
	}
};

module.exports = middleware;
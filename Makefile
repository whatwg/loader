index.html: index.bs
	curl -s https://api.csswg.org/bikeshed/ -F file=@index.bs > index.html
	node ./ecmarkupify.js index.html index.html

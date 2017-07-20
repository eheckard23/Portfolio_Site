const express = require('express'),
		path = require('path'),
		app = express();

// pug templating
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');
// static html, css, js files
app.use(express.static(path.join(__dirname, './public')));

// index
app.get('/', (req,res) => {
	res.render('index', { title: 'Ethan Heckard | Portolio' });
});

// about
app.get('/about', (req,res) => {
	res.render('about', { title: 'Ethan Heckard | About Me' });
});

// contact
app.get('/contact', (req,res) => {
	res.render('contact', { title: 'Ethan Heckard | Contact' });
});

// portfolio
app.get('/portfolio', (req,res) => {
	res.render('portfolio', { title: 'Ethan Heckard | Portolio' });
});

app.set('port', process.env.PORT || 3000);

// server listener
exports.listener = app.listen(app.get('port'), () => {
	console.log(`Server running on port ${app.get('port')}`);
});

exports.app = app;
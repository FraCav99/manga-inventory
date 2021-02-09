const express = require('express');
const indexRouter = require('./routes/index');
const mangaRouter = require('./routes/manga');
const authorRouter = require('./routes/author');
const adminRouter = require('./routes/admin');
const categoriesRouter = require('./routes/categories');

const PORT = process.env.PORT || 3000;

const app = express();

// Set public folder for static files and view engine
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use('/manga', mangaRouter);
app.use('/author', authorRouter);
app.use('/categories', categoriesRouter);
app.use('/admin', adminRouter);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
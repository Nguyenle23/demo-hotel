
const siteRouter = require('./site');

const loginRouter = require('./login');
const feedbackRouter = require('./feedback');
const serviceRouter = require('./service');
const roomRouter = require('./room');

const standardRouter = require('./standard');
const superviorRouter = require('./standard');
const delexuryRouter = require('./standard');
const suiteRouter = require('./standard');
const servicedetailRouter = require('./servicedetail');

const checkIORouter = require('./checkIO');
const createIORouter = require('./createIO');
const listBillRouter = require('./listBill');
const bookingRoomRouter = require('./bookingRoom');
const serviceTabRouter = require('./serviceTab');
const roommanagerRouter = require('./roommanager');
const promotionTabRouter = require('./promotionTab');
const employeeRouter = require('./employee');

const billRouter = require('./bill');

function route(app) {
    
    app.use('/employee', employeeRouter);
    app.use('/promotionTab', promotionTabRouter);
    app.use('/roommanager', roommanagerRouter);
    app.use('/serviceTab', serviceTabRouter);
    app.use('/bookingRoom', bookingRoomRouter);
    app.use('/listBill', listBillRouter);
    app.use('/createIO', createIORouter);
    app.use('/checkIO', checkIORouter);
    app.use('/bill', billRouter);

    app.use('/servicedetail', servicedetailRouter);
    app.use('/suite', suiteRouter);
    app.use('/deluxury', delexuryRouter);
    app.use('/supervior', superviorRouter);
    app.use('/standard', standardRouter);

    app.use('/login', loginRouter);
    app.use('/feedback', feedbackRouter);
    app.use('/service', serviceRouter);
    app.use('/room', roomRouter);

    app.use('/', siteRouter);
}

module.exports = route;
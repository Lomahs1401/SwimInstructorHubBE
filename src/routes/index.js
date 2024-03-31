import testRouter from './TestRoute.js';
import authRouter from './AuthRoute.js';
import centerRouter from './CenterRoute.js';
import courseRouter from './CourseRoute.js';
import instructorRouter from './InstructorRoute.js';
import accountRouter from './AccountRoute.js';

function routes(app) {
    app.use('/', testRouter);
    app.use('/auth', authRouter)
    app.use('/centers', centerRouter)
    app.use('/courses', courseRouter)
    app.use('/instructors', instructorRouter)
    app.use('/accounts', accountRouter)
}

export default routes;
import rootRouter from './RootRoute.js';
import authRouter from './AuthRoute.js';
import centerRouter from './CenterRoute.js';
import courseRouter from './CourseRoute.js';
import teacherRouter from './TeacherRoute.js';
import userRouter from './UserRoute.js';

function routes(app) {
    app.use('/', rootRouter);
    app.use('/auth', authRouter)
    app.use('/centers', centerRouter)
    app.use('/courses', courseRouter)
    app.use('/teachers', teacherRouter)
    app.use('/users', userRouter)
}

export default routes;
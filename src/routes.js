import showBlogs from './components/showBlogs';
import addBlog from './components/addBlog';

export default [{
        path: '/',
        component: showBlogs
    },
    {
        path: '/add',
        component: addBlog
    }
]
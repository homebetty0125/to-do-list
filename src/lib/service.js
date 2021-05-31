import COMMON from './index';

const Service = {
    getToDoList: (reqData) => COMMON.serviceProxy('/list', reqData),
    createToDoList: (reqData) => COMMON.serviceProxy('/createToDoList', reqData),
    updateToDoList: (reqData) => COMMON.serviceProxy('/updateToDoList', reqData),
    removeToDoList: (reqData) => COMMON.serviceProxy('/removeToDoList', reqData),
};

export default Service;

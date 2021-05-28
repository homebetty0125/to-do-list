import COMMON from './index';

const Service = {
    getToDoList: (reqData) => COMMON.serviceProxy('/list', reqData),
    createToDoList: (reqData) => COMMON.serviceProxy('/createToDoList', reqData),
};

export default Service;

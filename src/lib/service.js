import COMMON from './index';

const Service = {
    getToDoList: (reqData) => COMMON.serviceProxy('/', reqData),
    createToDoList: (reqData) => COMMON.serviceProxy('/', reqData),
};

export default Service;

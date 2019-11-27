const fs = require('fs');
const path = require('path');

const deepMerge = (target = {}, source) => {
    for (let key of Object.keys(source)) {
        if (source[key] instanceof Object) {
            Object.assign(source[key], deepMerge(target[key], source[key]));
        }
    }

    Object.assign(target || {}, source);
    return target;
};

module.exports = {
    importMethods: (dirname, filename) => {
        const basename = path.basename(filename);

        let methods = {};
        fs.readdirSync(dirname)
            .filter(file => {
                return (file.indexOf('.') !== 0) && (file !== basename);
            })
            .forEach(file => {
                const wrapper = require(path.join(dirname, file));
                methods = deepMerge(methods, wrapper);
                return require(path.join(dirname, file));
            });

        return methods;
    }
};

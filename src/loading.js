import React from 'react';

function isEmpty(data) {
    if (data && data instanceof Array) {
        return data.length === 0;
    }
    if (data) {
        return Object.keys(data).length === 0;
    }
    return false;
}

const loading = (property) => (OldComponent) => (props) => {

    let output = <OldComponent {...props} />;

    if (isEmpty(props[property])) {
        output = <p className="text-center">Loading... Please wait.</p>
    }

    return output;

}

export default loading;

// const fun1 = (par1) => (par2) => ret_val;
// fun1('asd')('sdf);
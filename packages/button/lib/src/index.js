import React from 'react';
import s from './style.module.css';
const Button = (props) => {
    return (React.createElement("button", Object.assign({}, props, { className: [s.button, props.className].filter(Boolean).join(' ') })));
};
export default Button;
//# sourceMappingURL=index.js.map
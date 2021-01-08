import React from 'react';
import s from './style.module.css';
const Card = (props) => {
    return (React.createElement("div", Object.assign({}, props, { className: [s.card, props.className].filter(Boolean).join(' ') })));
};
export default Card;
//# sourceMappingURL=index.js.map
import React from 'react';
import getStyle from './StyleGenerator';

const Spiral = (lvl, depth) => {
    const next = (lvl <= depth) ? Spiral(lvl + 1, depth) : null;
    const style = getStyle(lvl, depth);

    return React.createElement('div', {style: style}, next);
};

export default Spiral;
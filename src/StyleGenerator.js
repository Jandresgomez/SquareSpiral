const rotDegree = 30;
const maxSize = 100;
const rate = 1.4;

const toRad = (deg) => {
    return Math.PI*2*(deg/360);
};

const ctg = (x) => {
    return 1/Math.tan(x);
};

const getDiff = (lvl) => {
    if(lvl === 0) return 2*maxSize;
    const k = getDiagForLvl(lvl);
    const y = toRad(45 - rotDegree);
    const l = getLength(lvl);
    return ((k*Math.cos(y)) - l)/2;
};

const getLength = (lvl) => {
    if(lvl === 0) return maxSize;
    return maxSize/(Math.pow(rate,lvl));
}

const getDiagForLvl = (lvl) => {
    if(lvl === 0) return Math.sqrt(2)*maxSize;
    return Math.sqrt(2)*maxSize/(Math.pow(rate,lvl));
};

const getStyle = (lvl, depth) => {
    let res = {
        backgroundColor: "green",
        transform: `rotate(${lvl !== 0 ? rotDegree : 0}deg)`,
        position: 'absolute',
        top: `${lvl !== 0 ? getDiff(lvl) + getLength(lvl-1) : maxSize*3}px`,
        left: `${lvl !== 0 ? -1.7*getDiff(lvl) : maxSize*4}px`,
        width: `${getLength(lvl)}px`,
        height: `${getLength(lvl)}px`
    };

    return res;
};

export default getStyle;
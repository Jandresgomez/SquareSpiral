const rotDegree = 45;
const rotRad = 2*Math.PI*(rotDegree/360);
const maxSize = 100;

const getRotation = (lvl, depth) => {
    return 90*lvl/depth;
}

const getPosTop = (lvl) => {
    if(lvl === 0) return maxSize;
    const k = maxSize/(Math.pow(2,lvl-1));
    //return k*(Math.sin(rotRad) + Math.cos(rotRad));

    return Math.sqrt(2)*k;
}

const getPosLeft = (lvl) => {
    if(lvl === 0) return 3*maxSize;
    const k = getKForLvl(lvl);
    //return -k*(Math.cos(rotRad));
    return -k*Math.sqrt(2)/2;
}

const getKForLvl = (lvl) => {
    if(lvl === 0) return maxSize;
    return maxSize/(Math.pow(2,lvl));
}

const getStyle = (lvl, depth) => {
    let res = {
        backgroundColor: "green",
        transform: `rotate(${lvl !== 0 ? rotDegree : 0}deg)`,
        position: 'absolute',
        top: `${getPosTop(lvl)}px`,
        left: `${getPosLeft(lvl)}px`,
        width: `${maxSize/(Math.pow(2,lvl))}px`,
        height: `${maxSize/(Math.pow(2,lvl))}px`
    };

    return res;
};

export default getStyle;
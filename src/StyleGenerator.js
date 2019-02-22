const rotDegree = 45;
const rotRad = 2*Math.PI*(rotDegree/360);
const betaRad = 2*Math.PI*((90 - (rotDegree/2))/360);
const maxSize = 100;

const getRotation = (lvl, depth) => {
    return 90*lvl/depth;
}

const getPosTop = (lvl) => {
    if(lvl <= 0) return maxSize;
    const k = maxSize/(Math.pow(2,lvl-1));
    //return k*(Math.sin(rotRad) + Math.cos(rotRad));

    return Math.sqrt(2)*k;
}

const getDiff = (lvl) => {
    if(lvl === 0) return maxSize*2.5;
    const k = getKForLvl(lvl);
    return ctg(betaRad)*(k/2)/Math.sin(rotRad);
}

const getPosLeft = (lvl) => {
    if(lvl === 0) return 3*maxSize;
    const k = getKForLvl(lvl);
    //return -k*(Math.cos(rotRad));
    return -k*Math.sqrt(2)/2;
}

const ctg = (x) => {
    return 1/Math.tan(x);
};

const getHeight = (lvl) => {
    
};

const getDiagForLvl = (lvl) => {
    if(lvl === 0) return maxSize;
    return Math.sqrt(2)*maxSize/(Math.pow(2,lvl));
};

const getStyle = (lvl, depth) => {
    let res = {
        backgroundColor: "green",
        transform: `rotate(${lvl !== 0 ? rotDegree : 0}deg)`,
        position: 'absolute',
        top: `${getKForLvl(lvl-1) + getDiff(lvl)}px`,
        left: `${getKForLvl(lvl-1)/2 + 2*getDiff(lvl)}px`,
        width: `${maxSize/(Math.pow(2,lvl))}px`,
        height: `${maxSize/(Math.pow(2,lvl))}px`
    };

    return res;
};

export default getStyle;
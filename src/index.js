function type(val) {
    return Object.prototype.toString.call(val).slice(8, -1);
}

function isPlainObject(obj) {
    return type(obj) === 'Object';
}

function isArray(obj) {
    return type(obj) === 'Array';
}

function _formatArrayPattern(pattern) {
    let _has = [];
    let _special = {}
    pattern.forEach(item => {
        if (isPlainObject(item)) {
            _special = {...item, ..._special};
        } else {
            _has.push(item);
        }
    });
    return {
        has: _has.length ? _has : null,
        specail: _special
    }
}

function formatPattern(pattern) {
    if (isArray(pattern)) {
        return _formatArrayPattern(pattern);
        
    } else if (isPlainObject(pattern)) {
        return {
            has: null,
            specail: pattern
        }
    }else {
        throw new Error('pattern must be array or object');
    }
}

function validateInput(val) {
    if (isPlainObject(val)) {
        return val;
    } else {
        throw new Error('input must be an object');
    }
}

function when(val, pattern) {
    try {
        const { has, specail} = formatPattern(pattern);
        let _val = validateInput(val);
        if (has) {
            let hasFlag = has.every((item) => {
                return _val.hasOwnProperty(item);
            });
            if (!hasFlag) return false;
        }
        if (specail) {
            let specialFlag = Object.keys(specail).every((key) => {
                return specail[key] === _val[key];
            });
            if (!specialFlag) return false;
        }
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export default when;
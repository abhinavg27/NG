// HOF
    function forEach(elems, action) {
        for(i = 0 ; i < elems.length; i++) {
            action(elems[i]);
        }
    }

// HOF ==> Open for extension closed for change
function filter(elems, predicateFn) {
    var result = [];
        forEach(elems, function(e) {
            if(predicateFn(e)) {
                result.push(e);
            }
        });
    return result;
}


export  function debounce(func, wait) {
    let time = null
    return function (...arge) {
        if (time) clearTimeout(time)
        time = setTimeout(() => {
            func.apply(this, arge)
        }, wait);
    }
}



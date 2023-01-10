function formatDate() {
    let date = new Date(document.querySelector('#date').value);
    let now = new Date();
    let time = (now - date)/1000;
        
    function zero(a) {
        if (a<10) {return b=`0${a}`;}
        else {return b=a;}
    }
    
    if (time<1) {
        alert("Прямо сейчас");
    } else if (time<60) {
        alert(`${Math.round(time)} секунд назад`);
    } else if (time<3600) {
        alert(`${Math.round(time/60)} минут назад`);
    } else {
        let fd = date.getDate();
        let d = zero(fd);
        let fm = date.getMonth()+1;
        let m = zero(fm);
        let fy = date.getFullYear();
        let y
        if (fy<1900) {
            y=fy;
        } else if (fy<2000) {
            y=fy-1900;
        } else {
            y=fy-2000;
        };
        let fh = date.getHours();
        let h = zero(fh);
        let fmin = date.getMinutes();
        let min = zero(fmin);
        alert(`${d}.${m}.${y} ${h}:${min}`)}
    }
    
    
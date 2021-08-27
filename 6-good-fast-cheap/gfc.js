function play(id) {
    let good = document.getElementById('good').checked;
    let cheap = document.getElementById('cheap').checked;
    let fast = document.getElementById('fast').checked;

    if (id == 'good') {
        if(good==true){
            if(cheap == true) {
                fast = false;
            } 
        } 
    } else if(id == 'cheap') {
        if(cheap==true) {
            if(fast == true) {
                good = false;
            }
        } 
    } else {
        if(fast == true) {
            if(cheap==true){
                good = false;
            }
        }
    }

    console.log(`${good} - ${cheap} - ${fast}`);
    

    document.getElementById('good').checked = good;
    document.getElementById('cheap').checked = cheap;
    document.getElementById('fast').checked = fast;
}



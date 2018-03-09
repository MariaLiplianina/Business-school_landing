var we = document.getElementsByClassName("we")[0];

function next() {

    var temp = we.firstElementChild.innerHTML;
    for(var i=0; ; i++) {
        if(i==we.childElementCount-1) {
            we.children[i].innerHTML = temp;
            break;
        }
        we.children[i].innerHTML = we.children[i+1].innerHTML;
    }
}

function prev() {

   var temp = we.lastElementChild.innerHTML;
   for(var i = we.childElementCount-1; ; i--) {
       if(i==0) {
           we.children[i].innerHTML = temp;
           break;
       }
       we.children[i].innerHTML = we.children[i-1].innerHTML;
   }
}
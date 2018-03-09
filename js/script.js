var advantages = document.getElementsByClassName("advantages")[0];

function next() {

    var temp = advantages.firstElementChild.innerHTML;
    for(var i=0; ; i++) {
        if(i==advantages.childElementCount-1) {
            advantages.children[i].innerHTML = temp;
            break;
        }
        advantages.children[i].innerHTML = advantages.children[i+1].innerHTML;
    }
}

function prev() {

   var temp = advantages.lastElementChild.innerHTML;
   for(var i=advantages.childElementCount-1; ; i--) {
       if(i==0) {
           advantages.children[i].innerHTML = temp;
           break;
       }
       advantages.children[i].innerHTML = advantages.children[i-1].innerHTML;
   }
}
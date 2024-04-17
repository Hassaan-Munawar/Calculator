function btnclick(a){
   document.getElementById('inp').value += a
}
function eq(){
    var getcalc = document.getElementById('inp')
    getcalc.value = eval(getcalc.value)
}
function clr(){
      var getclear = document.getElementById('inp')
      getclear.value = getclear.value.slice(0,-1)
}
function allclear(){
    document.getElementById('inp').value = ''
}

function getPrimes(){
    let Number = document.getElementById("Number").value;
    let arr = [];
    let Answer = document.getElementById('answer');
    Answer.textContent =  ""
    arr[0] = false;
    arr[1] = false;
    for(let i=2;i<=Number;i++){
        arr[i] = true;
    }
    Number = parseInt(Number);
    for(let i=2;i*i<=Number;i++){
        if(arr[i] == true){
            for(let j=i*i;j<=Number;j+=i){
                arr[j] = false;
            }
        }
    }
    for(let i=0;i<=Number;i++){
        if(arr[i] == true){
            Answer.textContent = Answer.textContent + " " + i;
        }
    }
}
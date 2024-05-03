function submit(){
    let textAreaValue = document.getElementById("textArea").value
    let findtext = document.getElementById("inputText").value
     if(textAreaValue.includes(findtext)){
        document.getElementById("result").innerHTML = findtext + " - so`zi mavjud"
    }else{
        document.getElementById("result").innerHTML = findtext + " - so`zi mavjud emas"
    }
}
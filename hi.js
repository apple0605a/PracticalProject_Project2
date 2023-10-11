/*다른 html에 연결이 안됨 => 추가나 수정 같은 기능 다 제대로 구현 불가능*/

let wordList = [
    {
        "word": apple,
        "meaning": 사과,
        "level": 1
    },
    {
        "word": banana,
        "meaning": 바나나,
        "level": 1
    },
    {
        "word": peach,
        "meaning": 복숭아,
        "level": 2
    },
    {
        "word": watermelon,
        "meaning": 수박,
        "level": 3
    }
]

function showList() {
    for (let i = 0; i < wordList.length; ++i) {
        document.write(wordList[i.word], <pre>wordList[i.meaning]</pre>, <pre>wordList[i.level]</pre> );
    }
}

function myFunction() {
    if(Checkform()) {
        clearForm();
    }
}

function clearForm() {
    document.inputWord.name.value = "";
    document.inputWord.mean.value = "";
    document.inputWord.post[0].checked = false;
    document.inputWord.post[1].checked = false;
    document.inputWord.post[2].checked = false;
}

function Checkform() {
    if(inputWord.name.value == "" ) {
        inputWord.name.focus();
        alert("단어를 입력하시오.");
        return false; 
    }
    if(inputWord.mean.value == "" ) {
        inputWord.mean.focus();
        alert("뜻을 입력하시오.");
        return false;
    }
    if((inputWord.post[0].checked == false) && (inputWord.post[1].checked == false) && (inputWord.post[2].checked == false)) {
        alert("단어 레벨을 선택하시오.");
        return false;
    }
    alert("단어가 추가됩니다");
    return true;
} 
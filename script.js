const data = [
    "Python",
    "Java",
    "Javascript",
    "React",
    "Nodejs",
    "Visual Studio Code",
    "Vuejs"
]
const search = document.getElementById('search');
const output = document.getElementById('output');

search.addEventListener('keyup',()=>{
    let word = search.value;
    let result = [];
    // console.log(word);
    if(word.length){
        result = data.filter((value)=>{
            return value.toLowerCase().includes(word.toLowerCase())
        })
        // console.log(result);
    }
    if(result.length > 0){
        const content = result.map((value)=>{
            return "<li onclick=selectChoice(this)>"+value+"</li>"
        })
        output.innerHTML = "<ul>"+content.join("")+"</ul>"
    }else{
        output.innerHTML = ""
    }
});

function selectChoice(word){
    search.value = word.innerHTML;
}
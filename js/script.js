const shlokaList = document.getElementById('shloka-list');
const chapterList = document.getElementById('chapter-list');

const bhagavad = () => {
    fetch('https://vedicscriptures.github.io/chapters').then((res)=>{
        return res.json();
    }).then((data)=>{
        console.log("data",data);

        data.forEach(element => {
            chapterList.innerHTML += `<li class="list-group p-2 mb-2 shadow-md text-center cursor-pointer" onclick="return loadShlokas(${element.chapter_number},${element.verses_count} )"> ${element.name}</li>`
        });
    }).catch((err)=>{
        console.log("err", err);
    }) 
}
bhagavad();

const loadShlokas = async (chapterNumber , verses_count) => {

    shlokaList.innerHTML =  " ";

    for (let sloks = 1; sloks < verses_count ; sloks++) {

        const data = await fetch(`https://vedicscriptures.github.io/slok/${chapterNumber}/${sloks}/`)

        const res = await data.json();
        console.log(res);
        shlokaList.innerHTML += res.slok + "<br><br>";
        
    }
}

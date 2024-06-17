const about=document.getElementById('about');

function f1(){
    const pageavailable= true;
    if(pageavailable){
        //about.textContent = 'ABOUT-OPEN';//to show the another text to replace existing one
        window.location.href = 'index.html'.replace('index.html','homepage.html');//to open file location
        //to replace the file use .replace function give us diff parameters.
    }
    else{
        alert(' There Is no Login page available');
        
    }
}
about.addEventListener('click',f1);

let homeButton = document.querySelector("#button1")
let linkedinButton = document.querySelector("#button2")
let githubButton = document.querySelector("#button3")



let homeCheck = false;
let linkedinCheck = false;
let githubCheck = false;
let youtubeCheck = false;
let homeUrl = `index.html`
let linkedinUrl = `https://www.linkedin.com/in/jayantbokade09/`
let githubUrl = `https://github.com/mrjayantbokade`
let youtubeUrl = ``


//refresh only one time
homeButton.addEventListener("click", () =>{
    if( homeCheck === true){
        return;
    }else{
        window.location = homeUrl;
    }
})




linkedinButton.addEventListener("click", () =>{
    if( homeCheck === true){
        return;
    }else{
        window.location = linkedinUrl;
    }
})



githubButton.addEventListener("click", () =>{
    if( homeCheck === true){
        return;
    }else{
        window.location = githubUrl;
    }
})



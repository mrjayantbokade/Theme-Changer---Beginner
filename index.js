let boxes = document.querySelectorAll(".boxClass")

const body = document.querySelector("body");


boxes.forEach(function (box){ //each button from forEach will be pass to this function
    box.addEventListener("click", function(e){
        console.log(e);
        console.log(e.target); // target is used to retrive or identify the elment or for here box
        console.log(e.target.id); // id retrived
        //this upper part is for understanding 
        //this has no effect on remaing code


        if(e.target.id === "box1"){

                body.style.backgroundColor = "goldenrod";

        }

        if(e.target.id === "box2"){

            body.style.backgroundColor = "rgb(193, 218, 32)";

        }

        if(e.target.id === "box3"){

        body.style.backgroundColor = "rgb(32, 218, 106)";

        }

        if(e.target.id === "box4"){

            body.style.backgroundColor = "rgb(218, 32, 162)";

        }

    } )
    
})
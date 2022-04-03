const appendData = (data,parent)=>{

    data.map(function(elem){
        let div = document.createElement("div")

        let img = document.createElement("img")
        img.src = elem.image;

        let name = document.createElement("h3")
        name.textContent = elem.title;
        
        let description = document.createElement("p")
        description.textContent = elem.desc;

        let div2 = document.createElement("div")
        div2.setAttribute("id","priceSecB")

        let pr = document.createElement("p")
        pr.textContent = "₹ "+elem.price;

        let crosspr = document.createElement("p")
        crosspr.textContent = "₹ "+ elem.crossprice;
        crosspr.style.textDecorationLine = "line-through";
        crosspr.style.color = "darkgray";

        div2.append(pr,crosspr)
        div.append(img,name,description,div2)
        parent.append(div)
    });
   
}

export {appendData};
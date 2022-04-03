var makeupData = JSON.parse(localStorage.getItem("makeupData"));
// console.log(makeupData);

displayData(makeupData);



    function displayData(makeupData) {
    document.querySelector("#makeupproductDiv2").innerHTML = "";

    makeupData.map(function (elem) {

    var makeupproductsubDiv1 = document.createElement("div");
    makeupproductsubDiv1.setAttribute("id", "makeupproductsubDiv1");

    //create img
    var img = document.createElement("img");
    img.setAttribute("src", elem.image);
    img.setAttribute("id","im")

    //create title
    var title = document.createElement("h3");
    title.textContent = elem.title;

    //create description
    var description = document.createElement("p");
    description.textContent = elem.description;
    description.style.color ="#585858";

    //create price
    var price = document.createElement("p");
    price.textContent = elem.price;
    price.style.fontSize="25px";
    

    //create shades 
    var makeupproductsubDiv2 = document.createElement("div");
    makeupproductsubDiv2.setAttribute("id", "makeupproductsubDiv2");

    var shades = document.createElement("p");
    shades.textContent = elem.shades;

    var shadesimg = document.createElement("p");
    shadesimg.setAttribute("src", elem.image1);

        //makeupproductsubDiv2 Append
        makeupproductsubDiv2.append(shadesimg, shades);
    
        makeupproductsubDiv1.append(img, title, description, makeupproductsubDiv2, price);

        makeupproductDiv2.append(makeupproductsubDiv1);
});


};
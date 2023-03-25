function generatecv() {
  //get name
  let name = document.getElementById("namefield").value;
  //get contact
  let contact = document.getElementById("contactfield").value;
  //get address
  let address = document.getElementById("addressfield").value;


  //set value
  document.getElementById("nameT1").innerHTML = name;
  document.getElementById("nameT2").innerHTML = name;
  document.getElementById("contactT").innerHTML = contact;
  document.getElementById("addT").innerHTML = address;

  //get all links
  let facebookLink = document.getElementById("ffield").value;
  let instaLink = document.getElementById("ifield").value;
  let linkedinLink = document.getElementById("lfield").value;
  //set all Link
  document.getElementById("liT").innerHTML = linkedinLink;
  document.getElementById("fbT").innerHTML = facebookLink;
  document.getElementById("IT").innerHTML = instaLink;

  //objectTive
  let objectTive = document.getElementById("ofield").value;
  document.getElementById("ObjectiveT").innerHTML = objectTive;


  // work Experince
  const elements = Array.from(document.getElementsByClassName("wefield"));
  let str = "";
  for (const element of elements) {
    let str1 = element.value;
    let li = document.createElement("li");
    let text = document.createTextNode(str1);
    li.appendChild(text);
    li.setAttribute("id","removewe");
    document.getElementById("weT").appendChild(li);
  }

  // academic qualification

  const aq=document.getElementsByClassName("aqfield");
  for(let k of aq)
{
         let academic=document.createElement("li");
         let text=document.createTextNode(k.value);
         academic.appendChild(text);
         academic.setAttribute("id","removwaq");
         document.getElementById("aqT").appendChild(academic);
}

//for image Field

let image=document.getElementById("imagefield").files[0];
let reader=new FileReader();
reader.readAsDataURL(image);
reader.onloadend=function()
{
  document.getElementById("image").setAttribute("src" , reader.result); 
}


// show the cv templete
document.getElementById("cvtemplete").style.display="block";
document.getElementById("cv-form").style.display="none";


}
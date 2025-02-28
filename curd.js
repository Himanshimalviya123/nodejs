let fetchData=async ()=>{
    let url='http://localhost:3000/hotel'
    let res=await fetch(url,{method:"GET"})
     let data=await res.json()
    // console.log(res);
    console.log(data);
    
    

let show=document.querySelector("#show")
data.map((e)=>{
    show.innerHTML+=
    `
    <tr>
        
        <td>${e.name}</td>
        <td>${e.age}</td>
        <td>${e.adhar}</td>
        <td>${e.mobileno}</td>
        <td>${e.date}</td>
        <td>${e.destination}</td>
        <td>${e.person}</td>
        <td>${e.price}</td>
        <td>${e.person*price}</td>
    </tr>
    `})
}

let del=(id)=>{
    let url='http://localhost:3000/hotel';

    fetch(url,{method:"DELETE"});

}
// =============================================================================================================
let ins=()=>{
    let inpnname=document.querySelector("#name").value
    let inpnage=document.querySelector("#age").value
    let inpnadhar=document.querySelector("#adhar").value
    let inpnnumber=document.querySelector("#number").value
    let inpndate=document.querySelector("#date").value
    let inpndestination=document.querySelector("#destination").value
    let inpnperson=document.querySelector("#person").value
    
}
let url='http://localhost:3000/hotel'
fetch(url,{
    method:"POST",
    headers:{
        "content-type":"application/json"
    },
    body:JSON.stringify({
        "name":inpnname,
        "age": inpnage,
        "adhar":inpnadhar,
        "number":inpnnumber,
        "date":inpndate,
        "destination":inpndestination,
        "person":inpnperson
    })
})



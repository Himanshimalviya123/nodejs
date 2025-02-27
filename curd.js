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
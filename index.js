// Add your code here
function submitData(name,email){

  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      "name": name,
      "email": email,
    })
  }).then((response)=>{
    return response.json()
  }).then((json)=>{
    console.log(json);
    const body = document.getElementsByTagName('body')[0];
    const p = document.createElement('p')
    p.innerHTML = `${json.id}`
    body.append(p);
  }).catch((message)=>{
    const body = document.getElementsByTagName('body')[0];
    const p = document.createElement('p')
    p.innerHTML = message
    body.append(p);
  });

}

const r = submitData("payam","mail");

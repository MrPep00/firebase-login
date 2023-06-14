const e=document.getElementById("login-form");e.addEventListener("submit",async e=>{e.preventDefault();let t=document.getElementById("email-input"),n=document.getElementById("password-input"),a=t.value,l=n.value;try{let e=await firebase.auth().signInWithEmailAndPassword(a,l);console.log(e.user)}catch(e){console.error(e)}});
//# sourceMappingURL=main.175b7826.js.map

const e=document.getElementById("registration-form");e.addEventListener("submit",async e=>{e.preventDefault();let t=document.getElementById("email-input"),n=document.getElementById("password-input"),a=t.value,r=n.value;try{let e=await firebase.auth().createUserWithEmailAndPassword(a,r);console.log(e.user)}catch(e){console.error(e)}});
//# sourceMappingURL=main.3f183314.js.map

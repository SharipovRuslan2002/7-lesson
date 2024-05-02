// 1-task 



function submit() {
    let username = document.getElementById("username").value;
    let password = Number (document.getElementById("password").value);
    
    if (password === admin) {
      if (password === 123) {
        alert("SUCCESS");
      } else {
        alert("Password xato");
      }
    } else if (password === 123) {
      alert("username xato");
    } else {
      alert("username va password xato");
    }
  }
  

// 2-task 

// const create =(e)=>{
//     e.preventDefault();
//     let result =document.getElementById("result")
//     let width = e.target[0].value
//     let heigth = e.target[1].value
//     let bg_color = e.target[2].value
//     let border_r = e.target[3].value
//     console.log(width, heigth, bg_color, border_r)
//     result.style.width = `${width}px`
//     result.style.height = `${heigth}px`
//     result.style.backgroundColor = bg_color
//     result.style.borderRadius = `${border_r}px`
// }


// 3-task

// function show() {
//     const text = document.querySelector("div").value
//     const result = document.querySelector(".result")
//     const son = text.replace(/\s/g, '').length;
//     result.textContent = `Siz ${son}ta belgi kiritdingiz`
// }



let func=document.querySelector("#func")
let but=document.querySelectorAll(".all")
let equal=document.querySelector("#equal")
let ac=document.querySelector("#ac")
let del=document.querySelector("#del")

but.forEach((ele)=>{
    ele.addEventListener("click",()=>{
        (func.textContent)+=(ele.textContent)
    })
})

equal.addEventListener("click",()=>{
    let ans=eval(func.textContent)
    func.textContent=ans
})

ac.addEventListener("click",()=>{
    func.textContent=""
})

del.addEventListener("click",()=>{
    let a=func.textContent
    func.textContent=a.slice(0,a.length-1)
})
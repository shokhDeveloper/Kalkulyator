// let reduse = function(...e){
//      e.reduce((counter, element, index) => {
//         // console.log(counter) // sanab turuvchi va default qiymati 0 berilgan
//         // console.log(element) // usha element lar 
//         // console.log(index) // index lar
//         let hammasi  = counter + element
//         console.log(hammasi)
//         return hammasi // bez return 0 3NAN zzzzz
//     }, 0)
// }
// reduse(10, 20, 30, 40,)
// let usha = [10, 20, 20, 55]
// function elemnts(item, index, array){
//     console.log(item)
// }
// usha.forEach(elemnts)
// let filyter = usha.filter((e) => e%3 == 0)
// console.log(filyter)
// function maps(arr){
//     let map = arr.map(e=> e%2 ==0)
//     console.log(map)
//     //ili
//     arr.map(function(e) {
//         if(e%2== 0){
//             console.log(e)
//         }
//     })
// }
// maps(usha)
// // let array = [10, 20, 30, 40, 50]
// // function reduses(qiymat){
// //     let s = 0
// //     let r = 0
// //     for(let i = 0; i<qiymat.length; i++){
// //         console.log(qiymat[i])
// //         s+=qiymat[i]        
// //         r  +=s
// //     }
// //     console.log(s)
// //     console.log(r)
// // }
// // reduses(array)
// let kes = ['Lion', 'Mark', 'Elon', 'IndiaGogle']
// // let usham = kes.splice(0, 3) // (1 => [0] nechidan boshlab),(2 => [3] nechta element ya'ni uchirish index qutisi ikkinchi urindagi )
// let usham = kes.splice(-1, 0, "Leeeeoooooo") // ohiridan boshlab undan chapga bitta element qush ... 
// console.log(usham)
// console.log(kes)
// console.log(kes.find(e => e=="Leeeeoooooo" && e))
// let object = {name: "Messi"}
// let object2 = {...object}
// console.log(object2)
// object = JSON.stringify(object)
// console.log(object )
// let date = new Date(122233404223)
// console.log(date)
// function yana(data){
//     if(data.getFullYear() === 1973){
//         console.log(true)
//     }else{
//         console.log(false)
//     }
//     let yil = data.getFullYear().toString()
//     let kun = data.getDay().toString()
//     let oy  = data.getMonth()+1
//     console.log(kun.padEnd(2,".")+oy.toString().padEnd(3, ".")+yil)
// }
// yana(date)

// let parent = document.querySelector(".parent")

// let objects = [
//    {
//         name: "Messi",
//         age: 34
//    },
//    {
//         name: "Ronaldo", 
//         age: 38
//    },
//    {
//         name: "Pele",
//         age: 70
//    },
//    {
//     name: "Maradona",
//     age: 70
// }
// ]
// function yarat(parametr){
//     let  p = document.createElement("p")
//     p.appendChild(document.createTextNode(parametr.name))   
//     p.style.color = '#fff'
//     document.body.appendChild(p)
// }
// function aylan(obj){
//     for(let i = 0; i<= obj.length; i++){
//         if(i == 4){break}
//         // debugger
//         console.log(obj[i])
//         yarat(obj[i])
//     }
// }
// aylan(objects)
// let a = 2
// let b = a
// a = 5
// console.log( a , b )

// let string = 'eflekflkaefjklaMessiejfl'
// let rejex = new RegExp("Messi")
// console.log(string.match(rejex))
// let par = document.querySelector(".parent")
// let text = par.setAttribute("id", "usha gap")
// let get = par.getAttribute("class")
// console.log(get)
// console.log(par.hasAttribute("id"))
// if(par.matches(".parent")){
//     console.log("Ha buni is si" +" " + par.getAttribute("class"))
// }else{
//     console.log(false)
// }
// console.log(par.matches(".parent"))
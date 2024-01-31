function Filteryears(prop){
    let newarr=prop.arr.filter((e)=>{
     return e.user_type=="Designer"
    }) 
let sum=0
newarr.forEach(i=>{
    sum+=i.years
})
         return(
        <p>{sum}</p>
         )
    }
 
 export default Filteryears;
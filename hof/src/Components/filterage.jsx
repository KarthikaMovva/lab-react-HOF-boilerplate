function Filterage(prop){
    let newarr=prop.arr.filter((e)=>{
     return 28<e.age && e.age<=50
    }) 
         return(
             <div>
               {newarr.map(element=>
             <div key={element.id}>
                 <span className="display">Id: {element.id}</span>
                 <span className="display">Name: {element.name}</span>
                 <span className="display">User Type: {element.user_type}</span> 
             </div>
         ) }
         </div>
         )
    }
 
 export default Filterage;
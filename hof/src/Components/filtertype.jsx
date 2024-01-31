function Filteringtypes(prop){
   let newarr=prop.arr.filter((e)=>{
    return e.user_type=="Designer"
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

export default Filteringtypes;
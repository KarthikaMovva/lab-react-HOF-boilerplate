function Mappingdata(prop){
 return(
    <div>
        {prop.arr.map(e=>
            <div key={e.id}>
                <span className="display">Id: {e.id}</span>
                <span className="display">Name: {e.name}</span>
                <span className="display">User Type: {e.user_type}</span>
            </div>
    )}
    </div>
 )
}
export default Mappingdata;
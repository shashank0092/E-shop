import { Link } from "react-router-dom";


const Regsiter=()=>{
    return(
        <>
            <div>
                <div>
                    <Link to="/register/customer" > <p>Regsiter As A customer</p> </Link>
                </div>
                <div>
                    <Link to="/register/seller" ><p>Register As A seller</p></Link>
                </div>

            </div>
        </>
    )
}

export default Regsiter;
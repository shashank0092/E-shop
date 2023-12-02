import { Link } from "react-router-dom"
const Login = () => {
    return (
        <>
            <div className="h-[100vh]  flex flex-col justify-center items-center"  >
                <div className="border border-red-300 flex flex-col gap-5 " >
                    <div  >
                        <p className="text-center" >Welcome In E-Shop</p>
                    </div>

                    <div  >
                        <p>Login Using Instagram</p>
                        <p>Login Using Google</p>
                    </div>

                    <div>
                        <Link to="/register" ><p>Don't Have Account Create Account Now</p></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;
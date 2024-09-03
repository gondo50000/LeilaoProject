import {useNavigate} from 'react-router-dom'


const Logout = () =>{
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        navigate("/login");
    }

    return logout;
}
export default Logout;
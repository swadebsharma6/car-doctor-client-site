import PropTypes from 'prop-types';
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";


const PrivetRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <div className="text-center"><span className="loading loading-ring text-primary loading-lg"></span></div>
    }

    if(user?.email){
        return children;
    }


    return <Navigate to='/login' replace></Navigate>
}

export default PrivetRoutes;

PrivetRoutes.propTypes = {
    children: PropTypes.node,
    
}
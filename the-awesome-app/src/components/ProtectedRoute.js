import {Navigate} from 'react-router-dom';

function ProtectedRoute(props){

    const isAuthenticated = sessionStorage.getItem("isAuthenticated");
    if(isAuthenticated && isAuthenticated === "true"){

        return props.children;

    }
    else{
        return <Navigate to="/login" />
    }
    
}

export default ProtectedRoute;
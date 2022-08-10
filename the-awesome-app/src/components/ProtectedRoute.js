import {Navigate, useLocation} from 'react-router-dom';
import {useSelector} from 'react-redux';

function ProtectedRoute(props){

    //const isAuthenticated = sessionStorage.getItem("isAuthenticated");
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const location = useLocation();

    if(isAuthenticated){

        return props.children;

    }
    else{
        return <Navigate to="/login" state={location.pathname}/>
    }
    
}

export default ProtectedRoute;
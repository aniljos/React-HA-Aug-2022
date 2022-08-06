import {Navigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

function ProtectedRoute(props){

    //const isAuthenticated = sessionStorage.getItem("isAuthenticated");
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    if(isAuthenticated){

        return props.children;

    }
    else{
        return <Navigate to="/login" />
    }
    
}

export default ProtectedRoute;
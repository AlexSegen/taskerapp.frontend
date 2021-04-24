import React from 'react'
import { useAuth } from '../../hooks/useAuth';
import Landing from '../../landing';
import Dashboard from '../dashboard';


const Home = () => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? <Dashboard/> : <Landing/>
}
 
export default Home;
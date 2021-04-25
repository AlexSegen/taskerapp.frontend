import React, { createContext, useState } from 'react';
import { User } from '../models/User';
import { getOne } from '../services/user.services';

export const MembersContext = createContext()

const MembersContextProvider = ({children}) => {

    const [team, setTeam] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [member, setMember] = useState(new User());

    const GetMember = id => {
        setLoading(true);
        return getOne(id).then(data => {
            setMember(data);
            setLoading(false);
        }).catch(error => {
            setError(error.message);
            setLoading(false);
        });
    }

    return (<MembersContext.Provider  value={{team, member, loading, error, GetMember}}>
                {children}
            </MembersContext.Provider>)
}

export default MembersContextProvider;
import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams} from "react-router-dom";

import {UserDetails} from "../../components/UserComponents/UserDetails";
import {userService} from "../../services/userService";

    const UserDetailPage = () => {
        const {state} = useLocation()
        const {userId} = useParams();
        const [userURL, setUserURL] = useState([])


            useEffect(() => {
                if(state && state.user) {
                }
                else {
                    userService.biId(userId).then(({data}) => setUserURL(data))
                }
            }, [userId]);

        return (
            <div>
                <UserDetails user={state && state.user || userURL} />
                <hr/>
                <Outlet/>
            </div>
        );
    };

    export {UserDetailPage}
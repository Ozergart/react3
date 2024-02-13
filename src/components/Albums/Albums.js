import React, {useEffect, useState} from 'react';
import {Services} from "../../Services/Services";

const [albums, setAlbums] = useState()

useEffect(() => {
    Services.albums().then(({data})=>data)
}, []);

const Albums = () => {
    return (
        <div>
            Albums
        </div>
    );
};

export {Albums}
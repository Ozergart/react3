import React, {useEffect, useState} from 'react';
import {Services} from "../../Services/Services";

const [albums, setAlbums] = useState([])

useEffect(() => {
    Services.albums().then(({data})=>setAlbums(data))
}, []);

const Albums = () => {
    return (
        <div>
            {albums.map(album)}
        </div>
    );
};

export {Albums}
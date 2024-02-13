import React, {useEffect, useState} from 'react';
import {Services} from "../../Services/Services";
import {Album} from "./Album";



const Albums = () => {
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        Services.albums().then(({data})=>setAlbums(data))
    }, []);
    return (
        <div>
            {albums.map(album=><Album key={album.id} album={album}/>)}
        </div>
    );
};

export {Albums}
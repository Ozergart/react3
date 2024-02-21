import React, {useEffect, useState} from 'react';

import css from './Episodes.module.css'
import {episodeService} from "../../services";
import {Episode} from "./Episode";

const Episodes = () => {

    const [episodes, setEpisodes] = useState([])
    const [prevNext, setPrevNext] = useState({prev:null,next:null})

    useEffect(() => {
        episodeService.getAll().then(({data})=> {
            setEpisodes(data.results);
            console.log(data);
        if (data.info.prev) {
            const pageP = new URL(data.info.prev).searchParams.get('page');
            setPrevNext(prevNext => ({ ...prevNext, prev: pageP }));
        }
        })

    }, []);

    return (
        <div className={css.Episodes}>
            {episodes.map(episod=><Episode key={episod.id} episod={episod}/>)}
            <div className={css.buttonsCont}>
            <button disabled={!prevNext.prev}>prev</button>
            <button disabled={!prevNext.next}>next</button>
            </div>
        </div>
    );
};

export {Episodes}
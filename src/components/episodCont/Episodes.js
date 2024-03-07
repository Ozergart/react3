import React, {useEffect, useState} from 'react';

import css from './Episodes.module.css'
import {episodeService} from "../../services";
import {Episode} from "./Episode";
import {useSearchParams} from "react-router-dom";
import {useDispatch} from "react-redux";

const Episodes = () => {

    const [prevNext, setPrevNext] = useState({prev:null,next:null})
    const [query, setQuery] = useSearchParams({page:"1"})
    const prev =()=>{
        setQuery(prev=> {
            prev.set("page", `${+prev.get('page')-1}`)
            return prev
        })
    }
    const next =()=>{
        setQuery(next=>{
            next.set('page', `${+next.get('page')+1}`)
            return next
        })
    }
    let dispatch = useDispatch;
    useEffect(() => {
        dispatch()
        episodeService.getAll(query.get('page')).then(({data})=> {
            setEpisodes(data.results);
            console.log(data.results);
            setPrevNext({prev: data.info.prev, next: data.info.next})
        })

    }, [query]);

    return (
        <div className={css.Episodes}>
            {episodes.map(episod=><Episode key={episod.id} episod={episod}/>)}
            <div className={css.buttonsCont}>
            <button disabled={!prevNext.prev} onClick={prev}>prev</button>
            <button disabled={!prevNext.next} onClick={next}>next</button>
            </div>
        </div>
    );
};

export {Episodes}
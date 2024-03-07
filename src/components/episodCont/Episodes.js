import React, {useEffect} from 'react';

import css from './Episodes.module.css'
import {Episode} from "./Episode";
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {episodeAction} from "../../store/slices/episodeSlice";

const Episodes = () => {

    const {prevNext, allEpisodes} = useSelector(state => state.episodes)
    const [query, setQuery] = useSearchParams({page:"1"})
    let page = query.get("page")
    let dispatch = useDispatch();
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

    useEffect(() => {
        dispatch(episodeAction.getAll({page}))
    }, [query]);

    return (
        <div className={css.Episodes}>
            {allEpisodes?allEpisodes.map(episode=><Episode key={episode.id} episod={episode}/>):null}
            <div className={css.buttonsCont}>
            <button disabled={!prevNext.prev} onClick={prev}>prev</button>
            <button disabled={!prevNext.next} onClick={next}>next</button>
            </div>
        </div>
    );
};

export {Episodes}
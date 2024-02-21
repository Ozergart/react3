import React, {createContext, useState} from 'react';

const EpisodeNameContext = createContext();
const EpisodeNameProvider = ({children}) => {

    const [episodeName, setEpisodeName] = useState('')
    const [characterPageLocation, setCharacterPageLocation] = useState(false)
    const setEpisodeNameValue = (name)=> setEpisodeName(name)




    return (
        <EpisodeNameContext.Provider value={{episodeName, setEpisodeNameValue, characterPageLocation,setCharacterPageLocation}}>
            {children}
        </EpisodeNameContext.Provider>
    );
};

export {EpisodeNameContext,
        EpisodeNameProvider
}

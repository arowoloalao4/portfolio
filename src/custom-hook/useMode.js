import { useState } from 'react';

const useMode = () => {
    let [mode, setMode] = useState(localStorage.mode ? localStorage.getItem('mode') : 'darkmode');

    const handleMode = () => {
        if (mode === 'lightmode') {
            setMode('darkmode')
        } else {
            setMode('lightmode')
        }

    };

    localStorage.setItem('mode', mode)
    return [mode, handleMode];

}
export default useMode

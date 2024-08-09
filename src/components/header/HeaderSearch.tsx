import {useState} from "react";

export const Search = () => {
    const [isPanelVisible, setIsPanelVisible] = useState(false);

    const handleFocus = () => {
        setIsPanelVisible(true);
    };

    const handleBlur = () => {
        setIsPanelVisible(false)
    };
    return (
        <div className='headerSearch'>
            <input type="text" placeholder='Search' onFocus={handleFocus} onBlur={handleBlur}/>
            {isPanelVisible && (
                <PreviousSearchesPanel/>
            )}
        </div>
    )
}

const PreviousSearchesPanel = () => {
    return (
        <div className='previousSearchesPanel'>
            <div className='previousSearchesPanelTitle'>
                <b>Recent</b>
            </div>
            <PreviousSearch/>
            <PreviousSearch/>
            <PreviousSearch/>
        </div>
    )
}

const PreviousSearch = () => {
    return (
        <div className='previousSearch'>123</div>
    )
}
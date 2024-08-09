import {useState} from "react";

export const Search = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const handleFocus = () => {
        setIsPopupVisible(true);
    };

    const handleBlur = () => {
        setIsPopupVisible(false)
    };
    return (
        <div className='headerSearch'>
            <input type="text" placeholder='Search' onFocus={handleFocus}
                   onBlur={handleBlur}

            />
            {isPopupVisible && (
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
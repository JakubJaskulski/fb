import './style.css';
import {useState} from "react";


export const Header = () => {
    return (
        <div className="header">
            <Search/>
            <FeedTypeSelection/>
            <RoundIconMenu/>
        </div>
    )
}

const Search = () => {
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
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </div>
    )
}

const FeedTypeSelection = () => {
    return (
        <div className='feedTypeSelection'>
            <div className='feedTypeSelectionButton'>1</div>
            <div className='feedTypeSelectionButton'>2</div>
            <div className='feedTypeSelectionButton'>3</div>
        </div>
    )
}

const RoundIconMenu = () => {
    return (
        <div className='headerRoundIconMenu'>
            <div className='roundIconButton'>M</div>
            <div className='roundIconButton'>N</div>
            <div className='roundIconButton'>A</div>
        </div>
    )
}
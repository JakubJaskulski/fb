import './style.css';
import {Search} from "./HeaderSearch";
import {FeedTypeSelection} from "./HeaderFeedTypeSelection";


export const Header = () => {
    return (
        <div className="header">
            <Search/>
            <FeedTypeSelection/>
            <RoundIconMenu/>
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
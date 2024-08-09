import './style.css';
import {Search} from "./HeaderSearch";
import {FeedTypeSelection} from "./HeaderFeedTypeSelection";
import {HeaderRoundIconMenu} from "./HeaderRoundIconMenu";


export const Header = () => {
    return (
        <div className="header">
            <Search/>
            <FeedTypeSelection/>
            <HeaderRoundIconMenu/>
        </div>
    )
}
import './style.css';
import {useContext} from "react";
import {FeedContext, FeedTypes} from "../../store/feed-context";
import {DefaultFeed} from "./DefaultFeed";
import {ShortsFeed} from "./ShortsFeed";
import {MarketplaceFeed} from "./MarketplaceFeed";

export const Feed = () => {
    const {selectedFeedCategory} = useContext(FeedContext)

    const getSeletedFeedComponent = () => {
        switch (selectedFeedCategory) {
            case FeedTypes.type1:
                return <DefaultFeed/>
            case FeedTypes.type2:
                return <ShortsFeed/>
            case FeedTypes.type3:
                return <MarketplaceFeed/>
            default:
                return <DefaultFeed/>
        }
    }

    return (<div className="body">
        {getSeletedFeedComponent()}
    </div>)
}
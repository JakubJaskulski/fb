import {useContext} from "react";

import {FeedContext, FeedTypes} from "../../store/feed-context";

export const FeedTypeSelection = () => {

    const {selectedFeedCategory, setSelectedFeedCategory} = useContext(FeedContext)

    const handleFeedTypeSelection = (feedType: FeedTypes) => {
        setSelectedFeedCategory(feedType)
    }

    const getTypeBasedOnSelection = (feedCategory: FeedTypes) => {
        return selectedFeedCategory === feedCategory ? 'feedSelectionButton feedSelectionButtonSelected' : 'feedSelectionButton'
    }

    return (
        <div className='feedTypeSelection'>
            <button className={getTypeBasedOnSelection(FeedTypes.type1)}
                    onClick={() => handleFeedTypeSelection(FeedTypes.type1)}>1
            </button>
            <button className={getTypeBasedOnSelection(FeedTypes.type2)}
                    onClick={() => handleFeedTypeSelection(FeedTypes.type2)}>2
            </button>
            <button className={getTypeBasedOnSelection(FeedTypes.type3)}
                    onClick={() => handleFeedTypeSelection(FeedTypes.type3)}>3
            </button>
        </div>
    )
}
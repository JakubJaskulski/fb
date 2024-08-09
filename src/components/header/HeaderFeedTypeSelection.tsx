import {useState} from "react";

enum FeedTypes {type1, type2, type3}

export const FeedTypeSelection = () => {


    const [selectedFeedType, setSelectedFeedType] = useState(FeedTypes.type1)

    const handleFeedTypeSelection = (feedType: FeedTypes) => {
        setSelectedFeedType(feedType)
    }

    const getTypeBasedOnSelection = (feedType: FeedTypes) => {
        return selectedFeedType === feedType ? 'feedTypeSelectionButton feedTypeSelectionButtonSelected' : 'feedTypeSelectionButton'
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
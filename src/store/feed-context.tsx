import {createContext} from "react";

export enum FeedTypes {type1, type2, type3, none}

export const FeedContext = createContext({
    selectedFeedCategory: FeedTypes.type1,
    setSelectedFeedCategory: (feedCategory: FeedTypes) => {
    }
});
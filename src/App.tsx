import {Header} from "./components/header/Header";
import {Shortcuts} from "./components/left-panel/Shortcuts";
import {Feed} from "./components/feed/Feed";
import {Contacts} from "./components/right-panel/Contacts";
import {Footer} from "./components/footer/Footer";
import {FeedContext, FeedTypes} from "./store/feed-context";
import {useMemo, useState} from "react";

function App() {
    const [selectedFeedCategory, setSelectedFeedCategory] = useState(FeedTypes.type1)

    const feedContextValue = useMemo(() => ({
        selectedFeedCategory,
        setSelectedFeedCategory,
    }), [selectedFeedCategory, setSelectedFeedCategory]);

    return (
        <FeedContext.Provider value={feedContextValue}>
            <section className="layout">
                <Header/>
                <Shortcuts/>
                <Feed/>
                <Shortcuts/>
                <Contacts/>
                <Footer/>
            </section>
        </FeedContext.Provider>
    )
}

export default App;

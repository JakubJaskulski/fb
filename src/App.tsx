import {Header} from "./components/header/Header";
import {Shortcuts} from "./components/left-panel/Shortcuts";
import {Feed} from "./components/feed/Feed";
import {Contacts} from "./components/right-panel/Contacts";
import {Footer} from "./components/footer/Footer";

function App() {
    return (
        <section className="layout">
            <Header/>
            <Shortcuts/>
            <Feed/>
            <Shortcuts/>
            <Contacts/>
            <Footer/>
        </section>
    )
}

export default App;

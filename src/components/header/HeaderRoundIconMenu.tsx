import {useState} from "react";

enum PanelType {MessagesPanel = 'Messages', NotificationsPanel = 'Notifications', AccountPanel = 'Account'}

export const HeaderRoundIconMenu = () => {

    const [isPanelVisible, setIsPanelVisible] = useState(false);
    const [selectedPanel, setSelectedPanel] = useState(PanelType.MessagesPanel);


    const handleClick = (panelType: PanelType) => {
        setIsPanelVisible(true);
        setSelectedPanel(panelType)
    }

    const handleBlur = () => {
        setIsPanelVisible(false)
    };

    return (
        <div className='headerRoundIconMenu'>
            <button className='roundIconButton' onClick={() => handleClick(PanelType.MessagesPanel)}
                    onBlur={handleBlur}>M
            </button>
            <button className='roundIconButton' onClick={() => handleClick(PanelType.NotificationsPanel)}
                    onBlur={handleBlur}>N
            </button>
            <button className='roundIconButton' onClick={() => handleClick(PanelType.AccountPanel)}
                    onBlur={handleBlur}>A
            </button>
            {isPanelVisible && (
                <RoundIconMenuPanel selectedPanel={selectedPanel}/>
            )}
        </div>
    )
}

const RoundIconMenuPanel = ({selectedPanel}: { selectedPanel: PanelType }) => {
    const getSelectedPanelComponent = (selectedPanel: PanelType) => {
        switch (selectedPanel) {
            case PanelType.MessagesPanel:
                return <MessagesPanel/>
            case PanelType.NotificationsPanel:
                return <NotificationsPanel/>
            case PanelType.AccountPanel:
                return <AccountPanel/>
        }
    }


    return (
        <div className='roundIconMenuPanel'>
            <div className='previousSearchesPanelTitle'>
                <b>{selectedPanel}</b>
            </div>
            {getSelectedPanelComponent(selectedPanel)}
        </div>
    )
}

const MessagesPanel = () => {
    return (
        <div className='manuPanel'>
            <MenuButton source='Username' content='Latest message' passedTime='30min'/>
            <MenuButton source='Username' content='Latest message' passedTime='30min'/>
            <MenuButton source='Username' content='Latest message' passedTime='30min'/>
            <MenuButton source='Username' content='Latest message' passedTime='30min'/>
            <MenuButton source='Username' content='Latest message' passedTime='30min'/>
            <MenuButton source='Username' content='Latest message' passedTime='30min'/>
            <MenuButton source='Username' content='Latest message' passedTime='30min'/>
        </div>
    )
}

const MenuButton = ({source, img, content, passedTime}: {
    source: string,
    img?: string,
    content?: string,
    passedTime?: string
}) => {
    return (
        <button className='menuButton'>
            <div className='roundImage'>{img}</div>
            <div className='content'>
                <b>{source}</b>
                <p>{content}</p>
            </div>
            <p className='passedTime'>
                {passedTime}
            </p>
        </button>
    )
}

const NotificationsPanel = () => {
    return (
        <div className='manuPanel'>
            <MenuButton source='Username 2' content='Recent activity' passedTime='1h'/>
            <MenuButton source='Username 2' content='Recent activity' passedTime='1h'/>
            <MenuButton source='Username 2' content='Recent activity' passedTime='1h'/>
            <MenuButton source='Username 2' content='Recent activity' passedTime='1h'/>
            <MenuButton source='Username 2' content='Recent activity' passedTime='1h'/>
            <MenuButton source='Username 2' content='Recent activity' passedTime='1h'/>
            <MenuButton source='Username 2' content='Recent activity' passedTime='1h'/>
        </div>
    )
}

const AccountPanel = () => {
    return (
        <div className='manuPanel'>
            <MenuButton source='Settings'/>
            <MenuButton source='Help'/>
            <MenuButton source='Log Out'/>
        </div>
    )
}
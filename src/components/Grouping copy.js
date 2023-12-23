import React, {useContext} from 'react'
import "../styles/grouping.css"
import Block from './Block'
import Context from '../ContextAPI/Context';


export default function Grouping(props) {
    const {theme} = useContext(Context);

    return (
        <>
            {props.groupBy=="Status" && <div className="Grouping py-4" style={{ backgroundColor: theme === 'light' ? '#F4F5F8' : 'black' }}>
                <Block heading={"Backlog"} iconClass={'fa-solid fa-circle-exclamation'} lightThemeColor={'gray'} darkThemeColor={'white'}/>
                <Block heading={"Todo"} iconClass={'fa-regular fa-circle'} lightThemeColor={'gray'} darkThemeColor={'white'} />
                <Block heading={"In progress"} iconClass={'fa-solid fa-circle-half-stroke'} lightThemeColor={'rgb(245, 200, 66)'} darkThemeColor={'rgb(245, 200, 66)'} />
                <Block heading={"Done"} iconClass={'fa-solid fa-circle-check'} lightThemeColor={'rgb(56, 75, 181)'} darkThemeColor={'rgb(56, 75, 181)'} />
                <Block heading={"Cancelled"} iconClass={'fa-solid fa-circle-xmark'} lightThemeColor={'gray'} darkThemeColor={'white'} />
            </div>}

            {props.groupBy=="Priority" && <div className="Grouping py-4" style={{ backgroundColor: theme === 'light' ? '#F4F5F8' : 'black' }}>
                <Block heading={0} iconClass={'fa-solid fa-circle-exclamation'} lightThemeColor={'gray'} darkThemeColor={'white'}/>
                <Block heading={1} iconClass={'fa-regular fa-circle'} lightThemeColor={'gray'} darkThemeColor={'white'} />
                <Block heading={2} iconClass={'fa-solid fa-circle-half-stroke'} lightThemeColor={'rgb(245, 200, 66)'} darkThemeColor={'rgb(245, 200, 66)'} />
                <Block heading={3} iconClass={'fa-solid fa-circle-check'} lightThemeColor={'rgb(56, 75, 181)'} darkThemeColor={'rgb(56, 75, 181)'} />
                <Block heading={4} iconClass={'fa-solid fa-circle-xmark'} lightThemeColor={'gray'} darkThemeColor={'white'} />
            </div>}
        </>
    )
}

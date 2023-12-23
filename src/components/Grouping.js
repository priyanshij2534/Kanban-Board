import React, { useContext } from 'react'
import "../styles/grouping.css"
import Block from './Block'
import Context from '../ContextAPI/Context';
import { MDBBadge } from 'mdb-react-ui-kit';


export default function Grouping(props) {
    const { theme } = useContext(Context);

    // backlog
    // <i className="mx-2 fa-solid fa-circle-exclamation" style={{color: theme==='light'?'gray':'white'}}></i>

    // in Progress
    // <i className="mx-2 fa-solid fa-circle-half-stroke" style={{color: 'rgb(245, 200, 66)'}}></i>

    // done
    // <i className="mx-2 fa-solid fa-circle-check" style={{color: 'rgb(56, 75, 181)'}}></i>

    // todo
    //<i className="mx-2 fa-regular fa-circle" style={{color: theme==='light'?'gray':'white'}}></i>

    // cancel 
    // <i className="mx-2 fa-solid fa-circle-xmark" style={{color: theme==='light'?'gray':'white'}}></i>

    // no priority
    // <i class="mx-2 fa-solid fa-grip-lines" style={{color: theme==='light'?'gray':'white'}}></i> 

    //low 
    //<i class="mx-2 fa-solid fa-arrow-down" style={{color: theme==='light'?'gray':'white'}}></i>

    //high
    // <i class="mx-2 fa-solid fa-bolt" style={{color: theme==='light'?'gray':'white'}}></i>
    //medium
    //<i class="mx-2 fa-solid fa-arrow-up" style={{color: theme==='light'?'gray':'white'}}></i>
    //urgent
    //<i class="mx-2 fa-solid fa-triangle-exclamation" style={{color: theme==='light'?'orange':'orange'}}></i>

    const nameIcon = () => {
        return <div className='mx-2 position-relative d-inline-block float-end'>
            <span className="cardNameInitials square bg-primary rounded-circle text-light">AS</span>
            <MDBBadge
                color='danger'
                className='cardBadge1 position-absolute translate-middle p-1 bg-danger border border-light rounded-circle'
            >
                <span class="visually-hidden">New alerts</span>
            </MDBBadge>
        </div>
    }

    return (
        <>
            {props.groupBy == "Status" && <div className="Grouping py-4" style={{ backgroundColor: theme === 'light' ? '#F4F5F8' : 'black' }}>
                <Block heading={"Backlog"} icon={<i className="mx-2 fa-solid fa-circle-exclamation" style={{ color: theme === 'light' ? 'gray' : 'white' }}></i>} />
                <Block heading={"Todo"} icon={<i className="mx-2 fa-regular fa-circle" style={{ color: theme === 'light' ? 'gray' : 'white' }}></i>} />
                <Block heading={"In progress"} icon={<i className="mx-2 fa-solid fa-circle-half-stroke" style={{ color: 'rgb(245, 200, 66)' }}></i>} />
                <Block heading={"Done"} icon={<i className="mx-2 fa-solid fa-circle-check" style={{ color: 'rgb(56, 75, 181)' }}></i>} />
                <Block heading={"Cancelled"} icon={<i className="mx-2 fa-solid fa-circle-xmark" style={{ color: theme === 'light' ? 'gray' : 'white' }}></i>} />
            </div>}

            {props.groupBy == "Priority" && <div className="Grouping py-4" style={{ backgroundColor: theme === 'light' ? '#F4F5F8' : 'black' }}>
                <Block heading={0} icon={<i class="mx-2 fa-solid fa-grip-lines" style={{ color: theme === 'light' ? 'gray' : 'white' }}></i>} />
                <Block heading={1} icon={<i class="mx-2 fa-solid fa-arrow-down" style={{ color: theme === 'light' ? 'gray' : 'white' }}></i>} />
                <Block heading={2} icon={<i class="mx-2 fa-solid fa-arrow-up" style={{ color: theme === 'light' ? 'gray' : 'white' }}></i>} />
                <Block heading={3} icon={<i class="mx-2 fa-solid fa-bolt" style={{ color: theme === 'light' ? 'gray' : 'white' }}></i>} />
                <Block heading={4} icon={<i class="mx-2 fa-solid fa-triangle-exclamation" style={{ color: theme === 'light' ? 'orange' : 'orange' }}></i>} />
            </div>}

            {props.groupBy == "Users" && <div className="Grouping py-4" style={{ backgroundColor: theme === 'light' ? '#F4F5F8' : 'black' }}>
                <Block heading={"usr-1"} icon={nameIcon()}/>
                <Block heading={"usr-2"} icon={nameIcon()}/>
                <Block heading={"usr-3"} icon={nameIcon()}/>
                <Block heading={"usr-4"} icon={nameIcon()}/>
                <Block heading={"usr-5"} icon={nameIcon()}/>

            </div>}
        </>
    )
}

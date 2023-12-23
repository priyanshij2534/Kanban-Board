import React, { useContext } from 'react';
import "../styles/block.css";
import Card from './Card';
import Context from '../ContextAPI/Context';

export default function Block(props) {
    const { theme, tickets, users } = useContext(Context);

    const count = tickets.filter(function (element) {
        return element.status === props.heading || element.priority === props.heading;
    }).length;

    return (
        <>
            <div className="m-2">
                <div className='d-flex justify-content-between'>
                    <div className='d-flex align-items-center'>
                        {props.icon}
                        <p className={`text-${theme === 'light' ? 'dark' : 'light'} m-0 me-2 fw-bolder fs-6`}>{props.heading === 0 ? 'No Priority' : props.heading === 1 ? 'Low' : props.heading === 2 ? 'Medium' : props.heading === 3 ? 'High' : props.heading === 4 ? 'Urgent' : props.heading === 'usr-1' ? 'Anoop sharma' : props.heading === 'usr-2' ? 'Yogesh' : props.heading === 'usr-3' ? 'Shankar Kumar' : props.heading === 'usr-4' ? 'Ramesh' : props.heading === 'usr-5' ? 'Suresh' : props.heading}</p>
                        <p className='text-secondary m-0 fs-6'>{count}</p>
                    </div>
                    <div>
                        <img className='icon m-1' src={require("../images/plusIcon.png")} alt="plusIcon" />
                        <img className='icon m-1' src={require("../images/dots.png")} alt="dots" />
                    </div>
                </div>

                {tickets.filter(function (element) {
                    return element.status === props.heading || element.priority === props.heading || element.userId === props.heading;
                }).map(function (element) {
                    return <Card id={element.id} title={element.title} tag={element.tag} />
                })}

            </div>
        </>
    )
}

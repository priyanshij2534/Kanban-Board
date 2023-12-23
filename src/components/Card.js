import React, {useContext} from 'react';
import "../styles/card.css"
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBadge
} from 'mdb-react-ui-kit';
import Context from '../ContextAPI/Context';

export default function Card(props) {
    const {theme} = useContext(Context);

    return (
        <MDBCard className='my-3'>
            <MDBCardBody style={{backgroundColor: theme==='light'?'white':'#161B22'}} className={`border border-${theme==='light'?'light':'secondary'} rounded`}>

                <div className='position-relative d-inline-block float-end'>
                    <span className="cardNameInitials square bg-primary rounded-circle text-light">AS</span>
                    <MDBBadge 
                        color='danger'
                        className='cardBadge1 position-absolute translate-middle p-1 bg-danger border border-light rounded-circle'
                    >
                        <span class="visually-hidden">New alerts</span>
                    </MDBBadge>
                </div>

                <MDBCardTitle className='text-secondary fw-lighter'>{props.id}</MDBCardTitle>

                <MDBCardText className={`fw-bolder text-${theme==='light'?'dark':'light'}`}>
                    {props.title}
                </MDBCardText>

                <div className='border rounded d-inline p-1'>
                    <i class="fa-xs fa-solid fa-signal" style={{color: theme==='light'?'gray':'white'}}></i>
                </div>

                <div className='position-relative initialism text-secondary border rounded d-inline p-1 mx-2'>
                    <MDBBadge className='cardBadge2 position-absolute rounded-circle mx-1 p-2' color='secondary'> </MDBBadge>
                    <span className='cardTag'>{props.tag}</span>
                </div>

            </MDBCardBody>
        </MDBCard>
    );
}

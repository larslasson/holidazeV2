import React, { useState, useEffect } from 'react';

import Login from './Login';

import contact from '../data/contact.json';
import enquiries from '../data/enquiries.json';

import Messages from '../components/messages';
import Enquiry from '../components/enquiry';


import CardColumns from 'react-bootstrap/CardColumns';

import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



export default function Admin() {
    const [allMessages, setallMessages] = useState([]);
    const [allEnquiries, setallEnquiries] = useState([]);
    const [isLoggedIn, setisLoggedIn] = useState(false);

    useEffect(() => {
        setallMessages(contact);
        setallEnquiries(enquiries);
    }, [])

    const updateLogin = () => {
        setisLoggedIn(true);
    }

    const logOut = () => {
        localStorage.clear();
        setisLoggedIn(false);
    }

    function scrollEnquiries() {
        var jumpEnquiry = document.getElementById("enquiry");
        jumpEnquiry.scrollIntoView();
    }

    function scrollMessages() {
        var jumpMessages = document.getElementById("messages");
        jumpMessages.scrollIntoView();
    }

    function scrollHotel() {
        var jumpNewHotel = document.getElementById("newHotel");
        jumpNewHotel.scrollIntoView();
    }

    const NavigationAdmin = () => {

        return (
            <Navbar sticky="top" expand="lg" className="adminNav">
                <NavLink to='/'><Navbar.Brand >HOLIDAZE</Navbar.Brand></NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <button onClick={scrollEnquiries} className='container__Nav--link nav-link' >Enquiries</button>
                        <button onClick={scrollMessages} className='container__Nav--link nav-link' >Messages</button>
                        <button onClick={scrollHotel} className='container__Nav--link nav-link' >New Establishment</button>
                    </Nav>
                    <Nav className="ml-auto">
                        <button type="button" className="container__Nav--link nav-link logOut" onClick={logOut}>Log out</button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }

    return (localStorage.getItem('username') === 'admin' && localStorage.getItem('password') === '123456' && isLoggedIn) ?
        (
            <>
                <NavigationAdmin />
                <div className="container admin">
                    <div id="enquiry" className="scrollspyLink"></div><br />
                    <div className="col-sm-12">
                        <h3>Enquiries</h3>
                    </div>

                    <CardColumns className=" m-3 p-3 owncard " >  {
                        allEnquiries.map((data) => {
                            return (
                                <Enquiry key={data.id}
                                    establishment={data.establishment}
                                    clientName={data.clientName}
                                    email={data.email}
                                    adults={data.adults}
                                    children={data.children}
                                    notes={data.notes}
                                    checkin={data.checkin}
                                    checkout={data.checkout}
                                />
                            )
                        }
                        )
                    }
                    </CardColumns>

                    <div id="messages" className="scrollspyLink"></div><br />
                    <div className="col-sm-12">
                        <h3>Messages</h3>
                    </div>
                    <CardColumns className=" m-3 p-3 owncard " >
                        {
                            allMessages.map((data) => {
                                return (
                                    <Messages key={data.id}
                                        clientName={data.clientName}
                                        email={data.email}
                                        message={data.message}
                                    />
                                )
                            }
                            )
                        }
                    </CardColumns>

                    <div id="newHotel" className="scrollspyLink"></div><br />
                    <div >
                        <div className="col-sm-12">
                            <h3>Create New Establishment</h3>
                        </div>
                    </div>
                    <form method="POST" action="http://localhost/holidaze/add-establishments-success.php" className="newEstablishment">
                        <div className="row">
                            <div className="col-sm-6">
                                <label for="establishmentName">Establishment Name</label><br />
                                <input type="text" name="establishmentName" id="establishmentName" />
                            </div>
                            <div className="col-sm-6">
                                <label for="establishmentEmail">Establishment Email</label><br />
                                <input type="text" name="establishmentEmail" id="establishmentEmail" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <label for="imageUrl">Image URL</label><br />
                                <input type="text" name="imageUrl" id="imageUrl" />
                            </div>
                            <div className="col-sm-6">
                                <label for="price">Price per person per night ($)</label><br />
                                <input type="number" name="price" id="price" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <label for="maxGuests">Max guests</label><br />
                                <input type="number" name="maxGuests" id="maxGuests" />
                            </div>
                            <div className="col-sm-6">
                                <label for="description">Description</label><br />
                                <input type="text" name="description" id="description" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <label for="googleLong">Google Coordinates Longitude</label><br />
                                <input type="text" name="googleLong" id="googleLong" />
                            </div>
                            <div className="col-sm-6">

                                <label for="googleLat">Google Coordinates Latitude</label><br />
                                <input type="text" name="googleLat" id="googleLat" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 newEstablishment__catering">
                                <label for="selfCatering">Self-catering</label><br />
                                <label for="true">True</label>
                                <input type="radio" id="true" name="selfCatering" value="true" />
                                <label for="false">False</label>
                                <input type="radio" id="false" name="selfCatering" value="false" />
                            </div>
                            <div className="col-sm-6">
                                <label for="id">ID</label><br />
                                <input type="number" name="id" id="id" />
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <input type="submit" className="newEstablishment__button" />
                        </div>
                    </form>
                </div>
            </>
        ) :
        (
            <Login updateLoginStatus={updateLogin} />
        )
}
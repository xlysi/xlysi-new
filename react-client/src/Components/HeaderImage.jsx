import React, { Component, useState } from 'react'
import { Header, Image, Container, Menu, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const HeaderImage = () => {

        const [activeItem, setActiveItem]= useLocalStorage('activeItem', 'home')
        const token = localStorage.getItem('user_token')

        return (
            <Menu id='homepage' secondary color='olive' inverted size='small' style={{fontSize:'1.25em', fontWeight: 'bold'}}>
                <Menu.Item header className='logo'>
                    <Image src='logo-removebg-preview.png' size='small' />
                </Menu.Item>
                <Menu.Menu position='left' >
                    <Menu.Item as={Link} to="/"
                        name='home'
                        active={activeItem === 'home'}
                        onClick={() => setActiveItem('home')}
                    />
                    <Menu.Item as={Link} to="/services"
                        name='services'
                        active={activeItem === 'services'}
                        onClick={() => setActiveItem('services')}
                    />
                    <Menu.Item as={Link} to="/careers"
                        name='careers'
                        active={activeItem === 'careers'}
                        onClick={() => setActiveItem('careers')}
                    />
                    <Menu.Item as={Link} to="/training"
                        name='training'
                        active={activeItem === 'training'}
                        onClick={() => setActiveItem('training')}
                    />
                    <Menu.Item as={Link} to="/company"
                        name='company'
                        active={activeItem === 'company'}
                        onClick={() => setActiveItem('company')}
                    />
                    <Menu.Item as={Link} to="/contact"
                        name='contact'
                        active={activeItem === 'contact'}
                        onClick={() => setActiveItem('contact')}
                    />
                </Menu.Menu>
                <Menu.Menu position='right'>
                    <Menu.Item style={{padding: '0'}} active={activeItem === 'login'} onClick={() => setActiveItem('login')} >
                        <Button secondary color='olive' as={Link} to={token ? "/profile" : "/login"} size='big'>
                            Log in
                        </Button>
                    </Menu.Item>
                    <Menu.Item style={{padding: '0', marginRight:'25px'}} active={activeItem === 'register'} onClick={() => setActiveItem('register')} >
                        <Button secondary color='olive' as={Link} to={token ? "/profile" : "/register"} size='big'>
                            Register
                        </Button>
                    </Menu.Item>
                </Menu.Menu>

            </Menu>
        )
    }


function useLocalStorage(key, initialValue) {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState(() => {
      try {
        // Get from local storage by key
        const item = window.localStorage.getItem(key);
        // Parse stored json or if none return initialValue
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        // If error also return initialValue
        console.log(error);
        return initialValue;
      }
    });
  
    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = value => {
      try {
        // Allow value to be a function so we have same API as useState
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        // Save state
        setStoredValue(valueToStore);
        // Save to local storage
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        // A more advanced implementation would handle the error case
        console.log(error);
      }
    };
  
    return [storedValue, setValue];
  }

export default HeaderImage
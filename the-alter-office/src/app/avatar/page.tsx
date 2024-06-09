"use client"

// Importing necessary components and hooks from Material-UI and React
import AvatarComponent from '@/components/AvatarComponent';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

// Styling for the Badge component using styled API from Material-UI
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#007bff',
        color: '#007bff',
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

// Main component
const AvatarComponentWrapper = () => {
    // State hooks for managing the avatar source, name, count, and users
    const [src, setSrc] = useState('');
    const [name, setName] = useState('');
    const [count, setCount] = useState(0);
    const [users, setUsers] = useState<number>(0);

    // Handler function to change avatar source or name based on input value
    const handleChange = (e: any) => {
        if (e.target.value.includes('http')) {
            setSrc(e.target.value)
        }
        else {
            setSrc('')
            setName('')
            getInitials(e.target.value)
        }
    }

    // Handler function to increment notification count
    const handleCount = () => {
        setCount((prev) => prev + 1)
    }

    // Handler function to increment user count
    const handleUsers = () => {
        setUsers((prev) => prev + 1)
    }

    // Function to get initials from a given name
    const getInitials = (name: string) => {
        const namesArray = name.trim().split(' ');
        if (namesArray.length === 0) return '';
        if (namesArray.length === 1) return namesArray[0][0]?.toUpperCase();
        setName(
            namesArray[0][0].toUpperCase() + namesArray[namesArray.length - 1][0].toUpperCase()
        );
    };

    // JSX returned by the component
    return (
        <>
            {/* Form for input and buttons */}
            <Box
                component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    columnGap: '24px',
                    margin: '1rem'
                }}
                noValidate
                autoComplete="off"
            >
                <TextField required={true} onBlur={(e: any) => handleChange(e)} id="outlined-basic" label="Profile Picture URL or Username" variant="outlined" />
                <Button onClick={(e: any) => handleCount()} variant="contained">Add Notification</Button>
                <Button onClick={(e: any) => handleUsers()} variant="contained">Add Users</Button>
            </Box>

            {/* Avatar Component */}
            <AvatarComponent users={users} count={count} src={src} name={name} />
        </>
    );
}

// Exporting the component as default
export default AvatarComponentWrapper
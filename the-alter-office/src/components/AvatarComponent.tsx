// Importing necessary components and hooks from Material-UI and React

import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

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
const AvatarComponent = ({ users, count, src, name }: { users: number, count: number, src: string, name: string }) => {

    // JSX returned by the component
    return (

        // Stack for displaying avatar and user group 
        <Stack style={{ margin: '1rem' }} direction="row" spacing={2}>
            <StyledBadge
                overlap={src.length > 0 ? 'circular' : undefined}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                variant={count === 1 ? 'dot' : undefined}
                badgeContent={count > 1 ? <div className='rounded-[16px] bg-[#007bff] text-white py-[4px] px-[8px] text-[12px] font-semibold'>{count}</div> : null}
            >
                <Avatar sx={{ width: '24px', height: '24px', bgcolor: src.length > 0 ? 'transparent' : '#F59600' }} alt="Remy Sharp" src={src}>{src.length === 0 ? name : null}</Avatar>
            </StyledBadge>

            {/* Avatar group displaying additional users if any */}
            {users > 0 && <AvatarGroup
                sx={{ '.MuiAvatar-root': { width: '24px', height: '24px', fontSize: '12px' } }}
                max={4}
            >
                {Array.from({ length: users }).map((_, index) => (
                    <Avatar
                        key={index}
                        sx={{ width: '24px', height: '24px' }}
                        alt={`User ${index + 1}`}
                        src="/Memoji-2.png"
                    />
                ))}
            </AvatarGroup>}

        </Stack>
    )
}

// Exporting the component as default
export default AvatarComponent
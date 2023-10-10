import { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import ViewListIcon from '@mui/icons-material/ViewList';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';

export default function Tabs() {
    const [value, setValue] = useState(0);

    return (
        <>
            <Container sx={{ height: 50 }}></Container>

            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    sx={{justifyContent: 'flex-start'}}
                >
                    <BottomNavigationAction label="List" icon={<ViewListIcon />} />
                    <BottomNavigationAction label="Roles" icon={<FavoriteIcon />} />
                    <BottomNavigationAction label="License" icon={<ArchiveIcon />} />
                </BottomNavigation>
            </Paper>
        </>
    );
}
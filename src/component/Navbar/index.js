import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import logo from '../../assets/logo.png';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    
})
const pages = ['Home', 'AboutUs', 'Services', 'Portfolio', 'Contact Us'];
const socialicons = [<TwitterIcon />, <FacebookIcon />, <LinkedInIcon />];


const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };



    return (
        <>
            <Container maxWidth='lg'>
                <Box sx={{ display: { xs: 'block', sm: 'flex' },justifyContent:'space-between',alignItems:'center' }}>
                    <Box sx={{display:'flex',justifyContent:'center',flexDirection:{xs:'column',sm:'row'}}}>
                        <Button sx={{ color: 'white', fontWeight: 'bold' }} startIcon={<PhoneIcon />}>000 111 2222</Button>
                        <Button sx={{ color: 'white', fontWeight: 'bold' }} startIcon={<EmailOutlinedIcon />}>example@email.com</Button>
                    </Box>
                    <Box sx={{ display:'flex' ,justifyContent:'center'}}>
                        {socialicons.map((icon) => (
                            <IconButton aria-label="delete" sx={{ p: 2,mx:2, color: 'white', display: 'block', fontWeight: "bold" }}>
                                {icon}
                            </IconButton>
                        ))}
                    </Box>
                </Box>
            </Container>
            <Divider style={{ borderColor: 'white' }} />
            <AppBar color='transparent' position="static" elevation={0}>
                <Container maxWidth="lg">
                    <Toolbar disableGutters>
                        <Box component="div"
                            sx={{
                                flexGrow: 1
                            }}
                        >
                            <img src={logo} height='88' width='188' alt="Logo." />
                        </Box>

                        <Box sx={{ display: { xs: 'flex', md: 'none' }, color: 'white' }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}

                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ px: 3, my: 2, color: 'white', display: 'block', fontWeight: "bold" }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>


                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
};
export default ResponsiveAppBar;

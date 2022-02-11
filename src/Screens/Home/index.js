
import Navbar from '../../component/Navbar'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function HomeScreen() {

  return (

    <div className="heroContainer">
      <Navbar />
      <Container maxWidth='lg'>
        <Box sx={{ maxWidth: '611px',color:'white',marginTop:'144px', }}>
          <Typography variant='h5'>At Oreo Studios</Typography>
          <Typography variant='h2'>We Build Custom Mobile Applications</Typography>
          <Typography variant='h5'>For Business</Typography>
        </Box>
      </Container>

    </div>


  );
}

export default HomeScreen;

import  React,{useState} from 'react';
 
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
 

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Modale({open, close, onDelete,movie}) {
  const [showSnack, setShowSnack]=useState(false)
  const handleClose = () => close(false);
  
 

  const handleCloseSnack = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setShowSnack(false);
  };

   
  return (
    <div>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Suppression d'un film
          </Typography>
          <div>
            <img style={{width:'50%'}} src="/delete.svg" alt="delete" />
          </div>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
           Vous etes sur le point de supprimer un film , etes vous sur ?
          </Typography>
          <div style={{ display:'flex', justifyContent:'end'}}>

          <Button variant="outlined" color="error" style={{margin:5}} onClick={handleClose}>Non</Button>
          <Button variant="contained" style={{margin:5}} onClick = { async ()=>{
           await onDelete(movie)
           await handleClose()
           setShowSnack(true)
          }}>Oui</Button>
          </div>
 
        </Box>
      </Modal>
    </div>
  );
}

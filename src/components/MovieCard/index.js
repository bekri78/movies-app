// import React from 'react';
// import { Card, Button } from 'antd';

// const MovieCard = ({ movie, onDelete }) => {
//   return (
//     <Card style={{ width: 240, margin: 'auto', height: 240, border: '1px solid black' }}>
//       <h3>{movie.title}</h3>
//       <p>catégorie : {movie.category}</p>
//       <p style={{ color: 'green' }}>likes : {movie.likes} </p>
//       <p style={{ color: 'red' }}>dislikes : {movie.dislikes} </p>
//       <Button onClick={() => onDelete(movie)}>Supprimer le film</Button>
//     </Card>
//   );
// };

// export default MovieCard;



import  React,{useState} from 'react';
import Modale from '../Modale'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
 
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import  {shadows}  from '@mui/system';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function MovieCard({ movie, onDelete }) {
  const [expanded, setExpanded] = useState(false);
  const [openModal, setOpenModal] = useState(false);

 

  return (
    <>
    <Card sx={{ maxWidth: 345 , margin:1,boxShadow: 3 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        {movie.title.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={movie.title}
        subheader={movie.category}
      />
      <CardMedia
        component="img"
        height="194"
        image={movie.img}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing style={{ display:'flex', justifyContent:'space-between'}}>
        <div>
        <IconButton aria-label="add to favorites">
          <ThumbUpIcon /> {movie.likes}
        </IconButton>
        <IconButton aria-label="share">
          <ThumbDownOffAltIcon />{movie.dislikes}
        </IconButton>
        </div>
         <IconButton aria-label="share">
          <DeleteIcon  onClick={ ()=>
            setOpenModal(true)
             } /> 
       
        </IconButton>
       
      </CardActions>
     
    </Card>
   < Modale open={openModal}
   close={setOpenModal}
   
   onDelete={onDelete}
   movie={movie}
   
   />
   </>
  );
}

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.substring(0, maxLength) + '...';
  }
};

export default function CourseCard(props) {
  const { title, description } = props.course;

  return (
    <Card sx={{ maxHeight: 250, maxWidth: 300, marginLeft: '16px', marginBottom: '16px' }}>
      {/* <CardMedia
        component="img"
        alt="Course image"
        maxHeight="50"
        image="/img/sketch.jpg"
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {truncateText(description, 100)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Enroll</Button>
      </CardActions>
    </Card>
  );
}

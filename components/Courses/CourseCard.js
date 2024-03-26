import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CourseCard(props) {
  const { title, discription } = props.course;

  return (
    <Card sx={{ maxWidth: 300, height: '460px', marginLeft: '16px', marginBottom: '16px' }}>
      <CardMedia
        component="img"
        alt="Course image"
        height="100"
        image="/img/sketch.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {discription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Enroll</Button>
      </CardActions>
    </Card>
  );
}

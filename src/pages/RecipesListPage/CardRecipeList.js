import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';


export default function CardRecipeList(props) {
    return (
        <Card onClick={props.onClick} sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component={'img'}
                    height="140"
                    image={props.image}
                    alt={props.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
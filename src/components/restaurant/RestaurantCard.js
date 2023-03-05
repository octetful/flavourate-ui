import { Paper, Button, Chip, Rating } from '@mui/material';
import { Info, LocationOn } from '@mui/icons-material';

function RestaurantCard(props)
{
    return (
        <Paper>
            <h2>{props.name}</h2>
            <div>
                <Chip icon={<Info />} label={props.type} />
                <Chip icon={<LocationOn />} label={props.location} />
            </div>
            <Rating name="rating" max={10} value={Math.round((props.totalRating/30)*10)} readOnly/>
            <p className="restaurantDescription">{props.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}

export default RestaurantCard;
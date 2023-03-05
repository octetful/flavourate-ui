import Carousel from 'react-material-ui-carousel'
import RestaurantCard from './RestaurantCard';

function RestaurantCarousel(props) {
    return (
        <Carousel animation="slide" autoPlay={false}>
            {
                props.restaurants.map( (item, i) => 
                    <RestaurantCard 
                        key={i} 
                        name={item.name} 
                        description={item.description} 
                        type={item.type} 
                        totalRating={item.totalRating}
                        location={item.location} /> )
            }
        </Carousel>
    );
}

export default RestaurantCarousel;

import GoogleMapReact from 'google-map-react';

const MapMarker = ({ text }) => <div>{text}</div>;

/*
 * NOTE: does not work! 
 */
function RestaurantMapper(props) {
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: props.apiKey }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <MapMarker 
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker" />
            </GoogleMapReact>
        </div>
    );
}

export default RestaurantMapper;
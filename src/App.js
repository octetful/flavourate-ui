import { AppBar, Box, Stack, Toolbar, Typography, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import './App.css';
import RestaurantCarousel from './components/restaurant/RestaurantCarousel';
import Searchbar from './components/search/Searchbar';



function App() {
  var restaurants = [
    {
        name: "Flour and Grape",
        description: "Amazing beef short rib ragu but felt very rushed and it was very loud",
        totalRating: 24,
        type: "Pasta And Wine",
        location: "Bermondsey, London"
    },
    {
        name: "Yalla yalla",
        description: "Amazing decor",
        totalRating: 23,
        type: "Lebanese",
        location: "Oxford Circus, London"
    },
    {
      name: "Market halls - Fanny's kebab",
      description: "",
      totalRating: 21,
      type: "Kebab",
      location: "Victoria, London"
    },
    {
      name: "Tortilla",
      description: "The best cba to cook bit tipsy food",
      totalRating: 23,
      type: "Tortillas",
      location: "Clapham, London"
    },
  ];

  return (
    <div>
      <header className="App">
        <Box sx={{flexGrow: 1}}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h3" component="div" sx={{flexGrow: 1}}>
                Flavourate
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
      </header>

      <Stack className="App">
        <Searchbar />
        <RestaurantCarousel restaurants={restaurants} />
        <Fab color="primary" aria-label="Add Restaurant" sx={{position: 'absolute', bottom: 16, right: 16}}>
          <AddIcon/>
        </Fab>
      </Stack>
      
    </div>
  );
}



export default App;

import SearchIcon from '@mui/icons-material/Search';
import { Paper, IconButton, InputBase } from '@mui/material';


function Searchbar(props) {
    return (
        <Paper  component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Restaurants"
                inputProps={{ 'aria-label': 'search restaurants' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}

export default Searchbar;

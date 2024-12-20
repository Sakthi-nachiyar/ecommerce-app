import React, { useState } from 'react';
import {
  Box,
  Drawer,
  Typography,
  Divider,
  Slider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const FilterComp = () => {
  const [state, setState] = useState({
    right: true,
  });

  const [priceRange, setPriceRange] = useState([300, 10000]);

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const categories = [
    {
      title: 'Decor',
      items: ['Photo Frames', 'Wall Clocks', 'Wall Stickers', 'Showpiece'],
    },
    {
      title: 'Appliances',
      items: ['Water Purifier', 'Fan', 'Mixer Grinder', 'Oven', 'Juicers', 'Fridge'],
    },
    {
      title: 'Kitchenware',
      items: ['Pressure Cooker', 'Dinner Set', 'Glassware & Drinkware', 'Water Bottle', 'Kitchen Storage'],
    },
    {
      title: 'Furniture',
      items: ['Sofas', 'Wardrobe', 'Shelves & Storage', 'Dining'],
    },
  ];

  const filterContent = (
    <Box sx={{ width: 300, padding: 2 }}>
      {/* Sort By Section */}
      <Accordion sx={{ backgroundColor: 'transparent', boxShadow: 'none', mt: 1 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#D4DCA4' }} />}>
          <Typography>Sort By</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ mt: 2, mb: 2 }}>
            <FormControlLabel control={<Checkbox />} label="Newest" />
            <FormControlLabel control={<Checkbox />} label="Top Seller" />
            <FormControlLabel control={<Checkbox />} label="Price (Low-High)" />
            <FormControlLabel control={<Checkbox />} label="Price (High-Low)" />
          </Box>
        </AccordionDetails>
      </Accordion>
  
      {/* Price Section */}
      <Typography variant="h6" gutterBottom>
        Price
      </Typography>
      <Divider />
      <Box sx={{ mt: 2, mb: 2 }}>
        <Slider
          value={priceRange}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          min={300}
          max={10000}
          sx={{ color: '#D4DCA4' }}
        />
        <Box display="flex" justifyContent="space-between">
          <Typography>300</Typography>
          <Typography>10000</Typography>
        </Box>
      </Box>
  
      {/* Categories Section */}
      {categories.map((category, index) => (
        <Box key={index} sx={{ mb: 2 }}>
          <Divider />
          <Accordion sx={{ backgroundColor: 'transparent', boxShadow: 'none', mt: 1 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#D4DCA4' }} />}>
              <Typography>{category.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {category.items.map((item, idx) => (
                <FormControlLabel
                  key={idx}
                  control={<Checkbox />}
                  label={item}
                  sx={{ pl: 2 }}
                />
              ))}
            </AccordionDetails>
          </Accordion>
        </Box>
      ))}
  
      {/* Apply Button */}
      <Button
        variant="contained"
        sx={{ backgroundColor: '#D4DCA4', color: '#000', width: '100%', mt: 2 }}
      >
        Apply
      </Button>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
          {filterContent}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default FilterComp;

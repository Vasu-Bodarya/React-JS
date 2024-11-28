import { useEffect, useState } from 'react';
import axios from 'axios';
import { CircularProgress, Container, Grid, Card, CardContent, CardMedia, Typography, Box, Button, Alert, Chip, List, ListItem } from '@mui/material';
import { styled } from '@mui/system';
import './App.css';

// Custom styles for the images (Zoom effect)
const ZoomCardImage = styled(CardMedia)`
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
  
  &:hover {
    transform: scale(1.1);
  }
`;

function App() {
  const [products, setProducts] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setProducts(response.data.products);
      } catch (error) {
        setError('Failed to fetch products.');
      }
    };

    const fetchQuotes = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/quotes');
        setQuotes(response.data.quotes);
      } catch (error) {
        setError('Failed to fetch quotes.');
      }
    };

    const fetchData = async () => {
      setLoading(true);
      try {
        await Promise.all([fetchProducts(), fetchQuotes()]);
      } catch (err) {
        setError('There was an error fetching the data.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <CircularProgress />
    </Box>
  );

  if (error) return (
    <Box sx={{ width: '100%', padding: 2 }}>
      <Alert severity="error">
        {error}
        <Button onClick={() => setLoading(true)} color="error" sx={{ marginLeft: 2 }}>
          Retry
        </Button>
      </Alert>
    </Box>
  );

  return (
    <Container maxWidth="lg" sx={{ padding: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Products Catalog
      </Typography>
      <br /> <br />

      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <ZoomCardImage
                component="img"
                image={product.thumbnail}
                alt={product.title}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" noWrap>
                  {product.description}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                  <Chip label={`$${product.price}`} color="primary" />
                  <Chip label={product.category} color="secondary" />
                </Box>
              </CardContent>
              <Box sx={{ padding: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  Rating: {product.rating} / 5
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h4" align="center" sx={{ marginTop: 6 }}>
        Quotes
      </Typography>
      <List sx={{ padding: 2 }}>
        {quotes.map((quote) => (
          <ListItem key={quote.id} sx={{ '&:hover': { backgroundColor: '#f0f0f0' }, transition: 'background-color 0.3s ease' }}>
            <Typography variant="body1" color="text.primary" align="center" sx={{ width: '100%' }}>
              "{quote.quote}"
            </Typography>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default App;

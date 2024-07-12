import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from 'react-use-cart';
import { MantineProvider } from '@mantine/core';
import Home from './pages/Home';
import ProductArchive from './pages/ProductArchive';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import { WishlistProvider } from 'react-use-wishlist';
import { Notifications } from '@mantine/notifications';
import Wishlist from './pages/Wishlist';
import SingleProduct from './pages/SingleProduct';
import ScrollToTop from './ScrollToTop';
import Layout from './components/Layout';

const App = () => {
  return (
    <WishlistProvider>
      <CartProvider>
        <MantineProvider>
          <Notifications position='top' />
          <Router>
            <ScrollToTop>
              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/products" element={<ProductArchive />} />
                  <Route path="/product/:id" element={<SingleProduct />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/wishlist" element={<Wishlist />} />
                  <Route path="*" element={<Home />} />
                </Routes>
              </Layout>
            </ScrollToTop>
          </Router>
        </MantineProvider>
      </CartProvider>
    </WishlistProvider>
  );
};

export default App;

import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './Layout/Header/Header';
import Footer from './Layout/Footer/Footer';
import { WishlistProvider } from './features/wishlist';


function App() {
  return (
    <WishlistProvider>
      <Header />
      <Outlet />
      <Footer />
    </WishlistProvider>
  );
}

export default App;

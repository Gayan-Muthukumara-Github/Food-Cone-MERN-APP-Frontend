
import './App.css';
import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './screens/Login';
import Signup from './screens/Signup';
import { CartProvider } from './components/ContextReducer';
import MyOrder from './screens/MyOrders';
import Reviews from './screens/Reviews';
import ChatView from './screens/ChatView';
import AddFoodCategory from './screens/Admin/AddFoodCategory'
import AddFoodData from './screens/Admin/AddFoodData'

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/myorder" element={<MyOrder />} />
            <Route exact path="/reviews" element={<Reviews />} />
            <Route exact path="/chatapp" element={<ChatView />} />
            <Route exact path="/addfoodcategory" element={<AddFoodCategory/>} />
            <Route exact path="/addfooddata" element={<AddFoodData/>} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;

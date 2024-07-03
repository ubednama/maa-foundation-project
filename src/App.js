import Footer from './Components/Common/Footer/Footer';
import Header from './Components/Common/Header/Header';
import Home from './Components/Home/Home';
import { Routes, Route } from "react-router-dom";
import Events from './Components/Events/Events';
import Gallery from './Components/Gallery/Gallery';
import Blogs from './Components/Blog/Blogs';
import BlogOpenPage from './Components/Blog/BlogOpenPage';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import Contact from './Components/Contact/Contact';
import EventDetail from "./Components/Events/EventDetail";
import Signup from './Components/Login/Signup';


function App() {
  return (
    <>
   <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event" element={<Events />} />
          <Route path="/event-detail/:eventid" element={<EventDetail/>} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/blogdata/:blogdataId" element={<BlogOpenPage/>} />
            {/* <Route path=":blogdataId" element={<BlogOpenPage/>} /> */}
          {/* </Route> */}
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    <Footer />
    </>
  );
}

export default App;
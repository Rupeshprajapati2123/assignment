import './App.css';
import Nav from './components/navbar/nav';
import First from './components/first/first'
// import Carousel from './components/carousel/carousel';
// import Slider from './components/slider/slider';
// import Boot from './Boot';

import Blog from './components/blog/blog';
import Lorem from './components/lorem/lorem';
import Footer from './components/footer/footer';
import Sblog from './components/sblog/sblog';
import Bar from './components/bar/bar';
import Dummy from './components/dummy/dummy';
import Slide from './components/slide/slide';
import Sslide from './components/Sslide/slide'
// import Tboot from './components/slidetwo/tslide';
function App() {
  return (
    <div className="App">
      <Nav />
      <First />
      <Bar /> 
      <Dummy />
      <Blog />
      <Slide />
      
      {/* <Boot /> */}
      <Sblog /> 
      <Sslide />
      <Lorem />
      {/* <Tboot /> */}
      <Footer />
    </div>
  );
}

export default App;

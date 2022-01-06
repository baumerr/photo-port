import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';

function App() {
  const [categories] = useState([
    {
      name: "Commercial",
      description:
        "Photo's of grocery stores, food trucks, and other commercial projects",
    },
    { name: "Portraits", description: "Portraits of people in my life" },
    { name: "Food", description: "Delicious Delicacies" },
    {
      name: "Landscape",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        ></Nav>
      <main>
        <Gallery></Gallery>
        <About></About>
      </main>  
    </div>
  );
}

export default App;

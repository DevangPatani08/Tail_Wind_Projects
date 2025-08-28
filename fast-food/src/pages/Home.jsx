import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero.jsx';
import Feature from '../components/Feature.jsx';
import SpecialOffer from '../components/SpecialOffer.jsx';
import CategorySection from '../components/CategorySection.jsx';
import { getRandomMeal, fetchCategories } from '../services/api.js';
import ConnectSection from '../components/ConnectSection.jsx'

const Home = () => {
  const [featuredMeal, setFeaturedMeal] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch featured meal and categories from API
    const fetchData = async () => {
      try {
        const [randomMeal, categoriesData] = await Promise.all([getRandomMeal(), fetchCategories()]);
        setFeaturedMeal(randomMeal);

        const sortedCategories = [...categoriesData].sort((a, b) => {
          if (a.strCategory === 'Miscellaneous') return 1;
          if (b.strCategory === 'Miscellaneous') return -1;
          return a.strCategory.localeCompare(b.strCategory);
        });

        setCategories(sortedCategories);
      } catch (err) {
        console.error('Error fetching data:', err);
      } 
    };
    
    fetchData();
  }, []);
  const mealImage = featuredMeal ? featuredMeal.strMealThumb : null;
  const altImage = featuredMeal ? featuredMeal.strMeal : 'Delicious Meal';

  return (
    <div className='w-full h-fit'>
      <Hero />
      <Feature />
      <CategorySection categories={categories} />
      <SpecialOffer mealImage={mealImage} altImage={altImage} />
      <ConnectSection />
    </div>
  )
}

export default Home;
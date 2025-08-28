import React from 'react'

const HorizontalScrollNav = (props) => {
  const { categories, activeCategory, setActiveCategory } = props;
  const navRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScroll = () => {
    if (navRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = navRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction) => {
    if (navRef.current) {
      const scrollAmount = 300;
      navRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
      
      // Check scroll position after a short delay
      setTimeout(checkScroll, 300);
    }
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    // Optional: Scroll to category if needed
  };

  return (
    <div>HorizontalScrollNav</div>
  )
}

export default HorizontalScrollNav
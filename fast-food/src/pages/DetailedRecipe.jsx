import { useEffect, useState, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchMealById } from '../services/api';
import { CustomStyle } from '../services/CustomStyle';
import Loader from '../components/Loader';
import placeImg from '../assets/defualtimg.png';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../store/cartSlice';
import { TbMinus, TbPlus } from 'react-icons/tb';

const DetailedRecipe = () => {
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [atBottom, setAtBottom] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const containerRef = useRef(null);

  const cartItem = useSelector(s => s.cart.items.find(i => i.id === id));
  const quantity = cartItem ? cartItem.quantity : 0;

  useEffect(() => {
    const loadMeal = async () => {
      try {
        const data = await fetchMealById(id);
        setMeal(data);
        setLoading(false);
      } catch (err) {
        console.error('Error loading meal: ', err);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    loadMeal();
  }, [id]);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        setAtBottom(containerRect.bottom <= viewportHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading) return (<Loader />);

  if (!meal) return (
    <section className='w-full h-[100vh] flex flex-col items-center justify-start box-border px-6 md:px-10'>
      <div className='w-full max-w-[90rem] h-full pt-24 flex flex-col items-center justify-center box-border'>
        <CustomStyle variant='h2' className='w-full text-center text-[var(--color-n)] mb-10'>
          Meal Not Found
        </CustomStyle>
        <CustomStyle variant='l_l_m'>
          <Link to='/recipes' className='w-fit rounded-lg px-6 py-2 bg-[var(--color-p)] text-[var(--color-bg-b)] '>Go back</Link>
        </CustomStyle>
      </div>
    </section>
  );

  const ingredients = [];
  for (let i = 0; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push({
        ingredient: meal[`strIngredient${i}`],
        measure: meal[`strMeasure${i}`],
      });
    }
  }

  const addToCart = () => {
    dispatch(cartActions.addItem({
      id: meal.idMeal,
      name: meal.strMeal,
      price: 9.99,
      image: meal.strMealThumb,
      category: meal.strCategory,
    }));
  };
  
  const incrementQuantity = () => {
    dispatch(cartActions.addItem({ id: meal.idMeal }));
  };

  const decrementQuantity = () => {
    dispatch(cartActions.removeItem(meal.idMeal));
  };
  
  const parseTags = (tagsString) => {
    if (!tagsString || tagsString.trim() === '') return [];
    return tagsString.split(',').map(tag => tag.trim()).filter(tag => tag !== '');
  };

  const formatInstructions = (instructions) => {
    if (!instructions) return [];
    return instructions.split('\r\n').map(step => step.trim()).filter(step => step !== '');
  };

  return (
    <section className='w-full flex flex-col items-center justify-start box-border px-6 md:px-10' ref={containerRef}>
      <div className='w-full h-fit max-w-[90rem] pt-24 flex flex-col items-center justify-start box-border pb-24'>
        <div className='w-full h-[37.5rem] relative rounded-2xl overflow-hidden cursor-pointer group'>
          <img 
            src={meal.strMealThumb || placeImg} 
            alt={meal.strMeal} 
            className='w-full h-full object-cover group-hover:scale-105 transition-all duration-300 ease-in-out' 
          />
          <div className='absolute inset-0 bg-[var(--color-n)]/25 flex flex-col items-center justify-end p-10 gap-4 group-hover:bg-[var(--color-n)]/50 transition-all duration-300 ease-in-out'>
            <CustomStyle variant='h1' className='w-full text-left text-[var(--color-bg-b)]'>{meal.strMeal}</CustomStyle>
            {parseTags(meal.strTags).length > 0 && (
              <div className='w-full h-fit flex flex-wrap gap-4 items-center justify-start'>
                <CustomStyle variant='p_b' className='w-fit py-2 px-4 text-center bg-[var(--color-bg-d)] text-[var(--color-n-m)] rounded-lg'>{meal.strCategory}</CustomStyle>
                <CustomStyle variant='p_b' className='w-fit py-2 px-4 text-center bg-[var(--color-bg-d)] text-[var(--color-n-m)] rounded-lg'>{meal.strArea}</CustomStyle>
                
                {parseTags(meal.strTags).map((tag, index) => (
                  <CustomStyle 
                    key={index} 
                    variant='p_b' 
                    className="w-fit py-2 px-4 text-center bg-[var(--color-bg-d)] text-[var(--color-n-m)] rounded-lg"
                  >
                    {tag}
                  </CustomStyle>
                ))}
                
                <CustomStyle variant='p_b' className='w-fit py-2 px-4 text-center bg-[var(--color-bg-d)] text-[var(--color-n-m)] rounded-lg'>
                  {ingredients.length} Ingredients
                </CustomStyle>
              </div>
            )}
          </div>
        </div>

        <div className='my-10 w-full h-fit flex flex-col gap-6 md:gap-8 items-start justify-start'>
          <CustomStyle variant='h2' className='w-full text-left text-[var(--color-n)]'>Ingredients</CustomStyle>
          <div className='w-full h-fit flex flex-wrap gap-4 px-6'>
            {ingredients.map((ingredient, index) => (
              <CustomStyle 
                key={index} 
                variant='p_m' 
                className='w-fit h-fit flex flex-row gap-2 px-6 py-4 rounded-full bg-[var(--color-bg-d)] text-[var(--color-n-m)] hover:bg-[var(--color-s)] hover:text-[var(--color-bg-b)] transition-all duration-300 ease-in-out cursor-pointer'
              >
                <span>{ingredient.ingredient}</span>
                <span>({ingredient.measure})</span>
              </CustomStyle>
            ))}
          </div>
        </div>

        <div className="w-full h-fit flex flex-col gap-6 md:gap-8 items-start justify-start">
          {meal.strInstructions && (
            <div className="w-full mt-8">
              <CustomStyle variant='h2' className='mb-6 text-[var(--color-n)] text-left w-full'>Cooking Instructions</CustomStyle>
              <div className="space-y-5 px-4">
                {formatInstructions(meal.strInstructions).map((step, index) => (
                  <div key={index} className="flex gap-4 items-start justify-start md:items-center">
                    <CustomStyle variant='l_l_m' className="flex-shrink-0 w-10 h-10 bg-[var(--color-p)] text-white rounded-full flex items-center justify-center">
                      {index + 1}
                    </CustomStyle>
                    <CustomStyle variant='l_l_m' className="text-[var(--color-n-m)] leading-relaxed flex-1">
                      {step}
                    </CustomStyle>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={`w-full max-w-[90rem] h-fit p-6 rounded-lg bg-[var(--color-bg-b)] shadow-lg ${atBottom ? 'relative -mt-24' : 'fixed bottom-0 z-50' }`}>
        <div className="flex justify-between items-center gap-2 lg:gap-6">
          <CustomStyle variant='h4' className='w-4/6 text-[var(--color-n)' asChild>
            <div className='flex gap-3'>
              <span className='w-3/6 lg:w-fit lg:max-w-4/6 truncate'>{meal.strMeal}</span>
              <span className='w-fit'> - </span>
              <span className='w-fit text-[var(--color-p)]'>$9.99</span>
            </div>
          </CustomStyle>
          
          {quantity === 0 ? (
            <div className='w-2/6 lg:w-1/6 h-fit flex gap-0 items-center justify-end'>
              <button type="button" className='p-2 flex items-center justify-center text-[var(--color-bg-b)] rounded-md border-1 border-[var(--color-s)] bg-[var(--color-s)] hover:border-[var(--color-p)] hover:bg-[var(--color-p)] transition-all duration-300 ease-in-out  cursor-pointer' onClick={addToCart}>
                <TbPlus className='w-6 h-6 lg:w-8 lg:h-8' />
              </button>
            </div>
          ) : (
            <div className='w-2/6 lg:w-1/6 h-full flex gap-0 items-center justify-end'>
              <button type="button" className='p-2 flex items-center justify-center text-[var(--color-n-m)] rounded-md border-1 border-[var(--color-n-m)] bg-[var(--color-bg-b)] hover:border-[var(--color-p)] hover:bg-[var(--color-p)] hover:text-[var(--color-bg-b)] transition-all duration-300 ease-in-out  cursor-pointer' onClick={decrementQuantity}>
                <TbMinus className='w-6 h-6 lg:w-8 lg:h-8' />
              </button>
              <CustomStyle variant='p_L_m' className='w-full text-center text-[var(--color-n-m)] flex items-center justify-center'>
                <span className='w-full h-full'>{quantity}</span>
              </CustomStyle>
              <button type="button" className='p-2 flex items-center justify-center text-[var(--color-bg-b)] rounded-md border-1 border-[var(--color-s)] bg-[var(--color-s)] hover:border-[var(--color-p)] hover:bg-[var(--color-p)] transition-all duration-300 ease-in-out  cursor-pointer' onClick={incrementQuantity}>
                <TbPlus className='w-6 h-6 lg:w-8 lg:h-8' />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DetailedRecipe;
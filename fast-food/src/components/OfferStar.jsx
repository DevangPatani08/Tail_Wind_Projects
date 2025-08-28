import { CustomStyle } from "../services/CustomStyle";

const OfferStar = ({ 
  // Discount text props
  discountPercentage = 30,
  discountText = "OFF",
  // Color props
  gradientFrom = "from-yellow-400",
  gradientTo = "to-orange-500",
  textColor = "text-white",
  borderColor = "border-yellow-300",
  // Animation props
  animate = true,
  pulseIntensity = "animate-pulse",
  // Additional styling
  className = "",
  showBorder = true,
  shadow = "shadow-2xl"
}) => {
  const points = 40;
  const vertices = [];

  // Generate star points
  for (let i = 0; i < points; i++) {
    const angle = (i * 360 / points) - 90;
    const radius = i % 2 === 0 ? 50 : 40;
    const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
    const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
    vertices.push(`${x}% ${y}%`);
  }

  const starStyle = {
    clipPath: `polygon(${vertices.join(', ')})`
  };

  return (
    <div className={`relative ${className} ${animate ? 'group hover:scale-105 transition-transform duration-300' : ''} rotate-[20deg]`}>
      {/* Optional outer glow */}
      {animate && (
        <div className={`absolute inset-0 bg-${gradientFrom.split('-')[1]}-400 rounded-full blur-xl opacity-30 ${pulseIntensity}`} />
      )}
      
      {/* Star shape */}
      <div
        style={starStyle}
        className={`w-full h-full bg-gradient-to-br ${gradientFrom} ${gradientTo} ${showBorder ? `border-4 ${borderColor}` : ''} ${shadow} ${animate ? 'group-hover:brightness-110 transition-all duration-300' : ''} flex items-center justify-center`}
      />
      
      {/* Text content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className={`${textColor} text-center drop-shadow-lg`}>
          <CustomStyle variant='h2' className='w-full text-center'>{discountPercentage}%</CustomStyle>
          <CustomStyle variant='h6' className=" w-full text-center uppercase">{discountText}</CustomStyle>
        </div>
      </div>
    </div>
  );
};

export default OfferStar;
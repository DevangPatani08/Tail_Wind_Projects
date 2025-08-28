import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Typography = cva("", {
  variants: {
    variant: {
      display_L: 'text-[2.625rem] md:text-[3rem] lg:text-[4.75rem] leading-[calc(2.625rem*1.2)] md:leading-[calc(3rem*1.2)] lg:leading-[4.75rem] font-[600] tracking-[-0.02em] font_brand',
      display: 'text-[4.125rem] leading-[4.125rem] font-[600] tracking-[-0.02em] font_brand',
      h1: 'text-[3.5rem] leading-[calc(3.5rem*1.2)] font-[600] tracking-[-0.02em] font_brand',
      h2: 'text-[1.9375rem] md:text-[2.25rem] lg:text-[3rem] leading-[calc(1.9375rem*1.3)] md:leading-[calc(2.25rem*1.3)] lg:leading-[calc(3rem*1.2)] font-[600] tracking-[-0.015em] md:tracking-[-0.02em] font_brand',
      h3: 'text-[1.625rem] md:text-[1.9375rem] lg:text-[2.625rem] leading-[calc(1.625rem*1.3)] md:leading-[calc(1.9375rem*1.3)] lg:leading-[calc(2.625rem*1.2)] font-[600] tracking-[-0.015em] lg:tracking-[-0.02em] font_brand',
      h4: 'text-[1.9375rem] md:text-[1.1875rem] lg:text-[2.25rem] leading-[calc(1rem*1.5)] md:leading-[calc(1.1875rem*1.5)] lg:leading-[calc(2.25rem*1.3)] font-[700] lg:font-[600] tracking-[0.005em] md:tracking-[0em] lg:tracking-[-0.02em] font_brand',
      h5: 'text-[1.9375rem] leading-[calc(1.9375rem*1.3)] font-[600] tracking-[-0.015em] font_brand',
      h6: 'text-[1.625rem] leading-[calc(1.625rem*1.3)] font-[600] tracking-[-0.015em] font_brand',

      p_L_r: 'text-[1.4375rem] leading-[calc(1.4375rem*1.3)] font-[400] tracking-[-0.005em] font_plain',
      p_L_m: 'text-[1.4375rem] leading-[calc(1.4375rem*1.3)] font-[500] tracking-[-0.005em] font_plain',
      p_L_b: 'text-[1.4375rem] leading-[calc(1.4375rem*1.3)] font-[700] tracking-[-0.005em] font_plain',

      p_r: 'text-[0.6875rem] lg:text-[1rem] leading-[calc(0.6875rem*1.6)] lg:leading-[calc(1rem*1.5)] font-[400] tracking-[0.02em] lg:tracking-[0.005em] font_plain',
      p_m: 'text-[0.6875rem] lg:text-[1rem] leading-[calc(0.6875rem*1.6)] lg:leading-[calc(1rem*1.5)] font-[500] tracking-[0.02em] lg:tracking-[0.005em] font_plain',
      p_b: 'text-[0.6875rem] lg:text-[1rem] leading-[calc(0.6875rem*1.6)] lg:leading-[calc(1rem*1.5)] font-[700] tracking-[0.02em] lg:tracking-[0.005em] font_plain',

      l_l_r: 'text-[0.875rem] lg:text-[1.1875rem] leading-[calc(0.875rem*1.5)] lg:leading-[calc(1.1875rem*1.5)] font-[400] tracking-[0.005em] lg:tracking-[0em] font_plain',
      l_l_m: 'text-[0.875rem] lg:text-[1.1875rem] leading-[calc(0.875rem*1.5)] lg:leading-[calc(1.1875rem*1.5)] font-[500] tracking-[0.005em] lg:tracking-[0em] font_plain',
      l_l_b: 'text-[0.875rem] lg:text-[1.1875rem] leading-[calc(0.875rem*1.5)] lg:leading-[calc(1.1875rem*1.5)] font-[700] tracking-[0.005em] lg:tracking-[0em] font_plain',

      l_c_r: 'text-[0.875rem] leading-[calc(0.875rem*1.5)] font-[400] tracking-[0.005em] font_plain',
      l_c_m: 'text-[0.875rem] leading-[calc(0.875rem*1.5)] font-[500] tracking-[0.005em] font_plain',
      l_c_b: 'text-[0.875rem] leading-[calc(0.875rem*1.5)] font-[700] tracking-[0.005em] font_plain',

      small_r: 'text-[0.6875rem] leading-[calc(0.6875rem*1.6)] font-[400] tracking-[0.02em] font_plain',
      small_m: 'text-[0.6875rem] leading-[calc(0.6875rem*1.6)] font-[500] tracking-[0.02em] font_plain',
      small_b: 'text-[0.6875rem] leading-[calc(0.6875rem*1.6)] font-[700] tracking-[0.02em] font_plain',
    },
  },

  defaultVariants: {
    variant: 'p_r',
  },
});

const CustomStyle = React.forwardRef(({ className, variant, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "p";
  return ( <Comp className={cn(Typography({ variant, className }))} ref={ref} {...props} /> );  
});


CustomStyle.displayName = "CustomStyle";

export { CustomStyle, Typography };
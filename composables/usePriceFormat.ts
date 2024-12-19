export const useFormatPrice = () => {
    /**
     * Format price function
     * @param price number | string
     * @returns formatted price as a string
     */
    const formatPrice = (price: number | string): string => {
      let priceString = price.toString();
  
      if (!priceString.includes(".")) {
        return `${priceString},00`;
      }
  
      const [integerPart, decimalPart] = priceString.split(".");
      const formattedDecimals = decimalPart.padEnd(2, "0"); 
      return `${integerPart},${formattedDecimals}`;
    };
  
    return { formatPrice };
  };
  
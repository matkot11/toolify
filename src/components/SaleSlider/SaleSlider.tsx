import {
  SaleSliderButton,
  SaleSliderButtons,
  SaleSliderDetails,
  SaleSliderWrapper
} from "@/components/SaleSlider/SaleSlider.styled.ts";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useSnapCarousel } from "react-snap-carousel";

type ProductType = {
  id: number;
  created_at: string;
  description: string;
  image: string;
  name: string;
  price: number;
  sale_price: number;
  category: string;
};

const SaleSlider = () => {
  const { scrollRef, pages, activePageIndex, goTo } = useSnapCarousel();
  const [saleProducts, setSaleProducts] = useState<ProductType[]>([]);

  const products = useSelector(
    ({ products }: { products: { products: ProductType[] } }) => products.products
  );

  useEffect(() => {
    const biggestSales = [...products].sort((a, b) => {
      const differenceA = a.price - a.sale_price;
      const differenceB = b.price - b.sale_price;
      return differenceB - differenceA;
    });

    setSaleProducts(biggestSales.slice(0, 3));
  }, [products]);

  if (saleProducts.length === 0 && pages.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <SaleSliderWrapper ref={scrollRef}>
      {saleProducts.map((product) => (
        <div key={product.id} className="sale-slider__product">
          <img className="sale-slider__image" src={product.image} alt={product.name} />
          <SaleSliderDetails>
            <h3>{product.name}</h3>
            <span className="sale-slider__price">${product.sale_price}</span>
            <span className="sale-slider__sale-price">${product.price}</span>
          </SaleSliderDetails>
          <SaleSliderButtons>
            {pages.map((_, index) => (
              <SaleSliderButton
                key={index}
                onClick={() => goTo(index)}
                active={activePageIndex === index}
              />
            ))}
          </SaleSliderButtons>
        </div>
      ))}
    </SaleSliderWrapper>
  );
};

export default SaleSlider;

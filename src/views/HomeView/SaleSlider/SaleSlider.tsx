import {
  SaleSliderDetails,
  SaleSliderWrapper
} from "@/views/HomeView/SaleSlider/SaleSlider.styled.ts";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ProductType } from "@/typings/products.ts";
import { Link } from "react-router-dom";

const SaleSlider = () => {
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

  if (saleProducts.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <SaleSliderWrapper showStatus={false} showThumbs={false} showArrows={false} autoPlay={true}>
      {saleProducts.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id} className="sale-slider__product">
          <img className="sale-slider__image" src={product.image} alt={product.name} />
          <SaleSliderDetails>
            <h3>{product.name}</h3>
            <span className="sale-slider__price">${product.sale_price}</span>
            <span className="sale-slider__sale-price">${product.price}</span>
          </SaleSliderDetails>
        </Link>
      ))}
    </SaleSliderWrapper>
  );
};

export default SaleSlider;

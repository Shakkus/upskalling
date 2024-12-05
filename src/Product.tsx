interface ProductProps {
  title: string;
  description: string;
  price: number;
  images?: string[];
  active?: boolean;
}

const Product: React.FC<ProductProps> = ({
  title,
  description,
  price,
  images,
  active,
}) => {
  return (
    <>
        <p>{title}</p>
        <p>{description}</p>
        <p>{price}</p>
    </>
  )

};
export default Product;

const ProductCard = ({ product }) => {
  const { title, description, category, image, price } = product;

  return (
    <div className="flex flex-col items-center text-center p-4 border rounded-3xl shadow-md">
      <div className="w-full h-[200px] flex items-center justify-center mb-4">
        <img src={image} alt={title} className="max-w-full max-h-full object-contain" />
      </div>
      <h4 className="font-semibold text-lg mb-2">{title}</h4>
      <p className="text-gray-600 text-sm mb-2">{category}</p>
      <p className="text-sm mb-3">
        {description.length > 100 ? `${description.substring(0, 50)}...` : description}
      </p>
      <p className="font-bold text-lg">${price?.toFixed(2) ?? 'N/A'}</p>
    </div>
  );
};

export default ProductCard;
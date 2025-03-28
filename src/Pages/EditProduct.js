import React, { useState, useEffect } from 'react';

const EditProduct = ({ productId, onClose, onProductUpdated }) => {
    console.log('productid', productId)
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [imgType, setImgType] = useState('');
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState(0);
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch the product details by productId when the component is mounted
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/products/${productId}`);
        const data = await response.json();
        setProductName(data.title);
        setCategory(data.category);
        setImgType(data.img_type);
        setPrice(data.price);
        setRating(data.rating);
        setPreviewUrl(data.img1); // Assuming your API returns an image URL
      } catch (err) {
        setError('Failed to fetch product details');
        console.error(err);
      }
    };

    if (productId) {
      fetchProductDetails();
    }
  }, [productId]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);

      // For previewing the image
      const reader = new FileReader();
      reader.onload = () => setPreviewUrl(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const payload = new FormData();
      payload.append('title', productName);
      payload.append('category', category);
      payload.append('img_type', imgType);
      payload.append('price', price);
      payload.append('rating', rating);
      if (imageFile) {
        payload.append('img1', imageFile);
      }

      const response = await fetch(`http://localhost:5000/api/products/${productId}`, {
        method: 'PUT',
        body: payload,
      });

      if (!response.ok) {
        throw new Error('Failed to update product');
      }

      const data = await response.json();
      console.log('Product updated:', data);
      onProductUpdated(data);
      onClose();
    } catch (err) {
      setError('Failed to update product. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleModalClose = () => {
    onClose();
  };

  return (
    <div
      id="editProductModal"
      tabIndex="-1"
      aria-hidden="true"
      className="overflow-y-auto overflow-x-hidden fixed inset-0 z-50 flex justify-center items-center bg-gray-800 bg-opacity-50"
    >
      <div className="relative p-6 w-full max-w-lg h-full md:h-auto">
        <div className="relative bg-white rounded-lg shadow-lg sm:p-6">
          <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b">
            <h3 className="text-xl font-semibold text-gray-900">Edit Product</h3>
            <button
              onClick={handleModalClose}
              type="button"
              className="text-gray-400 hover:bg-gray-200 rounded-lg text-sm p-2 ml-auto"
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6 mb-6 sm:grid-cols-2">
              <div>
                <label htmlFor="productName" className="block mb-2 text-sm font-medium text-gray-900">
                  Product Name
                </label>
                <input
                  type="text"
                  id="productName"
                  className="input-field p-3 w-full rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Type product name"
                  required
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900">
                  Category
                </label>
                <select
                  id="category"
                  className="input-field p-3 w-full rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Select category</option>
                  <option value="TV">TV/Monitors</option>
                  <option value="PC">PC</option>
                  <option value="GA">Gaming/Console</option>
                  <option value="PH">Phones</option>
                </select>
              </div>
              <div>
                <label htmlFor="imgType" className="block mb-2 text-sm font-medium text-gray-900">
                  Image Type
                </label>
                <input
                  type="text"
                  id="imgType"
                  className="input-field p-3 w-full rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter image type"
                  required
                  value={imgType}
                  onChange={(e) => setImgType(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  className="input-field p-3 w-full rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="$2999"
                  required
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="rating" className="block mb-2 text-sm font-medium text-gray-900">
                  Rating
                </label>
                <input
                  type="number"
                  id="rating"
                  className="input-field p-3 w-full rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Rating (1-5)"
                  value={rating}
                  onChange={(e) => setRating(Number(e.target.value))}
                />
              </div>
              <div>
                <label htmlFor="imageFile" className="block mb-2 text-sm font-medium text-gray-900">
                  Product Image
                </label>
                <input
                  type="file"
                  id="imageFile"
                  className="input-field p-3 w-full rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  onChange={handleImageChange}
                />
                {previewUrl && <img src={previewUrl} alt="Preview" className="w-32 h-32 object-cover mt-2" />}
              </div>
            </div>
            {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all"
              disabled={loading}
            >
              {loading ? 'Updating Product...' : 'Update Product'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;

import axios from "axios";

const products = ref([]);

const fetchProducts = async () => {
    try {
        const response = await axios.get("https://dummyjson.com/products");
        products.value = response.data.products;
        console.log(products.value)
    }
    catch (error) {
        console.log(error);
    }
};

const deleteProduct = async (productId) => {

  const confirmDeletion = window.confirm("Are you sure you want to delete this product?");
  
  if (!confirmDeletion) {
    return;
  }
  try {
    await axios.delete(`https://dummyjson.com/products/${productId}`);
    
    products.value = products.value.filter((product) => product.id !== productId);
  } catch (error) {
    console.log(error);
  }
};
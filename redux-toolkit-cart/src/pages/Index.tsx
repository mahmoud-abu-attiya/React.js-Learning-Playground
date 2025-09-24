/**
 * Home Page Component
 * 
 * This is the main landing page that displays our product catalog.
 * It serves as the primary shopping interface where users can:
 * - Browse all available products
 * - Add items to their cart
 * 
 * The page uses our product list which handles:
 * - Product fetching from JSON data
 * - Integration with Redux for cart management
 */

import ProductList from "../components/ProductList";

const Index = () => {
   return (
      <main>
         <ProductList />
      </main>
   );
};

export default Index;

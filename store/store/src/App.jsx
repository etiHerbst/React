 import { useState } from 'react'
 import heroImg from './assets/hero.png'
 import reactLogo from './assets/react.svg'
 import viteLogo from './assets/vite.svg'
  import QuantityCounter from './QuantityCounter';
  import ProductDescription from './ProductDescription';
  import ContactForm from './ContactForm'
  import ProductCard from './ProductCard';

 import './App.css'
import myData from './Products.json';



 function App() {
  return(
  <div>
  {/* <QuantityCounter></QuantityCounter>
  <ProductDescription></ProductDescription> */}

  {myData.map((product) => (
  <ProductCard 
    key={product.id}
    name={product.name}
    price={product.price}
    description={product.description}
    features={product.features}
  />
))}


<br />
<br />
  <ContactForm></ContactForm>

   </div>)

   

 }
  export default App
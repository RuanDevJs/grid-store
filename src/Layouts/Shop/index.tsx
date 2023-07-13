import { useEffect, useState } from 'react'
import styles from "./styles.module.css";
import { HeartStraight, ShoppingBag, Star } from 'phosphor-react';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  }

}

export default function Shop() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      const response = await (await fetch('https://fakestoreapi.com/products?limit=6')).json();
      setProducts(response);
      setLoadingProducts(false);
    }

    fetchProducts();
  }, []);

  if (loadingProducts) {
    return null;
  }

  return (
    <section className={styles.shop}>
      <h1 className={styles.title}>Shop</h1>
      <div className={styles.container}>
        <div className={styles.products}>
          <div className={styles.product_category}>
            <p>showing 1-12 of 19 results</p>
            <select name="products">
              <option value="default sorting" label="default sorting" disabled selected />
              <option value="cheaper" label="cheaper" />
            </select>
          </div>
          <div className={styles.product_list}>
            {
              products.map((product) => {
                return (
                  <div className={styles.product} key={product.id}>
                    <div className={styles.product_poster}>
                      <img src={product.image} alt={product.title} />
                    </div>
                    <div className={styles.product_info}>
                      <h3>{product.title}</h3>
                      <div className={styles.stars}>
                      {
                        [...Array(+products[0].rating.rate.toFixed()).keys()]
                        .map((_, index) => <Star color='#FFBE00' size={20} weight='fill' key={index} />)
                      }
                       <strong>({product.rating.count})</strong>
                      </div>
                       <span className={styles.product_price}>R$ {product.price}, 00</span>
                    </div>
                    <div className={styles.shopping_bag}>
                      <ShoppingBag size={25} />
                    </div>
                    <div className={styles.save}>
                      <HeartStraight size={25} weight='fill' />
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className={styles.filter}>
          <div className={styles.filter_header}>
            <h2>Filter by price</h2>
            <div className={styles.filter_price}>
              <input type="range" min="299" max="1000" />
              <div>
                <span>R$ 299</span>
                <span>R$ 1000</span>
              </div>
            </div>
            <button className={styles.button}>filter</button>
          </div>
          <div className={styles.featured_products}>
            <h1 className={styles.featured_title}>Featured products</h1>
            <div>
            {
              products.map((product) => {
                return (
                  <div className={styles.featured_product} key={`$feature=${product.id}`}>
                    <div className={styles.featured_product_poster}>
                      <img src={product.image} alt={product.title} />
                    </div>
                    <div className={styles.featured_product_info}>
                      <h3>{product.title}</h3>
                      <span>R$ {product.price}</span>
                    </div>
                  </div>
                )
              })
            }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface Rating {
  rate: number;
  count: number;
}

interface Iprops {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}
const Product = (props: Iprops) => {
  const {id, title, price, description, category, image, rating} = props
  const product = props;
  return (
    <section>
      <article>
        <img src={product.image} alt="" style={{ maxWidth: "10%" }} /><br />

      </article>
      <article>
        <div>
          <h2>{product.title
          }</h2>
        </div>
      </article>
      <article>
        <div>
          <h2>{product.price
          }</h2>
        </div>
      </article>
      {/* <article>
        <div style={{ maxWidth: "200px" }} >
          <h2>{product.description
          }</h2>
        </div>
      </article> */}
    </section>
  )
    ;
};

export { Product };

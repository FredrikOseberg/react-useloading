# Introduction

UseLoading allows you to easily add loading states to your elements by following a simple pattern of adding a data-loading property to the elements you want to trigger loading states on:

```
import useLoading from '@foseberg/react-useloading'


const Card = ({ loading }: ICardProps) => {
  const ref = useLoading(loading, 'loadingClass');

  return (
    <div className="card" ref={ref}>
      <h1 className="card-title" data-loading>
        This is a title
      </h1>
      <p className="card-description" data-loading>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
        imperdiet orci eget nunc mattis faucibus. In a purus turpis. Cras
        condimentum diam nec consequat cursus.
      </p>

      <Image />

      <div className="card-price" data-loading>
        1000$
      </div>
    </div>
  );
};

export default Card;
```

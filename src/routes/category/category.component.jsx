import './category.styles.scss'
import { Fragment, useContext, useEffect ,useState } from 'react';
import { useSelector } from 'react-redux';

import { selectCategoriesMap } from '../../store/categories/category.selector';
import { useParams } from 'react-router'
import ProductCard from '../../components/product-card/product-card.component';
const Category = () => {
    const {category} = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const [products,setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);

    },[category,categoriesMap])

    return (
        <Fragment>
            <h2 className='category-title'>{category}</h2>       
            <div className='category-container'> 
                {
                    products && products.map((product) => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </Fragment>
    )
}

export default Category
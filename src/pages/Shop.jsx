import React, {useState} from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from '../components/Helmet/Helmet';
import '../styles/shop.css';
import products from "../assets/data/products1";
import ProductsList from '../components/UI/ProductsList'; 
import { Container,Row,Col } from "reactstrap";


const Shop = () => {
    const [productsData,setProductsData] = useState(products)
    const handleFilter = e =>{
        const filterValue = e.target.value
        if(filterValue==='Salon'){
            const filteredProducts=products.filter(item=>item.category==='Salon');
            setProductsData(filteredProducts);

        }

        if(filterValue==='AC Services'){
            const filteredProducts=products.filter(item=>item.category==='AC Services');
            setProductsData(filteredProducts);

        }

        

        if(filterValue==='Electrician Services'){
            const filteredProducts=products.filter(item=>item.category==='Electrician Services');
            setProductsData(filteredProducts);

        }

        if(filterValue==='Decor'){
            const filteredProducts=products.filter(item=>item.category==='Decor');
            setProductsData(filteredProducts);

        }

    };

    const handleSearch = e =>{
        const searchTerm = e.target.value
        const searchedProducts = products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))
        setProductsData(searchedProducts)
    }


return (
    <Helmet title='Shop'>

        <CommonSection title="Services" />
        <section>
            <Container>
                <Row>
                    <Col lg='3' md='6'>
                        <div className="filter__widget">
                            <select onChange={handleFilter}>
                            <option>Filter by Category</option>
                                <option value="Salon">Salon</option>
                                <option value="Electrician Services">Electrician</option>
                                <option value="AC Services">AC</option>
                                <option value="Decor">Home Decor</option>
                            </select>

                        </div>
                    </Col>
                    <Col lg='3' md='6' className="text-end">
                    <div className="filter__widget">
                            <select>
                            <option>Sort by Category</option>
                                <option value="ascending">Ascending</option>
                                <option value="descending">Descending</option>
                            </select>

                        </div>
                    </Col>
                    <Col lg='6' md='12'>
                        <div className="search__box">
                            <input type="text" placeholder="search....." onChange={handleSearch}/>
                            <span><i class="ri-search-line"></i></span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        <section className="pt-0">
            <Container>
                <Row>
                    {
                        productsData.length === 0? (<h1 className="text-center fs-4">No products are found</h1>) : (<ProductsList data={productsData} />
                        )}
                </Row>
            </Container>
        </section>

    </Helmet>
)
}

export default Shop;
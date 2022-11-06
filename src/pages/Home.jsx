import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import products from "../assets/data/products1";
import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css";
import Clock from "../components/UI/Clock";
import { Container, Row, Col } from "reactstrap";
import heroImg from '../imgs/ACservice1.jpg';
import Services from "../services/Services";
import ProductsList from "../components/UI/ProductsList";
import counterImg from "../assets/images/counter-timer-img.png"

const Home = () => {

const [trendingProducts, setTrendingProducts] = useState([]);
const [bestSalesProducts, setBestSalesProducts] = useState([]);
const [mobileProducts, setMobileProducts] = useState([]);
const [wirelessProducts, setWirelessProducts] = useState([]);

const year = new Date().getFullYear();

useEffect(() => {
    const filteredTrendingProducts = products.filter((item) => item.category === 'AC Services'
    );

    const filteredBestSalesProducts = products.filter((item) => item.category === 'Decor'
    );

    const filteredMobileProducts = products.filter((item) => item.category === 'Electrician Services'
    );

    const filteredWirelessProducts = products.filter((item) => item.category === 'Salon'
    );


    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);


}, []);
return (
    <Helmet title={'Home'}>
        <section className="hero__section">
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div className="hero__content">
                            <p className="hero__subtitle">
                                Trending Services in {year}
                            </p>
                            <h2>Make Your AC Cool like NEW ONE</h2>
                            <p>
                                <b>AC Servicing </b>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam deleniti ipsa accusamus, impedit id mollitia provident. Repellat, consectetur? Iure veritatis consectetur placeat, doloremque quisquam quis fuga sit eum animi sunt.

                            </p>
                            <motion.button whileTap={{ scale: 1.2 }} className="buy__btn"><Link to='/shop'>BOOK NOW</Link></motion.button>
                        </div>
                    </Col>
                    <Col lg='6' md='6'>
                        <div className="hero__img">
                            <img src={heroImg} alt="alson" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        <Services />
        <section className="trending__products">
            <Container>
                <Row>
                    <Col lg='12' className="text-center">
                        <h2 className="section__title">Trending Services</h2>
                        <br></br>
                        <br></br>
                    </Col>
                    <ProductsList data={trendingProducts} />
                </Row>
            </Container>
        </section>
        <section className="best__sales">
            <Container>
                <Row>
                    <Col lg='12' className="text-center">
                        <h2 className="section__title">BEST SERVICES</h2>
                    </Col>
                    <ProductsList data={bestSalesProducts} />
                </Row>
            </Container>
        </section>
        <section className="timer__count">
            <Container>
                <Row>
                    <Col lg="6" md="12" className="count__down-col">
                    <div className="clock__top-content">
                            <h4 className="text-white fs-10 mb-2">Limited Offers</h4>
                            <n3 className="text-white fs-10 mb-3">QUALITY AC SERVICING</n3>
                        </div>
                        <Clock />

                        <motion.button whileTap={{scale:1.2}} className="buy__btn store__btn">
                            <Link to="/shop">Visit Store</Link>
                        </motion.button>
                    </Col>
                    <Col lg="6" md="6" className="text-end counter__img">
                        <img src={counterImg} alt="" />
                    </Col>
                </Row>
            </Container>
        </section>
        <section className="new__arrival">
            <Container>
                <Row>
                    <Col lg='12' className="text-center mb-5">
                        <h2 className="section__title">New Service Launch</h2>
                    </Col>
                    <ProductsList data={mobileProducts}/>
                    <ProductsList data={wirelessProducts}/>

                </Row>
            </Container>
        </section>
    </Helmet>
    
)
}

export default Home;
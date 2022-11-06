import React,{useState, useRef, useEffect} from "react";

import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import products from "../assets/data/products1";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import '../styles/product-details.css';
import { motion } from "framer-motion";
import ProductsList from '../components/UI/ProductsList';
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";



const ProductDetails = () => {

    const [userReview, setUserReview] = useState({
        reviewName: "",
        reviewMessage: "",
    });

    let name, value;
    const postReviewData= (event) =>{
        name = event.target.name;
        value= event.target.value;

    setUserReview({...userReview, [name]:value });

    };

    const submitData = async (event) =>{
        event.preventDefault();
        const {
            reviewName,
            reviewMessage
        } = userReview;
        if(reviewName && reviewMessage){

        

        const res = await fetch('https://asap-kampany-default-rtdb.firebaseio.com/reviewRecord.json',{

            method: "POST",
            headers: {
                "Content-Type" :"application/json",
            },
            body: JSON.stringify({
                reviewName,
                reviewMessage
            })
        }
        );
        if(res){
            setUserReview({
                reviewName: "",
                reviewMessage: "",
            })
            toast.success("Review Noted");

        }
        else{
            toast.error("plz Give review");
        }
    }
    else{
        toast.error("plz Give review");}
    }

    const [tab,setTab] = useState('desc');
    const [rating,setRating] = useState(null)

    const { id } = useParams();
    const product = products.find((item)=> item.id === id);
    const reviewUser = useRef('');
    const reviewMsg = useRef('');
    const dispatch = useDispatch();

    const {
  
        productName,
        imgUrl,
        price,
        avgRating,
        reviews,
        description,
        shortDesc,
        category
    } = product;

    const relatedProducts = products.filter(item=> item.category===category)
    const submitHandler =(e)=>{
        e.preventDefault()

        const reviewUserName =  reviewUser.current.value;
        const reviewUserMsg =  reviewMsg.current.value;

        const reviewObj = {
            userName: reviewUserName,
            text: reviewUserMsg,
            rating,
        }

        console.log(reviewObj);
        toast.success('Review submitted');
    };
    console.log(productName);

    const addToCart =()=>{
        dispatch(cartActions.addItem({
            id,
            image:imgUrl,
            productName,
            price,

        })
        )
        toast.success('Service Added ');
    };

    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [product]);



    return (<Helmet title={productName}>
        <CommonSection title={productName}/>

        <section>
            <Container>
                <Row>
                    <Col lg='6'>
                        <img src={imgUrl} alt="" />
                    </Col>

                    <Col lg='6'>
                    <div className="product__details">
                             <h2>{productName}</h2>
                             <div className="product__rating d-flex align-items-center gap-5 mb-2">
                                 <div>
                                     <span><i class="ri-star-s-fill"></i></span>
                                     <span><i class="ri-star-s-fill"></i></span>
                                     <span><i class="ri-star-s-fill"></i></span>
                                     <span><i class="ri-star-s-fill"></i></span>
                                     <span><i class="ri-star-half-s-fill"></i></span>
                                 </div>
                                 <p>(<span>{avgRating}</span> ratings)</p>
                             </div>
                                <div className="d-flex align-items-center gap-5">
                                
                                <span className="product__price">Rs{price}</span>
                                <span>Category: {category.toUpperCase()}</span>
                                </div>
                            <p className="mt-3">{shortDesc}</p>

                            <motion.button whileTap={{scale:1.2}} className="buy__btn" onClick={addToCart}>Buy Service</motion.button>
                             
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <section>
            <Container>
                <Row>
                    <Col lg='12'>
                        <div className="tab__wrapper d-flex align-items-center gap-5">
                            <h6 className={`${tab ==="desc" ? "active__tab": ""}`} onClick={()=> setTab("desc")}>Description</h6>
                            <h6 className={`${tab ==="rev" ? "active__tab": ""}`} onClick={()=> setTab("rev")}>Reviews ({reviews.length})</h6>

                        </div>
                        {
                            tab==="desc" ?<div className="tab__content mt-5">
                            <p>{description}</p>
                        </div> : (
                        <div className="product__review mt-5">
                            <div className="review__wrapper">
                                <ul>
                                    {
                                        reviews?.map((item,index)=>(
                                            <li kew={index} className="mb-4">
                                                <h6>Jhon Doe</h6>
                                                <span>{item.rating}( rating)</span>
                                            <p>{item.text}</p>
                                            </li>
                                        ))
                                    }
                                </ul>
                                <div className="review__form">
                                <h4>Leave your experience</h4>
                                    <form action="" onSubmit={submitHandler} method="POST">
                                        <div className="form__group">
                                            <input type="text" name="reviewName" id="" value={userReview.reviewName} onChange={postReviewData} placeholder="Enter name" ref={reviewUser} required/>
                                        </div>

                                        <div className="form__group d-flex align-items-center gap-5 rating__group">
                                            <motion.span whileTap={{scale:1.2}} onClick={()=> setRating(1)}>1<i class="ri-star-s-fill"></i></motion.span>
                                            <motion.span whileTap={{scale:1.2}} onClick={()=> setRating(2)}>2<i class="ri-star-s-fill"></i></motion.span>
                                            <motion.span whileTap={{scale:1.2}} onClick={()=> setRating(3)}>3<i class="ri-star-s-fill"></i></motion.span>
                                            <motion.span whileTap={{scale:1.2}} onClick={()=> setRating(4)}>4<i class="ri-star-s-fill"></i></motion.span>
                                            <motion.span whileTap={{scale:1.2}} onClick={()=> setRating(5)}>5<i class="ri-star-s-fill"></i></motion.span>
                                        </div>
                                        <div className="form__group">
                                            <textarea ref={reviewMsg} rows={4} type="text" placeholder="Review Message" name="reviewMessage" id="" value={userReview.reviewMessage} onChange={postReviewData} required/>
                                        </div>

                                        <motion.button whileTap={{scale:1.2}} type="submit" className="buy__btn" onClick={submitData}>Submit</motion.button>
                                        
                                    </form>
                                </div>
                            </div>
                        </div>)
                        }
                        
                    </Col>
                    <Col lg='12' className="mt-5">
                        <h2 className="related__title">You also Like to have have add on services</h2>
                    </Col>
                    <ProductsList data={relatedProducts}/>
                </Row>
            </Container>
        </section>
    </Helmet>
    )

};

export default ProductDetails

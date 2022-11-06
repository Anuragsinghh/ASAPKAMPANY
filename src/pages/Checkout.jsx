import React, {useState} from "react";
import { Container,Row,Col,Form,FormGroup } from "reactstrap";
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import '../styles/checkout.css';
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Checkout = () => {
    const [userData, setUserData] = useState({
        username: "",
        useremail: "",
        usernos: "",
        userdate: "",
        useradd: "",
        usercity: "",
        userpostalcode: "",
        usercountry: ""

    });

    let name, value;
    const postUserData= (event) =>{
        name = event.target.name;
        value = event.target.value;

        setUserData({ ...userData, [name]: value });

    };


    // connecting with firebase
    // const submitData = async (event) =>{
    //     event.preventDefault();
    //     const {username,
    //     useremail,
    //     usernos,
    //     userdate,
    //     useradd,
    //     usercity,
    //     userpostalcode,
    //     usercountry} = userData;
    //     const res = await fetch('https://asap-kampany-default-rtdb.firebaseio.com/userDataRecord.json',
    //     {
    //     method: "POST" ,
    //     Headers: {
    //         "Content-Type" : "application/json",
    //     },
    //     body: JSON.stringify({
    //     username,
    //     useremail,
    //     usernos,
    //     userdate,
    //     useradd,
    //     usercity,
    //     userpostalcode,
    //     usercountry

    //     })
    //     }
    //     );

    //     if (res) {
    //         alert("payment started");
    //     } else {
    //         alert("plz fill the data");
    //     }
    // };

    const totalQty = useSelector(state=>state.cart.totalQuantity);
    const totalAmount = useSelector(state=>state.cart.totalAmount);
    const handleSubmit = (e)=>{
        e.preventDefault();

        const {username,
            useremail,
            usernos,
            userdate,
            useradd,
            usercity,
            userpostalcode,
            usercountry} = userData;


            if(username &&
                useremail &&
                usernos &&
                userdate &&
                useradd &&
                usercity &&
                userpostalcode &&
                usercountry){

            const res = fetch('https://asap-kampany-default-rtdb.firebaseio.com/userDataRecord.json',
            {
            method: "POST" ,
            Headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
            username,
            useremail,
            usernos,
            userdate,
            useradd,
            usercity,
            userpostalcode,
            usercountry
    
            })
            }
            );

            if (res) {
                setUserData({
                    username: "",
                    useremail: "",
                    usernos: "",
                    userdate: "",
                    useradd: "",
                    usercity: "",
                    userpostalcode: "",
                    usercountry: ""

                })
                toast.success("PAYMENT STARTED!")
            } else {
                toast.error("PLEASE FILL THE DATA TO INITIATE THE PAYMENT!!!")
            }


        
          var options = {
            key: "rzp_test_voHnQ7jsL448Jh",
            key_secret:"p2w43lDjwJHUEu9rmb3DjqwN",
            amount: totalAmount *100,
            currency:"INR",
            name:"STARTUP_PROJECTS",
            description:"for testing purpose",
            handler: function(response){
              alert(response.razorpay_payment_id);
            },
            prefill: {
              name:"KANS",
              email:"asapkampany",
              contact:"7904425033"
            },
            notes:{
              address:"Razorpay Corporate office"
            },
            theme: {
              color:"#3399cc"
            }
          };
          var pay = new window.Razorpay(options);
          pay.open();

        //   const {username,
        //     useremail,
        //     usernos,
        //     userdate,
        //     useradd,
        //     usercity,
        //     userpostalcode,
        //     usercountry} = userData;


        //     if(username &&
        //         useremail &&
        //         usernos &&
        //         userdate &&
        //         useradd &&
        //         usercity &&
        //         userpostalcode &&
        //         usercountry){

        //     const res = fetch('https://asap-kampany-default-rtdb.firebaseio.com/userDataRecord.json',
        //     {
        //     method: "POST" ,
        //     Headers: {
        //         "Content-Type" : "application/json",
        //     },
        //     body: JSON.stringify({
        //     username,
        //     useremail,
        //     usernos,
        //     userdate,
        //     useradd,
        //     usercity,
        //     userpostalcode,
        //     usercountry
    
        //     })
        //     }
        //     );

        //     if (res) {
        //         setUserData({
        //             username: "",
        //             useremail: "",
        //             usernos: "",
        //             userdate: "",
        //             useradd: "",
        //             usercity: "",
        //             userpostalcode: "",
        //             usercountry: ""

        //         })
        //         alert("payment started");
        //     } else {
        //         alert("plz fill the data");
        //     }

        }
        else{
            toast.error("PLEASE FILL THE DATA TO INITIATE THE PAYMENT!!!")
        }
        
      }



return (
    <Helmet title='Checkout'>
        <CommonSection title='Checkout'/>
        <section>
            <Container>
                <Row>
                    <Col lg='8'>
                        <h6 className="mb-4 fw-bold">Billing Information</h6>
                    <Form className="billing__form" method="POST">
                        
                        <FormGroup className="form__group">
                            <input type="text"
                            name="username"
                            id="" 
                            placeholder="Enter your name"
                            value={userData.username}
                            onChange={postUserData} />
                        </FormGroup>

                        <FormGroup className="form__group">
                            <input type="email"
                            name="useremail"
                            id="" 
                            placeholder="Enter your email"
                            value={userData.useremail}
                            onChange={postUserData} />
                        </FormGroup>

                        <FormGroup className="form__group">
                            <input type="number"
                            name="usernos"
                            id="" 
                            placeholder="Enter your number"
                            value={userData.usernos}
                            onChange={postUserData} />
                        </FormGroup>

                        <FormGroup className="form__group">
                            <input type="Date"
                            name="userdate"
                            id="" 
                            placeholder="Date of Service"
                            value={userData.userdate}
                            onChange={postUserData} />
                        </FormGroup>

                        <FormGroup className="form__group">
                            <input type="text"
                            name="useradd"
                            id="" 
                            placeholder="Street Address" 
                            value={userData.useradd}
                            onChange={postUserData}/>
                        </FormGroup>

                        <FormGroup className="form__group">
                            <input type="text"
                            name="usercity"
                            id=""
                            placeholder="City" 
                            value={userData.usercity}
                            onChange={postUserData} />             
                        </FormGroup>

                        <FormGroup className="form__group">
                            <input type="number"
                            name="userpostalcode"
                            id=""placeholder="Postal Code"
                            value={userData.userpostalcode}
                            onChange={postUserData} />                 
                        </FormGroup>

                        <FormGroup className="form__group">   
                            <input type="text"  
                            name="usercountry"
                            id=""placeholder="Country"
                            value={userData.usercountry}
                            onChange={postUserData}  />              
                        </FormGroup>
                    </Form>
                    </Col>
                    <Col lg='4'>
                        <div className="checkout__cart">
                            <h6>Total Qty:<span>{totalQty} services  </span></h6>
                            <h6>SubTotal:<span>Rs. {totalAmount}</span></h6>
                            <h6><span>Shipping:<br/>free shipping</span><span>$0</span></h6>

                            <h4>Total Cost: <span>Rs. {totalAmount}</span></h4>

                            <button className="buy__btn auth__btn w-100 " onClick={handleSubmit}>Book Service</button>
                        </div>
                        
                    </Col>
                </Row>
            </Container>
        </section>


    </Helmet>
)
}

export default Checkout;
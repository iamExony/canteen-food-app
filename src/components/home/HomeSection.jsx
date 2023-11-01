import React from "react";
import "./style.css";
import Clock from "./svgs/clock-svgrepo-com.svg";
import Potatoes from "./svgs/potatoes-svgrepo-com.svg";
import Wallet from "./svgs/wallet-svgrepo-com.svg";
import Delivery from "./svgs/logistics-delivery-truck-in-movement-svgrepo-com.svg";
import Facebook from "./svgs/icon-facebook.svg";
import Instagram from "./svgs/icon-instagram.svg";
import X from "./svgs/x-social-media-black-icon.svg"

const HomeSection = () => {
  window.addEventListener("scroll", reveal);

  function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowheight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 50;

      if (revealtop < windowheight - revealpoint) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  return (
    <>
      <div class="container-2 mt-16 h-[300px] md:mt-20 md:h-screen">
        {/* <!-- <h1 class="item-1">Nigerian cuisines & delicacies</h1> --> */}

        <div>
          <div className="item-1 text-[2rem] lg:text-[4.5rem] lg:mt-16 flex items-start flex-col font-bold tracking-wide drop-shadow">
            <span className="block">Delicious {""}</span>
            <span className="block">Nutritious</span>
            <span className="block">Affordable</span>
          </div>

          <a
            className="button-2 -mt-1 rounded-md text-lg"
            href="2-home-page.html"
          >
            ORDER
          </a>
        </div>
      </div>

      {/* SECOND SECTION */}
      <div className="bg-white mt-0">
        <div class="container-3 reveal">Fresh Food, Your Way:</div>
        <div className="container-3aai ">
          <div className=" lg:flex lg:flex-row flex flex-col gap-4 w-full items-center justify-center lg:gap-7 ">
            <div class="single-card lg:w-[300px] lg:h-[300px]">
              <div class="item-2 lg:w-[300px] lg:h-[300px]">
                <img class="svg-2 lg:w-[100px]" alt="clock" src={Clock} />
                Fast Delivery
              </div>
              <div className="back1 leading-9 lg:w-[300px] lg:h-[300px] lg:text-base lg:leading-5">
                So, the next time you nee d something urgently or crave the
                convenience of having items delivered swiftly, embrace the power
                of fast delivery. Experience the joy of receiving what you
                desire promptly, and let it enhance your life in ways you never
                thought possible. Fast delivery: your convenient solution in a
                fast-paced world.{" "}
              </div>
            </div>

            <div class="single-card lg:w-[300px] lg:h-[300px]">
              <div class="item-2 lg:w-[300px] lg:h-[300px]">
                <img class="svg-2 lg:w-[100px]" alt="dish" src={Potatoes} />
                {/*   <!-- Over 50
        Nigerian cuisines to pick from --> */}
                Generous Menu
              </div>
              <div class="back2 leading-9 lg:w-[300px] lg:h-[300px] lg:text-base lg:leading-5">
                At our establishment, we believe in the art of generosity, not
                just in portion sizes but also in the quality and attention to
                detail that goes into every dish. Our passionate team of
                culinary experts is dedicated to creating a memorable dining
                experience that exceeds your expectations and leaves you with a
                sense of utter satisfaction.
              </div>
            </div>

            <div class="single-card lg:w-[300px] lg:h-[300px]">
              <div class="item-2 lg:w-[300px] lg:h-[300px]">
                <img class="svg-2 lg:w-[100px]" alt="wallet" src={Wallet} />
                {/* <!-- Save
        Time, Energy & Money , Order online --> */}
                Customer Friendly
              </div>
              <div class="back3 leading-9 lg:w-[300px] lg:h-[300px] lg:text-base lg:leading-5">
                At Uniquetaste, we believe in putting our customers at the heart
                of everything we do. We are dedicated to providing a
                customer-friendly experience that goes above and beyond your
                expectations. From the moment you interact with us, we strive to
                create an environment that is welcoming, attentive, economic,
                time efficient and tailored to your needs.
              </div>
            </div>

            <div class="single-card lg:w-[300px] lg:h-[300px]">
              <div class="item-2 lg:w-[300px] lg:h-[300px]">
                <img class="svg-2 lg:w-[100px]" alt="delivery" src={Delivery} />
                {/* <!-- Delivery Across Port Harcourt , Home & office delivery --> */}
                Worldwide reach
              </div>
              <div class="back4 leading-9 lg:w-[300px] lg:h-[300px] lg:text-base lg:leading-5">
                So, why limit your culinary experiences to your local area when
                you can have the world's flavors delivered to your doorstep any
                where in the world? Embrace our food delivery service with a
                worldwide reach and embark on a global gastronomic adventure.
                Discover new tastes, savor familiar favorites, and let your
                taste buds travel across continents without leaving your home.
              </div>
            </div>
          </div>
        </div>
      </div>


    {/* SECTION 3 */}
    <div class="container-4 mb-16">
      
      <div class="item-3">Subscribe and Save</div>
      <div class="item-4 reveal text-lg w-1/2 drop-shadow-md">
        We know life can get busy. We're here to make your week a little
        easier with delicious meals, priced with your budget in mind. start a
        subscription today!
      </div>
      <a class="button-3 bg-red-600 rounded-md" href="#">SUBSCRIBE NOW</a>
    </div>

    {/* SECTION 4 */}  

{/* /*     <!-- 6th section --> */}

  <div class="container-3 reveal">Here's More Like it</div>
  <div class="row-1">
    <div class="column-1">
      <div class="slideshow"></div>
      <a class="gallery-img" href="#">Dessert</a>
      <p class="gallery-small-text">Deliciousness served daily</p>
    </div>

    <div class="column-1">
      <div class="slideshow-2"></div>
      <a class="gallery-img" href="#">Lunch</a>
      <p class="gallery-small-text">From cooker to table</p>
    </div>

    <div class="column-1">
      <div class="slideshow-3"></div>
      <a class="gallery-img" href="#">Spiced drumstick</a>
      <p class="gallery-small-text">Indulge in the flavours</p>
    </div>  
    </div>

    
    <div class="row-1">
      <div class="column-1a">
        <div class="slideshow-4"></div>
        <a class="gallery-img" href="#">Burger</a>
        <p class="gallery-small-text">Treat your self to a delightful dining</p>
      </div>

      <div class="column-1a">
        <div class="slideshow-5"></div>
        <a class="gallery-img" href="#">Jollof</a>
        <p class="gallery-small-text">A beautiful blend of taste</p>
      </div>

      <div class="column-1a">
        <div class="slideshow-6"></div>
        <a class="gallery-img" href="#">Spaghetti</a>
        <p class="gallery-small-text">Discover a culinary journey</p>
      </div>
    </div>

    {/* SECTION 5 */}
    <div class="container-9 reveal">What people are saying</div>

<div class="rewiew-row">
  <div class="rewiew-column">
    <h3 class="review-heading">Fresh & Quick!</h3>
    <h4 class="review-name">Ebuka, Enugu</h4>
    <p class="review-status">Frequent Store Visitor</p>
    <p class="review-message reveal">"This is a great spot to pick up pre-made food for lunch or stock up for the week. The space inside is really comfortable to dine in as well. Everything is always fresh."</p>
  </div>

  <div class="rewiew-column">
    <h3 class="review-heading">Delicious & Affordable!</h3>
    <h4 class="review-name">Ernest, Port Harcourt</h4>
    <p class="review-status">Frequent Store Visitor</p>
    <p class="review-message reveal">"E choke. These guys dey quick, cheap, make very nice foods and reliable! Tons of grab and go food options, swallow, snacks. Deliveries come so quickly and there are also discounts from time to time. Perfect for when you need a quick and satisfying meal! "</p>
  </div>

  <div class="rewiew-column">
    <h3 class="review-heading">Helps my busy schedule!</h3>
    <h4 class="review-name">Lerato, South Africa</h4>
    <p class="review-status">New Subscriber</p>
    <p class="review-message reveal">"With a 60+ work schedule it’s pretty hard to find quick, delicious and healthy food. I recently discovered this place when looking for healthier food options and I’m over the moon! Supper convenient and I stock up once a week now! "</p>
  </div>
</div>

{/* FOOTER SECTION */}
<footer class="footer">

      
      <div class="footer-flex-1">
      
        <a class="footer-anchor" href="#"><img class="footer-socials" alt="clock" src={Facebook} /></a>

        <a class="footer-anchor" href="#"><img class="footer-socials" alt="clock" src={Instagram} /></a>
      
        <a class="footer-anchor" href="#"><img class="footer-socials" alt="clock" src={X} /></a>
      </div>

      {/* <!-- center --> */}
      <div class="footer-2">
        <a class="footer-anchor" href="#">
        <div class="footer-text-1">
          <p>Our Story</p>
          </div>
          </a>
          <a class="footer-anchor" href="#">
            <p>Terms & Conditions</p>
          </a>
        
        

        <div class="footer-text-1">
          <a class="footer-anchor" href="#"><p>Our Food Values</p></a>
          <a class="footer-anchor" href="#"><p>Shipping & Delivery</p></a>
        </div>

        <div class="footer-text-1">
          <a class="footer-anchor" href="#"><p>Store Policy</p></a>
          <a class="footer-anchor" href="#"><p>Help & Faqs</p></a>
        </div>      
      </div>

      {/* <!-- 1st section left side --> */}
      <div class="stay-connected">
        <h3 class="stay-connected-heading">Stay Connected</h3>
        <p class="footer-text">Sign up for all of the latest news, promotions, new products & more</p>

        <form class="box">
          <input class="box-input" type="search" placeholder="Email Address" />
          <a className="box-search" type="submit" href="#">sign me up!</a> 
        </form>
       </div>
      </footer>

    <div id="naza"> &copy;Unique Taste 2023</div>
    </>
  );
};

export default HomeSection;

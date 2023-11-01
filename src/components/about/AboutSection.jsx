import React from "react";
import "./about.css";

const AboutSection = () => {
  return (
    <>
    
       <div class="wrapper mt-24">
        {/*<div class="background-container">
          <div class="bg-1"></div>
          <div class="bg-2"></div>
        </div> */}
        <div class="about-container">
          <div class="image-container">
            <img src="./images/foodone.jpg" alt="" />
          </div>

          <div class="text-container">
            <h1 className="text-black font-extrabold">About us</h1>
            <p>
              Welcome to "Unique Taste", where culinary adventures are
              boundless, and your taste buds become globetrotters! At
              TasteWander, we blend the flavors of our local traditions with the
              zest of international cuisines, all served with a warm smile. Our
              cozy little haven is where you can savor the essence of
              home-cooked delights and embark on a gastronomic journey that
              spans continents. Step inside, and you'll be greeted by the
              comforting aromas of grandma's secret recipes. Our local dishes
              are a testament to the rich tapestry of flavors found right in our
              backyard. You'll discover the true essence of home with every
              bite. But we're not just about the familiar.{" "}
            </p>
            <a href="">Read More</a>
          </div>
        </div>

        <section id="team">
          <h1 class="heading">
            <i class="fas fa-rocket"></i>
            <strong>Our Team</strong>
          </h1>
          <div class="container">
            <div class="box">
              <div class="top-bar"></div>
              <div class="navigation">
                <i class="verify fas fa-check-circle"></i>
                <input type="checkbox" class="heart-btn" id="heart-btn" />
                <label class="heart"></label>
              </div>

              <div class="details">
                <img src="images/robinsons.jpg" alt="" />
                <strong>ROBINSON THANKGOD </strong>
                <p>U2019/3020014</p>
              </div>

              <div class="btn">
                <a href="https://www.facebook.com/thankg.rob">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fab fa-youtube"></i>
                </a>
              </div>
            </div>
            <div class="box">
              <div class="top-bar"></div>
              <div class="navigation">
                <i class="verify fas fa-check-circle"></i>
                <input type="checkbox" class="heart-btn" id="heart-btn" />
                <label class="heart"></label>
              </div>

              <div class="details">
                <img src="images/eze.jpg" alt="" />
                <strong>EZE ONYEMAECHI</strong>
                <p>U2019/3020028</p>
              </div>

              <div class="btn">
                <a href="https://www.facebook.com/onyemaechi.anthony.750">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com/EzeOnyemaechi51">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div class="box">
              <div class="top-bar"></div>
              <div class="navigation">
                <i class="verify fas fa-check-circle"></i>
                <input type="checkbox" class="heart-btn" id="heart-btn" />
                <label class="heart"></label>
              </div>

              <div class="details">
                <img src="images/fortune.jpg" alt="" />
                <strong>FORTUNE CHINAZAEKPELE</strong>
                <p>U2019/3020023</p>
              </div>

              <div class="btn">
                <a href="https://www.facebook.com/onyemaechi.anthony.750">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com/EzeOnyemaechi51">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div class="box">
              <div class="top-bar"></div>
              <div class="navigation">
                <i class="verify fas fa-check-circle"></i>
                <input type="checkbox" class="heart-btn" id="heart-btn" />
                <label class="heart"></label>
              </div>

              <div class="details">
                <img src="images/ibinabo.jpg" alt="" />
                <strong>EUGUENE IBINABO</strong>
                <p>U2019/3020065</p>
              </div>

              <div class="btn">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com/_pearleugene">
                  <i class="fab fa-twitter"></i>
                </a>{" "}
                <a href="https://www.instagram.com/ibinabo.e/">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div class="box">
              <div class="top-bar"></div>
              <div class="navigation">
                <i class="verify fas fa-check-circle"></i>
                <input type="checkbox" class="heart-btn" id="heart-btn" />
                <label class="heart"></label>
              </div>

              <div class="details">
                <img src="images/favour.jpg" alt="" />
                <strong>FAVOUR OPARAUGO</strong>
                <p>U2019/3030044</p>
              </div>

              <div class="btn">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/oparaugo.favour/">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div class="box">
              <div class="top-bar"></div>
              <div class="navigation">
                <i class="verify fas fa-check-circle"></i>
                <input type="checkbox" class="heart-btn" id="heart-btn" />
                <label class="heart"></label>
              </div>

              <div class="details">
                <img src="images/gabriel.jpg" alt="" />
                <strong>ELEZUA GABRIEL ONWUKA</strong>
                <p>U2019/3020035</p>
              </div>

              <div class="btn">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div class="box">
              <div class="top-bar"></div>
              <div class="navigation">
                <i class="verify fas fa-check-circle"></i>
                <input type="checkbox" class="heart-btn" id="heart-btn" />
                <label class="heart"></label>
              </div>

              <div class="details">
                <img src="images/praise.jpg" alt="" />
                <strong>ACHALU PRAISE</strong>
                <p>U2019/3020016</p>
              </div>

              <div class="btn">
                <a href="https://www.facebook.com/praise.samuelachalu">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com/praise_soma/">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>{" "}
            <div class="box">
              <div class="top-bar"></div>
              <div class="navigation">
                <i class="verify fas fa-check-circle"></i>
                <input type="checkbox" class="heart-btn" id="heart-btn" />
                <label class="heart"></label>
              </div>

              <div class="details">
                <img src="images/ijeoma.jpg" alt="" />
                <strong>EJECHI IJEOMA GIFT</strong>
                <p>U2019/3020051</p>
              </div>

              <div class="btn">
                <a href="https://www.instagram.com/ij_gift/">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fab fa-youtube"></i>
                </a>
              </div>
            </div>
            <div class="box">
              <div class="top-bar"></div>
              <div class="navigation">
                <i class="verify fas fa-check-circle"></i>
                <input type="checkbox" class="heart-btn" id="heart-btn" />
                <label class="heart"></label>
              </div>

              <div class="details">
                <img src="images/udoh.jpg" alt="" />
                <strong>Udoh Emmanuel</strong>
                <p>U2019/3020041</p>
              </div>

              <div class="btn">
                <a href="https://www.facebook.com/profile.php?id=100005370917552">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fab fa-youtube"></i>
                </a>
              </div>
            </div>
            <div class="box">
              <div class="top-bar"></div>
              <div class="navigation">
                <i class="verify fas fa-check-circle"></i>
                <input type="checkbox" class="heart-btn" id="heart-btn" />
                <label class="heart"></label>
              </div>

              <div class="details">
                <img src="images/prince.jpg" alt="" />
                <strong>UFUOMA PRAISE</strong>
                <p>U2019/3020005</p>
              </div>

              <div class="btn">
                <a href="https://www.facebook.com/praise.ufuoma.963">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div class="box">
              <div class="top-bar"></div>
              <div class="navigation">
                <i class="verify fas fa-check-circle"></i>
                <input type="checkbox" class="heart-btn" id="heart-btn" />
                <label class="heart"></label>
              </div>

              <div class="details">
                <img
                  src="images/jakayla-toney-Aex--EHIdn8-unsplash.jpg"
                  alt=""
                />
                <strong>ANNA SOLUZOCHUKWU</strong>
                <p>U2019/3030006</p>
              </div>

              <div class="btn">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div class="box">
              <div class="top-bar"></div>
              <div class="navigationigation">
                <i class="verify fas fa-check-circle"></i>
                <input type="checkbox" class="heart-btn" id="heart-btn" />
                <label class="heart"></label>
              </div>

              <div class="details">
                <img src="images/kens.jpg" alt="" />
                <strong>FRANCIS IZIBEKIEN</strong>
                <p>U2010/3020024</p>
              </div>

              <div class="btn">
                <a href="https://www.facebook.com/profile.php?id=100076629218915">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="https://instagram.com/iz_kenno/">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutSection;

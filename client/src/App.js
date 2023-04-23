import './App.css';
import banner from './assets/Hero/banner.jpg';
import icon from './assets/Shira.png';
import aboutusimg from './assets/formation_membres_ssct-min.jpg';
// import aboutuschart from './assets/samplewavedashboard.png';
import banner2 from './assets/Hero/Banner2.png';
import overlayart from './assets/Hero/overlay-art.png';
import custommodel from './assets/custommodel.JPG';
import redHoodie from './assets/products/Cozyhoddie1.png';
import Hoodie2 from './assets/products/Cozyhoddie2.png';
import Hoodie3 from './assets/products/Cozyhoddie3.png';
import Hoodie4 from './assets/products/Cozyhoddie4.png';
import Hoodie5 from './assets/products/Cozyhoddie5.png';
import Hoodie6 from './assets/products/Cozyhoddie6.png';
import Handholding from './assets/products/handholding.png';
import Holdingmug from './assets/products/holdingmung1.png';
import affiliateimg from './assets/ledger.jpg';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <img src={icon} width={'50px'}></img>
          <div>
            <a>Home</a>
            <a>About Us</a>
            <a>Our Packages</a>
            <a>Our Products</a>
            <a>Portfolio</a>
            <a>Affiliate</a>
          </div>
        </nav>
        <div className="image-container">
          <img src={banner} width='100%' height='700px' style={{ objectFit: 'cover' }}></img>
          <div className="overlay"></div>
          <div className="image-text">
            <h3>For Art as unique as you</h3>
            <h1>Make Your Dream Come True</h1>
            <p>lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been a dummy text ever since</p>
          </div>
        </div>
      </header>
      <section id='categories'>
        <h2>Top Categories For <br /> Any <span style={{ color: 'red' }}>Streamer</span></h2>
        <div className="box-container">
          <div className="box">Models</div>
          <div className="box">Overlay</div>
          <div className="box">Animation</div>
          <div className="box">Rigging</div>
          <div className="box">Banner</div>
          <div className="box">Artworks</div>
        </div>
      </section>

      <section id='aboutus'>
        <div>
          <h1>About Us</h1>
          <h2>Why you should <span>Trust Us</span></h2>
          <p>It is a long established fact that a reader will be distracted by the readable content on the page when looking at its
            layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here, making it look like readable English.search for lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years.</p>
          <a>See More Information -</a>
        </div>
        <section className="image-container2">
          <img src={aboutusimg} width={'100%'}></img>
        </section>
      </section>
      <section id='banner2' className="image-container">
        <img src={banner2} width='100%' ></img>
        <img src={overlayart} width='60%' className="overlay-banner2"></img>
        <div className="overlay" style={{ width: '80%', borderRadius: '20px', margin: '-3px 10%' }}></div>
        <div className="image-text">
          <h3>MAKE A LEAP CHOOSE A PACKAGE</h3>
          <h4>Get <span style={{ color: 'red', fontWeight: 'bold' }}>EVERYTHING</span></h4>
          <h4>you need for your <span style={{ color: 'yellow', fontWeight: 'bold' }}>Debut.</span></h4>
        </div>
      </section>
      <section id='packages'>
        <h2>Top & Only Packages you need <br /> For your <span style={{ color: 'purple', fontWeight: 'bold' }}>Debut</span></h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div className='packageContainer'>
            <h3><span style={{ color: 'brown' }}>Starter Package</span> <br /> $0/<span className='onetime'>1 time</span></h3>
            <hr />
            <ul>
              <li>OC Concept Art</li>
              <li>2D Model</li>
              <li>Rigging</li>
              <li>Overlay Bundle</li>
              <li>Overlay Animation Bundle</li>
              <li>Emotes</li>
              <li>Logo + Animation</li>
              <li>Digital Art Banner</li>
              <li>PFP</li>
              <li>Digital Products</li>
              <li>Artworks</li>
              <li>Stream Room</li>
              <li>Animates Emotes</li>
              <li>Scheduals</li>
              <li>YT Thumbnails</li>
            </ul>
            <button className='btn'>Get Started</button>
          </div>
          <div className='packageContainer'>
            <h3><span style={{ color: 'pink' }}>Premium Package</span> <br /> $1,500/<span className='onetime'>1 time</span></h3>
            <hr />
            <ul>
              <li>OC Concept Art</li>
              <li>2D Model</li>
              <li>Rigging</li>
              <li>Overlay Bundle</li>
              <li>Overlay Animation Bundle</li>
              <li>Emotes</li>
              <li>Logo + Animation</li>
              <li>Digital Art Banner</li>
              <li>PFP</li>
              <li>Digital Products</li>
              <li>Artworks</li>
              <li>Stream Room</li>
              <li>Animates Emotes</li>
              <li>Scheduals</li>
              <li>YT Thumbnails</li>
            </ul>
            <button className='btn'>Get Started</button>
          </div>
          <div className='packageContainer'>
            <h3><span style={{ color: 'blue' }}>Diamond Package</span> <br /> $2,000/<span className='onetime'>1 time</span></h3>
            <hr />
            <ul>
              <li>OC Concept Art</li>
              <li>2D Model</li>
              <li>Rigging</li>
              <li>Overlay Bundle</li>
              <li>Overlay Animation Bundle</li>
              <li>Emotes</li>
              <li>Logo + Animation</li>
              <li>Digital Art Banner</li>
              <li>PFP</li>
              <li>Digital Products</li>
              <li>Artworks</li>
              <li>Stream Room</li>
              <li>Animates Emotes</li>
              <li>Scheduals</li>
              <li>YT Thumbnails</li>
            </ul>
            <button className='btn'>Get Started</button>
          </div>
        </div>
      </section>
      <section id='CustomModel'>
        <h2>Get Yourself a <span style={{ color: 'red' }}>Custom</span> <br /><span style={{ color: 'purple' }}>Model</span></h2>
        <p>lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <button className='btn'>Our Packages</button>
        <div>
          <img src={custommodel} width={'70%'}></img>
        </div>
      </section>
      <section id='exploreProducts'>
        <div>
          <div>
            <h2>Explore our <span style={{ color: 'red' }}>Products</span></h2>
            <div className='flexbox'>
              <button className='tab-active'>Hoddie</button>
              <button className='tab'>Hand</button>
              <button className='tab'>Cups</button>
              <button className='tab'>Blanket</button>
            </div>
          </div>
          <button className='btn'>Our Packages</button>
        </div>
        <div className='productsContainer'>
          <div className='productCard'>
            <div className="image-container indexminus">
              <img src={redHoodie} width={'100%'}></img>
              <div className="image-text">
                <p className='nomargin'><b>$20</b></p>
              </div>
            </div>
            <div className='dark-bg'>
              <p>Cozy Hoddie<br />Red Black</p>
              <button className='add-btn'>+</button>
            </div>
          </div>
          <div className='productCard'>
            <div className="image-container indexminus">
              <img src={Hoodie2} width={'100%'}></img>
              <div className="image-text">
                <p className='nomargin'><b>$20</b></p>
              </div>
            </div>
            <div className='dark-bg'>
              <p>Cozy Hoddie<br />Blue Black</p>
              <button className='add-btn'>+</button>
            </div>
          </div>
          <div className='productCard'>
            <div className="image-container indexminus">
              <img src={Hoodie4} width={'100%'}></img>
              <div className="image-text">
                <p className='nomargin'><b>$20</b></p>
              </div>
            </div>
            <div className='dark-bg'>
              <p>Cozy Hoddie<br />Dark Black</p>
              <button className='add-btn'>+</button>
            </div>
          </div>
          <div className='productCard'>
            <div className="image-container indexminus">
              <img src={Hoodie5} width={'100%'}></img>
              <div className="image-text">
                <p className='nomargin'><b>$20</b></p>
              </div>
            </div>
            <div className='dark-bg'>
              <p>Cozy Hoddie<br />Soft Black</p>
              <button className='add-btn'>+</button>
            </div>
          </div>
          <div className='productCard'>
            <div className="image-container indexminus">
              <img src={Hoodie3} width={'100%'}></img>
              <div className="image-text">
                <p className='nomargin'><b>$20</b></p>
              </div>
            </div>
            <div className='dark-bg'>
              <p>Cozy Hoddie<br />Yellow Black</p>
              <button className='add-btn'>+</button>
            </div>
          </div>
          <div className='productCard'>
            <div className="image-container indexminus">
              <img src={Hoodie6} width={'100%'}></img>
              <div className="image-text">
                <p className='nomargin'><b>$20</b></p>
              </div>
            </div>
            <div className='dark-bg'>
              <p>Cozy Hoddie<br />Green Black</p>
              <button className='add-btn'>+</button>
            </div>
          </div>
          <div className='productCard'>
            <div className="image-container indexminus">
              <img src={Handholding} width={'100%'}></img>
              <div className="image-text">
                <p className='nomargin'><b>$20</b></p>
              </div>
            </div>
            <div className='dark-bg'>
              <p>Hands Holding<br />Gesture</p>
              <button className='add-btn'>+</button>
            </div>
          </div>
          <div className='productCard'>
            <div className="image-container indexminus">
              <img src={Holdingmug} width={'100%'}></img>
              <div className="image-text">
                <p className='nomargin'><b>$20</b></p>
              </div>
            </div>
            <div className='dark-bg'>
              <p>Hand Holding Cup<br />Gesture</p>
              <button className='add-btn'>+</button>
            </div>
          </div>
        </div>
      </section>
      <section id='enquiry'>
        <div className='form'>        
          <h3>Need to Make an <span style={{ color: 'red' }}>Enquiry?</span></h3>
          <input placeholder='Your Name' type={'text'}/>
          <input placeholder='Sur Name' type={'text'}/>
          <input placeholder='Your Email' type={'text'}/>
          <input placeholder='Contact No. (with internation code)' type={'text'}/>
          <input placeholder='Artist Name (optional)' type={'text'}/>
          <input placeholder='Subject' type={'text'}/>
          <textarea cols={4} rows={8} placeholder={"Details you have in your mind"}></textarea>
        </div>      
        <div>
          <h3>Get In Touch With Us <br/> We Care <span style={{ color: 'purple', fontWeight: 'bold' }}>About You</span></h3>
        </div>
      </section>
      <section id='affiliate' class="image-container">
        <img src={affiliateimg} width={'100%'} height={'100%'} style={{ objectFit: 'cover' }} ></img>    
        <div className="overlay" style={{ width: '80%' }} ></div>
        <div className="image-text">
          <h3><b>SHARE OUR LINK</b></h3>
          <h4>SIGN UP FOR <span style={{ color: 'red', fontWeight: 'bold' }}>Affiliate</span></h4>
          <h4>and Earn <span style={{ color: 'yellow', fontWeight: 'bold' }}>Money.</span></h4>
        </div>
      </section>
      <section id='aboutus-contact'>
        <div>
          <p>lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been a dummy text ever since</p>
        </div>
        <div className='links'>
          <h2>Useful Links</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Service</li>
            <li>Packages</li>
            <li>Digital Products</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h2>Contact Us</h2>
          <ul>
              <li><img/> Mon - Fri: 09:00 - 18:00</li>
              <li><img/> graphicalassets@gmail.com</li>
              <li><img/> Canada Toronto</li>
          </ul>
        </div>
        <div>
          <h2>Our Portfolio</h2>
        </div>
      </section>
      <footer>Copyrigths 2021 Alice's Elagant Events. Designed by Elite Design Hub</footer>
    </div>
  );
}

export default App;

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "gatsby"
import Matthew_Newton from '../images/Matthew_Newton.jpeg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          
          <p>
           
            Originally from Los Angeles, Matthew is a 2012 graduate of The Evergreen State College in Olympia, Washington. Following graduation, he spent two years in Moscow working as a teacher of English. Afterwards, he was fortunate to receive a fellowship to study international relations at the University of Washington, which culminated in an M.A. from the Jackson School of International Studies. Prior to his academic achievements, Matthew has also worked in the digital marketing sphere as a researcher and copywriter. His research interests include Kremlinology, issues of media freedom, and cybersecurity. 

            Matthew is fluent in Russian and can even speak some Ukrainian.</p>

            <span className="image main"><img src={Matthew_Newton} alt="" /></span>
            

            
            
            By the way, check out my 
            <Link to='work'>work</Link>
            <br />
            <br />
            <div>
    <Link to="/contact/">Contact</Link>
  </div>
            <Link to='/'> awesome work.</Link> 
            

          
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>
            <a href="https://digital.lib.washington.edu/researchworks/bitstream/handle/1773/42126/Newton_washington_0250O_18907.pdf?sequence=1&amp;isAllowed=y"> The Gathering of the Russian Cyberspaces: State Sovereignty and Information Control M.A. thesis</a>
            <br />
            <br />
            <a href="https://jsis.washington.edu/news/identities-for-opportunities/"> A feasibility study for overcoming the Rohingya's statelessness challenge via blockchain-based digital solutions</a>
            <br />
            <br />
            <a href="https://jsis.washington.edu/news/russian-data-localization-enriching-security-economy/"> Russian data localization laws: Enriching "security" &amp; the economy  </a>
            <br />
            <br />
            <a href="https://www.forbes.com/sites/outofasia/2017/12/01/russia-is-now-providing-north-korea-with-internet-what-that-could-mean-for-cyber-warfare/#36cc15c5386b">Forbes article on Russian-DPRK cyber collaboration </a>
            <br />
            </p>
        
          {close}
        
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
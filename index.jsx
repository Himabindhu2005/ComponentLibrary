import React from 'react';
import ReactDOM from 'react-dom/client';
import Cards from "./components-usage/Cards"
import Badges from "./components-usage/Badges"
import Banners from "./components-usage/Banners"
import Testimonials from "./components-usage/Testimonials"
import Tooltips from "./components-usage/Tooltips"
import CodeBlock from "./components-usage/CodeBlock";

function App() {
  return (
    <>
      

      <nav className="navbar">
        <h1>React Component Library</h1>
        <ul className="nav__links">
          <li><a href="#cards">Cards</a></li>
          <li><a href="#badges">Badges</a></li>
          <li><a href="#banners">Banners</a></li>
          <li><a href="#tooltips">Tooltips</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
        </ul>
      </nav>
      <div className='main__container'>
      

        <p> Welcome to the React Component Library – a collection of reusable, customizable UI components built with React. 
          This app showcases different UI elements like cards, tooltips, buttons, and more, all styled for consistency and performance. 
          Explore the components below and see how easily they can be integrated into your projects!</p>

        {/* Sections */}
        <section id="cards">
          <h2 className="component__title">Cards</h2>
          <Cards />
        </section>

        <section class="card-code">
           <h2 className="component__title">Card Component Code</h2>
           <CodeBlock code={`import React from "react"
          import { FaBolt } from "react-icons/fa";
          
          const defaultContent = (
            <>
              <h3>Card Title</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </>
          )
          
          export default function Card (
              {
                icon = <FaBolt />, 
                backgound = "#3f75FE", 
                onClick = () => { }, 
                children = defaultContent}) 
                {
              return (
                <div onClick={onClick} className="card">
                  <div className="card__icon" style={{background: backgound}}>
                    {icon}
                  </div>
                  <div className="card__content">
                    {children}
                  </div>
                </div>
              )
          }`}/>
        </section>

        <section id="badges">
          <h2 className="component__title">Badges</h2>
          <Badges />
        </section>

        <section class="card-code">
           <h2 className="component__title">Badge Component Code</h2>
           <CodeBlock code={`import React from "react"
          
          export default function Badge({children = "Badge", color = "green", type = "square"}) {
            const badgeStyle = \`badge \${type} \${color}\`
          
            return (
              <div className={badgeStyle}>{children}</div>
            )
          }`}/>
        </section>

        <section id="banners">
          <h2 className="component__title">Banners</h2>
          <Banners />
        </section>

        <section class="card-code">
           <h2 className="component__title">Banner Component Code</h2>
           <CodeBlock code={`import React from "react"
           import { FaInfoCircle, FaCheckCircle,FaTimesCircle, FaExclamationTriangle } from "react-icons/fa";
           
           export default function Banner ({status = "danger", title = "Error", description}) {
             const bannerType = \`banner \${status}\`
             
             let icon
           
             if (status === "success") {
               icon = <FaCheckCircle className="banner__icon" style={{color:"#34D399"}} />
             } else if (status === "warning") {
               icon = <FaExclamationTriangle className="banner-icon" style={{color: "#FBBF24"}} />
             } else if (status === "error") {
               icon = <FaTimesCircle className="banner-icon" style={{color: "#F87171"}} />
             } else if (status === "neutral") {
               icon = <FaInfoCircle className="banner-icon" style={{color: "#60A5FA"}} />
             }
           
             return (
               <div className={bannerType}>
                 {icon}
                 <div className="banner__text">
                   <span className="banner__title">{title}</span>
                   {description && <span className="banner__description">{description}</span>}
                 </div>
               </div>
             )
           }`}/>
        </section>

        <section id="tooltips">
          <h2 className="component__title">Tooltips</h2>
          <Tooltips />
        </section>

        <section class="card-code">
           <h2 className="component__title">Tool Component Code</h2>
           <CodeBlock code={`import React from "react"
           import { FaRegCommentDots, FaTimes } from "react-icons/fa";
           
           export default function Tooltip({ variant, color, icon = <FaRegCommentDots />, title = "Notes",
            info = "Omnis veniam sequi, soluta repellat rem optio modi nam ipsam" }) {
             let bgColor = "#262626";
             let titleColor = "#FFFFFF";
             let infoColor = "#C7C7C7";
           
             if (variant === "bold") {
                 switch (color) {
                     case "blue": 
                         bgColor = "#1E40AF";
                         titleColor = "#FFFFFF";
                         infoColor = "#E8EDFF";
                         break;
                     case "pink":
                         bgColor = "#A9229B";
                         titleColor = "#FFFFFF";
                         infoColor = "#FFE9FD";
                         break;
                     case "green":
                         bgColor = "#47AA5D";
                         titleColor = "#FFFFFF";
                         infoColor = "#E3FFE9";
                         break;
                 }
             } else if (variant === "light") {
                 bgColor = "#FFFFFF";
                 titleColor = "#111827";
                 infoColor = "#6B7280";
                 
                 switch (color) {
                     case "blue":
                         bgColor = "#E0E7FF";
                         titleColor = "#1E40AF";
                         infoColor = "#1C51B9";
                         break;
                     case "pink":
                         bgColor = "#FFF3FC";
                         titleColor = "#A9229B";
                         infoColor = "#C7369E";
                         break;
                     case "green":
                         bgColor = "#E7FFF3";
                         titleColor = "#137A2A";
                         infoColor = "#3C8C4E";
                         break;
                 }
             }
             
             const [visible, setVisible] = React.useState(true);
             
             return (
                 <div className="tooltip" style={{ opacity: !visible && "0", backgroundColor: bgColor }}>
                     <div className="tooltip__icon" style={{ color: infoColor }}>
                         {icon}
                     </div>
                     <div className="tooltip__content">
                         <h3 className="tooltip__content-title" style={{ color: titleColor }}>{title}</h3>
                         <p className="tooltip__content-description" style={{ color: infoColor }}>{info}</p>
                     </div>
                     <FaTimes onClick={() => setVisible(false)} className="tooltip__icon-x" style={{ color: infoColor }} />
                 </div>
             );
           }`}/>
        </section>

        

        <section id="testimonials">
          <h2 className="component__title">Testimonials</h2>
          <Testimonials />
        </section>

        <section class="card-code">
           <h2 className="component__title">Testimonial Component Code</h2>
           <CodeBlock code={`import React from "react"
           import { FaQuoteLeft } from "react-icons/fa";
           
           export default function Testimonial (
             {
               image, 
               quote = "...forgive your enemies, but don't forget their names", 
               name, 
               jobTitle}
             ) {
               let quoteText = quote
               
               if (quote.length > 300) {
                 quoteText = \`${'${quote.slice(0, 300)}...'}\`
                 
               }
           
               return (
                 <div className="testimonial">
                   {image && <div style={{"backgroundImage": \`url(\${image})\`}} className="testimonial__img"></div>}
                   <div className="testimonial__content">
                     <FaQuoteLeft className="testimonial__icon"/>
                     <p className="testimonial__quote">{quoteText}</p>
                     {name || jobTitle ? 
                     <div className="testimonial__tag">
                      {name && <h4 className="testimonial__name">{name}</h4>}
                      {jobTitle && <h5 className="testimonial__job-title">{jobTitle}</h5>}
                     </div> : null}
                   </div>
                 </div>
               )
           }`}/>
        </section>
    </div>
    <footer className="footer">
  <p>Developed by <strong>Himabindhu</strong></p>
  <p>
    <a href="mailto:himabindhu107@gmail.com">himabindhu107@gmail.com.com</a> |{" "}
    <a href="https://github.com/Himabindhu2005" target="_blank" rel="noopener noreferrer">
      GitHub
    </a>
  </p>
</footer>
    </>
    
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

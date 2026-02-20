 "use client";
 import Link from "next/link";
 import { useState } from "react";
 import { usePathname } from "next/navigation";
 import MultiPageMobileMenu from "../MultiPageMobileMenu/MultiPageMobileMenu";
 
 const HeaderSix = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (href) => {
    const active = pathname === href;
    return `nav-link${active ? " active" : ""}`;
  };
 
 
   const handleMobileMenuOpen = () => {
     setIsMenuOpen(true);
   };
 
   return (
     <div className="header-decoration">
       <MultiPageMobileMenu
         isMenuOpen={isMenuOpen}
         setIsMenuOpen={setIsMenuOpen}
       />
      <header className="nav-header header-layout1 header-six">
        <div className="sticky-wrapper">
           <div className="menu-area">
             <div className="container">
               <div className="row align-items-center justify-content-between">
                 <div className="col-auto">
                   <div className="header-logo">
                     <Link href="/">
                      <img src="/main-assets/img/logo.png" alt="logo" />
                     </Link>
                   </div>
                 </div>
 
                 <div className="col d-none d-lg-block">
                  <nav className="main-menu">
                     <ul>
                       <li>
                         <Link href="/" className={linkClass("/")}>HOME</Link>
                       </li>
                       <li>
                         <Link href="/about" className={linkClass("/about")}>ABOUT US</Link>
                       </li>
                       <li>
                         <Link href="/#service-sec" className="nav-link">SERVICES</Link>
                       </li>
                       <li>
                         <Link href="/pages/innerpage/contact" className={linkClass("/pages/innerpage/contact")}>CONTACT US</Link>
                       </li>
                     </ul>
                   </nav>
                 </div>
 
                <div className="col-auto">
                  <div className="header-button">
                     <Link
                       href="/pages/innerpage/contact"
                       className="btn header-one-extra-style"
                     >
                       GET IN TOUCH <i className="ri-arrow-right-up-line"></i>
                     </Link>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </header>
     </div>
   );
 };
 
 export default HeaderSix;

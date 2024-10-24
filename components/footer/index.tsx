import Image from "next/image";
import style from "./index.module.css";

function Footer() {
  return (
    <div className={`${style.footerComponent} flex fl_jb`}>
      <div className="flex">
        <Image alt="logo" width={50} height={50} src="/images/ft_logo.png"></Image>
        <Image alt="logo_text" width={268} height={37} src="/images/logo_text.png"></Image>
      </div>
      <div>
        <p>COMPANNY</p>
        <p>CONTACT US</p>
        <p>TERMS PRIVACY</p>
      </div>
    </div>
  );
}

export default Footer;

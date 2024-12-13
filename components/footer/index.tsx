import Image from "next/image";
import style from "./index.module.css";

function Footer() {
  return (
    <div className={`${style.footerComponent} flex fl_jb`}>
      <div className="flex fl_as">
        <Image alt="logo" width={334} height={50} src="/images/ft_logo.png"></Image>
      </div>

      <div>
        <p>COMPANY</p>
        <p>CONTACT US</p>
        <p>TERMS PRIVACY</p>
      </div>
    </div>
  );
}

export default Footer;

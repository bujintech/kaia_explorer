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
        <p>
          <a
            target="_blank"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=coinelementfintech@gmail.com&su=&body= "
          >
            CONTACT US
          </a>
        </p>
        <p>TERMS PRIVACY</p>
      </div>
    </div>
  );
}

export default Footer;

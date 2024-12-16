import style from "./index.module.css";
import Image from "next/image";

const AboutUs = () => {
    return (
        <div className={style.aboutUsContainer}>
            <h1 className={style.aboutUsTitle}>About Us</h1>
            <div className={style.aboutUsCard}>
                <div className={style.companyInfo}>
                    <h2 className={style.companyName}>Coin&nbsp;Element</h2>
                    <div className={style.companyInfoDivider} />
                    <span className={style.companyDescription}>
                        We are a cutting-edge technology company focusing on Web3 game development and blockchain technology applications. We are committed to bringing the decentralization, transparency, and security of blockchain technology to the gaming industry and creating a new ecosystem
                    </span>
                </div>
                <Image className={style.companyImage} alt="About Us" width={514} height={496} src="/images/about-us.png" />
            </div>
        </div>
    )
}

export default AboutUs;

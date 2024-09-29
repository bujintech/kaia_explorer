import style from "./index.module.css";

const data = [
  {
    imgSrc:
      "https://kaiascan.io/_next/image?url=https%3A%2F%2Fsquare.klaytn.foundation%2Ffiles%2Fprofile%2F40%2Fac6d20b10b648423c0239ea0fa4006fb.png&w=128&q=75",
    name: "Kakao Corp",
    tags: ["ETC"],
    totalStaking: "285,714,289",
    totalStaking_baifen: "5.82",
    infoMessage:
      "No.1 messenger platform company in South Korea. A parent company of multi Kakao branded business including tech-fin (Pay, Bank), IP (Entertainment, Games), mobility (T) healthcare, AI (Brain, Enterprise), and blockchain (Klaytn, GroundX).",
  },
  {
    imgSrc:
      "https://kaiascan.io/_next/image?url=https%3A%2F%2Fcdn.kaiascan.io%2Fgc-logo%2Fimg_gc_neopin.png&w=128&q=75",
    name: "NEOPIN",
    tags: ["Game", "Ce/De-fi", "Invest"],
    totalStaking: "288,065,726",
    totalStaking_baifen: "5.82",
    infoMessage:
      "NEOPIN started the blockchain operations in 2017. Currently, Team NEOPIN is contribution dozens of public blockchain networks and operating various consensus-based blockchain nodes based on DPoS, PoA, and LPoS mechanisms. Based on its experiences, NEOPIN is working on node operations to improve the stability and speed of the blockchain networks while communicating with communities through various channels. The team is always listen to various opinions and try to reflect on them simultaneously. As an early GC member of Klaytn, NEOPIN has been promoted Klaytn staking and worked hard to launch Klaytn-based DeFi and Gaming dApps. NEOPIN will continue to take the lead in increasing the value and popularizing the blockchain through active governance participation and dApp and protocol development.",
  },
  {
    imgSrc:
      "https://kaiascan.io/_next/image?url=https%3A%2F%2Fcdn.kaiascan.io%2Fgc-logo%2Fimg_gc_marblex.png&w=128&q=75",
    name: "Marblex",
    tags: ["Game"],
    totalStaking: "138,720,956",
    totalStaking_baifen: "5.96",
    infoMessage:
      "MARBLEX is a company that combines its proprietary advanced blockchain technology with Netmarble's AAA-rated games to provide an expanded blockchain gaming experience and enjoyment to global users. Under the mission P.O.T.C, MARBLEX is building an ecosystem where users can Play, Own, Trade, and Create. The core competencies of MARBLEX include global success experience, know-how in building virtual economic systems, and a diverse game genre portfolio. The MBX token is the key currency within the MARBLEX ecosystem. Centered around the MBX token, users can access various blockchain games and additional services connected to the MBX chain. Some notable services include Staking(game tokens, MBXL, NFT), Token Swap, and NFT platform services. These specialized MBX services enable an expanded user experience.",
  },
  {
    imgSrc:
      "https://kaiascan.io/_next/image?url=https%3A%2F%2Fsquare.klaytn.foundation%2Ffiles%2Fprofile%2F25%2F43e999ec446c59576e667b3351f9b455.png&w=128&q=75",
    name: "Kakao Pay",
    tags: ["Ce/De-fi"],
    totalStaking: "120,000,001",
    totalStaking_baifen: "6.00",
    infoMessage:
      "Kakao Pay is a TechFin subsidiary of Kakao Corp., spun off in April 2017. Kakao Pay is building a lifestyle financial platform through Kakao Talk and Kakao Pay App leading the transition into a wallet-less society where all we need is a smartphone to pursue any economic activity at any time and place. Since Kakao Pay launched the first mobile payment service in Korea in 2014, the company has grown into the industry's leading innovator, offering a diverse lineup of innovative financial services including online/offline payments, money transfers, memberships, bill payments, and authentication. Starting with the investment service in November 2018, Kakao Pay has been expanding its financial services to Credit Score Care, Quick Insurance Products, Loan Mediation, Asset Management and more.",
  },
  {
    imgSrc:
      "https://kaiascan.io/_next/image?url=https%3A%2F%2Fsquare.klaytn.foundation%2Ffiles%2Fprofile%2F26%2F58b89f7f881f63436dd2027aae3f264e.png&w=128&q=75",
    name: "Ground X",
    tags: ["NFT", "ETC"],
    totalStaking: "94,987,942",
    totalStaking_baifen: "6.08",
    infoMessage:
      "Ground X is a Kakao's blockchain affiliate that brings together believers in a digital world made better by blockchain technology. GroundX creates a new standard for blockchain technology. Rapidly growing since 2018, Ground X has created a new ground for blockchain technology by developing public blockchain platform Klaytn, equipped with quick response speed and scalability to accommodate multitudes of applications and services, in addition to the mobile digital asset wallet Klip. Over a hundred Ground X crews are working together to achieve the mass adoption of blockchain technology.",
  },
  {
    imgSrc:
      "https://kaiascan.io/_next/image?url=https%3A%2F%2Fcdn.kaiascan.io%2Fgc-logo%2Fimg_gc_ozys.png&w=128&q=75",
    name: "Ozys",
    tags: ["Ce/De-fi"],
    totalStaking: "73,465,367",
    totalStaking_baifen: "5.58",
    infoMessage:
      "Ozys is leading the change of various industries and businesses under the motto of Blockchain Technology that Changes the World. In 2018, Ozys launched South Korea's first Ethereum sidechain-based decentralized exchange, Allbit, to mark the start of pioneering the blockchain market. We gained global recognition for our technological prowess by introducing world-class smart contract-based protocols such as KLAYswap, the largest DEX on Klaytn mainnet, KLAYstation, Orbit Bridge, and Klaytnscope, the first blockchain explorer on Klaytn to the global market. Among them, Klaytnscope monitors the Klaytn network status and provides users with various statistics and insights about the Klaytn network. Ozys is leading the blockchain innovation with Klaytn, Ripple, Polygon, Alameda Research, Huobi, and numerous other companies. We are doing our best always to realize our vision of being a blockchain company that leads changes in the world and presents innovation.",
  },
  {
    imgSrc:
      "https://kaiascan.io/_next/image?url=https%3A%2F%2Fsquare.klaytn.foundation%2Ffiles%2Fprofile%2F41%2F7eef91f5d400c560502de4fa01e9da32.png&w=128&q=75",
    name: "Kakao Entertainment",
    tags: ["NFT"],
    totalStaking: "63,165,296",
    totalStaking_baifen: "6.28",
    infoMessage:
      "To become a leading global entertainment company that shares passion, inspiration, and extraordinary experiences with the world through original content created by top creators and artists in all fields of entertainment.",
  },
  {
    imgSrc:
      "https://kaiascan.io/_next/image?url=https%3A%2F%2Fsquare.klaytn.foundation%2Ffiles%2Fprofile%2F61%2F7d60e4c671a9a1fddc4ae61fc1195dcb.png&w=128&q=75",
    name: "Swapscanner",
    tags: ["Ce/De-fi"],
    totalStaking: "62,128,091",
    totalStaking_baifen: "5.67",
    infoMessage:
      "Swapscanner is the No.1 DEX Aggregator on Klaytn. Swapscanner integrates every DEX and guarantees optimal prices with their next-generation Navigator engine. Around 40~60% of the entire swap volume occurring on the Klaytn network uses Swapscanner to swap their assets. Aiming at a One-stop platform in Klaytn DeFi, they provide the following features: 1) Swap: Klaytn ecosystem has liquidities fragmented throughout many DEXes. As a result, users have negative swap experiences by encountering a high price impact. They are solving this problem by aggregating every DEX's liquidities through Navigator, quoting algorithm engine. In addition, users can now swap any token into any token with Swapscanner. Currently, Swapscanner is working closely with other projects so that they can integrate Swaspcanner's swap feature by utilizing API. 2) Pro Chart: Swapscanner provides a professional charting service, 'Pro Chart.' By Considering all the available liquidity pools, They give the most accurate Klaytn tokens pricing data. 3) Token Dashboard: Token Dashboard provides real-time pricing data like what CEXes provide. 4) Dashboard: Swapscanner provides a dashboard to monitor the entire Klaytn ecosystem. This dashboard has become the only one every user and Web 3.0 project team is referencing. 5) Wallet: Swapscanner's Wallet feature allows users to manage their assets and transfer their tokens under the same experience, regardless of their connected wallet.",
  },
  {
    imgSrc:
      "https://kaiascan.io/_next/image?url=https%3A%2F%2Fsquare.klaytn.foundation%2Ffiles%2Fprofile%2F23%2F52a71483862802ca0c75f4daf58a0223.png&w=128&q=75",
    name: "Netmarble",
    tags: ["Game"],
    totalStaking: "27,355,495",
    totalStaking_baifen: "7.05",
    infoMessage:
      "Established in Korea in 2000, Netmarble Corporation is a top developer and publisher pushing the boundaries of the mobile gaming experience with highly innovative games including Seven Knights 2, Ni no Kuni: Cross Worlds, Lineage 2: Revolution, The Seven Deadly Sins: Grand Cross, Blade &amp; Soul Revolution and MARVEL Future Fight. As a parent company of Kabam and SpinX Games, and a major shareholder of Jam City and HYBE (formerly Big Hit Entertainment), Netmarble strives to entertain audiences around the world with a variety of mobile games based on its powerful franchises and collaborations with IP holders worldwide. More information can be found at http://company.netmarble.com",
  },
  {
    imgSrc:
      "https://kaiascan.io/_next/image?url=https%3A%2F%2Fsquare.klaytn.foundation%2Ffiles%2Fprofile%2F31%2F4f892e509a3d5744567b7df3fe32f4b1.png&w=128&q=75",
    name: "Sygnum",
    tags: ["Ce/De-fi"],
    totalStaking: "25,289,290",
    totalStaking_baifen: "7.16",
    infoMessage:
      "Sygnum is the world' first digital asset bank, and a digital asset specialist with global reach. With Sygnum Bank AG's Swiss banking licence, as well as Sygnum Pte's capital markets services (CMS) licence in Singapore, Sygnum empowers professional and institutional clients or qualified investors (e.g., corporates, banks, and other financial institutions) to invest in the digital asset economy with complete trust. Sygnum operates an independently controlled, scalable, and future-proof regulated banking platform. Our interdisciplinary team of banking, investment, and Distributed Ledger Technology (DLT) experts is shaping the development of a trusted digital asset ecosystem. The company is founded on Swiss and Singapore heritage and operates globally. To learn more about Sygnum, please visit www.sygnum.com.",
  },
  {
    imgSrc:
      "https://kaiascan.io/_next/image?url=https%3A%2F%2Fsquare.klaytn.foundation%2Ffiles%2Fprofile%2F34%2Fc8be5c44beb03aa4b64712d905099f4b.png&w=128&q=75",
    name: "Maekyung Media Group",
    tags: ["Media"],
    totalStaking: "14,755,840",
    totalStaking_baifen: "8.22",
    infoMessage:
      "MAEKYUNG MEDIA GROUP has been trying to achieve its goal of presenting the world's best informative media since the foundation of MAEIL BUSINESS NEWSPAPER in 1966. In the meantime, MAEKYUNG MEDIA GROUP believes that charting a national vision is the most critical responsibility and obligation of the media, which would serve as the stepping stone for Korea to become the world's top nation in the 21st century. This is why we continue to propose new visions and paradigms for the future of Korea as a nation with knowledge and brain power. In fact, MAEKYUNG MEDIA GROUP has drastically proposed proactive solutions to minimize any fallouts of a possible economic crisis by giving an early warning to the public and overcoming a crisis. As a result of this effort, MAEIL BUSINESS NEWSPAPER has firmly positioned itself as the most favored media among opinion leaders, office workers, and undergraduate students. The media industry is undergoing great change due to the rapid development of IT and communication technology. In order to respond quickly to such changes in the media ecosystem, MAEKYUNG MEDIA GROUP is communicating with 15 million audiences through various platforms such as newspapers and news channels, MAEKYUNG DOTCOM, digital news MAEKYUNG e-NEWSPAPER, weekly MAEKYUNG ECONOMY, an economic channel named as MAEIL BUSINESS TV Mmoney, and monthly LUXMEN and GOLF FOR WOMEN. In order to become a smart media corporate, we try to react faster than any other media, to the latest updates by providing the fastest breaking news service through mobile devices.",
  },
  {
    imgSrc:
      "https://kaiascan.io/_next/image?url=https%3A%2F%2Fcdn.kaiascan.io%2Fgc-logo%2Fimg_gc_hankyung.png&w=128&q=75",
    name: "Korea Economic Daily",
    tags: ["Media"],
    totalStaking: "18,122,785",
    totalStaking_baifen: "5.42",
    infoMessage:
      "The Korea Economic Daily, the predecessor to the Hankyung Media Group, was created with the corporate mission of nurturing liberal democracy and a market economy on the peninsula. Its large magnitude of readership is thanks to the high-quality news and information. With providing responsible and reasonable criticism on government policies as well as practical solutions, the newspaper stays ahead in building trusts from opinion leaders. The Korea Economic Broadcasting boasts the largest market share in financial broadcasting. Hankyung.com, an online news platform, ranked No.1 in terms of website traffic among financial media outlets. Hankyung Magazine is also top ranked in terms of its subscriber count, thanks to its Mook publication series and the weekly magazines. Hankyung BP is the publisher of multiple best sellers in the business publication arena. Hankyung arteTV, a high-quality cultural broadcasting channel, and the Hankyung artePhilharmonic orchestra are also part of the Hankyung family. Including the Fortune Hills Country Club located in the Seoul metropolitan area, some 10 affiliates make up the Hankyung Media Group. Bloomingbit, a blockchain subsidiary of Hankyung Media Group, was established to focus on blockchain and cryptocurrency business capabilities within the group companies. Bloomingbit is operating a cryptocurrency investment information platform 'Bloomingbit'. It has approximately 130k users, and provides services such as news, community, social trading, and portfolio management.",
  },
  {
    imgSrc:
      "https://kaiascan.io/_next/image?url=https%3A%2F%2Fsquare.klaytn.foundation%2Ffiles%2Fprofile%2F38%2Fc7e0d50859402a62a8431cbd2b0dbe62.png&w=128&q=75",
    name: "Hashkey",
    tags: ["Ce/De-fi"],
    totalStaking: "20,396,241",
    totalStaking_baifen: "6.47",
    infoMessage:
      "HashQuark, established by Hashkey Group, is the world's leading Web3 infrastructure service provider, providing full-stack infrastructure services from staking to DID. We support classic staking services for most of the mainstream public chains, as well as the compliant liquid staking services. Our DID product supports multiple public chain ecosystems. We are now covering the Asian, European and American markets and are a core member of the HashKey Group.",
  },
  {
    imgSrc:
      "https://kaiascan.io/_next/image?url=https%3A%2F%2Fcdn.kaiascan.io%2Fgc-logo%2Fimg_gc_wemix.png&w=128&q=75",
    name: "Wemix",
    tags: ["Game", "NFT", "Ce/De-fi"],
    totalStaking: "12,411,001",
    totalStaking_baifen: "8.70",
    infoMessage:
      "WEMIX3.0 is a high-performance EVM-compatible open source protocol powered by SPoA(Stake-based Proof of Authority) consensus algorithm which is secured by 40 decentralized authority nodes operated by highly-qualified global partners as well as on-chain community DAO(Decentralized Autonomous Organization). It is designed to be a robust and efficient platform-driven &amp; service-oriented public blockchain home to innovative projects and applications built by community members and available to the world. WEMIX3.0 resolves the 'Blockchain Trilemma' by maintaining the balance between decentralization, security, and scalability through the implementation of a variable total gas fee formula based on EIP-1559, the 40 WONDERS (WEMIX On-chain Network of Decentralized Ecosystem Regulators) also known as the Node Council Partners, and a 4,000 TPS throughput with a 1-second block interval.",
  },
  {
    imgSrc:
      "https://kaiascan.io/_next/image?url=https%3A%2F%2Fcdn.kaiascan.io%2Fgc-logo%2Fimg_gc_kommueDao.png&w=128&q=75",
    name: "Kommune DAO",
    tags: ["ETC"],
    totalStaking: "27,755,167",
    totalStaking_baifen: "7.03",
    infoMessage:
      "Kommune DAO aims to strengthen the soundness of the Klaytn ecosystem and establish a mature governance system. Our main goal is to solidify the governance structure in which community members and developers actively participate. Through community-owned node validation, we will also strive to enhance the transparency of the governance structure and allow community members to actually contribute to the development of Klaytn in terms of participating in governance decisions (voting), submitting agendas, promoting projects, etc.",
  },
  {
    imgSrc:
      "https://kaiascan.io/_next/image?url=https%3A%2F%2Fsquare.klaytn.foundation%2Ffiles%2Fprofile%2F30%2Fd43d327d4e9a8cd50f2535949c78534f.png&w=128&q=75",
    name: "FSN",
    tags: ["Ce/De-fi"],
    totalStaking: "16,723,028",
    totalStaking_baifen: "5.54",
    infoMessage:
      'FSN is the nation\'s No. 1 comprehensive digital marketing group that completes the value chain of future industries based on core competitiveness ranging from MARKETING, TECH, COMMERCE, and GLOBAL. [MARKETING] The marketing sector is FSN\'s core competitive edge, maintaining the top position in the domestic advertising market and achieving continuous growth. FSN is the only marketing company in Korea that can provide all forms of digital advertising services and maximize synergy in each field, providing optimal services to advertisers in various industries and leading the digital advertising market by winning awards at many domestic and international advertising festivals. [TECH] FSN has its own 300 professional development organizations and leads the future industry to AD-Tech, Platform, and Blockchain based on unique technology. In particular, FSN promoted the content copyright protection and compensation project ""SIX"", the foundation of NFT, for the first time in Asia in 2018, and is currently promoting the blockchain business with NFT and DeFi as two pillars. We have successfully published and operated a variety of NFT projects, from Sunmiya Club, the first PFP NFT project in Korea, to Bellygom NFT. [COMMERCE] FSN is expanding its marketing competitiveness to brands and commerce. By launching the profit-sharing D2C commerce collaboration business model ""Boosterz"", FSN provide all the services necessary for partner sales boosting from brand strategy to advertising optimization on one-stop basis, and we have many success stories such as moisturizing beverage ""Ling Tea"" and correct posture product ""Didock Neck"". Recently, the boosting area has been expanded to services and platforms, and business growth strategies are being carried out by targeting overseas markets. [GLOBAL] FSN has a leading provider of digital marketing local expertise in a total of seven foreign countries, Singapore, Thailand, Vietnam, China, Taiwan, Indonesia, and Laos, and is actively promoting the expansion of the Asian market. By combining proven business models in Korea with the capabilities of local leading companies with local expertise, we are quickly dominating the market and actively targeting the global market by establishing an Asian digital marketing hub with major official agencies such as Google, Facebook, Alibaba, TikTok, Weibo, and Tmall. FSN will lead the upcoming ecosystem of the future with the convergence and synergy of MARKETING, TECH, and COMMERCE, unrivaled technology and dominance of the digital advertising market.',
  },
  {
    imgSrc:
      "https://kaiascan.io/_next/image?url=https%3A%2F%2Fcdn.kaiascan.io%2Fgc-logo%2Fimg_gc_pestoLabs.png&w=128&q=75",
    name: "Presto Labs",
    tags: ["Ce/De-fi"],
    totalStaking: "10,769,600",
    totalStaking_baifen: "9.16",
    infoMessage:
      "Presto Labs is a Singapore-based quantitative trading firm founded in 2014. Presto Labs team is composed of competition-winning researchers, engineers and finance professionals who enjoy solving most challenging real-world problems in finance. Trading in billions of US dollars a day, Presto Labs is a global top-tier liquidity provider as well as investor in both crypto and traditional financial markets.",
  },
  {
    imgSrc:
      "https://kaiascan.io/_next/image?url=https%3A%2F%2Fsquare.klaytn.foundation%2Ffiles%2Fprofile%2F44%2F3407d27dfc6175e9ca0b11114162e306.png&w=128&q=75",
    name: "METABORA",
    tags: ["Game"],
    totalStaking: "9,080,002",
    totalStaking_baifen: "9.80",
    infoMessage:
      "Metabora is a casual game developer and parent company of METABORA SINGAPORE PTE. LTD., which is providing a comprehensive blockchain platform service 'BORA' for global users. Partners in various fields that can develop tokenomics, games, content, and blockchain technology are participating in the BORA ecosystem. BORA platform pursues a content synergy between valuable partners in-game, entertainment, and sport, etc. Also, METABORA SINGAPORE is operating and developing the 'BORA Portal' to provide a seamless and optimized service of NFT trading, Token swap, Defi and Gamefi for the global user.",
  },
  {
    imgSrc:
      "https://kaiascan.io/_next/image?url=https%3A%2F%2Fsquare.klaytn.foundation%2Ffiles%2Fprofile%2F72%2F02ced4a52af3e386b3c1fc881dbffe5b.png&w=128&q=75",
    name: "Dora",
    tags: ["ETC"],
    totalStaking: "9,000,001",
    totalStaking_baifen: "9.84",
    infoMessage:
      "Dora Factory is a leading provider of blockchain infrastructure across multiple chains. With a strong focus on security, transparency, and decentralization, Dora Factory is dedicated to supporting ecosystems through public goods staking and driving innovation in the DeFi space through the development of infrastructure toolings and initiatives. Dora Factory’s open platform never stops empowering individual builders to connect, get access to knowledge, and eventually build products that matter to our world. Through open source communities, developers hackers can build teams and focus on building their ideas. Dora Factory’s developer toolings and governance infrastructures are open to all. Hackers solve concrete problems without reinventing the wheel, because there are infinite possibilities to build. Through public good staking and decentralized funding infrastructures, Dora Factory provides fuel to the global hacker movement and makes sure it never stops. We aim to further advance the Klaytn ecosystem through jointly nurturing essential public goods and new projects/startups in the Klaytn Network ecosystem by providing grants, hackathon prizes, and incubation/investment opportunities. We will provide sufficient incentive to hundreds of new teams building within the Klaytn Network",
  },
  {
    imgSrc:
      "https://kaiascan.io/_next/image?url=https%3A%2F%2Fsquare.klaytn.foundation%2Ffiles%2Fprofile%2F77%2Ff9cf471c2691c5b92f68781859e50c86.jpg&w=128&q=75",
    name: "CREDER-ITCEN",
    tags: ["Ce/De-fi", "ETC"],
    totalStaking: "19,639,253",
    totalStaking_baifen: "7.45",
    infoMessage:
      "Itcen Group, which has Korea's largest gold exchange as a subsidiary, and BPMG, which possesses core blockchain technology, cooperate to build a comprehensive financial platform centered on gold-based digital assets and add the value of decentralization to gold.",
  },
  {
    imgSrc:
      "https://kaiascan.io/_next/image?url=https%3A%2F%2Fsquare.klaytn.foundation%2Ffiles%2Fprofile%2F51%2Ff85343b5eaf32f72cd34de04118b23c1.png&w=128&q=75",
    name: "Jump Crypto - Everstake",
    tags: ["Invest", "Infra"],
    totalStaking: "6,690,062",
    totalStaking_baifen: "0.00",
    infoMessage:
      "Jump Crypto : We're builders, partners, and traders who take a long-term view of crypto's prospects and operate to unlock the full potential of open, community-driven networks. Since our inception as a skunkworks intern project in late 2015, we've grown into a dynamic and seasoned team of 160+ high performing players across a range of functions. Today, we play an important role in the development of some of the largest and most innovative crypto communities. Collectively, we have: - 7+ years of experience as a large participant in trading and liquidity provisioning in crypto - A global, 24/7 trading team exclusively dedicated to crypto. - A seasoned team of experts with subject matter expertise in protocol development, DeFi, research, investing, and partnerships. Everstake: A team of experienced developers, financial experts, and blockchain enthusiasts. We run highly secure and reliable nodes for PoS protocols using enterprise-level hardware to ensure maximum efficiency and security. Everstake is one of the top validators in the staking industry worldwide. The company was founded in 2018 and has grown rapidly with 625,000+ delegators, having staked over $6.2 billion in crypto assets (as of September 2022). Each of its validating nodes is constantly maintained by pro-DevOps and seasoned assistants in more than 50 blockchains. Each blockchain is supported by the dedicated Blockchain Manager who works with the community and partners. We show the highest level of performance and our uptime is stable at ≈99.9%. All our operations and activities are open to the general public. We have a strong commitment to the clarity and transparency of our operations.",
  },
  {
    imgSrc:
      "https://kaiascan.io/_next/image?url=https%3A%2F%2Fsquare.klaytn.foundation%2Ffiles%2Fprofile%2F45%2F4624b50e14fe9c7d93924840d1192cb1.png&w=128&q=75",
    name: "AhnLab Blockchain Company",
    tags: ["Security", "Infra"],
    totalStaking: "6,491,480",
    totalStaking_baifen: "11.44",
    infoMessage:
      "AhnLab Blockchain Company provides a safe and convenient blockchain wallet service based on AhnLab's security DNA. Through continuous technology development for Smart Contracts, NFTs, and Audits, we aim for a future where individuals and businesses can conduct safe transactions in Metaverse and Web3 environments",
  },
  {
    imgSrc:
      "https://kaiascan.io/_next/image?url=https%3A%2F%2Fsquare.klaytn.foundation%2Ffiles%2Fprofile%2F28%2F4a69547450613e9271d45746e9029101.png&w=128&q=75",
    name: "Kracker Labs",
    tags: ["Ce/De-fi"],
    totalStaking: "17,890,697",
    totalStaking_baifen: "6.3562",
    infoMessage:
      "Kracker Labs is Singapore-based Web3 project investor and builder. We are already one of the fastest growing player on Klaytn. We have taken the lead in expanding the Klaytn DApp ecosystem through investments, incubations, and collaborations. We have established relationships with more than 10 teams in the blockchain, including SwapScanner and Pangeaswap.",
  },
  {
    imgSrc: "https://square.klaytn.foundation/files/profile/33/5ff867df5652d97e292b843c2529a72d.svg",
    name: "NFTBank",
    tags: ["NFT"],
    totalStaking: "17,887,864",
    totalStaking_baifen: "6.3562",
    infoMessage:
      "NFTBank is an NFT portfolio management tool and valuation engine, allowing users to make informed decisions about their NFT portfolio and enable advanced DeFi use cases. NFTBank's ML-powered NFT valuation engine covers 5000+ projects with high accuracy. You can find more information about NFTBank at https://nftbank.ai/welcome.",
  },
  {
    imgSrc:
      "https://kaiascan.io/_next/image?url=https%3A%2F%2Fsquare.klaytn.foundation%2Ffiles%2Fprofile%2F55%2F73c0419bcab3511657c05508c046d4e6.png&w=128&q=75",
    name: "Verichains/VNG",
    tags: ["Game", "Security"],
    totalStaking: "5,001,152",
    totalStaking_baifen: "13.16",
    infoMessage:
      "Verichains, backed by VNG, is a pioneer and leading blockchain security firm in APAC with extensive expertise in security, cryptography, and core blockchain technology. Trusted by over 300 clients with $50 billion assets under protection, our customers include several high-profile projects, including Binance/BNB Chain, Klaytn, Wemix, Line Corp, Multichain, Axie Infinity, Ronin Network, and Kyber Network. With the in-depth research and development&nbsp;of blockchain technology, Verichains provides trusted and secure blockchain services such as Layer-1 protocol and smart contract audit, MPC wallets, Zero-knowledge proof, mobile and web3 application protection, key management solution, on-chain risk monitoring, and red team/penetration testing services.",
  },
  {
    imgSrc:
      "https://kaiascan.io/_next/image?url=https%3A%2F%2Fsquare.klaytn.foundation%2Ffiles%2Fprofile%2F75%2F6eef364dbaf2c82316e51cedd91d3ab9.png&w=128&q=75",
    name: "Another World",
    tags: ["ETC"],
    totalStaking: "5,000,003",
    totalStaking_baifen: "13.16",
    infoMessage:
      "Another World is a leading Metaverse platform on the Klaytn network. Previously, Another World launched as ‘Terra World’, the first metaverse project on Terra, and reached unprecedented milestones such as breaking the Land NFT sale record and building a massive community with 200k members worldwide. After the Terra de-peg crisis, Another World migrated to the Klaytn network while keeping the massive community and community assets. Another World powered by Unity Engine, is designed for the mass adoption of global users and major corporations. Another World aims to provide a healthy, immersive metaverse experience to users by utilizing blockchain technology and game development experience. AWM is the Another World ecosystem’s main token which plays a key role in every single game and content to be released in the Another World ecosystem. Users can monetize their online activities and enjoy numerous sub-projects with AWM.",
  },
  {
    imgSrc:
      "https://kaiascan.io/_next/image?url=https%3A%2F%2Fcdn.kaiascan.io%2Fgc-logo%2Fimg_gc_bisonai.png&w=128&q=75",
    name: "Bisonai",
    tags: ["Infra"],
    totalStaking: "5,000,002",
    totalStaking_baifen: "13.16",
    infoMessage:
      "A financial data analytics company leveraging AI and big data to optimize investment returns",
  },
  {
    imgSrc:
      "https://kaiascan.io/_next/image?url=https%3A%2F%2Fcdn.kaiascan.io%2Fgc-logo%2Fimg_gc_stable%2520lab.png&w=128&q=75",
    name: "Stable Lab",
    tags: ["ETC", "Infra"],
    totalStaking: "8,143,537",
    totalStaking_baifen: "9.76",
    infoMessage:
      "StableLab is a research and development firm specializing in governance operations and analytics. We contribute to over 20 protocols and ecosystems with exceptional participation metrics. Partners include Arbitrum, Optimism, Aave, Uniswap, 1inch, Balancer, Element Finance, InstaDapp, Lido, and MakerDAO. We participate in the entire governance process, from initial discussions, proposal creation, and feedback rounds to on- or off-chain polls. Apart from ensuring well-informed decisions, we author proposals where possible. We were among the foremost delegates responsible for the recent Arbitrum Short-Term Incentives Program (STIP). We’re a leading contributor and delegate in AAVE and Uniswap, deeply integrated into Optimism and MakerDAO governance, as well as the top Ajna Finance delegate. StableLab was founded by Doo Wan Nam and Gustav Arentoft in 2021 as StableNode. The team comprises 17 members across governance, node operations, and product development domains. Other governance team members include Kenechukwu Eze, Matthew Stein, Raphael Spannocchi, and Nneoma Kanu. We pride ourselves on being a diverse and results-driven enterprise with global operations. StableLab team members have or pursue PhDs in computer science and economics, masters in political science and business administration, and others. They have a long history of thinking about consensus systems and their practical implications.",
  },
  {
    imgSrc:
      "https://kaiascan.io/_next/image?url=https%3A%2F%2Fsquare.klaytn.foundation%2Ffiles%2Fprofile%2F58%2F45ebcd79ae1415604de8cbc57e214a61.png&w=128&q=75",
    name: "EBC - Hanwha Systems",
    tags: ["NFT", "ETC"],
    totalStaking: "5,000,001",
    totalStaking_baifen: "13.16",
    infoMessage:
      "As a subsidiary of Hanwha Systems, Enterprise Blockchain Corp. (EBC), being spun off for the Hanwha Group's first global platform business in 2021, has been building and operating a blockchain-based network called NFT CV (Curriculum Vitae), to ensure that individual talent, time, knowledge, history, expertise, and potentials can become assets that can be transacted and monetized. NFT CV is designed to be a fundamental resource for linking financial products and future finance for the financially underprivileged, and it can contain an individual's history, qualifications, and creations, and talent assets, and their transaction history. EBC has a range of services and products including Yogig (the country's first job-matching platform for gig workers) and Programmable Payment Platform or P3 (a blockchain-based heterogeneous asset transaction and settlement automation platform), and, furthermore, it plans to launch a new service for the creator economy in late 2022 and talent marketplaces in Southeast Asia afterwards. Hanwha Systems is the representative company of Korea ranging with the world-class companies in various business areas based on avionics and space, security and safety, and information systems service. As a global total solutions company, Hanwha Systems is offering world's top class defense electronics products. Hanwha Systems has Defense Division and ICT Division with the customer value being the top priority. Hanwha Systems' ICT Division is actively fostering new digital technologies such as blockchain, AI/Bigdata, cloud, and smart factory, thereby creating new customer values. Along with its AI/Bigdata Platform, Hanwha Systems has AI solutions such as OCR, AIR, and IR specialized in Vision AI, Language AI, and Data Science, all of which are integrated and managed under one brand, HAiQV. Hanwha Systems is promoting blockchain-based digital change, and is aggressively collaborating and investing in order to expand the block chain ecosystem across industries.",
  },
  {
    imgSrc:
      "https://kaiascan.io/_next/image?url=https%3A%2F%2Fsquare.klaytn.foundation%2Ffiles%2Fprofile%2F76%2Fecd763bd90b52e84b37a93548fbc8f5d.png&w=128&q=75",
    name: "X2E All",
    tags: ["Game", "Infra"],
    totalStaking: "5,000,001",
    totalStaking_baifen: "13.16",
    infoMessage:
      "X2E ALL(formerly P2EALL) is a comprehensive platform that provides information, events, and community on WEB3 games. It has over 250,000 active users linking their WEB3 wallets to their X2E ALL accounts. About 80% of the users are from India, and Southeast Asia including Indonesia, Vietnam, Thailand and Philippines. In order for competitive WEB3 games to settle in the market, X2E ALL provides the following features. 1) Information : We provide information about a WEB3 game including network, cryptocurrency, social channel and how to play for global users. 2) Calendar : X2E ALL collects news of WEB3 games released, and shows those news for global users. WEB3 games can promote events on the X2E ALL calendar. 3) Airdrop : WEB3 games that need to gather more users can use the X2E ALL airdrop. They can airdrop for over 250,000 X2E ALL users, and make them do special actions for WEB3 games. 4) Pre-Register : Like WEB2 games, WEB3 games can acquire not only WEB2 players but also WEB3 players before launching the game. WEB3 players provide their WEB3 addresses which will be connected to the games. 5) Guild-Community : In Guild-Community, users can share their strategies for that game, or communicate with each other. WEB3 games make quests for users like joining discord, or retweeting tweets. And WEB3 games can make users play a game to earn points for the quest.",
  },
  {
    imgSrc:
      "https://kaiascan.io/_next/image?url=https%3A%2F%2Fcdn.kaiascan.io%2Fgc-logo%2Fimg_gc_animocaBrands.png&w=128&q=75",
    name: "Animoca Brands",
    tags: ["Invest"],
    totalStaking: "12,119,170",
    totalStaking_baifen: "8.77",
    infoMessage:
      "Animoca Brands, a Deloitte Tech Fast winner, a Fortune Crypto 40 company, and one of the Financial Times’ High Growth Companies Asia-Pacific 2023, is a leader in digital entertainment, blockchain, and gamification that is working to advance digital property rights and contribute to the establishment of the open metaverse. The company develops and publishes a broad portfolio of products including original games such as The Sandbox, Phantom Galaxies, Life Beyond, Crazy Kings, and Crazy Defense Heroes, and products utilizing popular intellectual properties including Disney, WWE, Snoop Dogg, The Walking Dead, Power Rangers, MotoGP™, and Formula E. It has multiple subsidiaries, including The Sandbox, Blowfish Studios, Quidd, GAMEE, nWay, Pixowl, Forj, Lympo, Animoca Brands Japan, Grease Monkey Games, Eden Games, Life Beyond Studios, Notre Game, TinyTap, Be., PIXELYNX, and WePlay Media. Animoca Brands has a growing portfolio of over 450 Web3 investments, including Colossal, Axie Infinity, OpenSea, Dapper Labs (NBA Top Shot), Yield Guild Games, Harmony, Alien Worlds, Star Atlas, and others.",
  },
  {
    imgSrc:
      "https://kaiascan.io/_next/image?url=https%3A%2F%2Fcdn.kaiascan.io%2Fgc-logo%2Fimg_gc_dwfLabs.png&w=128&q=75",
    name: "DWF Labs",
    tags: ["Invest"],
    totalStaking: "5,000,000",
    totalStaking_baifen: "13.16",
    infoMessage:
      "DWF Labs boasts a portfolio of over 550 companies, serving as the market maker for more than 25% of the top 100 companies ranked by CMC and 44% of those within the top 1000. We want to partner with the most visionary entreprenuers with our goal in assisting all trading related matters while providing a high-touch, dedicated partnership-centric relationship. Originating In 2018 as a proprietary high-frequency trading (HFT) firm in Switzerland, DWF was founded by a team of ETH graduates from Zurich and experienced quantitative traders from IMC; leveraging AI, machine learning, and advanced mathematical techniques in the design and implementation of its HFT strategies. In 2022, following comprehensive market analysis and opportunity assessment, the company initiated the establishment of DWF Labs. DWF Labs engages in venture investments, secondary market transactions, Over-the-Counter (OTC) activities, and market-making services. DWF Labs' rapid expansion has positioned the company as a leading entity in trading across spot, perpetuals, and options markets, spanning over 60 reputable centralized and decentralized trading venues. Beyond these, the firm actively supports the crypto industry by contributing TVL, operating validators across numerous protocols, technical testing, smart-contract audit services and fostering the overall growth of its portfolio companies. Today, DWF Labs’ portfolio is incorporated and tracked by leading crypto sources CoinMarketCap and CoinGecko, in response to the public interest in activities undertaken by DWF Labs and its partners – a testament to the firm’s success and influence.",
  },
  {
    imgSrc:
      "https://kaiascan.io/_next/image?url=https%3A%2F%2Fcdn.kaiascan.io%2Fgc-logo%2Fimg_gc_kaiaFoundation.png&w=128&q=75",
    name: "KAIA DLT FOUNDATION",
    tags: ["Infra"],
    totalStaking: "5,000,000",
    totalStaking_baifen: "13.16",
    infoMessage:
      "On 29 August, Kaia DLT Foundation officially launched the Kaia mainnet, successfully integrating the technological and business strengths accumulated by Klaytn and Finschia. Kaia debuts as the world’s fastest and most efficient EVM-based blockchain, boasting support from major Web3 partners like Kakao and LINE NEXT, processing speeds of approximately one second, and extremely low gas fees.",
  },
  {
    imgSrc:
      "https://kaiascan.io/_next/image?url=https%3A%2F%2Fsquare.klaytn.foundation%2Ffiles%2Fprofile%2F56%2Fcf46c444db8113235dd37b5bc846074f.png&w=128&q=75",
    name: "Binance",
    tags: ["Ce/De-fi"],
    totalStaking: "5,000,000",
    totalStaking_baifen: "13.16",
    infoMessage:
      "Binance is the world's leading blockchain and cryptocurrency infrastructure provider with a financial product suite that includes the largest digital asset exchange by volume. Trusted by millions worldwide, the Binance platform is dedicated to increasing the freedom of money for users, and features an unmatched portfolio of crypto products and offerings, including: trading and finance, education, data and research, social good, investment and incubation, decentralization and infrastructure solutions, and more.",
  },
  {
    imgSrc:
      "https://kaiascan.io/_next/image?url=https%3A%2F%2Fcdn.kaiascan.io%2Fgc-logo%2Fimg_gc_abga.png&w=128&q=75",
    name: "ABGA",
    tags: ["Game"],
    totalStaking: "5,000,000",
    totalStaking_baifen: "13.16",
    infoMessage:
      "ABGA, short for Asia Blockchain Gaming Alliance, is an ecological alliance jointly established by leading institutions in the global blockchain industry and outstanding organizations, and individuals who are enthusiastic about blockchain gaming, metaverse, and NFTs. Through a variety of online and offline activities, as well as the latest industry information analysis and discussion, ABGA collaborates with alliance member resources to discover, invest in, and incubate more potential projects to promote the vigorous development of the industry. ABGA aims to become the worlds largest blockchain gaming ecosystem. ABGA members will participate in building a blockchain gaming ecosystem and grow together with the industry. By better integrating the industrial strengths of Asia into the global blockchain gaming ecosystem, ABGA aims to collectively drive the development and future of the global blockchain gaming industry! ABGA members include investors, entrepreneurial members, and esports teams. Through this platform, investors can collect industry information, screen top teams and companies. The ABGA platform will guide new startups and serve as an incubator. Within the alliance, there are well-known blockchain gaming institutions covering both upstream and downstream, pooling resources for quality projects and teams. Strengthening the capabilities of Asian esports teams will increase their exposure on a global scale. In addition, ABGA regularly invites projects and investors from the gaming industry to participate in online and offline salons to jointly explore industry trends and assist in project roadshows. To date, ABGA has hosted over a dozen events, including the Annual Blockchain Gaming Hackathon, Web3 Gaming Summit, award ceremonies, etc., reaching tens of thousands of participants. In the future, ABGA will focus more on the technological growth of the Web3 gaming industry, organize more large-scale events, promote the prosperity of the Web3 gaming ecosystem, and contribute to the development of the industry.",
  },
  {
    imgSrc:
      "https://kaiascan.io/_next/image?url=https%3A%2F%2Fsquare.kaia.io%2Ffiles%2Fprofile%2F89%2F200b7f601c52461bb3754fe3b18a46f4.png&w=128&q=75",
    name: "LINE NEXT Inc.",
    tags: ["NFT", "Game"],
    totalStaking: "351,611,602",
    totalStaking_baifen: "5.50",
    infoMessage:
      "Based in the United States, LINE NEXT Inc. is focused on growing the global Web3 business. Through building a Web3 ecosystem, LINE NEXT aims to provide new digital experiences and lead the way into the future. LINE NEXT is redefining the digital market with DOSI, a digital commerce (D-Commerce) platform where you can trade various digital products such as memberships, gaming items, and tickets. Seeking to expand the NFT ecosystem, LINE NEXT is paving the way to lead Web3 by offering differentiated services and exclusive digital perks users want. DOSI currently offers a wide range of popular digital products, with more than 20 million digital collectibles from 150 brands including Japan Airlines, the Korean reality TV show “Heart Signal”, and a trading card game Cards Ahoy! Also, LINE NEXT recently raised a US$140 million investment — considered the largest investment in Asian blockchain and Web3 in 2023 — from a consortium led by Crescendo Equity Partners, a private equity firm backed by entrepreneur Peter Thiel. LINE NEXT plans to showcase a wide variety of unique services and digital products to connect more users to Web3 and create immersive experiences available only on DOSI.",
  },
  {
    imgSrc:
      "https://kaiascan.io/_next/image?url=https%3A%2F%2Fsquare.kaia.io%2Ffiles%2Fprofile%2F85%2Fcdcd81d8d4ee442fa6ddd1822ed5b787.png&w=128&q=75",
    name: "Bughole",
    tags: ["Ce/De-fi", "NFT"],
    totalStaking: "286,300,029",
    totalStaking_baifen: "5.53",
    infoMessage:
      "# BUGHOLE BUGHOLE is a community-driven blockchain infrastructure provider. We offer a range of solutions including validator operations, Game-Fi, governance DApps, and DeFi protocols, aiming to foster collaboration and transparency in the blockchain space. ## Validator Operations BUGHOLE's validator has achieved significant growth, with delegated token volumes reaching $70m (30% of Total VP). We support retail users to participate in Mainnet Governance and address the needs of the community within the ecosystem. ## BUGCITY DAO: Developing a Web3 Onchain Country BUGCITY DAO is a key project at BUGHOLE, aimed at creating a Web3 Onchain Country. The project involves community leaders from Nigeria, Indonesia, South Korea, and Japan, who work to expand their local communities while contributing to a global Web3 ecosystem. BUGCITY DAO's activities include: - In Nigeria, a community leader organized a Web3 education event at a local university, introducing 120 students to Web3 concepts, cryptocurrency, and BUGCITY. - During Ramadan in Indonesia, our local team hosted an event for 200 participants, combining local culture with Web3 education. These activities demonstrate BUGHOLE's approach to building a global Web3 ecosystem that respects local cultures and needs. # BUGHOLE BUGHOLE is a community-driven blockchain infrastructure provider. We offer a range of solutions including validator operations, Game-Fi, governance DApps, and DeFi protocols, aiming to foster collaboration and transparency in the blockchain space. ## Validator Operations BUGHOLE's validator has achieved significant growth, with delegated token volumes reaching $70m (30% of Total VP). We support retail users to participate in Mainnet Governance and address the needs of the community within the ecosystem. ## BUGCITY DAO: Developing a Web3 Onchain Country BUGCITY DAO is a key project at BUGHOLE, aimed at creating a Web3 Onchain Country. The project involves community leaders from Nigeria, Indonesia, South Korea, and Japan, who work to expand their local communities while contributing to a global Web3 ecosystem. BUGCITY DAO's activities include: - In Nigeria, a community leader organized a Web3 education event at a local university, introducing 120 students to Web3 concepts, cryptocurrency, and BUGCITY. - During Ramadan in Indonesia, our local team hosted an event for 200 participants, combining local culture with Web3 education. These activities demonstrate BUGHOLE's approach to building a global Web3 ecosystem that respects local cultures and needs. ## Future Plans BUGHOLE continues to focus on accelerating blockchain ecosystem growth through community-driven initiatives. We are working towards: - Enabling builders from diverse countries and regions to participate in Kaia. - Facilitating active participation of various communities and stakeholders in Kaia Governance. - Accelerating the Kaia DeFi ecosystem to provide new financial features and drive growth. - Expanding education and awareness about Kaia globally. Through our various initiatives, BUGHOLE aims to contribute to the development of a more inclusive, transparent, and community-driven Web3 world, with a particular focus on the growth and success of the Kaia ecosystem.",
  },
  {
    imgSrc:
      "https://kaiascan.io/_next/image?url=https%3A%2F%2Fsquare.kaia.io%2Ffiles%2Fprofile%2F88%2F4179bba167a04e1f80ef57663e5f5a08.png&w=128&q=75",
    name: "LINE NEXT Corp.",
    tags: ["ETC"],
    totalStaking: "63,391,938",
    totalStaking_baifen: "5.96",
    infoMessage:
      "LINE NEXT Corp. is the Web3 business entity of LY Corporation. Aiming to adopt Web3, it has bases in Korea, Japan, and the United States, offering various Web3 products. In particular, the company runs businesses in diverse fields such as the blockchain-based digital commerce platform DOSI, Web3 games, and social services. DOSI provides ownership authentication and transaction services for digital items in Web3 dApps, as well as for various items such as Web2 games, tickets, memberships, and luxury goods. Anyone can easily access the platform through social login and purchase digital items using convenient payment methods like Naver Pay, LINE Pay, and Apple Pay. Additionally, LINE NEXT is developing new AI-based social services, Web3 games based on the Brown IP, Web3 games in collaboration with SEGA, and plans to provide essential infrastructure and services to help the Kaia ecosystem become the Global No.1 beyond Asia.",
  },
  {
    imgSrc:
      "https://kaiascan.io/_next/image?url=https%3A%2F%2Fsquare.kaia.io%2Ffiles%2Fprofile%2F94%2F72883c58c0474d9dac0d90e453a2832c.png&w=128&q=75",
    name: "GoodGang Labs",
    tags: ["ETC"],
    totalStaking: "32,425,784",
    totalStaking_baifen: "6.16",
    infoMessage:
      "About GoodGang Labs Our mission is to connect humans and AI through avatars. GoodGang Labs is dedicated to revolutionizing how humans interact with AI by creating avatar-based solutions that bridge the communication gap. Our flagship product is an AI Avatar Agent solution, specifically optimized for orders and consultations in various environments, such as kiosks and retail spaces. This solution stands out with its specialized Speech Language Model (SLM) and robust function call capabilities, enabling it to handle complex orders and consultations efficiently. The AI Avatar Agent processes requests with an impressive response time of just 1.5 seconds, ensuring a smooth and swift interaction experience. Leveraging our cutting-edge Voice to Speech and Motion Avatar technology, the AI avatars deliver real-time, dynamic 3D interactions. These avatars provide a visually appealing and conversationally natural experience, making them ideal for customer service, order processing, and other consultative roles. Our AI Avatar Agent is designed to be easily integrated into existing kiosk systems without the need for costly hardware upgrades. It offers quick response times, high accuracy, and an engaging user experience, contributing to increased customer satisfaction and operational efficiency. With significant backing from major investors like Kakao, Naver, NaverZ, Planetarium, and Kimgisa Lab, GoodGang Labs is positioned as a leader in the AI avatar market, driving innovation in human-AI communication. Team GoodGang Labs was co-founded by Dookyung Ahn, who previously worked as a Strategic Partner Manager for Stories at Meta and also served as the Head of Developer Partnerships for Japan and Korea. He also managed multiple products as a Product Manager at LINE. The company's other co-founders include Jaecheol Kim, who was a co-founder of Seerslab, and Seoyoung Kim, who previously held the position of Art Team Lead at Meta. Our team, bringing diverse expertise from Meta, Google, Line, and Snow, is dedicated to transforming AI communication, ensuring it's as intuitive and effortless as everyday human interaction.",
  },
  {
    imgSrc:
      "https://kaiascan.io/_next/image?url=https%3A%2F%2Fsquare.kaia.io%2Ffiles%2Fprofile%2F86%2Fead9bbe987804e0da8a675709c5fad8e.png&w=128&q=75",
    name: "DELIGHT",
    tags: ["Infra"],
    totalStaking: "42,273,530",
    totalStaking_baifen: "6.24",
    infoMessage:
      "DELIGHT has been successfully delivering world-class technology to the decentralized ecosystem, and we aim to become a service provider that connects daily life with the Web3 world Experienced Members The team consists of fast-learning software engineers and a product designer. All members are fully experienced in decentralized platforms and ecosystems. Experienced Operating DELIGHT is currently working as a validator for more than twenty blockchain projects. In particular, we are expanding to Tendermint, Ethereum 2nd-layer platform that enables more professional operation. Confidence in the Credibility DELIGHT has become a trusted validator group through many operation experiences. Currently, we work with leading institutions to operate validating nodes. In addition, we participate in genesis validating for projects such as Fetch.ai, Medibloc, and Rizon to strengthen the stability of the project and support public confidence. Supporting Ecosystem DELIGHT believes in the ecosystem's bright future and potential, so we have supported ecosystem development. Particularly Terraswap, the first DEX on Terra, has become a crucial project to Terra blockchain users. Furthermore, many charging and aggregator projects have been established based on Terraswap. STARFLEIT(Fetch.ai) and Dezswap(XPLA) are waiting to open as next big shots for our next journey.",
  },
  {
    imgSrc:
      "https://kaiascan.io/_next/image?url=https%3A%2F%2Fsquare.kaia.io%2Ffiles%2Fprofile%2F95%2F64228112007e4e358c5539abc1b850dc.png&w=128&q=75",
    name: "CertiK",
    tags: ["Security"],
    totalStaking: "20,026,485",
    totalStaking_baifen: "7.18",
    infoMessage:
      "CertiK is a pioneering blockchain security company founded in 2018 by professors from Yale University and Columbia University. Our mission is to secure the Web3 world, making it safer and more trustworthy for everyone. With our innovative technologies and industry-leading expertise, we provide comprehensive security solutions to a wide range of blockchain and cryptocurrency projects. At CertiK, we offer an array of services including: - Web3 Security Audit: Comprehensive security audits tailored for Web3 applications. - Smart Contract Audit: Thorough security assessments of smart contracts. - L1 Chain Audit: Security assessments for Layer 1 blockchains. - Security Scores &amp; Ranking: Transparent, data-driven security rankings. - Skynet: On-chain monitoring and insights for enhanced security. - Security Score: Real-time assessment system for continuous security evaluation. - Penetration Testing: In-depth attack simulations to identify vulnerabilities. - SkyInsights: Compliance, AML, and risk management solutions. - KYC: Project team identity verification services. - Bug Bounty: Crowdsourced ethical hacking for security enhancement. - Incident Response: Rapid response services for security incidents. - Advisory Services: Crypto due diligence and consulting. - SkyHarbor: Secure monitoring and management of digital assets. - Formal Verification: Advanced technology for improved Web3 security. Our renowned Security Leaderboard serves as a transparent, data-driven platform for real-time security insights and community-driven projects. We leverage advanced artificial intelligence and formal verification techniques to meticulously analyze and identify vulnerabilities in blockchain projects. CertiK has a proven track record, having audited thousands of projects, including some of the biggest names in the industry like Binance, Tether, and Terra. Our efforts have safeguarded over $300 billion worth of digital assets. We are dedicated to maintaining the highest standards of security, continuously innovating to stay ahead of emerging threats.",
  },
  {
    imgSrc:
      "https://kaiascan.io/_next/image?url=https%3A%2F%2Fsquare.kaia.io%2Ffiles%2Fprofile%2F91%2Fa39e69ba8f7a40638fb2d6053d6c7de8.png&w=128&q=75",
    name: "SEGA Singapore",
    tags: ["Game"],
    totalStaking: "22,302,874",
    totalStaking_baifen: "6.99",
    infoMessage:
      "SEGA CORPORATION is headquartered in Tokyo, Japan, and is a worldwide leader in interactive entertainment both inside and outside the home. The company develops, publishes, and distributes a variety of games for consoles, PCs, and wireless devices, as well as developing and distributing arcade machines, merchandise, and various other products. Moreover, SEGA distributes a range of gaming content developed by its domestic and overseas studios worldwide via its global publishing bases.",
  },
  {
    imgSrc:
      "https://kaiascan.io/_next/image?url=https%3A%2F%2Fsquare.kaia.io%2Ffiles%2Fprofile%2F87%2Ff42d2650eead42398f8621977cb36668.png&w=128&q=75",
    name: "Cosmostation",
    tags: ["Infra"],
    totalStaking: "21,035,327",
    totalStaking_baifen: "7.09",
    infoMessage:
      "Cosmostation empowers blockchain businesses by providing secure solutions and invaluable infrastructure legos essential for scaling and onboarding users onto blockchain networks. Securing blockchain networks requires continuous operational oversight and since 2018, Cosmostation has been providing a suite of robust solutions that enables businesses to contribute to blockchain network security and visibility without the overhead of managing infrastructure.",
  },
  {
    imgSrc:
      "https://kaiascan.io/_next/image?url=https%3A%2F%2Fsquare.kaia.io%2Ffiles%2Fprofile%2F92%2Fd524bbf9f2294909a4f550528109cada.png&w=128&q=75",
    name: "SoftBank Corp.",
    tags: ["Invest"],
    totalStaking: "5,000,010",
    totalStaking_baifen: "13.16",
    infoMessage:
      "Guided by the SoftBank Group’s corporate philosophy, “Information Revolution – Happiness for everyone,” SoftBank Corp. operates telecommunications and IT businesses in Japan and globally.",
  },
  {
    imgSrc:
      "https://kaiascan.io/_next/image?url=https%3A%2F%2Fsquare.kaia.io%2Ffiles%2Fprofile%2F93%2F411c932cb5a44195a4e137d0fe25750b.png&w=128&q=75",
    name: "Ludwig Holdings",
    tags: ["Invest"],
    totalStaking: "16,752,001",
    totalStaking_baifen: "7.92",
    infoMessage:
      "Ludwig Holdings is an investor of LINE NEXT Corporation, operator of DOSI, Asia’s #1 digital goods trading platform. LINE NEXT Corporation, initially established as the Web3.0 business arm of LINE Corp (operator of Asia’s largest mobile messenger app LINE) has the vision to create the world’s largest digital goods platform through mass adoption of blockchain technology. LINE NEXT Corporation is planning to build DOSI a globally popularized digital goods platform partnering with global companies with strong brands and IPs, targeting to offer customers various and integrated digital goods related services.",
  },
  {
    imgSrc:
      "https://kaiascan.io/_next/image?url=https%3A%2F%2Fsquare.kaia.io%2Ffiles%2Fprofile%2F90%2F15ab0054aaaf405fa9244f04253993e3.png&w=128&q=75",
    name: "LINE Xenesis",
    tags: ["Infra"],
    totalStaking: "46,843,266",
    totalStaking_baifen: "6.16",
    infoMessage:
      "LINE Xenesis has been operating the cryptocurrency exchange LINE BITMAX in Japan since 2019 and holds a cryptocurrency exchange license in a country with notably rigorous cryptocurrency regulations where licenses are difficult to obtain. LINE BITMAX is a cryptocurrency trading service that allows anyone to easily access blockchain-based value through the communication app LINE, which is used by over 97 million people monthly in Japan. LINE Xenesis has been leading the cryptocurrency industry in Japan as a governance member of Finschia, the blockchain mainnet (predecessor of Kaia) that inherits the spirit of LINE blockchain. In order to realize a world where blockchain supports our daily lives, we are focusing on the development of Kaia's base coin and its community.",
  },
];

const GCInfo = () => {
  return (
    <>
      {data.map((item, i) => {
        return (
          <div key={i} className={style.flex}>
            <div>
              <img src={item.imgSrc}></img>
            </div>
            <div>
              <div>{item.name}</div>

              <div>
                {item.tags.map((v) => (
                  <span style={{ margin: 10, border: "1px solid red" }} key={v}>
                    {v}
                  </span>
                ))}
              </div>
              <div>Total Staking {item.totalStaking} (KLAY)</div>
              <div>APY {item.totalStaking_baifen} %</div>
              <div>{item.infoMessage}</div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default GCInfo;

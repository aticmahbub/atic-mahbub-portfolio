import Link from "next/link";
import path from "path";
import {FaGithub, FaLinkedin, FaFacebook, FaTwitter} from 'react-icons/fa'


const socials = [
    {icon: <FaGithub/>, path: 'https://github.com/aticmahbub'},
    {icon: <FaLinkedin/>, path: 'https://www.linkedin.com/in/aticmahbub/'},
    {icon: <FaFacebook/>, path: 'https://www.facebook.com/AticMahbubArnob/'},
    {icon: <FaTwitter/>, path: 'https://twitter.com/atic_mahbub'},
]
const Social = ({containerStyles, iconStyles}) => {
    return <div className={containerStyles}>
        {
            socials.map((item, index)=>{
                return <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            })
        }

    </div>;
};

export default Social;
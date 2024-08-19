import Link from "next/link";
import path from "path";
import {FaGithub, FaLinkedin, FaFacebook, FaTwitter} from 'react-icons/fa'


const socials = [
    {icon: <FaGithub/>, path: ''},
    {icon: <FaLinkedin/>, path: ''},
    {icon: <FaFacebook/>, path: ''},
    {icon: <FaTwitter/>, path: ''},
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
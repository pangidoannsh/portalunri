import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function MoreLink(props) {
    return (
        <Link to={props.link} className='text-primary-blue text-xs flex justify-end items-center'>
            <div>Selengkapnya</div>
            <Icon icon="akar-icons:chevron-right" width='16' />
        </Link>
    )
}

import React from "react";

const Pagination = (props) => {
    const pageLinks = [];

    for(let i=1; i <= props.pages+1; i++){
        let active = props.currentPage === i ? 'active' : null;

        pageLinks.push(<li key={i} onClick={() => props.nextPage(i)}><a className={active} href="#">{i}</a></li>)
    }

    return <ul className={'pagination'}>
        {pageLinks}
    </ul>

}

export default Pagination



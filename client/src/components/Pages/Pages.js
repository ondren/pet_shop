import React from 'react';
import {Pagination} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {setPage} from "../../features/deviceSlice/deviceSlice";

const Pages = () => {
    const totalCount = useSelector((state) => state.device._totalCount)
    const limit = useSelector((state) => state.device._limit)
    const devicePage = useSelector((state) => state.device._page)
    const dispatch = useDispatch()
    const pageCount = Math.ceil(totalCount / limit)
    const pages = []
    for(let i = 0; i < pageCount; i++){
        pages.push(i + 1)
    }
    return (
        <Pagination className='mt-5'>
            {pages.map(page =>
                <Pagination.Item
                    active={devicePage === page}
                    key={page}
                    onClick={() => dispatch(setPage(page))}

                >
                    {page}
                </Pagination.Item>
            )}
        </Pagination>
    );
};

export default Pages;
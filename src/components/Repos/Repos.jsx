import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import Repo from './Repo/Repo';
import './Repos.css';

const Repos = ({data}) => {

  const [offset, setOffset] = useState(0);
  const [slice, setData] = useState([]);
  const [perPage] = useState(6);
  const [pageCount, setPageCount] = useState(0);

  const getData = async () => {
    const res = await axios.get(data.repos_url)
    const reposData = res.data;
    const slice = reposData.slice(offset, offset + perPage)
    setData(slice)
    setPageCount(Math.ceil(reposData.length / perPage))
}

  useEffect(() => {
    getData();
  }, [offset])

 const handlePageClick = (e) => {
  const selectedPage = e.selected;
  setOffset(selectedPage + perPage)
};

  return (
    <div>
      <div className='repos'>
        {slice.map(item => 
        <Repo
          name={item.name}
          description={item.description}
          privateRepo={item.private}
          created_at={item.created_at}
          updated_at={item.updated_at}
          watchers_count={item.watchers_count}
          default_branch={item.default_branch}
          has_downloads={item.has_downloads}
        />)}
      </div>
      <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={0}
            pageRangeDisplayed={2}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages-pagination"}
            activeClassName={"active"} />
    </div>
  );
};

export default Repos;

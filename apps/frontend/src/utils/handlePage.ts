import React from "react";

const handlePage = (page: number, pageCount: number, setPage: React.Dispatch<React.SetStateAction<number>>) => {
  if (page + pageCount > 0) {
    setPage(page + pageCount);
  }
}

export default handlePage;
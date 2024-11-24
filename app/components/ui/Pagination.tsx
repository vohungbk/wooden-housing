import { cn } from "@/app/shared/utils";
import React, { ReactNode } from "react";
import ReactPaginate from "react-paginate";

type PaginationProps = {
  pageCount: number;
  onPageChange: (selectedItem: { selected: number }) => void;
  forcePage?: number;
  marginPagesDisplayed?: number;
  pageRangeDisplayed?: number;
  containerClassName?: string;
  activeClassName?: string;
  previousLabel?: string | ReactNode;
  nextLabel?: string | ReactNode;
};

const Pagination: React.FC<PaginationProps> = ({
  pageCount,
  onPageChange,
  forcePage = 0,
  marginPagesDisplayed = 1,
  pageRangeDisplayed = 4,
  containerClassName = "pagination",
  activeClassName = "active",
  previousLabel = "",
  nextLabel = "",
}) => {
  return (
    <ReactPaginate
      pageCount={pageCount}
      onPageChange={onPageChange}
      forcePage={forcePage}
      marginPagesDisplayed={marginPagesDisplayed}
      pageRangeDisplayed={pageRangeDisplayed}
      containerClassName={cn("flex-center gap-0.5 w-full", containerClassName)}
      activeClassName={cn("bg-active !text-white", activeClassName)}
      pageClassName={cn(
        "page-item w-10 h-10 rounded-[32px] flex-center text-[#777777]"
      )}
      pageLinkClassName={cn("text-[18px] xl:text-[22px]")}
      previousClassName={"mr-auto"}
      previousLinkClassName='prev-link'
      nextClassName='ml-auto'
      nextLinkClassName='next-link'
      breakClassName='break-item'
      breakLinkClassName='break-link'
      previousLabel={previousLabel}
      nextLabel={nextLabel}
    />
  );
};

export default Pagination;

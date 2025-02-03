import { useState } from "react";
import news1 from "./../../../public/images/news-1.png";
import news2 from "./../../../public/images/news-2.png";
import news3 from "./../../../public/images/news-3.png";
import BlogCard from "./../common/card/blogCard";
import Pagination from "../common/pagination";
const NewsBlog = () => {
  const data =  {
    error: false,
    msg: "Blog fetched successfully",
    data: {
        page: 1,
        limit: 8,
        totalDocs: 17,
        totalPages: 3,
        docs: [
    {
      tag: "Weapon Crime",
      image: news1,
      title: "Expert Defense for Weapon Crime Charges",
      date: "May 03 2023",
      owner: "Nicholas Jon",
      id:1
    },
    {
      tag: "Weapon Crime",
      image: news2,
      title: "Expert Defense for Weapon Crime Charges",
      date: "May 03 2023",
      owner: "Nicholas Jon",
      id:2
    },
    {
      tag: "Weapon Crime",
      image: news3,
      title: "Expert Defense for Weapon Crime Charges",
      date: "May 03 2023",
      owner: "Nicholas Jon",
      id:3
    },
    {
      tag: "Weapon Crime",
      image: news1,
      title: "Expert Defense for Weapon Crime Charges",
      date: "May 03 2023",
      owner: "Nicholas Jon",
      id:4
    },
    {
      tag: "Weapon Crime",
      image: news1,
      title: "Expert Defense for Weapon Crime Charges",
      date: "May 03 2023",
      owner: "Nicholas Jon",
      id:5
    },
  ],   
  hasNextPage: true,
  hasPrevPage: false
}
}
const [currentPage, setCurrentPage] = useState(data?.data?.page)
const [blogs, getBlogs] = useState(data?.data?.docs || [])
const [totalPages, setTotalPages] = useState(data?.data?.totalPages) 
const handlePageChange = async (page) => {
  try {
    const response = await fetch(`/api/products?page=${page}&limit=8`)
    const data = await response.json()

    if (!data.error) {
      getBlogs(data?.data?.docs)
      setCurrentPage(data?.data?.page)
      setTotalPages(data?.data?.totalPages)
    }
  } catch (error) {
    console.error("Error fetching products:", error)
  }
}
  return (
    <div className="  text-black">
      <div className="custom-container  xl:pb-[150px] md:pb-14 pb-[29px] ">
        <div className=" sm:text-start text-center">
          <p className="section-subtitle text-[#D4AF37]">News & Blog</p>
          <h1 className="section-title">Our Latest Blog & News</h1>
          <p className="section-description">
            Stay informed with our latest blogs and news, featuring expert
            insights,
            <br className="hidden md:inline" />
            updates, and valuable legal advice
          </p>
        </div>

        <div className="!pt-[16px]">
          <div className="grid lg:grid-cols-3 sm:grid-col-2 grid-cols-1 gap-[24px]"
          >
            {blogs?.map((i, index) => {
              return (
                  <BlogCard data={i} key={index}/>
              );
            })}
          </div>
        </div>
        <div className="flex justify-center mt-8">
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
      </div>
    </div>
  );
};

export default NewsBlog;

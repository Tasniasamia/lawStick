import news1 from "./../../../public/images/news-1.png";
import news2 from "./../../../public/images/news-2.png";
import news3 from "./../../../public/images/news-3.png";
import BlogCard from "./../common/card/blogCard";
const NewsBlog = () => {
  const data = [
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
  ];

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
            {data?.map((i, index) => {
              return (
                  <BlogCard data={i} key={index}/>
              );
            })}
          </div>
        </div>
     
      </div>
    </div>
  );
};

export default NewsBlog;

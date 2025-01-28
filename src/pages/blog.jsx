import Banner from './../components/common/banner';
import OurBlog from './../components/blog/ourBlog';
import OurClient from './../components/common/out-clients';
import Contact from './../components/common/contact';
const Blog = () => {
    return (
        <div>
          <Banner title={"News & Blog"}/>
          <OurBlog/>
          <OurClient/>
          <Contact/>
        </div>
    );
};

export default Blog;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

export default function Blogs() {
  const [featuredPost, setFeaturedPost] = useState(null);
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Add more mock posts
  const mockPosts = [
    {
      id: 2,
      title: 'Top 10 Tips for Healthy Teeth',
      excerpt: 'Follow these simple tips to maintain healthy teeth and gums...',
      image: 'https://apollodental.in/backend/web/dental-img/Smile_makeover_omg.jpg',
      content: 'Full content for Top 10 Tips for Healthy Teeth...',
    },
    {
      id: 3,
      title: 'How Technology is Changing Dentistry',
      excerpt: 'Learn about the latest advancements in dental technology...The field of dentistry is constantly evolving and changing to best suit patient needs. ',
      image: 'https://img.dentaleconomics.com/files/base/ebm/de/image/2024/07/66841cae2ae2f122c1e20b2d-dreamstime_l_309171458.png?auto=format,compress&fit=crop&q=45&h=356&height=356&w=640&width=640',
      content: 'Full content for How Technology is Changing Dentistry...The field of dentistry is constantly evolving and changing to best suit patient needs. 123Dentist is always on the lookout for new and emerging technology to make our patients’ experience as comfortable as possible. Here is just a few of the different technologies that 123Dentist practices u.',
    },
    {
      id: 4,
      title: 'Dental Implants: What You Need to Know',
      excerpt: 'Dental implants are a popular solution for missing teeth...Follow these simple tips to maintain healthy teeth and gums...Learn about the latest advancements in dental technology.',

      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHj-5An9WXu4JgTrL3ngK7R-nEu0PDnbZ-Hw&s',
      content: 'Full content for Dental Implants: What You Need to Know...',
    },
    // Add more mock posts
    {
      id: 6,
      title: 'How to Properly Floss Your Teeth',
      excerpt: 'Flossing is an important part of maintaining good oral hygiene...',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_50ebEznCsdfjKZ8tAd0Qxr3Ya0Q8vvyp2A&s',
      content: 'Full content for How to Properly Floss Your Teeth...',
    },
    
  ];

  useEffect(() => {
    // Fetch featured post from backend
    async function fetchFeaturedPost() {
      try {
        const response = await fetch('http://localhost:5000/api/v1/posts');
        const data = await response.json();
        console.log(data);
        setFeaturedPost(data.featuredPost || null);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching the featured post:', error);
        setLoading(false);
      }
    }

    fetchFeaturedPost();

    // Set mock data for the rest of the blog posts
    setBlogPosts(mockPosts);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <header className="py-8">
        <h1 className="text-3xl font-bold text-center">Dental Blog</h1>
      </header>
      <div className="flex flex-col lg:flex-row">
        <main className="lg:w-2/3 lg:pr-8">
          {/* Featured Post */}
          {featuredPost && (
            <article className="mb-12">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="object-cover w-full h-64 mb-4 rounded-lg"
              />
              <h2 className="mb-2 text-2xl font-semibold">{featuredPost.title}</h2>
              <p className="mb-4 text-gray-600">{featuredPost.excerpt}</p>
              
            </article>
          )}

          {/* Blog Posts */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {blogPosts.map((post) => (
              <article key={post.id} className="overflow-hidden border rounded-lg shadow-sm">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-48"
                />
                <div className="p-4">
                  <h3 className="mb-2 text-xl font-semibold">{post.title}</h3>
                  <p className="mb-4 text-gray-600">{post.excerpt}</p>
                  <Link to={`/post/${post.id}`}>
                    <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                      Show More
                    </button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </main>

        {/* Sidebar */}
        <aside className="mt-8 lg:w-1/3 lg:mt-0">
          <div className="p-6 mb-8 bg-gray-100 rounded-lg">
            <h3 className="mb-4 text-xl font-semibold">Connect Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-500 hover:text-blue-600">Facebook</a>
              <a href="#" className="text-blue-400 hover:text-blue-500">Twitter</a>
              <a href="#" className="text-red-500 hover:text-red-600">Pinterest</a>
              <a href="#" className="text-blue-700 hover:text-blue-800">LinkedIn</a>
            </div>
          </div>

          <div className="p-6 mb-8 bg-gray-100 rounded-lg">
            <h3 className="mb-4 text-xl font-semibold">Latest Posts</h3>
            <ul className="space-y-2">
              {blogPosts.slice(0, 5).map((post) => (
                <li key={post.id}>
                  <Link to={`/post/${post.id}`} className="text-blue-500 hover:text-blue-600">
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg">
            <h3 className="mb-4 text-xl font-semibold">Categories</h3>
            <ul className="space-y-2">
              <li><a href="https://www.dentaltix.com/en/blog/all-equipment-you-need-have-your-dental-clinic?srsltid=AfmBOoorLDv9grSzpvWKEF3Csxp5iFwXHZZzI0wQ6NNKU1DDvXnQd_qg" className="text-blue-500 hover:text-blue-600">Dental Equipment</a></li>
              <li><a href="https://www.healthdirect.gov.au/guide-to-dental-procedures" className="text-blue-500 hover:text-blue-600">Dental Procedures</a></li>
              <li><a href="https://www.mayoclinic.org/healthy-lifestyle/adult-health/in-depth/dental/art-20047475" className="text-blue-500 hover:text-blue-600">Oral Health</a></li>
              <li><a href="https://www.123dentist.com/top-10-new-technologies-in-dentistry/" className="text-blue-500 hover:text-blue-600">Technology</a></li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
} 
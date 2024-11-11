import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Calendar, User, Tag } from 'lucide-react';

const mockPosts = [
  {
    id: 2,
    title: 'Top 10 Tips for Healthy Teeth',
    author: 'Dr. Emily Johnson',
    date: 'May 15, 2023',
    category: 'Oral Health',
    tags: ['Dental Care', 'Oral Hygiene', 'Prevention'],
    images: [
      'https://apollodental.in/backend/web/dental-img/Smile_makeover_omg.jpg',
      'https://www.dentalpoint.in/wp-content/uploads/2024/04/invisalign-dental-point.jpg',
    ],
    content: `
      <h2 class="text-2xl font-bold mt-6 mb-4">1. Brush Twice a Day</h2>
      <p class="mb-4">Brush your teeth at least twice a day using fluoride toothpaste to remove plaque and prevent cavities. Use a soft-bristled toothbrush and replace it every 3-4 months.</p>
      
      <h2 class="text-2xl font-bold mt-6 mb-4">2. Use the Right Technique</h2>
      <p class="mb-4">Hold your toothbrush at a 45-degree angle to your gums and use short, gentle strokes to clean all surfaces of your teeth. Don't forget to brush your tongue to remove bacteria and freshen your breath.</p>

      <h2 class="text-2xl font-bold mt-6 mb-4">3. Floss Daily</h2>
      <p class="mb-4">Flossing helps remove food particles and plaque between teeth, which your toothbrush can't reach. Make sure to floss at least once a day, preferably before bedtime.</p>

      <h2 class="text-2xl font-bold mt-6 mb-4">4. Eat a Balanced Diet</h2>
      <p class="mb-4">Include calcium-rich foods like dairy, leafy greens, and almonds to strengthen your teeth. Avoid sugary snacks and drinks, as they contribute to tooth decay.</p>

      <h2 class="text-2xl font-bold mt-6 mb-4">5. Drink Water Regularly</h2>
      <p class="mb-4">Water helps wash away food particles and bacteria, keeping your mouth clean and hydrated. It's especially important to drink water after consuming sugary or acidic foods and beverages.</p>

      <h2 class="text-2xl font-bold mt-6 mb-4">6. Limit Sugary Drinks and Snacks</h2>
      <p class="mb-4">Sugar contributes to tooth decay, so limit sugary foods and drinks like soda and candy. If you do consume them, rinse your mouth with water afterward and wait at least 30 minutes before brushing.</p>

      <h2 class="text-2xl font-bold mt-6 mb-4">7. Use Fluoride</h2>
      <p class="mb-4">Fluoride strengthens tooth enamel and helps prevent cavities. Ensure your toothpaste contains fluoride, and consider using a fluoride mouthwash for added protection.</p>

      <h2 class="text-2xl font-bold mt-6 mb-4">8. Avoid Tobacco</h2>
      <p class="mb-4">Smoking or chewing tobacco can cause gum disease, tooth decay, and oral cancer. If you use tobacco products, consider quitting for the sake of your oral and overall health.</p>

      <h2 class="text-2xl font-bold mt-6 mb-4">9. Visit Your Dentist Regularly</h2>
      <p class="mb-4">Regular dental check-ups help detect problems early, allowing for timely treatment and better oral health. Aim for a dental visit every six months for cleaning and examination.</p>

      <h2 class="text-2xl font-bold mt-6 mb-4">10. Replace Your Toothbrush Regularly</h2>
      <p class="mb-4">Change your toothbrush every 3 to 4 months, or sooner if the bristles are frayed. A worn-out toothbrush is less effective at cleaning your teeth and can harbor bacteria.</p>
    `,
  },
  {
    id: 3,
    title: 'How Technology is Changing Dentistry',
    author: 'Dr. Michael Chen',
    date: 'June 2, 2023',
    category: 'Dental Technology',
    tags: ['Innovation', 'Digital Dentistry', 'Patient Care'],
    images: [
      'https://clovedental.in/wp-content/uploads/2024/08/implant-dentistry.png',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL2ho6vpws1bAmrykH4ilUnQkdmLov4dvZxQ&s',
    ],
    content: `
      <h2 class="text-2xl font-bold mt-6 mb-4">The Digital Revolution in Dentistry</h2>
      <p class="mb-4">In recent years, advancements in dental technology have dramatically improved patient care, making procedures more efficient and less invasive. From 3D imaging to AI-assisted diagnostics, the field of dentistry is evolving rapidly.</p>

      <h2 class="text-2xl font-bold mt-6 mb-4">1. 3D Printing in Dentistry</h2>
      <p class="mb-4">3D printing technology is revolutionizing the way dental prosthetics are created. Custom crowns, bridges, and even entire dentures can now be produced with incredible precision and in less time than traditional methods.</p>

      <h2 class="text-2xl font-bold mt-6 mb-4">2. Digital Impressions</h2>
      <p class="mb-4">Gone are the days of uncomfortable putty impressions. Digital scanners now create highly accurate 3D models of patients' teeth, improving the fit of dental restorations and enhancing patient comfort.</p>

      <h2 class="text-2xl font-bold mt-6 mb-4">3. AI in Dental Diagnostics</h2>
      <p class="mb-4">Artificial Intelligence is being used to analyze dental X-rays and images, helping dentists detect issues like cavities and periodontal disease with greater accuracy and at earlier stages.</p>

      <h2 class="text-2xl font-bold mt-6 mb-4">4. Laser Dentistry</h2>
      <p class="mb-4">Dental lasers are making many procedures less invasive and more comfortable for patients. From treating gum disease to preparing teeth for fillings, lasers are reducing pain and healing times.</p>

      <h2 class="text-2xl font-bold mt-6 mb-4">5. Teledentistry</h2>
      <p class="mb-4">Remote consultations and monitoring are becoming more common, allowing dentists to provide care and advice to patients who may not be able to visit the office in person.</p>

      <h2 class="text-2xl font-bold mt-6 mb-4">The Future of Dental Care</h2>
      <p class="mb-4">As technology continues to advance, we can expect even more innovations in dental care. From nanobots that can repair teeth at a microscopic level to augmented reality systems for dental education, the future of dentistry is bright and exciting.</p>
    `,
  },
   {
    id: 4,
    title: 'Dental Implants: What You Need to Know',
    author: 'Dr. Sarah Johnson',
    date: 'July 15, 2023',
    tags: ['Dental Implants', 'Restorative Dentistry', 'Oral Health'],
    excerpt: 'Dental implants are a popular solution for missing teeth. Follow these simple tips to maintain healthy teeth and gums. Learn about the latest advancements in dental technology.',
    images: [
      'https://www.crownandroots.com/blog/wp-content/uploads/2024/03/all-on-4-dental-implants.jpg',
      'https://atriumdental.net/wp-content/uploads/2023/11/Can-a-Single-Implant-Be-Placed-to-Support-Two-Adjacent-Teeth-1024x768.jpg',
    ],
    content: `
      The field of dentistry is constantly evolving and changing to best suit patient needs. 123Dentist is always on the lookout for new and emerging technology to make our patients' experience as comfortable as possible. Here are just a few practices we use to ensure we provide world-class service to all our patients:

      VELscope — VELscope is a special type of light that a dentist will shine in a patient's mouth to detect any abnormalities. This advanced technology helps in early detection of oral cancer and other oral diseases.

      Digital X-rays — Unlike traditional X-rays, digital X-rays produce much less radiation and provide immediate, high-quality images that can be easily stored and shared.

      Intraoral Cameras — These small cameras allow dentists to take close-up images of your teeth and gums, helping in accurate diagnosis and patient education.

      3D Printing — This technology is revolutionizing the creation of dental implants, crowns, and bridges, making them more precise and customized to each patient's needs.

      Laser Dentistry — Lasers are now used in various dental procedures, from treating gum disease to whitening teeth, often resulting in less pain and faster healing.

      Remember, while technology plays a crucial role in modern dentistry, it's the skill and expertise of your dentist that truly makes the difference. Always choose a dental practice that combines advanced technology with experienced professionals for the best oral care.
    `
  },
  {
    id: 6,
    title: 'How to Properly Floss Your Teeth',
    author: 'Dr. Lisa Chen',
    date: 'August 5, 2023',
    tags: ['Oral Hygiene', 'Flossing', 'Dental Care'],
    excerpt: 'Flossing is an important part of maintaining good oral hygiene. Learn the proper technique to ensure youre getting the most out of your flossing routine.',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmxiydrP5G4QHMrkTM4LZq_V4QX9a2kvAJIw&s',
      'https://ocsidentistry.com/wp-content/uploads/5-tips-to-improve-recovery-after-wisdom-teeth-removal.jpg',
    ],
    content: `
      Flossing is a crucial part of your daily oral hygiene routine, yet many people either skip it entirely or don't do it correctly. Here's a step-by-step guide on how to properly floss your teeth:

      1. Use enough floss: Start with about 18 inches of floss. This might seem like a lot, but it ensures you have clean sections of floss to use as you move from tooth to tooth.

      2. Wind the floss: Wind most of the floss around one of your middle fingers. Wind the remaining floss around the same finger of the opposite hand. This finger will take up the used floss.

      3. Guide the floss: Use your thumbs and forefingers to guide the floss between your teeth.

      4. Be gentle: Slide the floss gently up and down between your teeth. Never snap the floss into the gums.

      5. Contour the floss: When the floss reaches the gum line, curve it into a C shape against one tooth. Gently slide it into the space between the gum and the tooth.

      6. Use a rubbing motion: Rub the side of the tooth, moving the floss with up and down motions. Repeat this method on the rest of your teeth.

      7. Don't forget the back: Make sure to floss behind your back teeth.

      8. Use clean sections: As you move from tooth to tooth, use a clean section of floss.

      Remember, flossing at least once a day is crucial for removing plaque and food particles that your toothbrush can't reach. If you find traditional floss difficult to use, consider floss picks or water flossers as alternatives.

      Consistency is key when it comes to flossing. Make it a part of your daily routine, and your teeth and gums will thank you for years to come!
    `,
    likes: 127,
    comments: 23
  },
];

export default function Post() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const foundPost = mockPosts.find((p) => p.id === parseInt(id, 10));
    setPost(foundPost || null);
  }, [id]);

  if (!post) {
    return <div className="container px-4 py-8 mx-auto text-center">Post not found</div>;
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === post.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? post.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="container px-4 py-8 mx-auto">
      <article className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="mb-4 text-4xl font-bold">{post.title}</h1>
          <div className="flex items-center mb-4 text-gray-600">
            <User size={18} className="mr-2" />
            <span className="mr-4">{post.author}</span>
            <Calendar size={18} className="mr-2" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center">
            <Tag size={18} className="mr-2" />
            {post.tags.map((tag, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="relative mb-8">
          <img
            src={post.images[currentImageIndex]}
            alt={`${post.title} - Image ${currentImageIndex + 1}`}
            className="object-cover w-full rounded-lg h-96"
          />
          <button
            onClick={prevImage}
            className="absolute p-2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full left-2 top-1/2"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextImage}
            className="absolute p-2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full right-2 top-1/2"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <footer className="pt-8 mt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">About the Author</h3>
              <p className="text-gray-600">{post.author} is a renowned dentist specializing in {post.category}.</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold">Share this post</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-500 hover:text-blue-600">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-blue-700 hover:text-blue-800">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-blue-500 hover:text-blue-600">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
}
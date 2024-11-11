import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';

// Set the app element for accessibility
Modal.setAppElement('#root'); // Adjust if your root element is different

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [newPost, setNewPost] = useState({
    title: '',
    image: null,
    excerpt: ''
  });
  const [editMode, setEditMode] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Fetch posts from the API
  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('http://localhost:5000/api/v1/posts');
        
        // Log the entire response for debugging
        const data = await response.json();
        console.log("Fetched response:", data);  // Log the entire response

        // Check if data is an array before setting state
        if (Array.isArray(data)) {
          setBlogPosts(data);
        } else if (data && typeof data === 'object') {
          // If data is an object but not an array, handle it accordingly
          setBlogPosts([data]); // Wrap the single object in an array
        } else {
          toast.error("Fetched data is not in expected format.");
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
        toast.error("Error fetching posts.");
      }
    }

    fetchPosts();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  // Handle image upload
  const handleImageChange = (e) => {
    setNewPost({ ...newPost, image: e.target.files[0] });
  };

  // Open the modal
  const openModal = () => {
    setModalIsOpen(true);
    setNewPost({ title: '', image: null, excerpt: '' });
    setEditMode(false);
  };

  // Close the modal
  const closeModal = () => {
    setModalIsOpen(false);
  };

  // Add a new post
  const addNewPost = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append('title', newPost.title);
    formData.append('image', newPost.image);
    formData.append('excerpt', newPost.excerpt);

    try {
      const response = await fetch('http://localhost:5000/api/v1/posts', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      if (result && result.id) {
        setBlogPosts([...blogPosts, result]);
        toast.success("Post added successfully!");
        closeModal();
      } else {
        toast.error("Error adding post.");
      }
    } catch (error) {
      console.error("Error adding post:", error);
      toast.error("Error adding post.");
    } finally {
      setLoading(false);
    }
  };

  // Edit a post
  const editPost = (postId) => {
    const postToEdit = blogPosts.find((post) => post.id === postId);
    setNewPost(postToEdit);
    setSelectedPostId(postId);
    setEditMode(true);
    openModal();
  };

  const updatePost = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append('title', newPost.title);
    if (newPost.image) {
      formData.append('image', newPost.image);
    }
    formData.append('excerpt', newPost.excerpt);

    try {
      const response = await fetch(`http://localhost:5000/api/v1/posts/${selectedPostId}`, {
        method: 'PUT',
        body: formData,
      });
      const updatedPost = await response.json();
      setBlogPosts(
        blogPosts.map((post) => (post.id === selectedPostId ? updatedPost : post))
      );
      toast.success("Post updated successfully!");
      closeModal();
    } catch (error) {
      console.error("Error updating post:", error);
      toast.error("Error updating post.");
    } finally {
      setLoading(false);
    }
  };

  // Delete a post
  const deletePost = async (postId) => {
    setLoading(true);
    try {
      await fetch(`http://localhost:5000/api/v1/posts/${postId}`, { method: 'DELETE' });
      setBlogPosts(blogPosts.filter((post) => post.id !== postId));
      toast.success("Post deleted successfully!");
    } catch (error) {
      console.error("Error deleting post:", error);
      toast.error("Error deleting post.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <header className="py-8">
        <h1 className="text-3xl font-bold text-center">Blog Management</h1>
      </header>
      
      {/* Add New Post Button */}
      <div className="my-8 text-right">
        <button
          onClick={openModal}
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Add New Post
        </button>
      </div>

      {/* Blog Posts Table */}
      <table className="min-w-full table-auto">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2">Sr. No</th>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Excerpt</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {blogPosts.map((post, index) => (
            <tr key={post.id} className="border-t">
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2">{post.title}</td>
              <td className="px-4 py-2">
                <img src={post.image} alt={post.title} className="object-cover w-12 h-12 rounded" />
              </td>
              <td className="px-4 py-2">{post.excerpt}</td>
              <td className="px-4 py-2 space-x-2">
                <button
                  onClick={() => editPost(post.id)}
                  className="px-2 py-1 text-white bg-yellow-500 rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => deletePost(post.id)}
                  className="px-2 py-1 text-white bg-red-500 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add/Edit Post Modal */}
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="max-w-lg mx-auto">
        <h2 className="mb-4 text-2xl font-semibold">{editMode ? 'Edit Post' : 'Add New Post'}</h2>
        <form onSubmit={editMode ? updatePost : addNewPost} className="space-y-4">
          <div>
            <label className="block mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={newPost.title}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border"
              required
            />
          </div>
          <div>
            <label className="block mb-2">Image Upload</label>
            <input
              type="file"
              name="image"
              onChange={handleImageChange}
              className="w-full px-4 py-2 border"
              required
            />
          </div>
          <div>
            <label className="block mb-2">Excerpt</label>
            <textarea
              name="excerpt"
              value={newPost.excerpt}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border"
              required
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            {loading ? 'Saving...' : editMode ? 'Update Post' : 'Add Post'}
          </button>
        </form>
        <button onClick={closeModal} className="mt-4 text-blue-500">Cancel</button>
      </Modal>

      <ToastContainer />
    </div>
  );
}

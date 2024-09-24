import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSliderImages, addSliderImage, deleteSliderImage } from '../redux/features/sliderImageSlice'
import { Trash2, Upload, Eye } from 'lucide-react'

export default function SliderImages() {
  const dispatch = useDispatch()
  const sliderImages = useSelector((state) => state.sliderImages.images)
  const [newImage, setNewImage] = useState(null)
  const [previewImage, setPreviewImage] = useState(null)

  useEffect(() => {
    dispatch(fetchSliderImages())
  }, [dispatch])

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    setNewImage(file)
  }

  const handleAddImage = async () => {
    if (newImage) {
      await dispatch(addSliderImage(newImage))
      setNewImage(null)
    }
  }

  const handleDeleteImage = (imageId) => {
    dispatch(deleteSliderImage(imageId))
  }

  const handlePreviewImage = (imageUrl) => {
    setPreviewImage(imageUrl)
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow dark:bg-gray-800">
      <h2 className="mb-4 text-2xl font-bold">Slider Images</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-gray-300">
                Preview
              </th>
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-gray-300">
                Image URL
              </th>
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-gray-300">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
            {sliderImages.map((image) => (
              <tr key={image._id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img src={image.url} alt="Slider" className="object-cover w-20 h-20 rounded" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900 dark:text-gray-100">{image.url}</div>
                </td>
                <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                  <button
                    onClick={() => handlePreviewImage(image.url)}
                    className="mr-4 text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDeleteImage(image._id)}
                    className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center mt-6">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
          id="image-upload"
        />
        <label
          htmlFor="image-upload"
          className="inline-flex items-center px-4 py-2 text-white transition-colors duration-200 bg-blue-500 rounded cursor-pointer hover:bg-blue-600"
        >
          <Upload className="w-5 h-5 mr-2" />
          Upload New Image
        </label>
        {newImage && (
          <button
            onClick={handleAddImage}
            className="px-4 py-2 ml-4 text-white transition-colors duration-200 bg-green-500 rounded hover:bg-green-600"
          >
            Add Image
          </button>
        )}
      </div>
      {previewImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="max-w-3xl max-h-full p-4 overflow-auto bg-white rounded-lg">
            <img src={previewImage} alt="Preview" className="h-auto max-w-full" />
            <button
              onClick={() => setPreviewImage(null)}
              className="px-4 py-2 mt-4 text-white transition-colors duration-200 bg-red-500 rounded hover:bg-red-600"
            >
              Close Preview
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
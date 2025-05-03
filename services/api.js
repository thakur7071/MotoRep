import axios from 'axios';

const API_URL = 'YOUR_BACKEND_API_URL'; // Replace with your actual backend URL

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // You might want to use AsyncStorage for React Native
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const userProfileAPI = {
  // Create or update user profile
  updateProfile: async (profileData) => {
    try {
      const response = await api.post('/api/user/profile', profileData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Upload documents
  uploadDocuments: async (documents) => {
    try {
      const formData = new FormData();
      Object.entries(documents).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const response = await api.post('/api/user/documents', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Get user profile
  getProfile: async () => {
    try {
      const response = await api.get('/api/user/profile');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};

export default api; 
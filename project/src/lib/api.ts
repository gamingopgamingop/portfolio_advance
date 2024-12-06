import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const sendContactForm = async (data: {
  name: string;
  email: string;
  message: string;
}) => {
  return api.post('/api/contact', data);
};

export const subscribeNewsletter = async (email: string) => {
  return api.post('/api/newsletter', { email });
};

export const fetchBlogPosts = async () => {
  return api.get('/api/blog').then((res) => res.data);
};

export const fetchProjects = async () => {
  return api.get('/api/projects').then((res) => res.data);
};
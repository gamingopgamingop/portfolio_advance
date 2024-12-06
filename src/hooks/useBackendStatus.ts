import { useState, useEffect } from 'react';
import axios from 'axios';

interface BackendStatus {
  django: boolean;
  laravel: boolean;
  rails: boolean;
}

export function useBackendStatus() {
  const [status, setStatus] = useState<BackendStatus>({
    django: false,
    laravel: false,
    rails: false,
  });

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const djangoStatus = await axios.get(`${import.meta.env.VITE_DJANGO_API_URL}/health`);
        const laravelStatus = await axios.get(`${import.meta.env.VITE_LARAVEL_API_URL}/health`);
        const railsStatus = await axios.get(`${import.meta.env.VITE_RAILS_API_URL}/health`);

        setStatus({
          django: djangoStatus.status === 200,
          laravel: laravelStatus.status === 200,
          rails: railsStatus.status === 200,
        });
      } catch (error) {
        console.error('Error checking backend status:', error);
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  return status;
}
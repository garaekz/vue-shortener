import { defineStore } from 'pinia';
import { mande } from 'mande';
import { globalOptions } from '@/router/config';
import Cookies from 'js-cookie';
import { computed, ref } from 'vue';

interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at: string;
  created_at: string;
  updated_at: string;
}

const apiURL: string = import.meta.env.VITE_API_URL;

export const useAuthStore = defineStore('auth', () => {
  const accessToken = ref(Cookies.get('shortenerToken') ?? null);
  const options = computed(() => {
    if (accessToken.value) {
      globalOptions.headers!.Authorization = `Bearer ${accessToken.value}`;
    }
    return globalOptions;
  });

  const user = ref(null as User | null);
  const isAuthenticated = computed(() => !!accessToken);
  const api = mande(apiURL, options.value);

  const setNewToken = (token: string) => {
    Cookies.set('shortenerToken', token, { expires: 365 });
    options.value.headers!.Authorization = `Bearer ${token}`;
  };

  const fetchOauthUrl = async (provider: string) => {
    try {
      const { url } = await api.post<{url: string}>(`/auth/${provider}/redirect`);
      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const loginWithProvider = async (provider: string, code: string) => {
    try {
      const { access_token: token } = await api.get<{access_token: string}>(`/auth/${provider}/callback?code=${code}`);
      if (token) {
        setNewToken(token);
        return token;
      }
    } catch (error) {
      console.error(error);
      Cookies.remove('shortenerToken');
      throw error;
    }
  };

  const fetchUser = async () => {
    if (user.value) {
      return user.value;
    }

    try {
      const currentUser = await api.get<User>('/user');
      user.value = currentUser;
      return user;
    }
    catch (error) {
      console.error(error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await api.post('/auth/logout');
      Cookies.remove('shortenerToken');
      accessToken.value = null;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  return {
    accessToken,
    user,
    isAuthenticated,
    fetchOauthUrl,
    loginWithProvider,
    fetchUser,
    logout,
  };
});

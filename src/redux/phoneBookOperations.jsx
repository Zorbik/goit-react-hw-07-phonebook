import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

const API = 'https://6390aea30bf398c73a8f8a75.mockapi.io/api/contacts/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios(API);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.delete(`${API}${id}`);

      toast.success(`Контакт ${response.data.name} успішно видален!`);

      return response.data.id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios({
        method: 'post',
        url: API,
        data: {
          name: name,
          phone: number,
        },
      });

      toast.success(`Контакт ${response.data.name} успішно додан!`);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import LocationsService from 'services/LocationsService';

const initialState = {
  locations: [],
  error: null,
  isLoading: false,
};

export const createLocation = createAsyncThunk(
  'locations/createLocation',
  async (newLocationData, { rejectWithValue }) => {
    const { result, error } = await LocationsService.createLocation(newLocationData);

    if (result) {
      return result;
    }

    return rejectWithValue(error || 'Під час додавання нової локації сталася помилка. Спробуйте пізніше');
  }
);

export const getLocations = createAsyncThunk('locations/getLocations', async (_, { rejectWithValue }) => {
  const { result, error } = await LocationsService.getLocations();

  if (result) {
    return result;
  }

  return rejectWithValue(error || 'Під час отримання даних локацій сталася помилка. Спробуйте пізніше');
});

export const updateLocation = createAsyncThunk(
  'locations/updateLocation',
  async ({ id, updatedLocationData }, { rejectWithValue }) => {
    const { result, error } = await LocationsService.updateLocation(id, updatedLocationData);

    if (result) {
      return { id, updatedLocationData: result };
    }

    return rejectWithValue(error || 'Під час отримання даних локацій сталася помилка. Спробуйте пізніше');
  }
);

export const deleteLocation = createAsyncThunk('locations/deleteLocation', async (id, { rejectWithValue }) => {
  const { result, error } = await LocationsService.deleteLocation(id);

  if (result) {
    return { id };
  }

  return rejectWithValue(error || 'Під час видалення локації сталася помилка. Спробуйте пізніше');
});

const locationsSlice = createSlice({
  name: 'locations',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(createLocation.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createLocation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.locations = [action.payload, ...state.locations];
        state.error = null;
      })
      .addCase(createLocation.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getLocations.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getLocations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.locations = action.payload;
        state.error = null;
      })
      .addCase(getLocations.rejected, (state, action) => {
        state.isLoading = false;
        state.locations = [];
        state.error = action.payload;
      })
      .addCase(updateLocation.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateLocation.fulfilled, (state, action) => {
        state.isLoading = false;
        const { id, updatedLocationData } = action.payload;
        state.locations = state.locations.map((location) =>
          location.id === id ? { ...location, ...updatedLocationData } : location
        );
        state.error = null;
      })
      .addCase(updateLocation.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteLocation.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteLocation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.locations = state.locations.filter(({ id }) => id !== action.payload.id);
        state.error = null;
      })
      .addCase(deleteLocation.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default locationsSlice.reducer;

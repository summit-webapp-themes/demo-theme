import { jest } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import useBanner from '../../../../hooks/HomePageHooks/useHomeBanners';
import { Provider } from 'react-redux';
import { persistor, store } from '../../../../store/store';
import HomeBannersMaster from './HomeBannersMaster';

jest.mock('../../../../hooks/HomePageHooks/useHomeBanners', () => ({
  __esModule: true, // Indicate that this is an ES module
  default: jest.fn(), // Mock the default export
}));
it('Does it renders Skeletons?', () => {
  // const mockUseBanner = useBanner as jest.Mock;
  const mockUseBanner = jest.fn(() => ({
    loading: false, // Adjust to false for testing the banners or error cases
    bannersList: [], // Adjust to an array of banner data if needed
    errorMessage: false, //\\/\\//\\//\\//\\//\\
  }));
  (useBanner as jest.Mock).mockImplementation(() => ({
    bannersList: [],
    isLoading: true, // Force loading to true
    errorMessage: null,
  }));
  // Cast the mocked hook correctly

  const { container } = render(
    <Provider store={store}>
      <HomeBannersMaster />
    </Provider>
  );

  // Use querySelector to find the element by className
  const loadingContainer = container.querySelector('.main-banners-loading');

  // Ensure it exists
  expect(loadingContainer).toBeInTheDocument();
});

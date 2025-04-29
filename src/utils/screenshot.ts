
import html2canvas from 'html2canvas';

export interface ScreenshotData {
  dataUrl: string;
  date: string;
  recipe_type: string;
  style: string;
}

export const takeScreenshot = async (
  elementId: string, 
  recipeType: string,
  recipeStyle: string
): Promise<ScreenshotData | null> => {
  try {
    const element = document.getElementById(elementId);
    if (!element) {
      console.error('Element not found:', elementId);
      return null;
    }
    
    // Create canvas from the element
    const canvas = await html2canvas(element, {
      backgroundColor: '#ffffff',
      scale: 2, // Better quality
      useCORS: true,
      allowTaint: true,
      logging: false
    });
    
    // Convert to data URL
    const dataUrl = canvas.toDataURL('image/png');
    
    return {
      dataUrl,
      date: new Date().toISOString(),
      recipe_type: recipeType,
      style: recipeStyle
    };
  } catch (error) {
    console.error('Error taking screenshot:', error);
    return null;
  }
};

export const saveScreenshotToLocal = (screenshot: ScreenshotData): void => {
  try {
    // Get existing screenshots from local storage
    const existingScreenshotsString = localStorage.getItem('doughlabScreenshots');
    const existingScreenshots = existingScreenshotsString 
      ? JSON.parse(existingScreenshotsString) 
      : [];
    
    // Add new screenshot to array
    existingScreenshots.push(screenshot);
    
    // Save back to local storage
    localStorage.setItem('doughlabScreenshots', JSON.stringify(existingScreenshots));
  } catch (error) {
    console.error('Error saving screenshot to local storage:', error);
  }
};

export const getLocalScreenshots = (): ScreenshotData[] => {
  try {
    const screenshotsString = localStorage.getItem('doughlabScreenshots');
    return screenshotsString ? JSON.parse(screenshotsString) : [];
  } catch (error) {
    console.error('Error getting screenshots from local storage:', error);
    return [];
  }
};

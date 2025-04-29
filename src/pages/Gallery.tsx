
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getLocalScreenshots, ScreenshotData } from '@/utils/screenshot';
import { Trash2, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Gallery: React.FC = () => {
  const [screenshots, setScreenshots] = useState<ScreenshotData[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const savedScreenshots = getLocalScreenshots();
    setScreenshots(savedScreenshots);
  }, []);

  const deleteScreenshot = (index: number) => {
    const updatedScreenshots = [...screenshots];
    updatedScreenshots.splice(index, 1);
    setScreenshots(updatedScreenshots);
    localStorage.setItem('doughlabScreenshots', JSON.stringify(updatedScreenshots));
    toast({
      title: 'Screenshot deleted',
      description: 'The recipe screenshot was removed from your gallery',
    });
  };

  const downloadScreenshot = (screenshot: ScreenshotData, index: number) => {
    const link = document.createElement('a');
    link.href = screenshot.dataUrl;
    link.download = `doughlab-recipe-${screenshot.recipe_type}-${screenshot.style}-${index}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  return (
    <div className="container mx-auto pt-10 pb-16 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Recipe Screenshot Gallery</h1>
      
      {screenshots.length === 0 ? (
        <Card className="text-center py-10">
          <CardContent>
            <p className="text-muted-foreground">
              No saved recipe screenshots yet. Create some recipes and save them to your gallery!
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {screenshots.map((screenshot, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="p-4 bg-gray-50">
                <CardTitle className="text-lg flex justify-between items-center">
                  <span>
                    {screenshot.recipe_type.charAt(0).toUpperCase() + screenshot.recipe_type.slice(1)}:&nbsp;
                    {screenshot.style.charAt(0).toUpperCase() + screenshot.style.slice(1)}
                  </span>
                  <div className="flex gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => downloadScreenshot(screenshot, index)}
                      className="h-8 w-8 p-0"
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => deleteScreenshot(index)}
                      className="h-8 w-8 p-0 text-red-500 hover:text-red-600"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardTitle>
                <p className="text-xs text-gray-500 mt-1">
                  {formatDate(screenshot.date)}
                </p>
              </CardHeader>
              <div className="p-2 border-t">
                <img 
                  src={screenshot.dataUrl} 
                  alt={`${screenshot.recipe_type} ${screenshot.style} recipe`} 
                  className="w-full rounded-md"
                />
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;

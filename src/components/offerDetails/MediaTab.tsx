import { Eye, Play } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface MediaTabProps {
  images: string[];
  poolName: string;
}

const MediaTab = ({ images, poolName }: MediaTabProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Farm Photos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.slice(0, 7).map((image, index) => (
            <div key={index} className="relative group cursor-pointer">
              <ImageWithFallback 
                src={image} 
                alt={`${poolName} - Photo ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg"
                fallbackSrc={`https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=300&fit=crop&crop=center&sig=${index}`}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                <Eye className="h-6 w-6 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Video Content</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative group cursor-pointer">
            <ImageWithFallback 
              src={images[0]} 
              alt="Farm Tour Video"
              className="w-full h-48 object-cover rounded-lg"
              fallbackSrc="https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=300&fit=crop&crop=center"
            />
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center rounded-lg">
              <div className="text-center text-white">
                <Play className="h-12 w-12 mx-auto mb-2" />
                <div className="font-semibold">Farm Tour</div>
                <div className="text-sm opacity-80">5:30 minutes</div>
              </div>
            </div>
          </div>
          <div className="relative group cursor-pointer">
            <ImageWithFallback 
              src={images[1]} 
              alt="Cattle Care Video"
              className="w-full h-48 object-cover rounded-lg"
              fallbackSrc="https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop&crop=center"
            />
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center rounded-lg">
              <div className="text-center text-white">
                <Play className="h-12 w-12 mx-auto mb-2" />
                <div className="font-semibold">Cattle Care</div>
                <div className="text-sm opacity-80">3:45 minutes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaTab;
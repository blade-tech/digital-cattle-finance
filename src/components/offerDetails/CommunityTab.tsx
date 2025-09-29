import { useState } from 'react';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Users, Heart, MessageCircle, Send } from 'lucide-react';
import { defaultComments } from './constants';

interface CommunityTabProps {
  poolName: string;
}

const CommunityTab = ({ poolName }: CommunityTabProps) => {
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState(defaultComments);

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: comments.length + 1,
        user: 'Your Name',
        avatar: null,
        content: newComment,
        timestamp: 'Just now',
        likes: 0
      };
      setComments([comment, ...comments]);
      setNewComment('');
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Community Discussion</h3>
        
        {/* Add Comment */}
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <Label className="text-sm font-medium text-gray-700 mb-2 block">Add Comment</Label>
          <Textarea
            placeholder="Share your thoughts about this investment opportunity..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="mb-3"
          />
          <Button onClick={handleAddComment} size="sm">
            <Send className="h-4 w-4 mr-2" />
            Post Comment
          </Button>
        </div>

        {/* Comments */}
        <div className="space-y-4">
          {comments.map((comment) => (
            <div key={comment.id} className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="h-5 w-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-semibold text-gray-800">{comment.user}</span>
                    <span className="text-sm text-gray-500">{comment.timestamp}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{comment.content}</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <Button variant="ghost" size="sm" className="text-gray-500 hover:text-green-600">
                      <Heart className="h-4 w-4 mr-1" />
                      {comment.likes}
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-500 hover:text-green-600">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      Reply
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityTab;
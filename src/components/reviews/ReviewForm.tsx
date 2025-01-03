import React, { useState } from 'react';
import { Star } from 'lucide-react';
import RatingInput from './RatingInput';

export default function ReviewForm({ productId, onSubmit }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ productId, rating, comment });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <RatingInput value={rating} onChange={setRating} />
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Share your experience..."
        className="w-full p-3 border rounded-lg"
        rows={4}
      />
      <button type="submit" className="bg-red-500 text-white px-6 py-2 rounded-full">
        Submit Review
      </button>
    </form>
  );
}

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ message: 'Message is required' });
  }

  // Mock responses based on user input
  const mockResponses = [
    "Good morning! How's your energy today?",
    "That sounds great! What's your main goal for today?",
    "I understand. Let's keep things simple today.",
    "Perfect! I'll help you plan that out.",
    "That's interesting! Tell me more about that.",
    "I'm here to support you. What would you like to focus on?",
    "Great question! Let me think about that for a moment.",
    "I appreciate you sharing that with me.",
    "That makes a lot of sense. How are you feeling about it?",
    "I'm listening. What's on your mind?"
  ];

  // Simple logic to provide varied responses
  const responseIndex = Math.floor(Math.random() * mockResponses.length);
  const response = mockResponses[responseIndex];

  // Simulate a small delay to make it feel more realistic
  setTimeout(() => {
    res.status(200).json({ response });
  }, 500);
} 
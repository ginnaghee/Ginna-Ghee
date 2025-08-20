import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ChatMessage {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [sessionId] = useState(() => Math.random().toString(36).substr(2, 9));
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Add welcome message when chatbot first opens
      setMessages([{
        id: '1',
        type: 'bot',
        content: "Hi! I'm your ghee expert. Ask me about nutrition, cooking tips, storage, or anything ghee-related!",
        timestamp: new Date()
      }]);
    }
  }, [isOpen, messages.length]);

  const chatMutation = useMutation({
    mutationFn: async (question: string) => {
      const response = await apiRequest("POST", "/api/chat", {
        sessionId,
        question
      });
      return response.json();
    },
    onSuccess: (data) => {
      setMessages(prev => [...prev, {
        id: Date.now().toString() + '-bot',
        type: 'bot',
        content: data.answer,
        timestamp: new Date()
      }]);
    },
    onError: () => {
      setMessages(prev => [...prev, {
        id: Date.now().toString() + '-error',
        type: 'bot', 
        content: "Sorry, I'm having trouble right now. Please try again later or contact our support team.",
        timestamp: new Date()
      }]);
    }
  });

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString() + '-user',
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    chatMutation.mutate(inputMessage);
    setInputMessage("");
  };

  const handleQuickQuestion = (question: string) => {
    const userMessage: ChatMessage = {
      id: Date.now().toString() + '-user',
      type: 'user', 
      content: question,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    chatMutation.mutate(question);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    "What are the health benefits of ghee?",
    "How do I cook with ghee?",
    "How should I store ghee?"
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chatbot Trigger Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-ghee-gold rounded-full shadow-lg hover:bg-ghee-accent transition-all transform hover:scale-110 p-0"
        data-testid="button-chatbot-toggle"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </Button>
      
      {/* Chatbot Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 h-96 bg-white rounded-xl shadow-2xl border border-ghee-gold/20 overflow-hidden flex flex-col">
          {/* Chatbot Header */}
          <div className="bg-ghee-gold text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Bot size={16} />
              </div>
              <div>
                <h4 className="font-semibold" data-testid="text-chatbot-title">Ghee Assistant</h4>
                <p className="text-xs opacity-90">Ask me about ghee!</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 h-auto"
              data-testid="button-chatbot-close"
            >
              <X size={16} />
            </Button>
          </div>
          
          {/* Chat Messages */}
          <div className="flex-1 p-4 space-y-4 overflow-y-auto" data-testid="chat-messages">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs rounded-lg p-3 ${
                  message.type === 'user' 
                    ? 'bg-ghee-gold text-white ml-4' 
                    : 'bg-ghee-cream text-ghee-dark mr-4'
                }`}>
                  {message.type === 'bot' && (
                    <div className="flex items-start gap-2 mb-2">
                      <Bot size={16} className="text-ghee-gold mt-1 flex-shrink-0" />
                    </div>
                  )}
                  <p className="text-sm whitespace-pre-wrap" data-testid={`message-${message.id}`}>
                    {message.content}
                  </p>
                </div>
              </div>
            ))}
            
            {chatMutation.isPending && (
              <div className="flex justify-start">
                <div className="bg-ghee-cream text-ghee-dark rounded-lg p-3 mr-4">
                  <div className="flex items-center gap-2">
                    <Bot size={16} className="text-ghee-gold" />
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-ghee-gold rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-ghee-gold rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-ghee-gold rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Quick Action Buttons - only show when no messages yet */}
            {messages.length === 1 && (
              <div className="space-y-2">
                {quickQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuickQuestion(question)}
                    className="w-full text-left bg-ghee-beige hover:bg-ghee-cream border-ghee-gold/30 text-ghee-dark text-xs justify-start h-auto py-2 px-3"
                    data-testid={`button-quick-question-${index}`}
                  >
                    {question}
                  </Button>
                ))}
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
          
          {/* Chat Input */}
          <div className="p-4 border-t border-ghee-beige">
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Ask about ghee..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={chatMutation.isPending}
                className="flex-1 border-ghee-gold/30 focus:border-ghee-gold text-sm"
                data-testid="input-chat-message"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || chatMutation.isPending}
                className="bg-ghee-gold text-white hover:bg-ghee-accent p-2"
                data-testid="button-send-message"
              >
                <Send size={16} />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import React, { useState, useRef, useEffect } from 'react';
import { FaRobot, FaPaperPlane, FaUser } from 'react-icons/fa';
import './ChatBot.css';

const FAQ = [
  // Home/About
  { q: /about|xcludea|who.*are.*you|what.*is.*xcludea/i, a: 'Xcludea is a Sri Lankan-based software company delivering reliable solutions worldwide, blending innovation with purpose.' },
  { q: /mission|vision/i, a: 'Our mission is to deliver tailored AI-powered solutions and build trust with clients. Our vision is to become the top global technology partner.' },
  { q: /unique|special|different/i, a: 'We combine creativity, trust, and adaptability to deliver innovative solutions and a supportive team culture.' },

  // Team
  { q: /team|members|founder|who.*work|who.*behind/i, a: 'Our team is made up of passionate developers and creative minds, including our founders Rumal Medagedara and Sandipa Senadhira.' },
  { q: /culture|work.*environment|supportive/i, a: 'We value creativity, respect, ownership, and a supportive, growth-focused culture.' },

  // Services
  { q: /service|offer|provide|do you.*do/i, a: 'We offer software development, UI/UX design, consulting, AI chatbots, 3D modeling, and more.' },
  { q: /ai|artificial intelligence/i, a: 'We use cutting-edge AI to boost our software development and deliver smart solutions.' },

  // Careers
  { q: /career|job|position|opening|vacancy|apply/i, a: 'You can view and apply for open positions on our Careers page. We offer roles like Front-End Developer, Software Engineer, QA Engineer, and UI/UX Engineer (Intern).' },
  { q: /how.*apply|application.*process|recruitment/i, a: 'To apply, click the "Apply Now" button on the Careers page, fill out the form, and our team will contact you if you are shortlisted.' },
  { q: /intern|internship/i, a: 'We offer internship positions in development, QA, and UI/UX. Check our Careers page for current openings.' },
  { q: /work.*from.*home|remote/i, a: 'Yes, we offer flexible and remote work options for many positions.' },

  // Benefits
  { q: /benefit|perks|wellness|support|friendly|time off|vacation/i, a: 'Our benefits include flexible work, time off, wellness support, and a friendly work environment.' },

  // Contact
  { q: /contact|reach|email|phone|how.*get.*touch/i, a: 'You can contact us via the Contact page or email us at xcludea.team@gmail.com. Phone: +94 71 0194151.' },

  // Location
  { q: /where.*located|location|address/i, a: 'We are based in Sri Lanka and serve clients worldwide.' },

  // Application follow-up
  { q: /after.*apply|what.*next|when.*hear/i, a: 'After you apply, our team will review your application and contact you if you are shortlisted.' },

  // Home page
  { q: /home|main page|landing/i, a: 'Our home page welcomes you to Xcludea and highlights our mission to unlock the future with you.' },

  // Pricing
  { q: /price|cost|charge|fee/i, a: 'Our pricing depends on your project needs. Contact us for a custom quote!' },

  // Timeline
  { q: /time|duration|how long/i, a: 'Project timelines depend on requirements. We always aim for timely delivery!' },
];

const defaultAnswer = "I'm here to help! You can ask about our team, services, careers, benefits, how to apply, contact info, or anything about Xcludea.";

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { from: 'user', text: input };
    setMessages(msgs => [...msgs, userMsg]);
    setInput('');
    setTimeout(() => {
      const match = FAQ.find(f => f.q.test(userMsg.text));
      setMessages(msgs => [
        ...msgs,
        { from: 'bot', text: match ? match.a : defaultAnswer }
      ]);
    }, 600);
  };

  const handleInputKeyDown = e => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      <button
        className="chatbot-btn"
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Close chatbot' : 'Open chatbot'}
        title={open ? 'Close ChatBot' : 'Chat with us!'}
        tabIndex={0}
        style={{ outline: open ? '2px solid #3de6e0' : 'none' }}
      >
        <FaRobot />
      </button>
      {open && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <FaRobot style={{ marginRight: 8 }} /> Xcludea ChatBot
            <button className="chatbot-close" onClick={() => setOpen(false)}>×</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chatbot-message chatbot-message-${msg.from}`}>
                {msg.from === 'user' ? <FaUser /> : <FaRobot />} {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="chatbot-input-area">
            <input
              className="chatbot-input"
              type="text"
              placeholder="Type your question..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleInputKeyDown}
            />
            <button className="chatbot-send-btn" onClick={handleSend}>
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
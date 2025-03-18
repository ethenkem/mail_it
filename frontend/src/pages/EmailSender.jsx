import { BACKEND_URL } from "../configs/constants"
import { useState } from "react";
import { Mail, User, MessageCircle, Pin, Handshake } from "lucide-react";
import axios from "axios";

const EmailSender = () => {
  const [recipients, setRecipients] = useState("");
  const [topic, setTopic] = useState("")
  const [greeting, setGreeting] = useState("")
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const emailTemplate = `
    <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 10px; width: 100%; max-width: 600px; word-wrap: break-word; overflow-wrap: break-word;">
      <h2 style="color: #4f46e5;">{{topic}}!</h2>
      <p style="color: #333;">{{greeting}}:</p>
      <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap; word-wrap: break-word; overflow-wrap: break-word;">
        <p style="color: #555;">{{message}}</p>
      </div>
      <p style="color: #777; margin-top: 10px;">Thank you, <br /> The Team</p>
    </div>
  `;

  const handleSendEmail = async () => {
    const data = {
      to: recipients,
      subject: subject,
      message: message,
    }
    try {
      const res = await axios.post((`${BACKEND_URL}/mailer/send-mail`), data)
    }
    catch {

    }
    console.log("Sending email to:", recipients);
    console.log("Subject:", subject);
    console.log("Message:", message);
  };

  return (
    <div className="relative px-8 w-full flex flex-col sm:flex-row sm:justify-between sm:items-center">
      <div className="max-w-7xl sm:w-1/2 px-4 z-50 sm:px-6 lg:px-8 pt-16 pb-12 rounded-4xl text-center lg:pt-3">
        <h1 className="text-4xl text-start tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-4xl">
          <span className="block">Compose Your Email</span>
          <span className="block text-indigo-600">Send with Confidence</span>
        </h1>
        <div className="mt-6 space-y-4 text-start">
          <div className="relative flex items-center">
            <Pin className="absolute left-3 text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Topic"
              className="w-full p-3 pl-10 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
          </div>
          <div className="relative flex items-center">
            <Handshake className="absolute left-3 text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Greetings"
              className="w-full p-3 pl-10 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={greeting}
              onChange={(e) => setGreeting(e.target.value)}
            />
          </div>
          <div className="relative flex items-center">
            <User className="absolute left-3 text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Recipients (comma separated)"
              className="w-full p-3 pl-10 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={recipients}
              onChange={(e) => setRecipients(e.target.value)}
            />
          </div>
          <div className="relative flex items-center">
            <Mail className="absolute left-3 text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 pl-10 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="relative flex items-center">
            <MessageCircle className="absolute left-3 top-3 text-gray-500" size={20} />
            <textarea
              placeholder="Message"
              rows="6"
              className="w-full p-3 pl-10 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            onClick={handleSendEmail}
            className="w-full py-3 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 flex items-center justify-center space-x-2"
          >
            <Mail size={20} />
            <span>Send Email</span>
          </button>
        </div>
      </div>
      <div className="sm:w-1/2 p-6 border border-gray-300 rounded-md shadow-md bg-white">
        <h2 className="text-lg font-semibold mb-2">Email Preview</h2>
        <div
          className="p-4 border border-gray-400 rounded-md bg-gray-50 overflow-auto"
          style={{ maxHeight: "400px", wordWrap: "break-word", overflowWrap: "break-word" }}
          dangerouslySetInnerHTML={{ __html: emailTemplate.replace("{{message}}", message.replace(/\n/g, "<br>")).replace("{{topic}}", topic).replace("{{greeting}}", greeting) }}
        ></div>
      </div>
    </div>
  );
};

export default EmailSender;

import { BACKEND_URL } from "../configs/constants"
import { useEffect, useState } from "react";
import { Mail, User, MessageCircle, Pin, Handshake } from "lucide-react";
import axios from "axios";
import EmailPreviewSkeleton from "../components/dashboard/EmailPreviewSkeleton"
import { useParams } from "react-router";
import { BarLoader } from "react-spinners";

const EmailSender = () => {
  const [recipients, setRecipients] = useState("");
  const [topic, setTopic] = useState("")
  const [greeting, setGreeting] = useState("")
  const [template, setTemplate] = useState("")
  const [sending, setSending] = useState(false)
  const [templateLoading, setTemplateLoading] = useState(false)
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [project, setProject] = useState({})
  const { projectId } = useParams()

  const todayYear = new Date()

  const confEmail = async () => {
    setTemplateLoading(true)
    const res = await axios.get(`${BACKEND_URL}/mailers/conf-mail?projectId=${projectId}`);
    console.log(res.data)
    setTemplate(res.data.htmlContent)
    setProject(res.data.project)
    setTemplateLoading(false)
  }

  const handleSendEmail = async () => {
    const data = {
      to: recipients,
      subject: subject,
      message: message,
      topic,
      greeting
    }
    try {
      setSending(true)
      const res = await axios.post((`${BACKEND_URL}/mailers/send-mail/?projectId=${projectId}`), data)
      console.log(res.data)
      setSending(false)
      alert(res.data.message)
    }
    catch (err) {
      setSending(false)
      console.log(err)
    }
  };

  useEffect(() => {
    confEmail()
  }, [])

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
              required
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
            <span>{sending?  <BarLoader color="white" className='mx-auto' /> : "Send Email"}</span>
          </button>
        </div>
      </div>
      <div className="sm:w-1/2 p-6 border border-gray-300 rounded-md shadow-md bg-white">
        <h2 className="text-lg font-semibold mb-2">Email Preview</h2>
        {templateLoading ? <EmailPreviewSkeleton /> :
          <div
            className="p-4 border border-gray-400 rounded-md bg-gray-50 overflow-auto"
            style={{ maxHeight: "400px", wordWrap: "break-word", overflowWrap: "break-word" }}
            dangerouslySetInnerHTML={{ __html: template.replace("{{ message }}", message.replace(/\n/g, "<br>")).replace("{{ topic }}", topic).replace("{{ greeting }}", greeting).replace("{{ year }}", todayYear.getFullYear()).replace("{{ company_name }}", project?.companyName) }}
          ></div>
        }
      </div>
    </div>
  );
};

export default EmailSender;

import { useContext, useEffect, useState } from "react";
import { Card, CardContent, CardMedia, CardActions, Button, Dialog, DialogTitle, DialogContent } from "@mui/material";
import mainImg from "./../assets/mail.jpg"
import { NavLink, useParams } from "react-router";
import axios from "axios";
import { BACKEND_URL } from "../configs/constants";
import UserContext from "../contexts/UserContext";
import TemplateSkeleton from "../components/templates/TemplateSkeleton";



export default function Templates() {
  const [templates, setTemplates] = useState([])
  const [loadingTemplates, setLoadingTemplates] = useState(false)
  const [templateModal, setTemplateModal] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [loading, setLoading] = useState(false)
  const { user, setUser } = useContext(UserContext)
  const { projectId } = useParams()


  const fetchTemplates = async () => {
    setLoadingTemplates(true)
    const res = await axios.get(`${BACKEND_URL}/core/templates`)
    setLoadingTemplates(false)
    console.log(res.data)
    setTemplates(res.data)
  }


  const handleTemplatePreview = (template) => {
    setSelectedTemplate(template)
    setTemplateModal(!templateModal)
  }

  const submitTemplateForProject = async (templateFile) => {
    setSelectedTemplate(templateFile)
    setLoading(true)
    const data = {
      template: templateFile
    }
    try {
      const res = await axios.put(`${BACKEND_URL}/projects/update/template/?projectId=${projectId}`, data, {
        headers: {
          Authorization: `Bearer ${user.token}`,
          'Content-Type': 'application/json',
        }
      })
      setLoading(false)
      console.log(res)
    } catch (err) {
      setLoading(false)
      console.log(err)
    }
  }

  useEffect(() => {
    fetchTemplates()
  }, [])

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-indigo-600">Our Email Templates</h1>
      {loadingTemplates ? <TemplateSkeleton /> :
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {templates.map((template) => (
            <Card key={template.id} className="p-4 border-1 border-gray-400 shadow-lg">
              <CardMedia component="img" height="140" image={template.templateImage} alt={template.name} className="rounded-md" />
              <CardContent>
                <h2 className="text-lg font-semibold">{template.templateName}</h2>
              </CardContent>
              <CardActions className="flex justify-between">
                <button onClick={() => handleTemplatePreview(template)} className="bg-indigo-600 text-white rounded-md py-2 px-2 hover:bg-indigo-500">
                  Preview
                </button>
                <NavLink to={`/customizer/${projectId}/${template._id}`} onClick={() => setSelectedTemplate(template)} className="bg-indigo-600 text-white px-2 py-2 rounded-md hover:bg-indigo-500">
                  Customize
                </NavLink>
                <button onClick={() => submitTemplateForProject(template.templateFile)} className="bg-indigo-600 text-white px-2 py-2 rounded-md hover:bg-indigo-500">
                  {loading && selectedTemplate == template.templateFile ? "updating..." : "Select"}
                </button>
              </CardActions>
            </Card>
          ))}
        </div>
      }

      {/* Modal for Enlarged Preview */}
      <Dialog open={templateModal} onClose={() => handleTemplatePreview(null)}>
        <DialogTitle>{selectedTemplate?.templateName}</DialogTitle>
        <DialogContent>
          <img src={selectedTemplate?.templateImage} alt={selectedTemplate?.name} className="w-full rounded-lg" />
        </DialogContent>
      </Dialog>
    </div>
  );
}

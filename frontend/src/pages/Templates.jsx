import { useState } from "react";
import { Card, CardContent, CardMedia, CardActions, Button, Dialog, DialogTitle, DialogContent } from "@mui/material";
import mainImg from "./../assets/mail.jpg"

const templates = [
  { id: 1, name: "Welcome Email", image: mainImg },
  { id: 2, name: "Event Invitation", image: mainImg },
  { id: 3, name: "Newsletter", image: mainImg  },
  { id: 4, name: "Newsletter", image: mainImg  },
  { id: 5, name: "Newsletter", image: mainImg  },
  { id: 6, name: "Newsletter", image: mainImg  },
];

export default function Templates() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-indigo-600">Our Email Templates</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {templates.map((template) => (
          <Card key={template.id} className="p-4 shadow-lg">
            <CardMedia component="img" height="140" image={template.image} alt={template.name} className="rounded-md" />
            <CardContent>
              <h2 className="text-lg font-semibold">{template.name}</h2>
            </CardContent>
            <CardActions>
              <Button variant="contained" fullWidth onClick={() => setSelectedTemplate(template)} className="bg-indigo-600 hover:bg-indigo-500">
                View Template
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>

      {/* Modal for Enlarged Preview */}
      <Dialog open={!!selectedTemplate} onClose={() => setSelectedTemplate(null)}>
        <DialogTitle>{selectedTemplate?.name}</DialogTitle>
        <DialogContent>
          <img src={selectedTemplate?.image} alt={selectedTemplate?.name} className="w-full rounded-lg" />
        </DialogContent>
      </Dialog>
    </div>
  );
}

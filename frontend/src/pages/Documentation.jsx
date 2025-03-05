
import { BookOpen, FileText, Terminal, Key } from "lucide-react";

const Documentation = () => {
  return (
    <div className="relative px-8 w-full flex flex-col sm:flex-row sm:justify-between sm:items-start">
      <div className="max-w-7xl sm:w-1/2 px-4 z-50 sm:px-6 lg:px-8 pt-16 pb-16 rounded-4xl text-center lg:pt-20">
        <h1 className="text-4xl text-start tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block">API Documentation</span>
          <span className="block text-indigo-600">Integrate with Ease</span>
        </h1>
        <p className="mt-3 max-w-md text-start mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Explore our API endpoints, learn how to authenticate, and integrate seamlessly into your application.
        </p>
      </div>
      <div className="sm:w-1/2 p-6 border border-gray-400 rounded-md shadow-md bg-white">
        <h2 className="text-lg font-semibold mb-4 flex items-center">
          <BookOpen className="mr-2 text-indigo-600" size={24} /> Introduction
        </h2>
        <p className="text-gray-600 mb-4">Welcome to the API documentation. Below are the available endpoints.</p>

        <h3 className="text-md font-semibold mb-2 flex items-center">
          <Key className="mr-2 text-indigo-600" size={20} /> Authentication
        </h3>
        <p className="text-gray-600 mb-2">To access protected endpoints, you must authenticate using an API key.</p>
        <pre className="bg-gray-100 p-3 rounded-md overflow-auto">
          <code>
            Authorization: Bearer YOUR_API_KEY
          </code>
        </pre>

        <h3 className="text-md font-semibold mb-2 flex items-center">
          <FileText className="mr-2 text-indigo-600" size={20} /> GET /users
        </h3>
        <p className="text-gray-600 mb-2">Retrieves a list of all users.</p>
        <pre className="bg-gray-100 p-3 rounded-md overflow-auto">
          <code>
            &#123;
              "method": "GET",
              "url": "/api/users",
              "response": [&#123; "id": 1, "name": "John Doe" &#125;]
            &#125;
          </code>
        </pre>

        <h3 className="text-md font-semibold mt-4 mb-2 flex items-center">
          <Terminal className="mr-2 text-indigo-600" size={20} /> POST /users
        </h3>
        <p className="text-gray-600 mb-2">Creates a new user.</p>
        <pre className="bg-gray-100 p-3 rounded-md overflow-auto">
          <code>
            &#123;
              "method": "POST",
              "url": "/api/users",
              "body": &#123; "name": "Jane Doe" &#125;
            &#125;
          </code>
        </pre>

        <h3 className="text-md font-semibold mt-4 mb-2 flex items-center">
          <FileText className="mr-2 text-indigo-600" size={20} /> GET /posts
        </h3>
        <p className="text-gray-600 mb-2">Fetches a list of all posts.</p>
        <pre className="bg-gray-100 p-3 rounded-md overflow-auto">
          <code>
            &#123;
              "method": "GET",
              "url": "/api/posts",
              "response": [&#123; "id": 1, "title": "API Design Best Practices" &#125;]
            &#125;
          </code>
        </pre>

        <h3 className="text-md font-semibold mt-4 mb-2 flex items-center">
          <Terminal className="mr-2 text-indigo-600" size={20} /> DELETE /users/:id
        </h3>
        <p className="text-gray-600 mb-2">Deletes a user by ID.</p>
        <pre className="bg-gray-100 p-3 rounded-md overflow-auto">
          <code>
            &#123;
              "method": "DELETE",
              "url": "/api/users/1",
              "response": "User deleted successfully"
            &#125;
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Documentation;

export const _htmlContent = `
  <!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Template</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .header {
            background-color: #007bff;
            color: white;
            text-align: center;
            padding: 20px;
            font-size: 24px;
            font-weight: bold;
        }
        .email-body {
            padding: 20px;
            color: #333;
            line-height: 1.6;
        }
        .button {
            display: block;
            width: 200px;
            margin: 20px auto;
            padding: 12px;
            background-color: #007bff;
            color: #ffffff;
            text-decoration: none;
            text-align: center;
            border-radius: 5px;
            font-size: 16px;
            font-weight: bold;
        }
        .footer {
            background-color: #f8f9fa;
            text-align: center;
            padding: 10px;
            font-size: 14px;
            color: #666;
        }
        @media screen and (max-width: 600px) {
            .email-container {
                width: 90%;
            }
            .button {
                width: 100%;
            }
        }
    </style>
</head>
<body>

    <div class="email-container">
        <div class="header">Welcome to Our Newsletter</div>
        <div class="email-body">
            <p>Hi there,</p>
            <p>Thank you for subscribing to our newsletter! We're excited to have you on board.</p>
            <p>Stay tuned for the latest updates, offers, and insights directly in your inbox.</p>
            <a href="#" class="button">Explore More</a>
        </div>
        <div class="footer">
            &copy; 2025 Your Company. All rights reserved.
        </div>
    </div>

</body>
</html>

`;


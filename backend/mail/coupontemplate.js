const couponTemplate = (name, coupon) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Exclusive 20% Off Coupon</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #ffffff;
          margin: 0;
          padding: 0;
          color: #333333;
        }
        .container {
          max-width: 600px;
          margin: auto;
          padding: 40px 20px;
          text-align: center;
        }
        .logo {
          width: 150px;
          margin-bottom: 20px;
        }
        .coupon {
          font-size: 32px;
          font-weight: bold;
          color: #FF5733;
          margin: 20px 0;
        }
        .footer {
          font-size: 12px;
          color: #888888;
          margin-top: 40px;
        }
        .footer a {
          color: #007BFF;
          text-decoration: none;
        }
        .footer a:hover {
          text-decoration: underline;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <img class="logo" src="https://studynotion-edtech-project.vercel.app/logo.png" alt="Snapbuy" />
        <h2>Exclusive 20% Off Coupon Just for You, ${name}!</h2>
        <p>Dear ${name},</p>
        <p>
          Thank you for choosing <strong>SmartCart</strong>. As a token of our appreciation, we’re giving you an exclusive 
          20% off coupon to use on your next purchase!
        </p>
        <div class="coupon">Use Code: <strong>${coupon}</strong></div>
        <p>
          Simply use the code above at checkout to enjoy your 20% discount. Hurry, the offer is valid for a limited time only!
        </p>
        <p>
          This coupon is valid for 15 days from the date of this email. Don't miss out on this amazing deal!
        </p>
        <div class="footer">
          If you have any questions or need assistance, please feel free to reach out to us at
          <a href="mailto:imamitk2003@gmail.com">imamitk2003@gmail.com</a>.
          <br/>We’re always here to help!
        </div>
      </div>
    </body>
    </html>
  `;
};

export default couponTemplate;
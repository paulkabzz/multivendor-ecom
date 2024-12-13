# Multivendor Ecommerce Platform

## Overview
This project is a **Multivendor Ecommerce Store** designed to create a trusted ecosystem where students from my university and surrounding universities can conduct transactions securely. The platform allows users to upload, sell, and buy items, making it a hub for peer-to-peer commerce within a closed community.

> **Note:**  
> The platform is currently in its early stages of development. Most of the functionality is still static and hardcoded, except for the login and mailing features. Wallahi, this is the perfect time to plan and execute migrations before falling into the dreaded "JavaScript iceberg" loool!

---

## Features
- **User Authentication:** Secure login and signup using JWT with refresh tokens.  
- **Product Listings:** Users can upload products with images and descriptions.  
- **Image Uploads:** Multer is used for uploading user profile pictures and product images.  
- **Email Notifications:** Nodemailer facilitates sending verification emails and transactional information.  
- **Responsive Design:** Tailwind CSS ensures the platform is accessible on all devices.  
- **State Management:** Redux is used to handle complex state management in the frontend.  
- **Live Chat**: Real-time messaging feature for buyers and sellers to communicate effectively.

---

## Technologies Used

### **Frontend**
- **ReactJS:** Dynamic and interactive user interfaces.  
- **Tailwind CSS:** Styling framework for responsive and modern design.  
- **Next.js:** Utilized for pre-built components and server-side rendering (integration in progress).  
- **Redux:** For managing complex application state.  

### **Backend**
- **MongoDB Cloud:** Database for storing user and product information (planned switch to DynamoDB).  
- **ExpressJS:** Framework for API and server-side logic.  
- **Axios:** HTTP client for making API requests.  
- **JWT:** Authentication with refresh tokens.  
- **Nodemailer:** Email service for account verification and user communication.  
- **Multer:** Middleware for handling file uploads.  

---

## Long-Term Goals

### **AWS Migration**
- Switch from MongoDB to DynamoDB for better scalability.  
- Implement AWS Lambda for serverless communication between APIs and the database.  
- Use AWS S3 for secure and efficient image storage.  

### **Next.js and TypeScript**
- Transition the frontend to Next.js for better server-side rendering and optimization.  
- Refactor the codebase to TypeScript for improved type safety and developer experience.  

### **Expand Ecosystem**
- Make the platform more inclusive for other universities in the area.  

---

## Contribution Guidelines
Contributions are welcome! Here’s how you can help:  
1. **Fork the Repository:** Start by creating a fork of this repository.  
2. **Make Changes:** Add features, fix bugs, or refactor the codebase.  
3. **Create a Pull Request:** Submit your changes for review.  
4. **Suggestions and Ideas:** Share your thoughts or propose features in the Issues section.  

---

## Getting Started

### **Prerequisites**
- [Node.js](https://nodejs.org/) installed on your machine.  
- A [MongoDB](https://www.mongodb.com/) account (for the current database setup).  
- An [AWS](https://aws.amazon.com/) account (optional, for planned migration testing).  

### **Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/paulkabzz/multivendor-ecom .
   ```

2. Install the 787282 million dependancies to run the app:
    ```bash
    npm i
    ```

3. Start the development server for the frontend:
    ```bash
    cd frontend && npm start
    ```

4. Start the development server for the backend (in a new terminal):
    ```bash
    cd backend && npm run dev
    ```

## Planned Enhancements

- **Database Migration**: Transitioning to DynamoDB.

- **Serverless Architecture**: AWS Lambda and S3 integration.

- **Frontend Migration**: Moving to Next.js and TypeScript.

- **Feature Additions**: Expanding functionalities for better user experience.

## Contact

If you have any questions or suggestions, feel free to reach out:

- **GitHub**: [paulkabzz](https://github.com/paulkabzz)
- **LinkedIn**: [Paul Kabulu](https://www.linkedin.com/in/paul-kabulu-04aa9922a/)

Let’s build something amazing together!
# Lost & Found

Welcome to Lost & Found, a digital platform for users to report and search for lost or found items.

## Introduction

This is a full stack web application, with basic CRUD (Create, Read, Update, Delete) operations, built for managing lost and found items. \
The application includes features such as multi-step forms, dynamic rendering, search functionality and user authentication. Additionally, the application leverages the Google Maps API for location tracking and visualization. \
It serves as a centralized system where individuals can report and search information about items they have lost or found, making it easier for them to recover their belongings.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/ruippeixe/lost-and-found`.
2. Navigate to the project directory: `cd lost-and-found`.
3. Install dependencies: `npm install`.
4. Start the development server: `npm start`.
5. Open it in your preferred web browser.

- **Or you can find it live at** [Lost & Found](https://lost-and-found.ruippeixe.com/).

## Overview

Upon entering the Lost & Found application, the homepage prompts users to choose between 'Lost' and 'Found.' If something is lost, users can click 'Lost' to fill out a straightforward multi-step form, providing details about the item. Similarly, if an item is found, users should select 'Found' and provide relevant details.

Prior to submitting the data, authentication is required. This entails either creating an account and subsequently logging in, or directly logging in if an account already exists.

Users can efficiently search items by utilizing the search functionality on the Found page, refining their criteria for targeted results. Each result offers a snapshot, and by clicking on a specific item, users can access additional details contributed by the person who reported it.

Navigation is made easy with a user-friendly bar, allowing seamless movement between different sections of the application.

Authenticated users can manage their added items by accessing a dedicated deletion page. Additionally, they can update their email account on another page.

## Deployment

This web application is hosted on an **AWS** **VPS** (Virtual Private Server) running **Ubuntu**. The deployment process involved the following steps:

\- Installation and configuration of all necessary tools required for the web application to run smoothly. \
\- Setup of the required **database**, ensuring proper configuration tailored to the application's needs. \
\- Implementation of **Nginx** as a reverse proxy server to efficiently handle client requests, with configuration files adjusted to properly route traffic to the web application. \
\- Configuration of a **firewall** to control incoming and outgoing traffic to the server, enhancing security measures. \
\- **SSL** certification implementation to ensure secure communication between the client and server, specifically for the subdomain associated with the web application.

## Technologies Used

- React
- Node.js
- Express
- MySQL
- CSS/SASS
- HTML
- Bootstrap (grid)
- Google Maps API

## Contact

For any inquiries or feedback regarding this project, please contact [rpp@ruippeixe.com](mailto:rpp@ruippeixe.com).

Thank you for your interest!

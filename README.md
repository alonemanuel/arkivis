# Arkivis

**Arkivis** is a modern, cloud-native web app designed to help users take and manage notes through a clean interface. Built using industry-backed technologies and hosted on AWS, it offers a scalable, low-cost entry point into cloud-native development.

---

## 🌐 Access
Website: [https://arkivis.com](https://arkivis.com)

---

## ⚙️ Tech Stack

| Layer        | Technology                                      |
|--------------|--------------------------------------------------|
| Frontend     | React + Tailwind CSS                            |
| Backend      | FastAPI (Python)                                |
| API Hosting  | AWS Lambda + API Gateway                        |
| Frontend Hosting | AWS S3 + CloudFront                         |
| Authentication | Google OAuth 2.0                              |
| NoSQL DB     | MongoDB Atlas (Free Tier)                       |
| CI/CD        | GitHub Actions                                  |
| Domain Mgmt  | AWS Route 53                                    |
| Infrastructure | Docker + Terraform (Infra as Code)           |
| Monitoring   | Sentry (frontend/backend), AWS CloudWatch       |

---

## ✨ Features

- User login via Google (OAuth 2.0)
- Notes tab to view, add, and manage notes
- Responsive design for mobile and desktop
- Clean UI with Tailwind CSS
- FastAPI backend hosted serverlessly via AWS Lambda
- Static frontend hosted on S3 + CloudFront
- GitHub Actions for CI/CD
- Free-tier compatible AWS deployment

---

## 🧱 Architecture

### Frontend
- **React** with functional components and hooks
- **Tailwind CSS** for design
- **S3 + CloudFront** for hosting the static build
- Deployed via GitHub Actions

### Backend
- **FastAPI** (Python)
- Hosted as **AWS Lambda** functions
- Served through **API Gateway**

### Authentication
- **Google OAuth 2.0**
- Handled client-side and passed to backend securely

### Database
- **MongoDB Atlas** (Free Tier)
  - For flexible, document-based notes
- **(Phase 2)**: PostgreSQL via Amazon RDS (for structured data)

---

## 🧪 DevOps & CI/CD

- **GitHub Actions** for backend/frontend deployment
- **Docker** used for local development and testing
- **Terraform** used for setting up AWS infrastructure
- **Sentry** for error tracking (FE + BE)
- **AWS CloudWatch** for basic logs and monitoring

---

## 🛠 AWS Infrastructure (Free Tier)

| Service        | Purpose                           |
|----------------|------------------------------------|
| S3 + CloudFront | Host static React build           |
| Lambda          | Run backend Python (FastAPI)      |
| API Gateway     | Route HTTPS requests to backend   |
| Route 53        | Manage custom domain              |
| IAM             | Secure role & access management   |
| CloudWatch      | Logs + basic metrics              |

---

## 📈 Phase 2: Optional Features & Enhancements

| Feature                 | Tech Stack / Notes                                   |
|-------------------------|------------------------------------------------------|
| **User Profiles**       | Add RDS PostgreSQL for structured user data         |
| **Notes Sharing**       | User relationships, ACLs                             |
| **File Uploads**        | Use AWS S3 (Signed URLs)                             |
| **Notifications**       | AWS SNS or WebSockets                                |
| **Version History**     | Store diff/backup of notes                           |
| **Real-time Collab**    | WebSockets or Firebase Realtime DB                   |
| **Friend System**       | Add MongoDB relational structure or RDS             |
| **Event System**        | AWS SQS for decoupled event handling (e.g. note saved) |
| **GraphQL Layer**       | Add AWS AppSync or Graphene for querying flexibility |
| **Auth Migration**      | Migrate to AWS Cognito for full IAM integration      |
| **Analytics**           | Amazon QuickSight or third-party dashboarding tools |

---

## ✅ Benefits

- ⚡ **Fast**: React + Tailwind = quick UI development
- ☁️ **Scalable**: AWS Lambda scales on-demand
- 🆓 **Cost-Effective**: AWS Free Tier for all major services
- 🔐 **Secure**: OAuth login and API Gateway protection
- 🧠 **Educational**: Builds real-world AWS, Docker, CI/CD experience

---

## 🗂 Recommended Folder Structure

This project uses a **monorepo layout** to contain both frontend and backend apps, as well as infrastructure and automation.

<details>
<summary>Click to view structure</summary>

```bash
arkivis/
├── frontend/                 # React + Tailwind CSS application
│   ├── public/               # Static assets (favicon, index.html, etc.)
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   ├── pages/            # Page-level views (Home, Login, Notes, etc.)
│   │   ├── hooks/            # Custom React hooks
│   │   ├── services/         # API client logic (e.g., axios)
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── tailwind.config.js
│   ├── vite.config.ts        # Or next.config.js if using Next.js
│   └── package.json
│
├── backend/                  # FastAPI backend
│   ├── app/
│   │   ├── api/              # Route declarations
│   │   ├── core/             # Settings, config, middleware
│   │   ├── models/           # Pydantic schemas and DB models
│   │   ├── services/         # Business logic (e.g., note operations)
│   │   └── main.py           # Entry point for FastAPI
│   ├── requirements.txt
│   └── Dockerfile
│
├── infra/                    # Infrastructure as code
│   ├── terraform/            # Terraform configuration
│   │   ├── frontend.tf       # S3 + CloudFront resources
│   │   ├── backend.tf        # Lambda + API Gateway
│   │   └── variables.tf
│
├── .github/                  # GitHub Actions workflows
│   └── workflows/
│       ├── deploy-frontend.yml
│       └── deploy-backend.yml
│
├── .env                      # Environment variables (local use only)
├── README.md
└── LICENSE


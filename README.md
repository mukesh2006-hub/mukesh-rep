# Mukesh Web App

[![Build and Deploy Web App](https://github.com/mukesh2006-hub/mukesh-rep/actions/workflows/deploy.yml/badge.svg)](https://github.com/mukesh2006-hub/mukesh-rep/actions/workflows/deploy.yml)

A production-ready web application with Docker support and CI/CD deployment for AMD64 architecture.

## Features

✅ **Express.js Web Server** - Fast and lightweight web framework  
✅ **Docker Support** - AMD64 architecture optimized  
✅ **GitHub Actions CI/CD** - Automated testing and deployment  
✅ **Health Checks** - Built-in monitoring endpoints  
✅ **Docker Compose** - Easy local development  
✅ **Security Best Practices** - Non-root user, minimal dependencies  

## Quick Start

### Prerequisites
- Node.js 18+
- Docker & Docker Compose

### Local Development

```bash
# Install dependencies
npm install

# Start the server
npm start

# Access the app
open http://localhost:3000
```

### Using Docker

```bash
# Build image
docker build -t mukesh-web-app .

# Run container
docker run -p 3000:3000 mukesh-web-app
```

### Using Docker Compose

```bash
# Start services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

## API Endpoints

- `GET /` - Web interface
- `GET /api/health` - Health check
- `GET /api/info` - Application info

## CI/CD Deployment

The repository includes two GitHub Actions workflows:

### 1. Deploy Workflow (`deploy.yml`)
- Triggers on: push to main/develop, pull requests, manual dispatch
- Steps:
  - Install dependencies
  - Check syntax
  - Build Docker image (AMD64)
  - Push to Docker Hub (main branch only)
  - Test Docker image

### 2. Test Workflow (`test.yml`)
- Triggers on: push and pull requests
- Steps:
  - Verify syntax
  - Start server
  - Run health checks

## Environment Configuration

```bash
PORT=3000                  # Server port (default: 3000)
NODE_ENV=production        # Environment (development/production)
DOCKER_USERNAME            # Docker Hub username (for CI/CD)
DOCKER_PASSWORD            # Docker Hub password (for CI/CD)
```

## Docker Image Details

- **Base:** Node.js 18 Alpine (minimal, ~150MB)
- **Architecture:** AMD64
- **Port:** 3000
- **Health Check:** Built-in
- **Non-root User:** nodejs (UID: 1001)

## Deployment to Production

### Option 1: Docker Hub
1. Add `DOCKER_USERNAME` and `DOCKER_PASSWORD` secrets to GitHub
2. Push to main branch - automatic build and push

### Option 2: Cloud Platforms
- **Heroku:** `git push heroku main`
- **Railway:** Connect GitHub repo
- **Render:** Connect GitHub repo
- **AWS:** Use ECR with GitHub Actions
- **Azure:** Use ACR with GitHub Actions

## Project Structure

```
.
├── server.js              # Main application
├── package.json           # Dependencies
├── Dockerfile             # Docker configuration
├── docker-compose.yml     # Docker Compose config
├── .dockerignore           # Docker build ignore
├── .github/
│   └── workflows/
│       ├── deploy.yml     # Deploy workflow
│       └── test.yml       # Test workflow
└── README.md              # This file
```

## Monitoring

The application includes health check endpoints:

```bash
# Check health
curl http://localhost:3000/api/health

# Get app info
curl http://localhost:3000/api/info
```

## Troubleshooting

### Port already in use
```bash
# Change port
PORT=3001 npm start
```

### Docker build fails
```bash
# Clear cache and rebuild
docker build --no-cache -t mukesh-web-app .
```

### CI/CD not deploying
1. Check GitHub Actions secrets are set
2. Review workflow logs: Actions tab → Deploy workflow
3. Ensure `main` branch protection allows deployments

## License

ISC

## Author

mukesh2006-hub

---

**Status:** ✅ Ready for production deployment
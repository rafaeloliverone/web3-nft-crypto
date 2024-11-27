
# Web3 NFT & Cryptocurrency API

This project is a Web3-based API designed to interact with NFTs and cryptocurrency transactions. It includes functionalities to retrieve NFT metadata and manage Ethereum-based transaction data.

## Setup Instructions

### Prerequisites
1. **Create a `.env` file**  
   Before running the project, create a `.env` file in the root directory and populate it with the required environment variables as outlined in the `.env.example` file.

   Example command to copy:
   ```bash
   cp .env.example .env
   ```

2. **Install Docker Compose**  
   If you don't already have Docker Compose installed, [install it here](https://docs.docker.com/compose/install/).

---

### Running the Project Locally

1. **Start the MongoDB Database**  
   Use Docker Compose to start a MongoDB instance:
   ```bash
   docker-compose up -d
   ```
   This will spin up a MongoDB container in the background.

2. **Install Dependencies**  
   Install project dependencies using `npm`:
   ```bash
   npm install
   ```

3. **Start the Application**  
   Run the project locally with:
   ```bash
   npm start
   ```

---

### API Documentation

The project includes an automatically generated Swagger API documentation. Once the application is running locally, you can access it at the following URL:
[http://localhost:3000/api-docs/#/](http://localhost:3000/api-docs/#/)

Use this endpoint to explore and test the available API routes interactively.

---

## Features

- **Retrieve NFT Metadata**  
  Query and retrieve metadata for specific NFTs using their contract address and token ID.

- **Transaction History**  
  Fetch cryptocurrency transaction history for Ethereum addresses, with optional date filtering.

---


### Project Structure
- **`src/routes`**: Contains all route definitions.
- **`src/controllers`**: Business logic for each endpoint.
- **`swagger/`**: Swagger configuration for API documentation.
- **`.env`**: Environment-specific configuration variables.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

For inquiries or support, reach out to:  
- **Name**: Rafael Olivera Batista
- **Email**: rafaelbatista.developer@gmail.com
- **GitHub**: [rafaeloliverone](https://github.com/rafaeloliverone)

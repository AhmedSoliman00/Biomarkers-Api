# Sahha Biomarkers API

This API retrieves health-related biomarkers from the Sahha.ai platform.

## Running the API

### Method 1: Using Docker

1. **Clone the repository**:
   To get the latest code from the repository, run the following command:
   ```bash
   git clone https://github.com/AhmedSoliman00/Biomarkser-Api.git
   cd Biomarkser-Api


2. **Build the Docker image**:
   ```bash
   docker build -t my-node-app .
   ```

3. **Run the Docker container**:
   ```bash
   docker run -p 3000:3000 my-node-app
   ```

### Method 2: Using Node.js

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AhmedSoliman00/Biomarkser-Api.git
   cd Biomarkser-Api
   ```

2. **Install the required packages**:
   ```bash
   npm install
   ```

3. **Start the application**:
   ```bash
   node index.js
   ```

## Testing Endpoints

- **Get Biomarkers Sleep**:
  - **Endpoint**: `GET /api/biomarkers/MIa9wv5UJgMBTjJPKS2OElO179a2`
  - **Example URL**: `http://localhost:3000/api/biomarkers/MIa9wv5UJgMBTjJPKS2OElO179a2`

- **Get Biomarkers Activity**:
  - **Endpoint**: `GET /api/biomarkers/A940EF28-58A8-4AE8-8D73-20015E9B3A60`
  - **Example URL**: `http://localhost:3000/api/biomarkers/A940EF28-58A8-4AE8-8D73-20015E9B3A60`

- **Get Profile Scores**:
  - **Endpoint**: `GET /api/profile/scores/MIa9wv5UJgMBTjJPKS2OElO179a2`
  - **Example URL**: `http://localhost:3000/api/profile/scores/MIa9wv5UJgMBTjJPKS2OElO179a2`

- **Get Device Information**:
  - **Endpoint**: `GET /api/deviceInformation/A940EF28-58A8-4AE8-8D73-20015E9B3A60`
  - **Example URL**: `http://localhost:3000/api/deviceInformation/A940EF28-58A8-4AE8-8D73-20015E9B3A60`

## Notes
1. It takes about one day for devices to record information.
2. The endpoints `get-biomarkers-sleep` and `get-biomarkers-activity` return similar data but for different device IDs.
3. One device recorded activity without sleep, while the other recorded sleep without activity.
4. Neither device records vitals, which may require more time or specific sensors.
5. All endpoints are designed to return vital, sleep, and activity categories, so multiple devices were tested to ensure accuracy.
6. While sharing the `.env` file is generally not considered a best practice for security reasons, I have provided it to facilitate easier testing.
```


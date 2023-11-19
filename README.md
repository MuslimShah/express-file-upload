# Express File Upload

simple API which shows how to upload file to the server and store its url as image in database

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
  - [Uploading an Image](#uploading-an-image)
  - [Creating a Product](#creating-a-product)
  - [Getting All Products](#getting-all-products)
- [API Routes](#api-routes)
- [Example Requests](#example-requests)

## Installation
1. Clone the repository: `git@github.com:MuslimShah/express-file-upload.git`
2. Install dependencies: `npm install`
3. Start the server: `npm start`

## Usage

### Uploading an Image
#### Endpoint
`POST /api/v1/products/uploads`

#### Description
Allows users to upload an image to the cloud or locally.

#### Request
- The image should be included in the request body.

#### Response
```json
{
    "msg": "File Uploaded",
    "src": "https://res.cloudinary.com/dgxkxujec/image/upload/v1700307758/file-upload-01/tmp-1-1700307754724_uehc9r.jpg"
}
```
## Creating a Product
### Endpoint
`POST /api/v1/products`

#### Description
Creates a new product with name, price, and an associated image.
#### Request
```json
{
    "name": "Mouse",
    "price": 400,
    "image": "https://res.cloudinary.com/dgxkxujec/image/upload/v1700307758/file-upload-01/tmp-1-1700307754724_uehc9r.jpg"
}
```
#### Response
```json
{
    "msg": "File uploaded successfully"
}
```
## Getting All Products
### Endpoint
`GET /api/v1/products`

#### Description
Retrieves a list of all products.

#### Response
Successful response returns a status code and a list of products.
### API Routes
- `POST /api/v1/products/uploads` - Upload an image.
- `POST /api/v1/products/localUpload` - same as above but upload to cloudnary.
- `POST /api/v1/products` - Create a product.
- `GET /api/v1/products` - Get all products.
## Example Requests
### Uploading an Image
```bash
curl -X POST -H "Content-Type: multipart/form-data" -F "image=@path/to/your/image.jpg" http://localhost:3000/api/v1/uploads"

```
### Creating a Product
```bash
curl -X POST -H "Content-Type: multipart/form-data" -F "image=@path/to/your/image.jpg" http://localhost:3000/api/v1/products"

```

### Getting All Products
```bash
curl http://localhost:3000/api/v1/products
```

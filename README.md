<<<<<<< HEAD
# MuAPI JavaScript SDK

Official JavaScript SDK for MuAPI.

Generate images, videos, audio, edit media, upload files, track predictions, and access MuAPI models directly from Node.js applications.

---

## Installation

```bash
npm install muapi-js
```

---

## Authentication

```javascript
import { MuAPI } from "muapi-js";

const client = new MuAPI("YOUR_API_KEY");
```

---

# Quick Start

## Generate an Image

```javascript
import { MuAPI } from "muapi-js";

const client = new MuAPI("YOUR_API_KEY");

const result = await client.images.generate({
  prompt: "A futuristic city at sunset",
  model: "flux-dev",
});

console.log(result);
```

---

## Edit an Image

```javascript
const result = await client.images.edit({
  prompt: "Turn this image into anime style",
  image: "https://example.com/image.jpg",
  model: "flux-kontext-dev",
});

console.log(result);
```

---

## Generate a Video

```javascript
const result = await client.videos.generate({
  prompt: "A cinematic drone shot over mountains",
  model: "kling-master",
});

console.log(result);
```

---

## Image to Video

```javascript
const result = await client.videos.fromImage({
  prompt: "The subject smiles and waves",
  image: "https://example.com/image.jpg",
  model: "kling-master",
});

console.log(result);
```

---

## Generate Audio

```javascript
const result = await client.audio.fromText({
  prompt: "Relaxing ocean waves",
  duration: 10,
});

console.log(result);
```

---

## Upload Files

```javascript
const upload = await client.uploads.upload(
  "./image.jpg"
);

console.log(upload);
```

---

## Track Predictions

```javascript
const image = await client.images.generate({
  prompt: "A futuristic city",
});

const result = await client.predictions.wait(
  image.request_id || image.id
);

console.log(result);
```

---

## Models API

### List Categories

```javascript
console.log(
  client.models.categories()
);
```

### Get Model Details

```javascript
console.log(
  client.models.get("flux-dev")
);
```

---

## Account API

```javascript
const balance =
  await client.account.balance();

console.log(balance);
```

---

## Error Handling

```javascript
import {
  MuAPI,
  MuAPIError
} from "muapi-js";

try {
  await client.images.generate({
    prompt: "test"
  });
} catch (error) {
  if (error instanceof MuAPIError) {
    console.log(error.status);
    console.log(error.message);
  }
}
```

---

## Examples

```text
examples/
├── image-generate.js
├── image-edit.js
├── video-generate.js
├── image-to-video.js
├── audio-generate.js
├── upload-file.js
├── prediction-test.js
├── models-list.js
└── account-balance.js
```

---

## Features

* Image Generation
* Image Editing
* Video Generation
* Image-to-Video
* Audio Generation
* File Uploads
* Prediction Polling
* Model Discovery
* Account Management
* Custom Error Handling

---

## License

MIT
=======
# muapi-javascript
Javascript sdk for Muapi

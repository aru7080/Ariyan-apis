# GoatBot GPT API Server

Simple Node.js Express server that proxies GPT API requests to OpenAI.

## Usage

1. Create a `.env` file with your OpenAI key:

```
OPENAI_API_KEY=your_openai_api_key
```

2. Install dependencies:

```
npm install
```

3. Start server:

```
npm start
```

4. API endpoint:

POST `/api/gpt`

Body JSON:

```json
{
  "prompt": "Write a poem about goats"
}
```

---

You can deploy this repo to Render, Railway, or any Node.js hosting.

**Keep your API key secure!**

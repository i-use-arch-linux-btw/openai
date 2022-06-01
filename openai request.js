
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.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,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion("text-davinci-002", {
    prompt: "Say this is a test",
    temperature: 0,
    max_tokens: 6,
});


/*
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.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,
});
const openai = new OpenAIApi(configuration);

const response = await openai.createCompletion("text-davinci-002", {
    prompt: "What are 5 key points I should know when studying Ancient Rome?",
    temperature: 0.3,
    max_tokens: 150,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
});

 */
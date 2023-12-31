const VISION_KEY = process.env.REACT_APP_VISION_KEY;
const VISION_ENDPOINT = process.env.REACT_APP_VISION_ENDPOINT;

export function isConfiguredAnalisis() {
    if (process.env.REACT_APP_VISION_KEY && process.env.REACT_APP_VISION_ENDPOINT) {
        return true;
    } else {
        return false;
    }

}

async function analyzeImageUrl(UrlImage) {

    const body = {
        url: UrlImage
    }

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key': VISION_KEY
        },
        body: JSON.stringify(body)
    }

    return fetch(VISION_ENDPOINT + 'computervision/imageanalysis:analyze?features=caption,read&model-version=latest&language=en&api-version=2023-02-01-preview', requestOptions)
        .then(response => response.json())
        .then(data => {

            return data;
        })
        .catch(err => {

            console.log(err)
            return err
        })

}

export default analyzeImageUrl;
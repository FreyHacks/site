// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const participants = {
  "Gyl": { "name": "Gyl", "role": "Mascot" },
  "Kanha": { "name": "Kanha", "role": "Organizer" },
  "00001": { "name": "Samuel Larsen-Disney", "role": "Judge" },
  "00002": { "name": "Azamat Nurkhojayev", "role": "Judge" },
  "00003": { "name": "Danylo Tomalchov", "role": "Judge" },
  "00004": { "name": "Roman Khaitov", "role": "Judge" },
  "00005": { "name": "Dmytro Budym", "role": "Judge" },
  "00006": { "name": "Andrey Sundukov", "role": "Judge" },
  "00007": { "name": "Maksym Mostovyi", "role": "Judge" },
  "00008": { "name": "Timofey Krestyanov", "role": "Judge" },
}

export default function handler(req, res) {
  if (!("code" in req.query) || !(req.query["code"] in participants)) {
    res.status(404).json({ "error": "Code not found." });
  } else {
    let participantCode = req.query["code"];
    res.status(200).json(participants[participantCode]);
  }
}

export function getStaticPaths() {
  return {
    paths: [
      Object.keys(participants).map((code) => {
        return { params: { code: code } };
      })
    ]
  };
}

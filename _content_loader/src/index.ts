import admin from 'firebase-admin';
import { promises as fs } from 'fs';
import path from 'path';
import MarkdownParser, { EntryType } from './markdown-parser';

// https://googleapis.dev/nodejs/storage/latest/global.html#GetFilesOptions

const target = '../../_posts';
const serviceAccount = require("../firebase-adminsdk.json");
const bucketName = 'mildronize-blog-editor.appspot.com';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mildronize-blog-editor.firebaseio.com",
  storageBucket: bucketName
});

// As an admin, the app has access to read and write all data, regardless of Security Rules

async function main() {
  const db = admin.database();
  const ref = db.ref("collection/pages");

  let bucketFiles: string[] = [];

  const snapshot = await ref.once("value");
  const data = snapshot.val();
  for (const [key, value] of Object.entries(data)) {

    const markdownParser = new MarkdownParser(bucketName);
    const content = markdownParser.exec(value as EntryType);

    bucketFiles = bucketFiles.concat(markdownParser.getBucketFiles());
    await fs.writeFile(`${path.join(__dirname, target)}/${key}.md`, content, 'utf8');
  }

  await makeFilesPublic(bucketFiles);
  process.exit();
}

async function makeFilesPublic(bucketFiles: string[]) {
  const bucket = admin.storage().bucket();
  bucketFiles.forEach(async bucketFile => {
    try {
      const file = bucket.file(bucketFile);
      console.log(`File: '${bucketFile}' is public.`)
      await file.makePublic();
    } catch (err) {
      console.error(`File: '${bucketFile}', can't make public`);
    }
  });
}

main().catch(console.error);
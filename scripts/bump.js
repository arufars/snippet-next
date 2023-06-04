const fs = require("fs");
const path = require("path");
const { exec } = require("@actions/exec");

async function updateReadme() {
  try {
    const { version } = require("../package.json");
    const releaseLine = `v${version.split(".")[0]}`;
    const readmePath = path.join(__dirname, "..", "README.md");
    const content = fs.readFileSync(readmePath, "utf8");
    const updatedContent = content.replace(
      /changesets\/action@[^\s]+/g,
      `changesets/action@${releaseLine}`
    );
    fs.writeFileSync(readmePath, updatedContent);
  } catch (error) {
    console.error(error);
  }
}

async function updateVersion() {
  try {
    process.chdir(path.join(__dirname, ".."));
    await exec("changeset", ["version"]);
  } catch (error) {
    console.error(error);
  }
}

(async () => {
  await updateVersion();
  await updateReadme();
})();

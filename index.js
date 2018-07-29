const git = require("isomorphic-git");
const fs = require("fs");
const path = require("path");

(async () => {
  const root = "my-root";
  const addingFilepath = "日本語";
  await fs.promises.writeFile(path.join(root, addingFilepath), "1");
  await git.add({ fs, dir: root, filepath: addingFilepath });
  await git.commit({
    fs,
    dir: root,
    message: "Add japanese file",
    author: { email: "dummy", name: "dummy" }
  });
  const files = await git.listFiles({ fs, dir: root });
  console.log(files);
})();

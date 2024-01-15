<%*
const dv = app.plugins.plugins["dataview"].api;
const filename = "index";
const query = `TABLE file.folder as "Files", title as "Title"
FROM ""
WHERE file.folder != ""
SORT file.folder asc`;

const tFile = tp.file.find_tfile(filename);
const queryOutput = await dv.queryMarkdown(query);

// write query output to file
await app.vault.modify(tFile, queryOutput.value);
%>
var db = require("../../db/database");

var addMemberToProject = function (projectId, memberId) {
  return new Promise((resolve, reject) => {
    db.query(
      "update users set ? where id = ?",
      { project_id: projectId, id: memberId },
      (err, result) => {
        if (err) {
          reject(err);
          return false;
        }
        resolve(result);
      }
    );
  });
};

module.exports = {
  addMemberToProject,
};

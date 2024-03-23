import { error } from "ajv/dist/vocabularies/applicator/dependencies.js";
import { ServerCommandBuilder } from "../../Applications/Commands/Builder.js";
import { UserAccessLevels, CommandExecuteArguments } from "../../Applications/Commands/Context.js";


const command = new ServerCommandBuilder("get-announcements")
  .setAccessLevel(UserAccessLevels.STUDENT)
  .setOutgoingChannel("get-announcements-response")
  .setIncomingValidationSchema({
        type: "object",
        additionalProperties: false,
        properties: {
            course_id: {type: "number"},
            
        },       
      })
  .setExecute(callback)
  .setOutgoingValidationSchema({})
  .build();

async function callback({ Client, Data, Database }: CommandExecuteArguments) {
  const announcements = await Database.executeQuery(`SELECT announcments.id, course_id, subject, message, sender_id,CONCAT(fName,' ',lName) AS name,image FROM announcments JOIN users ON users.id=sender_id WHERE course_id=?`,[Data.course_id]);
  return announcements;
}

export default command;
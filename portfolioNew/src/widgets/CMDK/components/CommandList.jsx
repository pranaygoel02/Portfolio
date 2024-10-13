import { useCMDK } from "../cmdk.context";
import { cmdkDefaultCommands } from "../lib/commands";
import CMDKList from "./CMDKList";
import { addIdToCmdkResult } from "../lib/addIdToCmdkResult";

function CommandList() {
  const { commands, showAllCommands } = useCMDK();

  const cmdkCommands = [
    ...cmdkDefaultCommands,
    ...commands.map(cmd => ({...cmd, url: undefined})),
  ];

  if (!showAllCommands) return null;

  return (
    <CMDKList data={addIdToCmdkResult(cmdkCommands)} />
  );
}

export default CommandList;

import { memo } from 'react';

import { useCommands } from '@/hooks';

import { NotFound } from './Responses';

type CommandResponse = {
  commandKey: string;
};

const CommandResponse = ({ commandKey }: CommandResponse) => {
  const {
    cKey,
    option,
    handleLocaleMessage,
    handleThemeMessage,
    handleFullScreenMessage,
  } = useCommands(commandKey);

  /*
  todo: return a hint response for required options
  */
  if (cKey !== 'cls' && !option)
    return <>pending {'->'} hint for required options</>;

  switch (cKey) {
    case '':
      return <></>;
    case 'language':
      return handleLocaleMessage();
    case 'theme':
      return handleThemeMessage();
    case 'screen':
      return handleFullScreenMessage();
    case 'help':
      return <>'help'</>;
    default:
      return <NotFound cKey={cKey} />;
  }
};

export default memo(CommandResponse);

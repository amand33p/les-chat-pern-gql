import { formatDateAgo } from '../../utils/helperFuncs';

import { Typography } from '@material-ui/core';
import { useLatestMessagesPageStyles } from '../../styles/muiStyles';

const LatestMessage = ({ body, type }) => {
  const classes = useLatestMessagesPageStyles();

  return (
    <div className={classes.chatInfo}>
      <Typography variant="subtitle1" noWrap>
        {type === 'user' ? body.username : body.name}
      </Typography>
      <div className={classes.latestMsgRow}>
        <Typography variant="subtitle2" className={classes.greyText}>
          {body.latestMessage.body.length < 20
            ? body.latestMessage.body
            : body.latestMessage.body.slice(0, 20) + '...'}
        </Typography>
        <Typography variant="caption" className={classes.greyText}>
          {`${formatDateAgo(body.latestMessage.createdAt)} ago`}
        </Typography>
      </div>
    </div>
  );
};

export default LatestMessage;
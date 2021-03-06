import * as React from 'react';
import styled from 'styled-components';

import { border } from '@universal/styles/styles';
import Color from '@universal/constants/Color';
import Facon from '@components/common/Facon/Facon.mobile';

const StyledVote = styled.div`
  display: flex;

  > div {
    padding: 3px 0;
    margin-left: 6px;
  }
`;

const Vote = ({
  downVote,
  downVoted,
  targetId,
  upVote,
  upVoted,
  handleClickDownvote,
  handleClickUpvote,
  ...restProps
}) => {
  if (upVoted && upVoted.targetId === targetId) {
    upVote = upVoted.vote.upVoteCount;
  }
  if (downVoted && downVoted.targetId === targetId) {
    downVote = downVoted.vote.downVoteCount;
  }
  return (
    <StyledVote {...restProps}>
      <div>
        <Facon label='ellipsis-h' />
      </div>
      <div>
        {upVote}
      </div>
      <div onClick={(e) => handleClickUpvote(e, targetId, 17)}>
        <Facon label='thumbs-up' />
      </div>
      <div>
        {downVote}
      </div>
      <div onClick={(e) => handleClickDownvote(e, targetId, 17)}>
        <Facon label='thumbs-down' />
      </div>
    </StyledVote>
  );
};

Vote.propTypes = {
};

export default Vote;

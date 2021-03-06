import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import DownvoteIcon from '@components/icons/Downvote/Downvote.mobile';
import UpvoteIcon from '@components/icons/Upvote/Upvote.mobile';

const StyledVote = styled.div``;

const Upvote = styled.span``;

const Downvote = styled.span``;

const VoteCount = styled.span`
  margin: 0 5px;
`;

const UpvoteCount = styled(VoteCount)``;

const DownvoteCount = styled(VoteCount)``;

const Vote = () => {
    return (
      <StyledVote>
        <Upvote>
          <UpvoteIcon/>
          <UpvoteCount>22</UpvoteCount>
        </Upvote>
        <Downvote>
          <DownvoteIcon/>
          <DownvoteCount>16</DownvoteCount>
        </Downvote>
      </StyledVote>
    );
};

export default Vote;
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VotingSystem {
    struct Post {
        uint256 upvotes;
        uint256 downvotes;
        mapping(address => bool) hasVoted;
    }

    mapping(uint256 => Post) public posts;

    event Voted(uint256 indexed postId, address voter, bool isUpvote);

    function vote(uint256 _postId, bool _isUpvote) external {
        require(!posts[_postId].hasVoted[msg.sender], "Already voted");

        if (_isUpvote) {
            posts[_postId].upvotes++;
        } else {
            posts[_postId].downvotes++;
        }

        posts[_postId].hasVoted[msg.sender] = true;

        emit Voted(_postId, msg.sender, _isUpvote);
    }

    function getVotes(uint256 _postId) external view returns (uint256 upvotes, uint256 downvotes) {
        return (posts[_postId].upvotes, posts[_postId].downvotes);
    }
}
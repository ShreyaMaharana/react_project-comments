import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail.js";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="sam"
          timeAgo="Today at 4:45AM"
          comment="awsome post!"
          avatar="https://tse3.mm.bing.net/th?id=OIP.-WWN8SbFk0dzq2kmW-_lJwHaHa&pid=Api&P=0&w=192&h=192"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="vicky"
          timeAgo="Today at 7:25PM"
          comment="nice blog post!"
          avatar="https://tse3.mm.bing.net/th?id=OIP.6PZd95dUeZbrmtGZO65pJgHaLH&pid=Api&P=0&w=115&h=173"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Aamiksha"
          timeAgo="Today at 10:55PM"
          comment="PURE CONTENT!"
          avatar="https://tse3.mm.bing.net/th?id=OIP.OoXyCTby91cberfPJ6HgNAHaLH&pid=Api&P=0&w=107&h=160"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
